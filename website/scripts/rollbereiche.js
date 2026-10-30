// Rollbereiche: Tabellen und Code-Blöcke, die breiter sind als ihr Platz, scrollen in sich.
// Nur dann werden sie per Tabulatortaste erreichbar (danach Pfeiltasten) und bekommen einen Namen für Screenreader;
// passen sie hinein, entsteht keine zusätzliche Station. Geprüft beim Laden, bei Größenänderungen und wenn sich der
// Inhalt ändert.
// Eigener Geltungsbereich, damit sich die Skripte der Seite nicht in die Quere kommen
(() => {
	// Name einer Tabelle: ihre Beschriftung oder die Überschrift davor, z. B. „Tabelle: Primärfarben“
	const ueberschriften = [...document.querySelectorAll('main h2, main h3, main h4')];
	function tabellenname(el) {
		const beschriftung = el.querySelector('caption')?.textContent.trim();
		if (beschriftung) return beschriftung;
		const davor = ueberschriften.filter((h) => h.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING).pop();
		return davor ? `Tabelle: ${davor.textContent.trim()}` : 'Tabelle';
	}
	const bereiche = [
		...[...document.querySelectorAll('.doc-tabelle')].map((el) => ({
			el, name: tabellenname(el),
		})),
		...[...document.querySelectorAll('.doc pre')].map((el) => ({ el, name: 'Code' })),
	];
	if (!bereiche.length) return;

	function pruefe({ el, name }) {
		const zuBreit = el.scrollWidth > el.clientWidth + 1;
		if (zuBreit && !el.dataset.rollbereich) {
			el.dataset.rollbereich = 'ja';
			el.tabIndex = 0;
			el.setAttribute('role', 'region');
			// vorhandenen Namen (aria-label) behalten
			if (!el.hasAttribute('aria-label')) { el.setAttribute('aria-label', name); el.dataset.rollbereichName = 'ja'; }
		} else if (!zuBreit && el.dataset.rollbereich) {
			delete el.dataset.rollbereich;
			el.removeAttribute('tabindex');
			el.removeAttribute('role');
			if (el.dataset.rollbereichName) { el.removeAttribute('aria-label'); delete el.dataset.rollbereichName; }
		}
	}

	const alle = () => bereiche.forEach(pruefe);
	const beobachter = new ResizeObserver(alle);
	bereiche.forEach(({ el }) => {
		beobachter.observe(el);
		[...el.children].forEach((kind) => beobachter.observe(kind));
	});
	new MutationObserver(alle).observe(document.querySelector('main') || document.body, { subtree: true, childList: true, attributes: true, characterData: true });
	document.fonts?.ready.then(alle);
	alle();
})();
