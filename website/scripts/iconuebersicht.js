// Zeichenübersicht auf der Icons-Seite: Suche und Seitenaufteilung (48 Icons je Seite).
// Die Seitenaufteilung folgt der Ides Pagination: erste und letzte Seite, drei Seiten um die aktuelle, dazwischen „…“.
// Eigener Geltungsbereich, damit sich die Skripte der Seite nicht in die Quere kommen
(() => {
	const uebersicht = document.getElementById('iconuebersicht');

	if (uebersicht) {
		const JE_SEITE = 48;
		const suche = uebersicht.querySelector('#icon-suche');
		const status = uebersicht.querySelector('#icon-status');
		const seitenleiste = uebersicht.querySelector('.iconuebersicht-seiten');
		const kacheln = [...uebersicht.querySelectorAll('.icon-kachel')];
		let treffer = kacheln;
		let seite = 1;

		const knopf = (inhalt, beschriftung, ziel, klasse = '') => {
			const b = document.createElement('button');
			b.type = 'button';
			b.className = `ibkButton ibkPagination-button ${klasse}`.trim();
			b.innerHTML = inhalt;
			b.setAttribute('aria-label', beschriftung);
			if (ziel === null) b.disabled = true;
			else b.addEventListener('click', () => zeigeSeite(ziel, true));
			return b;
		};

		function seitenfenster(aktuell, gesamt) {
			const breite = Math.min(3, gesamt);
			const start = Math.min(Math.max(aktuell - 1, 1), Math.max(gesamt - breite + 1, 1));
			const fenster = Array.from({ length: breite }, (_, i) => start + i);
			const seiten = [...new Set([1, ...fenster, gesamt])].sort((a, b) => a - b);
			const eintraege = [];
			seiten.forEach((s, i) => {
				const vorher = seiten[i - 1];
				if (vorher !== undefined && s - vorher === 2) eintraege.push(vorher + 1);
				else if (vorher !== undefined && s - vorher > 2) eintraege.push('…');
				eintraege.push(s);
			});
			return eintraege;
		}

		function zeichneSeitenleiste(gesamt) {
			seitenleiste.replaceChildren();
			seitenleiste.hidden = gesamt <= 1;
			if (gesamt <= 1) return;
			seitenleiste.append(knopf('<span class="ibkIcon" aria-hidden="true">&#xe91d;</span>', 'Vorherige Seite', seite > 1 ? seite - 1 : null, 'ibkPagination-arrow'));
			seitenfenster(seite, gesamt).forEach((s) => {
				if (s === '…') {
					const luecke = document.createElement('span');
					luecke.className = 'ibkPagination-ellipsis';
					luecke.setAttribute('aria-hidden', 'true');
					luecke.innerHTML = '<span class="ibkIcon">&#x22ef;</span>';
					seitenleiste.append(luecke);
					return;
				}
				const aktuell = s === seite;
				const b = knopf(String(s), aktuell ? `Seite ${s}, aktuelle Seite` : `Seite ${s}`, s, aktuell ? 'current' : '');
				if (aktuell) b.setAttribute('aria-current', 'page');
				seitenleiste.append(b);
			});
			seitenleiste.append(knopf('<span class="ibkIcon" aria-hidden="true">&#xe921;</span>', 'Nächste Seite', seite < gesamt ? seite + 1 : null, 'ibkPagination-arrow'));
		}

		function zeigeSeite(neueSeite, geblaettert = false) {
			const gesamt = Math.max(1, Math.ceil(treffer.length / JE_SEITE));
			seite = Math.min(Math.max(neueSeite, 1), gesamt);
			const sichtbar = new Set(treffer.slice((seite - 1) * JE_SEITE, seite * JE_SEITE));
			kacheln.forEach((k) => { k.hidden = !sichtbar.has(k); });
			zeichneSeitenleiste(gesamt);
			if (!treffer.length) status.textContent = 'Keine Icons gefunden';
			else {
				const anzahl = treffer.length === kacheln.length ? `${treffer.length} Icons` : `${treffer.length} von ${kacheln.length} Icons gefunden`;
				status.textContent = gesamt > 1 ? `${anzahl} · Seite ${seite} von ${gesamt}` : anzahl;
			}
			if (geblaettert) {
				// Fokus bleibt auf der neuen Seitenzahl, ohne dorthin zu scrollen; die Übersicht springt an ihren Anfang
				seitenleiste.querySelector('[aria-current="page"]')?.focus({ preventScroll: true });
				uebersicht.scrollIntoView({ block: 'start' });
			}
		}

		let wartezeit;
		suche.addEventListener('input', () => {
			clearTimeout(wartezeit);
			wartezeit = setTimeout(() => {
				const worte = suche.value.toLowerCase().replace(/^u\+/, '').split(/\s+/).filter(Boolean);
				treffer = kacheln.filter((k) => worte.every((w) => k.dataset.suche.includes(w)));
				zeigeSeite(1);
			}, 200);
		});

		// Klick auf eine Kachel kopiert den Kurznamen (Ligatur) in die Zwischenablage
		const ansage = uebersicht.querySelector('#icon-kopiert');

		async function kopiere(text) {
			try {
				await navigator.clipboard.writeText(text);
				return true;
			} catch {
				// Ausweich-Weg für Browser ohne Zwischenablage-Schnittstelle
				const feld = document.createElement('textarea');
				feld.value = text;
				feld.setAttribute('readonly', '');
				feld.style.position = 'fixed';
				feld.style.opacity = '0';
				document.body.append(feld);
				feld.select();
				const ok = document.execCommand('copy');
				feld.remove();
				return ok;
			}
		}

		uebersicht.querySelectorAll('.icon-kachel-knopf').forEach((knopf) => {
			let zeit;
			knopf.addEventListener('click', async () => {
				const kurzname = knopf.dataset.kurzname;
				const ok = await kopiere(kurzname);
				ansage.textContent = '';
				ansage.textContent = ok ? `${kurzname} kopiert` : `${kurzname} konnte nicht kopiert werden`;
				if (!ok) return;
				const kachel = knopf.closest('.icon-kachel');
				kachel.classList.add('ist-kopiert');
				clearTimeout(zeit);
				zeit = setTimeout(() => kachel.classList.remove('ist-kopiert'), 2000);
			});
		});

		zeigeSeite(1);
	}
})();
