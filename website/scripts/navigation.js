// Seitennavigation: Die zweite Leiste eines Bereichs öffnet sich, wenn die Maus
// über seinen Eintrag fährt oder er den Tastaturfokus bekommt. Sie steht im HTML
// im selben Listeneintrag wie der Link, deshalb bleibt sie offen, solange Maus
// oder Fokus in Link oder Leiste sind. Es ist höchstens ein Bereich offen.
// Eigener Geltungsbereich, damit sich die Skripte der Seite nicht in die Quere kommen
(() => {
	const breitGenug = window.matchMedia('(min-width: 1024px)');
	const bereiche = [...document.querySelectorAll('.bereichsleiste-bereich')];
	const SCHLIESSEN_NACH = 300;
	let schliessZeit;
	// Nach Esc öffnet der Fokus auf dem Bereich die Leiste nicht gleich wieder
	let nachEsc = null;

	function link(bereich) {
		return bereich.querySelector(':scope > a');
	}

	function leiste(bereich) {
		// auf schmalen Bildschirmen steht das Ziel nur in data-leiste (siehe bereichsLinksPassend)
		const a = link(bereich);
		return document.getElementById(a.getAttribute('aria-controls') || a.dataset.leiste);
	}

	function istOffen(bereich) {
		return leiste(bereich).classList.contains('offen');
	}

	function setze(bereich, offen) {
		link(bereich).setAttribute('aria-expanded', String(offen));
		leiste(bereich).classList.toggle('offen', offen);
	}

	function oeffne(bereich) {
		if (!breitGenug.matches) return;
		clearTimeout(schliessZeit);
		if (istOffen(bereich)) return;
		// Ist schon ein anderer Bereich offen, nur den Inhalt tauschen, nicht neu herausfahren
		const wechsel = bereiche.some(istOffen);
		if (wechsel) bereiche.forEach((b) => leiste(b).classList.add('ohne-animation'));
		bereiche.forEach((anderer) => setze(anderer, anderer === bereich));
		if (wechsel) {
			void leiste(bereich).offsetWidth; // Zustand übernehmen, bevor die Animation wieder gilt
			bereiche.forEach((b) => leiste(b).classList.remove('ohne-animation'));
		}
	}

	function schliesseAlle() {
		clearTimeout(schliessZeit);
		bereiche.forEach((bereich) => setze(bereich, false));
	}

	function schliesseSpaeter() {
		clearTimeout(schliessZeit);
		schliessZeit = setTimeout(() => {
			const fokus = document.activeElement;
			const fokusDrin = bereiche.some((bereich) => bereich.contains(fokus));
			// Offen lassen, solange der Tastaturfokus in einem Bereich steht.
			// Kam der Fokus nur durch einen Mausklick hinein, schließt die Leiste trotzdem.
			if (fokusDrin && fokus.matches(':focus-visible')) return;
			if (fokusDrin) fokus.blur();
			schliesseAlle();
		}, SCHLIESSEN_NACH);
	}

	bereiche.forEach((bereich) => {
		bereich.addEventListener('mouseenter', () => {
			nachEsc = null;
			oeffne(bereich);
		});
		bereich.addEventListener('mouseleave', schliesseSpaeter);
		bereich.addEventListener('focusin', () => {
			if (nachEsc !== bereich) oeffne(bereich);
		});
		bereich.addEventListener('focusout', (ereignis) => {
			if (bereich.contains(ereignis.relatedTarget)) return;
			nachEsc = null;
			schliesseSpaeter();
		});
	});

	// Esc schließt die offene Leiste; stand der Fokus darin, geht er zurück auf den Bereich
	document.addEventListener('keydown', (ereignis) => {
		if (ereignis.key !== 'Escape') return;
		const offen = bereiche.find(istOffen);
		if (!offen) return;
		const fokusDrin = leiste(offen).contains(document.activeElement);
		schliesseAlle();
		nachEsc = offen;
		if (fokusDrin) link(offen).focus();
	});

	// Wird das Fenster schmal, schließen offene Leisten
	breitGenug.addEventListener('change', () => {
		if (!breitGenug.matches) schliesseAlle();
	});

	// Schmale Bildschirme (unter 1024 px): Der Button „Menü“ öffnet Suchfeld und Seitennavigation im Fluss unter der
	// Kopfzeile. Die Buttons neben den Bereichen klappen deren Seiten auf. Esc schließt das Menü, der Fokus geht auf den
	// Button zurück. Die Bereichs-Links behalten dort nur ihre Rolle als Link (kein aria-expanded der zweiten Leiste).
	const html = document.documentElement;
	const menueKnopf = document.querySelector('.kopfzeile-menue');

	function menue(offen) {
		if (!menueKnopf) return;
		menueKnopf.setAttribute('aria-expanded', String(offen));
		html.classList.toggle('menue-offen', offen);
	}

	menueKnopf?.addEventListener('click', () => menue(!html.classList.contains('menue-offen')));

	document.addEventListener('keydown', (ereignis) => {
		if (ereignis.key !== 'Escape' || breitGenug.matches || !html.classList.contains('menue-offen')) return;
		menue(false);
		menueKnopf.focus();
	});

	document.querySelectorAll('.bereich-schalter').forEach((knopf) => {
		const bereich = document.getElementById(knopf.getAttribute('aria-controls'));
		knopf.addEventListener('click', () => {
			const offen = knopf.getAttribute('aria-expanded') === 'true';
			knopf.setAttribute('aria-expanded', String(!offen));
			bereich.classList.toggle('aufgeklappt', !offen);
		});
	});

	// Bereichs-Links: aria-expanded nur, wo sie die zweite Leiste öffnen (ab 1024 px)
	function bereichsLinksPassend() {
		bereiche.forEach((bereich) => {
			const a = link(bereich);
			if (breitGenug.matches) {
				a.setAttribute('aria-controls', a.dataset.leiste || a.getAttribute('aria-controls'));
				a.setAttribute('aria-expanded', String(istOffen(bereich)));
			} else {
				a.dataset.leiste = a.dataset.leiste || a.getAttribute('aria-controls');
				a.removeAttribute('aria-expanded');
				a.removeAttribute('aria-controls');
			}
		});
	}
	bereichsLinksPassend();
	breitGenug.addEventListener('change', () => {
		if (breitGenug.matches) menue(false);
		bereichsLinksPassend();
	});

	// Gruppen unter „Komponenten“ auf- und zuklappen; mehrere dürfen offen sein.
	document.querySelectorAll('.bereich-gruppe .navigation-schalter').forEach((knopf) => {
		const liste = document.getElementById(knopf.getAttribute('aria-controls'));
		knopf.addEventListener('click', () => {
			const offen = knopf.getAttribute('aria-expanded') === 'true';
			knopf.setAttribute('aria-expanded', String(!offen));
			liste.hidden = offen;
		});
	});
})();
