---
layout: inhaltsseite.njk
titel: Banner
bereich: komponenten
aktuell: banner
gruppe: systemfeedback
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Ein Banner ist ein auffallendes, aber nicht aufdringliches UI-Element, das **wichtige Informationen** innerhalb einer Anwendung oder Website anzeigt. Es befindet sich meist am oberen Bildschirmrand, direkt unter der Navigations- oder App-Leiste, ist aber auch an anderen Stellen im Layout zulässig.

Eine wichtige Eigenschaft des Banners – es ist **nicht modal.** Modal bedeutet, dass der Workflow der Nutzenden unterbrochen wird. Beim Banner jedoch können sie ihre Arbeit normal fortsetzen, ohne dass es sie blockiert. Nutzende entscheiden, ob sie auf die Botschaft direkt reagieren – oder sie einfach ignorieren. Typisch ist ein kurzer Hinweistext, manchmal ergänzt um eine Aktion (z.B. „Jetzt aktualisieren“) oder einen Button zum Schließen.

## Wann verwenden

Banner eignen sich für Hinweise, die **sichtbar, aber nicht zwingend** sind, z.B.:
*   „Ein neues Feature oder Update ist verfügbar.“
*   „Es gibt eine wichtige Mitteilung, die dich betreffen könnte, aber nicht sofortige Reaktion verlangt.“
*   Temporäre Zustände wie „Verbindung unterbrochen“ oder „Nur Lesezugriff aktiv“.

> Banner sind perfekt für Botschaften, die Relevanz haben, aber keine sofortige Entscheidung erfordern. Sie sind wie Hinweise am schwarzen Brett – man sieht sie, wenn man will, kann aber auch einfach vorbeigehen.

## Abgrenzung

### Banner vs. Dialog/Alert

Während Banner dich dezent informieren, sind Dialoge oder Alerts anders aufgebaut:
*   Sie sind stets modal, also blockierend – du musst reagieren, bevor du weiterarbeiten kannst.
*   Sie werden für kritische Situationen oder bewusste Entscheidungen genutzt, z.B. „Möchtest du wirklich alle Daten löschen?“
*   Dialoge enthalten fast immer Buttons wie „OK“ und „Abbrechen“, manchmal sogar Input Fields.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Banner-UI-Elements mit typischer Struktur und semantischer Gliederung zur Anzeige von Systemmeldungen oder Hinweisen. Das Banner enthält eine prominent platzierte Überschrift („Das Update ist bereit“) und darunter einen Fließtext („Ein neues Feature oder Update ist verfügbar und kann installiert werden.“). Rechts neben der Headline befindet sich ein Schließen-Icon (×) vom Typ „eIB“, das das Ausblenden des Banners ermöglicht. Die gesamte Komponente ist als hervorgehobene Card („Card with drop shadow“) gestaltet.", "Banner Anatomie", "banner-01" %}

## Layout

{% abbildung "Grafik eines Banner-UI-Elements mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Gezeigt wird eine rechteckige Card mit Überschrift („Headline in `<h4>`“), Beschreibungstext („Text in `<p>`“) und einem 20 × 20 px großen Schließen-Icon (×) vom Typ „eIB“ rechts neben der Headline. Maßlinien verdeutlichen die Abstände: 24 px zwischen Card-Rand und Headline, 16 px zwischen Headline und Text sowie zwischen Text und unterem Rand. Das Icon liegt 16 px vom rechten Rand entfernt. Die Komponente ist als Card mit Schlagschatten gestaltet.", "Banner Measurements", "banner-02" %}

**Der Banner ist ein „Stack“:** die Bereiche stehen mit `--ibk-spacing-12` untereinander, der Inhaltsbereich mit `--ibk-spacing-16`. Der „Schließen-eIB“ ist verankert und liegt über dem Banner.

## Tastaturbedienung

Ein Banner bringt **keine eigene Tastaturbedienung** mit. Es besteht aus Text und aus gewöhnlichen Buttons: einem Button oder einem Schließen-eIB, falls vorhanden. Beide verhalten sich wie unsere [Buttons](button.html). Genau darin liegt der Unterschied zum [Dialog](dialog.html): Das Banner nimmt den Fokus nicht an sich, blockiert nichts und fängt keine Taste ab.

