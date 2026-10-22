// Reiter auf Komponentenseiten als Ides Segmented Control: Radiobuttons im Fieldset.
// Tastatur (eine Station, Pfeiltasten im Kreis) bringt der Browser mit. Dieses Skript blendet den gewählten
// Inhalt ein, schiebt die Petrol-Fläche unter das gewählte Segment und hält die Adresse aktuell
// (#ueberblick, #spezifikation, #dos-donts). Ohne Skript bleibt die Auswahl verborgen und alles steht untereinander.
// Eigener Geltungsbereich, damit sich die Skripte der Seite nicht in die Quere kommen
(() => {
	const auswahl = document.querySelector('.inhaltsseite-ansicht');
	if (!auswahl) return;

	const radios = [...auswahl.querySelectorAll('input[type="radio"]')];
	const inhalte = radios.map((radio) => document.getElementById(radio.getAttribute('aria-controls')));
	const flaeche = auswahl.querySelector('.ibkSegmentedControl-thumb');

	function schiebeFlaeche(radio, animiert = true) {
		const segment = auswahl.querySelector(`label[for="${radio.id}"]`);
		if (!animiert) flaeche.style.transition = 'none';
		flaeche.style.width = `${segment.offsetWidth}px`;
		flaeche.style.transform = `translateX(${segment.offsetLeft}px)`;
		if (!animiert) {
			void flaeche.offsetWidth; // Position übernehmen, bevor die Animation wieder gilt
			flaeche.style.transition = '';
		}
	}

	// Auswahl „Ansicht“ für schmale Bildschirme (unter 480 px), zeigt dieselben Inhalte
	const liste = document.getElementById('ansicht-auswahl');
	const listeBereich = document.querySelector('.inhaltsseite-ansicht-auswahl');

	function zeige(index, animiert = true) {
		radios[index].checked = true;
		if (liste) liste.value = radios[index].value;
		inhalte.forEach((inhalt, i) => { inhalt.hidden = i !== index; });
		schiebeFlaeche(radios[index], animiert);
		document.dispatchEvent(new CustomEvent('reiterwechsel', { detail: { reiter: inhalte[index].id } }));
	}

	// Welcher Reiter gehört zu einer Adresse? Direkt (#spezifikation) oder über ein Element darin
	function reiterZu(hash) {
		const ziel = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
		if (!ziel) return -1;
		return inhalte.findIndex((inhalt) => inhalt === ziel || inhalt.contains(ziel));
	}

	radios.forEach((radio, i) => {
		radio.addEventListener('change', () => {
			if (!radio.checked) return;
			zeige(i);
			history.replaceState(null, '', `#${inhalte[i].id}`);
		});
	});

	liste?.addEventListener('change', () => {
		const i = radios.findIndex((r) => r.value === liste.value);
		if (i < 0) return;
		zeige(i);
		history.replaceState(null, '', `#${inhalte[i].id}`);
	});

	// Links auf Überschriften in einem anderen Reiter öffnen diesen Reiter zuerst
	window.addEventListener('hashchange', () => {
		const index = reiterZu(location.hash);
		if (index >= 0 && inhalte[index].hidden) {
			zeige(index);
			document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
		}
	});

	// Fläche nachführen, wenn sich die Schrift oder die Breite ändert
	window.addEventListener('resize', () => schiebeFlaeche(radios.find((r) => r.checked), false));
	// Wird die Segmented Control erst beim Verbreitern sichtbar, stimmt die Fläche sonst nicht
	window.matchMedia('(min-width: 480px)').addEventListener('change', () => schiebeFlaeche(radios.find((r) => r.checked), false));
	document.fonts?.ready.then(() => schiebeFlaeche(radios.find((r) => r.checked), false));

	auswahl.hidden = false;
	if (listeBereich) listeBereich.hidden = false;
	const start = reiterZu(location.hash);
	zeige(start >= 0 ? start : 0, false);
	if (start >= 0 && location.hash.slice(1) !== inhalte[start].id) {
		document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
	}
})();
