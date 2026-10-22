// Eleventy baut die Website aus website/ (zum Bearbeiten) nach _site/ (fertige Ausgabe).
// Kopfzeile, Seitennavigation und Fußzeile stehen als Bausteine in website/_includes/,
// die Einträge der Navigation in website/_data/navigation.json.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import * as pagefind from 'pagefind';

const DATEN = './website/_data/';
const lies = (datei) => JSON.parse(readFileSync(DATEN + datei, 'utf8'));
// Geprüfte Abbildungen (werkzeuge/abbildungen.py); fehlt die Datei, zeigen alle Abbildungen den Platzhalter
const abbildungsliste = () => { try { return lies('abbildungen.json'); } catch { return {}; } };

// Sonderzeichen für HTML sicher machen
const sicher = (text) => String(text ?? '')
	.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Kennung aus einem Überschriftentext, z. B. „60-30-10-Verteilung“ → „60-30-10-verteilung“
const kennung = (text) => String(text).toLowerCase()
	.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
	.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
	.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'abschnitt';

// Dateiname der SVG eines Icons, z. B. „Exclamation-Mark“ → „exclamation-mark.svg“
const svgDatei = (name) => `${kennung(name)}.svg`;

// Alle Icons der Iconset-Datei als einzelne SVG-Dateien schreiben (Zeichenübersicht auf der Icons-Seite)
const ICONSET = './' + JSON.parse(readFileSync('./werkzeuge/quellen.json', 'utf8')).iconset.pfad; // Ort der Quellen: werkzeuge/quellen.json
function iconsAlsSvg(ausgabe) {
	const quelle = readFileSync(ICONSET, 'utf8');
	const pfade = new Map();
	for (const [, attribute] of quelle.matchAll(/<glyph ([^>]*?)\/?>/g)) {
		const name = attribute.match(/glyph-name="([^"]+)"/)?.[1];
		const pfad = attribute.match(/ d="([^"]*)"/)?.[1];
		if (name && pfad && !pfade.has(name)) pfade.set(name, pfad);
	}
	mkdirSync(`${ausgabe}/icons`, { recursive: true });
	const vergeben = new Set();
	for (const icon of lies('icons.json')) {
		const datei = svgDatei(icon.name);
		if (vergeben.has(datei)) throw new Error(`Doppelter SVG-Dateiname: ${datei}`);
		vergeben.add(datei);
		const pfad = pfade.get(icon.name);
		if (!pfad) throw new Error(`Kein Pfad im Iconset für ${icon.name}`);
		writeFileSync(`${ausgabe}/icons/${datei}`,
			'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024" fill="currentColor">'
			+ `<title>${sicher(icon.name)}</title><path transform="translate(0 960) scale(1 -1)" d="${pfad}"/></svg>\n`);
	}
	return vergeben.size;
}

// Spalten einer Farbtabelle: nur die, zu denen die Gruppe Werte hat
const FARBSPALTEN = [
	['hex', 'HEX'], ['rgb', 'RGB'], ['cmyk', 'CMYK'], ['pmsC', 'PMS-C'], ['cmykC', 'CMYK-C'], ['l', 'L-Wert'],
];

