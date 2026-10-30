// Eingebettetes Storybook auf Komponentenseiten (_includes/storybook.njk): Der Rahmen wächst mit dem Inhalt, damit nur die
// Seite rollt und nicht zusätzlich der Rahmen. Geht nur, wenn Seite und Storybook auf derselben Adresse liegen; sonst
// (z. B. beim Öffnen per Doppelklick) bleibt die feste Höhe aus storybook.css mit eigenem Rollbalken.
document.querySelectorAll('.storybook-rahmen').forEach((rahmen) => {
	let beobachter = null;
	let warten = null;
	// Ansicht „Story“ (einzelne Story statt Docs-Seite): Inhalt in #storybook-root, dazu der Innenabstand der Seite
	const story = rahmen.src.includes('viewMode=story');
	const anpassen = (inhalt) => {
		const rand = story ? parseFloat(getComputedStyle(inhalt.ownerDocument.body).paddingBottom) || 0 : 0;
		const hoehe = Math.ceil((story ? inhalt.getBoundingClientRect().bottom : inhalt.getBoundingClientRect().height) + rand);
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
		// Der Inhalt der Docs-Ansicht steckt in #storybook-docs, der einer Story in #storybook-root; er erscheint erst,
		// wenn Storybook fertig gezeichnet hat
		const beobachten = () => {
			const inhalt = dokument.getElementById(story ? 'storybook-root' : 'storybook-docs');
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