**Der Text selbst ist keine Station in der Tab-Reihenfolge.** Ein Banner ohne Aktion hat also genau eine Station, eines mit Aktion zwei.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Zum Aktions-Button und zum Schließen-eIB |
| Enter / Leertaste | Löst den fokussierten Button aus |

**Esc hat hier keine Funktion,** und das ist beabsichtigt. Esc schließt Modales. Beim Dialog ist es der vorgeschriebene Ausweg aus der Fokusfalle. Ein Banner sperrt nichts ein, aus dem man heraus müsste. Wer Esc trotzdem global abfängt, um das Banner zu schließen, nimmt die Taste evtl. anderen Elementen weg. Prüft das vorher.

### Wohin der Fokus nach dem Schließen geht

Das ist die Stelle, an der die Tastaturbedienung am häufigsten kaputtgeht: Nutzende tabben auf den Schließen-eIB, drücken Enter und das Element, auf dem der Fokus stand, verschwindet. Ohne Zutun fällt der Fokus dann auf `<body>` zurück, und der nächste Tab-Druck beginnt wieder am Seitenanfang. Bei einem Banner unter der Navigationsleiste heißt das: einmal komplett durch die Navigation, um zur Arbeitsstelle zurückzukommen.

Der Fokus muss beim Schließen deshalb ausdrücklich weitergereicht werden, an das nächste sinnvolle Element hinter dem Banner, in der Regel den Anfang des Hauptinhalts (WCAG 2.4.3 „Focus Order“).

Ein zweiter Fallstrick betrifft mitlaufende Banner: WCAG 2.4.11 („Focus Not Obscured (Minimum)“, AA) verlangt, dass ein fokussiertes Element nicht vollständig von anderem Inhalt verdeckt wird. Das Understanding-Dokument nennt „sticky headers“ und Cookie-Banner ausdrücklich als typischen Fehlerfall. Bleibt unser Banner beim Scrollen stehen, darf es beim Durchtabben der Seite nichts verdecken — scroll-padding-top ist der übliche Weg.

## Barrierefreiheit

*   **Erscheint das Banner erst während der Nutzung, muss es angesagt werden.** Ein Hinweis, den man nur sehen kann, erreicht Screenreader-Nutzende nicht (WCAG 4.1.3 „Status Messages“, AA). Für die typischen Banner-Inhalte — Update verfügbar, Nur-Lesezugriff — ist `role="status"` das Richtige. `role="alert"` bleibt Warnungen und Fehlern vorbehalten, weil es die laufende Ausgabe unterbricht.
*   **Das Banner holt sich den Fokus nicht.** Eine Meldung, die den Arbeitsfluss nicht unterbricht, darf die Tastatur nicht an sich reißen. Angesagt wird sie über die Live-Region, nicht über einen Fokussprung — das ist der Unterschied zum Dialog.
*   **Der Schließen-eIB braucht einen Namen.** Ein „×“ ohne Text wird sonst nur als „Schaltfläche“ angesagt; `aria-label="Banner schließen"` sagt, was passiert (WCAG 4.1.2 „Name, Role, Value“). Unsere Übersicht für das Iconset gibt erste Formulierungsanregungen.
*   **Die Headline ist ein** `<h4>` **und muss in die Gliederung der Seite passen.** Steht das Banner über dem Hauptinhalt, springt die Überschriftenebene sonst von `<h1>` direkt auf `<h4>` (WCAG 1.3.1 „Info and Relationships“).
*   **Sobald es farbige Styles gibt:** Die Bedeutung darf nicht allein an der Farbe hängen (WCAG 1.4.1 „Use of Color“). Ein Icon oder ein eindeutiger Text muss sie mittragen.
*   Der „Focus stroke“ bleibt auf dem Schließen-eIB sichtbar (WCAG 2.4.7 „Focus Visible“).

## Einschränkungen

Bisher gibt es noch keine farbigen Hintergründe (Styles) für die Banner. Sie werden bei Bedarf definiert und zur Verfügung gestellt.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Banner |
| 2 | Dominance | Prominent, Regular |
| 3 | Type | – |
| 4 | Style | – |
| 5 | State | – |
|  | Nested instances | Button oder eIB |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

*   Setze **Banner sparsam** ein, damit sie ihre Wirkung behalten.
*   Achte darauf, dass sie **kurz und prägnant formuliert** sind.
*   Biete, wenn nötig, **eine klare Aktion,** einen „Schließen“-Button oder einen eIB an.

{% endreiter %}
