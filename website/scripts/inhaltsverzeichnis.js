// Inhaltsverzeichnis „Auf dieser Seite“: hebt den Abschnitt hervor, in dem man gerade liest.
// Der Inhalt scrollt im Bereich .inhalt, nicht im ganzen Fenster.
// Auf Komponentenseiten zeigt es nur die Abschnitte des offenen Reiters (Ereignis „reiterwechsel“ aus reiter.js).
// Eigener Geltungsbereich, damit sich die Skripte der Seite nicht in die Quere kommen
(() => {
	const verzeichnis = document.querySelector('.inhaltsverzeichnis');
	const bereich = document.querySelector('.inhalt');

	if (verzeichnis && bereich) {
		const alleEintraege = [...verzeichnis.querySelectorAll('li')];
		const OBEN = 120; // ab dieser Höhe unter dem oberen Rand gilt ein Abschnitt als erreicht
		let links = [];
		let abschnitte = [];
		let geplant = false;

		function sichtbareEintraege(reiter) {
			alleEintraege.forEach((li) => { li.hidden = Boolean(reiter && li.dataset.reiter && li.dataset.reiter !== reiter); });
			links = alleEintraege.filter((li) => !li.hidden).map((li) => li.querySelector('a'));
			abschnitte = links.map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))));
			verzeichnis.hidden = links.length < 2;
		}

		function markiere(index) {
			alleEintraege.forEach((li) => li.querySelector('a').removeAttribute('aria-current'));
			links[index]?.setAttribute('aria-current', 'true');
		}

		function aktualisiere() {
			geplant = false;
			if (!links.length) return;
			const oben = bereich.getBoundingClientRect().top + OBEN;
			let aktuell = 0;
			abschnitte.forEach((abschnitt, i) => {
				if (abschnitt && abschnitt.getBoundingClientRect().top <= oben) aktuell = i;
			});
			// Ganz unten angekommen: letzter Abschnitt, auch wenn er nicht bis nach oben reicht
			if (bereich.scrollTop + bereich.clientHeight >= bereich.scrollHeight - 2) aktuell = abschnitte.length - 1;
			markiere(aktuell);
		}

		function planen() {
			if (!geplant) {
				geplant = true;
				requestAnimationFrame(aktualisiere);
			}
		}

		bereich.addEventListener('scroll', planen, { passive: true });
		window.addEventListener('resize', planen);
		verzeichnis.addEventListener('click', (ereignis) => {
			const link = ereignis.target.closest('a');
			if (link) markiere(links.indexOf(link));
		});
		document.addEventListener('reiterwechsel', (ereignis) => {
			sichtbareEintraege(ereignis.detail.reiter);
			aktualisiere();
		});

		// Startzustand: Hat reiter.js die Reiterleiste schon eingeblendet, gilt der ausgewählte Reiter
		const auswahlSichtbar = document.querySelector('.inhaltsseite-ansicht:not([hidden])');
		const offenerReiter = auswahlSichtbar?.querySelector('input:checked')?.getAttribute('aria-controls') ?? null;
		sichtbareEintraege(offenerReiter);
		aktualisiere();
	}
})();
