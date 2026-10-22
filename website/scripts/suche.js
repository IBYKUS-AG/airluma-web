// Globale Suche in der Kopfzeile. Das Suchverzeichnis erzeugt Pagefind beim Bauen (eleventy.config.js, _site/pagefind/);
// gesucht wird im Browser, der Begriff verlässt ihn nicht. Das Feld ist eine Combobox nach dem W3C-Muster: Der Fokus
// bleibt im Feld, Pfeiltasten wählen einen Treffer (aria-activedescendant), Enter öffnet ihn, Esc schließt die Liste
// und leert beim zweiten Mal das Feld. Ohne JavaScript nimmt das Feld nur Eingaben an.
(() => {
	const HOECHSTENS = 8;
	const formular = document.querySelector('.kopfzeile-suche');
	if (!formular) return;
	const feld = formular.querySelector('input[type="search"]');
	const ergebnis = formular.querySelector('.suche-ergebnis');
	const liste = formular.querySelector('.suche-liste');
	const leer = formular.querySelector('.suche-leer');
	const status = formular.querySelector('#suche-status');

	feld.setAttribute('role', 'combobox');
	feld.setAttribute('aria-autocomplete', 'list');
	feld.setAttribute('aria-expanded', 'false');
	feld.setAttribute('aria-controls', liste.id);

	let pagefind = null;     // wird beim ersten Fokus geladen
	let laden = null;
	let treffer = [];        // [{ ziel, element }]
	let aktiv = -1;
	let lauf = 0;            // verwirft Ergebnisse älterer Eingaben
	let uhr, ansage;

	const holen = () => {
		laden ||= import(new URL('pagefind/pagefind.js', document.baseURI).href)
			.then(async (modul) => { await modul.options({ excerptLength: 18 }); pagefind = modul; })
			.catch(() => { laden = null; });
		return laden;
	};

	const offen = (ja) => {
		ergebnis.hidden = !ja;
		feld.setAttribute('aria-expanded', String(ja));
		if (!ja) waehlen(-1);
	};

	function waehlen(index) {
		treffer.forEach((t, i) => t.element.setAttribute('aria-selected', String(i === index)));
		aktiv = index;
		if (index >= 0) {
			feld.setAttribute('aria-activedescendant', treffer[index].element.id);
			treffer[index].element.scrollIntoView({ block: 'nearest' });
		} else {
			feld.removeAttribute('aria-activedescendant');
		}
	}

	// Ausschnitt von Pagefind („… <mark>Wort</mark> …“) als Text und <mark>, nie als beliebiges HTML
	function ausschnitt(html) {
		const teile = document.createDocumentFragment();
		const doku = new DOMParser().parseFromString(`<p>${html}</p>`, 'text/html');
		doku.body.firstChild.childNodes.forEach((knoten) => {
			if (knoten.nodeName === 'MARK') {
				const mark = document.createElement('mark');
				mark.textContent = knoten.textContent;
				teile.append(mark);
			} else {
				teile.append(document.createTextNode(knoten.textContent));
			}
		});
		return teile;
	}

	// Hervorgehobene Wörter eines Ausschnitts, klein und ohne Satzzeichen
	const markiert = (html) => [...html.matchAll(/<mark>(.*?)<\/mark>/g)]
		.map((m) => m[1].toLowerCase().replace(/[^\p{L}\p{N}-]/gu, ''));

	// Zählt ein hervorgehobenes Wort als Treffer für das Suchwort? Pagefind hebt auch einzelne Buchstaben hervor
	// („x“ bei „xyzq“); verlangt wird, dass Wort und Suchwort mindestens die ersten drei Zeichen teilen.
	const passt = (wort, suchworte) => suchworte.some((s) => {
		const n = Math.min(3, s.length);
		return wort.length >= n && wort.slice(0, n) === s.slice(0, n);
	});

	// Bester Abschnitt einer Seite: der, in dem die meisten Suchwörter hervorgehoben sind
	function besterAbschnitt(daten, suchworte) {
		const abschnitte = daten.sub_results?.length ? daten.sub_results : [{ url: daten.url, title: daten.meta.title, excerpt: daten.excerpt }];
		let bester = null, punkte = 0;
		for (const a of abschnitte) {
			const w = markiert(a.excerpt);
			const p = suchworte.filter((s) => w.some((x) => passt(x, [s]))).length;
			if (p > punkte) { bester = a; punkte = p; }
		}
		return bester;
	}

	async function suchen() {
		const begriff = feld.value.trim();
		const meinLauf = ++lauf;
		if (!begriff) { liste.replaceChildren(); treffer = []; offen(false); status.textContent = ''; return; }
		await holen();
		if (!pagefind || meinLauf !== lauf) return;
		const suchworte = begriff.toLowerCase().split(/\s+/).map((w) => w.replace(/[^\p{L}\p{N}-]/gu, '')).filter(Boolean);
		const antwort = await pagefind.search(begriff);
		const seiten = await Promise.all(antwort.results.slice(0, HOECHSTENS * 2).map((r) => r.data()));
		if (meinLauf !== lauf) return;
		// Seiten, deren Titel das Suchwort ist (auch in der Mehrzahl: „Buttons“ → „Button“), kommen zuerst
		const titelPasst = (d) => {
			const t = d.meta.title.toLowerCase(), q = begriff.toLowerCase();
			return ['', 's', 'e', 'n', 'en'].some((endung) => q === t + endung);
		};
		seiten.sort((a, b) => titelPasst(b) - titelPasst(a));
		const gefunden = [];
		for (const daten of seiten) {
			const abschnitt = besterAbschnitt(daten, suchworte);
			if (abschnitt) gefunden.push({ daten, abschnitt });
			if (gefunden.length === HOECHSTENS) break;
		}
		zeigen(begriff, gefunden);
	}

	function zeigen(begriff, gefunden) {
		liste.replaceChildren();
		treffer = gefunden.map(({ daten, abschnitt }, i) => {
			const eintrag = document.createElement('li');
			eintrag.className = 'suche-treffer';
			eintrag.id = `suche-treffer-${i + 1}`;
			eintrag.setAttribute('role', 'option');
			eintrag.setAttribute('aria-selected', 'false');
			// Zeile wie ein Eintrag des Ides Dropdown: links die Seite (rot wie die Seitentitel), rechts der Abschnitt
			// an der Stelle des Tastenkürzels (Entscheidung 30.09.2026)
			const zeile = document.createElement('span');
			zeile.className = 'suche-treffer-zeile';
			const abschnittsname = abschnitt.title && abschnitt.title !== daten.meta.title ? abschnitt.title.replace(/\.$/, '') : '';
			const seite = document.createElement('span');
			seite.className = 'suche-treffer-seite';
			seite.textContent = daten.meta.title;
			zeile.append(seite);
			if (abschnittsname) {
				const ort = document.createElement('span');
				ort.className = 'suche-treffer-abschnitt';
				ort.textContent = abschnittsname;
				zeile.append(ort);
			}
			eintrag.append(zeile);
			const text = document.createElement('span');
			text.className = 'suche-treffer-auszug';
			text.append(ausschnitt(abschnitt.excerpt));
			eintrag.append(text);
			// Adressen relativ, wie alle Links der Website (auch unter einem Unterordner bei GitHub Pages)
			const ziel = abschnitt.url.replace(/^\//, '');
			eintrag.addEventListener('mousedown', (e) => e.preventDefault());   // Fokus bleibt im Feld
			eintrag.addEventListener('click', () => oeffnen(ziel));
			// Die Maus zeigt nur die Hover-Fläche (CSS); gewählt und mit Fokusrahmen versehen wird nur per Tastatur
			liste.append(eintrag);
			return { ziel, element: eintrag };
		});
		leer.hidden = treffer.length > 0;
		leer.textContent = treffer.length ? '' : `Keine Treffer für „${begriff}“`;
		offen(true);
		// Ansage erst, wenn das Tippen kurz ruht
		clearTimeout(ansage);
		ansage = setTimeout(() => {
			status.textContent = treffer.length ? `${treffer.length} Treffer, mit Pfeiltasten wählen` : leer.textContent;
		}, 500);
	}

	function oeffnen(ziel) {
		const url = new URL(ziel, document.baseURI);
		offen(false);
		if (url.pathname === location.pathname) {
			// Gleiche Seite: Hash setzen, reiter.js öffnet den Reiter; derselbe Hash wird neu angesprungen
			if (url.hash === location.hash) document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView();
			else location.hash = url.hash;
			return;
		}
		location.href = url.href;
	}

	feld.addEventListener('focus', holen);
	feld.addEventListener('input', () => { clearTimeout(uhr); uhr = setTimeout(suchen, 150); });
	feld.addEventListener('keydown', (e) => {
		const zeigt = !ergebnis.hidden;
		if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
			if (!zeigt) { if (feld.value.trim()) suchen(); return; }
			if (!treffer.length) return;
			e.preventDefault();
			const n = treffer.length;
			waehlen(e.key === 'ArrowDown' ? (aktiv + 1) % n : (aktiv <= 0 ? n - 1 : aktiv - 1));
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (zeigt && treffer.length) oeffnen(treffer[Math.max(aktiv, 0)].ziel);
		} else if (e.key === 'Escape') {
			if (zeigt) { e.preventDefault(); e.stopPropagation(); offen(false); }
			else if (feld.value) { e.preventDefault(); feld.value = ''; liste.replaceChildren(); treffer = []; status.textContent = ''; }
		}
	});
	// Tab aus dem Feld oder Klick daneben schließt die Liste
	formular.addEventListener('focusout', () => setTimeout(() => { if (!formular.contains(document.activeElement)) offen(false); }, 0));
})();