export default function (eleventyConfig) {
	// .gitignore ist eine Freigabeliste fürs Repository („/*“ plus Ausnahmen mit „!“); Eleventy kennt keine Ausnahmen und
	// würde sonst alle Seiten übergehen. Was nicht gebaut wird, steht ausdrücklich unten (ignores) und in den Standardregeln.
	eleventyConfig.setUseGitIgnore(false);
	// Styles, Schriften und Skripte unverändert übernehmen
	eleventyConfig.addPassthroughCopy('website/styles');
	eleventyConfig.addPassthroughCopy('website/fonts');
	eleventyConfig.addPassthroughCopy('website/scripts');
	eleventyConfig.addPassthroughCopy('website/bilder');
	// Storybook (gebaut von werkzeuge/komponenten-bau/storybook.sh) nur kopieren, seine HTML-Dateien sind keine Vorlagen
	eleventyConfig.addPassthroughCopy('website/storybook');
	eleventyConfig.ignores.add('website/storybook/**');

	// Vor jedem Bauen prüfen, dass jede Zuordnung in _data/storybook.json im gebauten Storybook existiert
	eleventyConfig.on('eleventy.before', () => {
		const vorhanden = new Set(Object.keys(JSON.parse(readFileSync('./website/storybook/index.json', 'utf8')).entries));
		const fehlt = Object.entries(lies('storybook.json')).filter(([k, id]) => !k.startsWith('_') && !vorhanden.has(id));
		if (fehlt.length) throw new Error(`Storybook: unbekannte Kennungen ${fehlt.map(([k, id]) => `${k} → ${id}`).join(', ')}`);
	});

	// Nach jedem Bauen die SVG-Dateien der Icons schreiben
	eleventyConfig.on('eleventy.after', ({ dir }) => {
		const anzahl = iconsAlsSvg(dir.output);
		console.log(`[airluma] ${anzahl} Icons als SVG geschrieben`);
	});

	// Nach jedem Bauen das Suchverzeichnis für die globale Suche schreiben (Pagefind, nach _site/pagefind/), auch in der
	// Vorschau. Durchsucht wird nur, was im Gerüst mit data-pagefind-body markiert ist (der Inhalt, nicht die Platzhalterseite);
	// Bedienelemente und Code, die keinen Inhalt tragen, bleiben draußen.
	// Eingelesen werden nur die Seiten dieses Baus (nicht alte Dateien, die noch in _site/ liegen).
	eleventyConfig.on('eleventy.after', async ({ dir, results }) => {
		const { index, errors } = await pagefind.createIndex({
			forceLanguage: 'de',
			excludeSelectors: ['.inhaltsverzeichnis', '.storybook', '.inhaltsseite-ansicht', '.inhaltsseite-ansicht-auswahl',
				'.abbildung-platzhalter', '.inhaltsseite-dachzeile', '.iconuebersicht-status', '.iconuebersicht-suche',
				// Kacheln der Icons: nur der Name zählt, nicht Kurzname, Codepoint und Hilfstexte für Screenreader
				'.icon-kachel .nur-screenreader', '.icon-kachel-kurzname', '.icon-kachel-codepoint', '.icon-kachel-kopiert'],
		});
		if (!index) throw new Error(`Suchverzeichnis: ${errors.join('; ')}`);
		const fehler = [];
		let seiten = 0;
		for (const { url, content } of results.filter((r) => r.outputPath?.endsWith('.html'))) {
			const antwort = await index.addHTMLFile({ url, content });
			fehler.push(...antwort.errors);
			if (antwort.file?.uniqueWords) seiten++;
		}
		// Vorher leeren, sonst sammeln sich Stände früherer Baus an
		rmSync(`${dir.output}/pagefind`, { recursive: true, force: true });
		const geschrieben = await index.writeFiles({ outputPath: `${dir.output}/pagefind` });
		fehler.push(...geschrieben.errors);
		if (fehler.length) throw new Error(`Suchverzeichnis: ${fehler.join('; ')}`);
		console.log(`[airluma] Suchverzeichnis: ${seiten} Seiten`);
		await index.deleteIndex();
	});
	eleventyConfig.addWatchTarget(ICONSET);

	// Dateinamen behalten (in-arbeit.html bleibt in-arbeit.html), damit alle Links gleich bleiben
	eleventyConfig.addGlobalData('permalink', () => (data) => `${data.page.filePathStem}.html`);

	// Nach jeder Änderung an Styles oder Skripten neu laden
	eleventyConfig.setServerOptions({ watch: ['_site/styles/**', '_site/scripts/**'] });

	// Name eines Bereichs der Navigation, z. B. „grundlagen“ → „Grundlagen“
	eleventyConfig.addFilter('bereichsname', (id) => {
		const bereich = lies('navigation.json').bereiche.find((b) => b.id === id);
		return bereich ? bereich.label : '';
	});

	// {% farbtabelle "ibkRed" %} – Tabelle einer Farbgruppe aus website/_data/farben.json
	eleventyConfig.addShortcode('farbtabelle', (gruppe) => {
		const farben = lies('farben.json')[gruppe];
		if (!farben) throw new Error(`Farbgruppe „${gruppe}“ fehlt in farben.json`);
		const spalten = FARBSPALTEN.filter(([schluessel]) => farben.some((f) => f[schluessel]));
		const kopf = spalten.map(([, titel]) => `<th scope="col">${titel}</th>`).join('');
		const zeilen = farben.map((f) => {
			const werte = spalten.map(([schluessel]) => `<td>${sicher(f[schluessel] ?? '–')}</td>`).join('');
			return `<tr><th scope="row"><span class="farbfeld-zelle"><span class="farbfeld" style="background: ${sicher(f.hex)}" aria-hidden="true"></span><code>${sicher(f.name)}</code></span></th>${werte}</tr>`;
		}).join('\n');
		return `<div class="doc-tabelle"><table class="farbtabelle">\n<thead><tr><th scope="col">Farbe</th>${kopf}</tr></thead>\n<tbody>\n${zeilen}\n</tbody>\n</table></div>`;
	});

	// {% farbverlauf "#5c001b", "#cf003d" %} – sichtbarer Verlauf, rein dekorativ
	eleventyConfig.addShortcode('farbverlauf', (von, bis) =>
		`<div class="farbverlauf" style="background: linear-gradient(90deg, ${sicher(von)} 0%, ${sicher(bis)} 100%)" aria-hidden="true"></div>`);

	// {% abbildung "Beschreibung", "Bildunterschrift", "button-03" %} – das geprüfte Bild aus website/bilder/doku/
	// (Liste in _data/abbildungen.json, erzeugt von werkzeuge/abbildungen.py) oder, solange es fehlt, der Platzhalter.
	// Die Liste wird bei jedem Bau neu gelesen, damit neue Bilder ohne Neustart der Vorschau erscheinen.
	eleventyConfig.addShortcode('abbildung', (beschreibung, unterschrift, kennung) => {
		const name = beschreibung || unterschrift || 'Abbildung';
		const figcaption = unterschrift ? `<figcaption>${sicher(unterschrift)}</figcaption>` : '';
		const bild = kennung && abbildungsliste()[kennung];
		if (bild) {
			return `<figure class="abbildung"><img src="${sicher(bild.datei)}" alt="${sicher(name)}" width="${bild.breite}" height="${bild.hoehe}" loading="lazy" decoding="async">${figcaption}</figure>`;
		}
		return `<figure class="abbildung"><div class="abbildung-platzhalter" role="img" aria-label="${sicher(name)}"><span aria-hidden="true">Abbildung folgt</span></div>${figcaption}</figure>`;
	});

	// {% schriftprobe "Asap-Regular", 400, "normal", 100 %} – Schriftschnitt in der Asap der Website zeigen
	eleventyConfig.addShortcode('schriftprobe', (name, gewicht, stil, breite = 100) => {
		const stilwert = `font-weight: ${Number(gewicht)}; font-style: ${stil === 'italic' ? 'italic' : 'normal'}; font-stretch: ${Number(breite)}%`;
		return `<figure class="schriftprobe"><div class="schriftprobe-zeichen" style="${stilwert}" aria-hidden="true">`
			+ '<p class="schriftprobe-gross">Aa</p><p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p><p>abcdefghijklmnopqrstuvwxyz</p><p>1234567890(, .;:?!$&amp;*)</p></div>'
			+ `<figcaption>${sicher(name)} · Weight: ${Number(gewicht)} · Style: ${sicher(stil)}${Number(breite) !== 100 ? ` · Breite: ${Number(breite)} %` : ''}</figcaption></figure>`;
	});

	// Inhaltsverzeichnis: alle Überschriften der zweiten Ebene eines fertigen Inhalts,
	// auf Komponentenseiten mit dem Reiter, in dem sie stehen
	eleventyConfig.addFilter('inhaltsverzeichnis', (html) => {
		const eintraege = [];
		let reiter = null;
		for (const [marke, reiterId, id, text] of String(html).matchAll(/<div class="reiter-inhalt" id="([^"]+)"|<h2 id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)) {
			if (reiterId) reiter = reiterId;
			else eintraege.push({ id, text: text.replace(/<[^>]+>/g, '').trim(), reiter });
		}
		return eintraege;
	});

	// Reiter einer Komponentenseite: Kennung → Beschriftung
	// „live-beispiel“ setzt inhaltsseite.njk selbst ans Ende, wenn es für die Seite ein Storybook gibt (_data/storybook.json)
	const REITER = { 'ueberblick': 'Überblick', 'spezifikation': 'Spezifikation', 'dos-donts': 'Do’s & Don’ts', 'live-beispiel': 'Live-Beispiel' };
	eleventyConfig.addFilter('reitername', (id) => REITER[id] || id);

	// {% reiter "spezifikation" %} … {% endreiter %} – Inhalt eines Reiters. Die Leerzeilen sorgen dafür,
	// dass der Markdown-Text darin normal verarbeitet wird.
	eleventyConfig.addPairedShortcode('reiter', (inhalt, id) => {
		if (!REITER[id]) throw new Error(`Unbekannter Reiter „${id}“`);
		return `<div class="reiter-inhalt" id="${id}">\n\n${inhalt}\n\n</div>`;
	});

	// {% iconsetDownloads %} – Iconset-Dateien vom offiziellen Airluma-CDN (Größen dort geprüft)
	const CDN = 'https://airluma-cdn.b-cdn.net/';
	const DOWNLOADS = [
		{ datei: 'IBYKUS-Iconset.ttf', knopf: 'TTF herunterladen', groesse: '244 KB', art: 'primary', wofuer: 'zum Installieren auf dem Rechner' },
		{ datei: 'IBYKUS-Iconset.woff2', knopf: 'WOFF2', groesse: '77 KB', art: 'secondary', wofuer: 'für Websites' },
		{ datei: 'IBYKUS-Iconset.woff', knopf: 'WOFF', groesse: '244 KB', art: 'secondary', wofuer: 'für Websites, ältere Browser' },
	];
	eleventyConfig.addShortcode('iconsetDownloads', () =>
		'<div class="download-leiste">' + DOWNLOADS.map((d) =>
			`<a class="ibkButton ibkButton-regular ibkButton-${d.art} ibkIcon-trailing" href="${CDN}${d.datei}" download="${d.datei}">`
			+ `<span class="ibkButtonText">${sicher(d.knopf)}</span>`
			+ `<span class="nur-screenreader"> (${sicher(d.datei)}, ${sicher(d.groesse)}, ${sicher(d.wofuer)})</span>`
			+ '<span class="ibkIcon" aria-hidden="true">&#x1f4e5;</span></a>').join('') + '</div>');

	// {% iconuebersicht %} – alle Icons aus website/_data/icons.json als Kacheln.
	// Ohne JavaScript ist alles sichtbar; scripts/iconuebersicht.js ergänzt Suche und Seitenaufteilung.
	eleventyConfig.addShortcode('iconuebersicht', () => {
		const icons = lies('icons.json');
		const kacheln = icons.map((icon) => {
			const suchtext = [icon.name, ...icon.kurznamen, ...icon.stichwoerter, icon.codepoint].join(' ').toLowerCase();
			const kurz = icon.kurznamen.map((k) => `<code>${sicher(k)}</code>`).join(' ');
			// Ides Card (Bordered, Delta-10). Der Name ist der Button zum Kopieren; seine Klickfläche reicht über die ganze Card
			// (Ides-Empfehlung für klickbare Cards). Der Download-Link liegt eigenständig darüber.
			const datei = svgDatei(icon.name);
			return `<li class="icon-kachel ibkCard ibkCard-bordered ibkCard-delta-10" data-suche="${sicher(suchtext)}">`
				+ `<span class="ibkIcon icon-kachel-zeichen" aria-hidden="true">&#x${icon.codepoint};</span>`
				+ `<button type="button" class="icon-kachel-knopf" data-kurzname="${sicher(icon.kurznamen[0])}">${sicher(icon.name)}<span class="nur-screenreader"> – Kurzname kopieren</span></button>`
				+ `<span class="icon-kachel-kurzname"><span class="nur-screenreader">Kurzname: </span>${kurz}</span>`
				+ `<span class="icon-kachel-codepoint"><span class="nur-screenreader">Codepoint: </span>U+${sicher(icon.codepoint)}</span>`
				+ `<span class="icon-kachel-kopiert" aria-hidden="true"><span class="ibkIcon">&#x2713;</span> Kopiert</span>`
				+ `<a class="icon-kachel-download" href="icons/${datei}" download="${datei}" aria-label="${sicher(icon.name)} als SVG herunterladen" title="Als SVG herunterladen">`
				+ `<span class="ibkIcon" aria-hidden="true">&#x1f4e5;</span></a></li>`;
		}).join('');
		return `<div class="iconuebersicht" id="iconuebersicht">`
			+ `<div class="iconuebersicht-suche"><label for="icon-suche">Icons durchsuchen</label>`
			+ `<div class="ibkInputWrapper"><span class="ibkIcon" aria-hidden="true">&#x1f50d;</span>`
			+ `<input id="icon-suche" type="search" autocomplete="off" placeholder="Name, Kurzname oder Codepoint" aria-describedby="icon-status"></div></div>`
			+ `<p class="iconuebersicht-hinweis">Klick auf ein Icon kopiert seinen Kurznamen.</p>`
			+ `<p class="iconuebersicht-status" id="icon-status" role="status">${icons.length} Icons</p>`
			+ `<p class="nur-screenreader" id="icon-kopiert" aria-live="polite"></p>`
			+ `<ul class="iconuebersicht-liste">${kacheln}</ul>`
			+ `<nav class="ibkPagination iconuebersicht-seiten" aria-label="Seiten der Zeichenübersicht" hidden></nav>`
			+ `</div><script src="scripts/iconuebersicht.js" defer></script>`;
	});

	eleventyConfig.amendLibrary('md', (md) => {
		// Überschriften bekommen eine Kennung aus ihrem Text, damit man zu ihnen springen kann
		md.core.ruler.push('ueberschrift_kennungen', (state) => {
			const vergeben = new Map();
			state.tokens.forEach((token, i) => {
				if (token.type !== 'heading_open' || token.attrGet('id')) return;
				const basis = kennung(state.tokens[i + 1].content);
				const anzahl = vergeben.get(basis) || 0;
				vergeben.set(basis, anzahl + 1);
				token.attrSet('id', anzahl ? `${basis}-${anzahl + 1}` : basis);
			});
		});

		// Markdown-Tabellen in einen Rahmen setzen, der bei Bedarf seitlich scrollt
		md.renderer.rules.table_open = () => '<div class="doc-tabelle"><table>\n';
		md.renderer.rules.table_close = () => '</table></div>\n';

		// Externe Links: neuer Tab, Icon und Ankündigung für Screenreader
		const standard = (tokens, i, options, env, self) => self.renderToken(tokens, i, options);
		const linkAuf = md.renderer.rules.link_open || standard;
		const linkZu = md.renderer.rules.link_close || standard;
		md.renderer.rules.link_open = (tokens, i, options, env, self) => {
			const ziel = tokens[i].attrGet('href') || '';
			if (/^https?:\/\//i.test(ziel)) {
				tokens[i].attrSet('target', '_blank');
				tokens[i].attrSet('rel', 'noopener noreferrer');
				// passendes link_close merken
				for (let j = i + 1; j < tokens.length; j++) {
					if (tokens[j].type === 'link_close') { tokens[j].meta = { extern: true }; break; }
				}
			}
			return linkAuf(tokens, i, options, env, self);
		};
		md.renderer.rules.link_close = (tokens, i, options, env, self) => {
			const zusatz = tokens[i].meta?.extern
				? '<span class="nur-screenreader"> (öffnet in neuem Tab)</span><span class="ibkIcon link-extern-icon" aria-hidden="true">&#x2197;</span>'
				: '';
			return zusatz + linkZu(tokens, i, options, env, self);
		};
	});
}

export const config = {
	dir: {
		input: 'website',
		output: '_site',
	},
	// Seiten dürfen .html, .njk oder .md sein und nutzen alle die Vorlagensprache Nunjucks
	templateFormats: ['html', 'njk', 'md'],
	htmlTemplateEngine: 'njk',
	markdownTemplateEngine: 'njk',
};
