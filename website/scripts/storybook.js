// Eingebettetes Storybook auf Komponentenseiten (_includes/storybook.njk): Der Rahmen wächst mit dem Inhalt, damit nur die
// Seite rollt und nicht zusätzlich der Rahmen. Geht nur, wenn Seite und Storybook auf derselben Adresse liegen; sonst
// (z. B. beim Öffnen per Doppelklick) bleibt die feste Höhe aus storybook.css mit eigenem Rollbalken.
document.querySelectorAll('.storybook-rahmen').forEach((rahmen) => {
	let beobachter = null;
	let warten = null;
	const anpassen = (inhalt) => {
		const hoehe = Math.ceil(inhalt.getBoundingClientRect().height);
		if (hoehe > 0) rahmen.style.height = `${hoehe}px`;
	};
	const verbinden = () => {
		beobachter?.disconnect();
		warten?.disconnect();
		let dokument;
		try {
			dokument = rahmen.contentDocument;
		} catch {
			return;
		}
		if (!dokument || dokument.location.href === 'about:blank') return;
		// Der Inhalt der Docs-Ansicht steckt in #storybook-docs; er erscheint erst, wenn Storybook fertig gezeichnet hat
		const beobachten = () => {
			const inhalt = dokument.getElementById('storybook-docs');
			if (!inhalt || !inhalt.firstElementChild) return false;
			beobachter = new ResizeObserver(() => anpassen(inhalt));
			beobachter.observe(inhalt);
			return true;
		};
		if (beobachten()) return;
		warten = new MutationObserver(() => { if (beobachten()) warten.disconnect(); });
		warten.observe(dokument.body, { childList: true, subtree: true });
	};
	rahmen.addEventListener('load', verbinden);
	// War das Storybook schon geladen, bevor dieses Skript lief (z. B. aus dem Zwischenspeicher), gleich verbinden
	try {
		if (rahmen.contentDocument?.readyState === 'complete') verbinden();
	} catch { /* andere Adresse: feste Höhe */ }
});
