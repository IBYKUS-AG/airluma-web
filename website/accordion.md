---
layout: inhaltsseite.njk
titel: Accordion
bereich: komponenten
aktuell: accordion
gruppe: content
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

> Kompakte Inhalte platzsparend darstellen.

Ein Accordion-Element (auf Deutsch auch „Akkordeon“ genannt) ist ein gängiges Gestaltungsmuster im Web, das verwendet wird, um größere Inhaltsmengen übersichtlich und platzsparend zu präsentieren. Durch das Auf- und Zuklappen einzelner Bereiche lassen sich Informationen thematisch oder nach Listen gliedern und bei Bedarf ein- oder ausblenden.

Bekannt ist diese Technik durch FAQ-Seiten, Formularen mit optionalen Feldern oder komplexeren Einstellungsansichten.

## Wann verwenden

Ein Accordion eignet sich besonders in folgenden Situationen:
*   Platzsparende Darstellung, wo Inhalte nur bei Bedarf sichtbar oder angezeigt werden sollen
*   Bessere Übersicht, da verwandte Themenbereiche gruppiert werden können
*   Schrittweise Vermittlung von Information insbesondere auf kleineren Bildschirmen, wenn das Öffnen eines Bereichs die anderen schließt.

## Abgrenzung

### Ein Accordion im Vergleich zu anderen Komponenten

Ein [Button](button.html) führt typischerweise eine unmittelbare Aktion aus.

Ein [Segmented Control](segmented-control.html) dient zum Umschalten zwischen verschiedenen Ansichten oder Zuständen auf einer Seite (ohne reload).

Ein [Fieldset](fieldset.html) gruppiert semantisch verwandte Formularelemente, ist aber nicht interaktiv ein- bzw. ausklappbar.

Ein [Menü](navigation-menu-item.html) oder eine „aufklappbare Navigationsgruppe“ kann einem Accordion zum Verwechseln ähnlich sehen. Beide nutzen ähnliche Disclosure Pattern. Ein Menü gliedert aber Ziele statt Inhalt. Der Unterschied steckt im Container: Die Kopfzeile eines Accordions steht in einem Überschriftenelement, der Eintrag einer Navigation in einer verschachtelten Liste (siehe Navigationsmuster).

Ein Accordion bietet also eine gute Balance zwischen Struktur und Interaktivität – allerdings nur, wenn es korrekt umgesetzt wird.

## Varianten

### Leading vs. Trailing Icon

Chevron-Icons (kleine Pfeile oder auch Winkelpfeil) aus unserem [Iconset](icons.html) sind gängige visuelle Hilfen, um den Zustand eines Accordion-Elements optisch besser darzustellen. Das Chevron nach unten (↓) oder nach rechts zeigend (→) signalisiert, dass der Abschnitt derzeit geschlossen ist. Der Inhalt befindet sich „unter der Überschrift“ oder auf dem nächsten Screen und kann durch Klicken sichtbar gemacht werden. Das Chevron nach oben (↑) zeigt jedoch an, dass der Abschnitt geöffnet ist. Der Inhalt wird aktuell angezeigt und kann durch erneutes Klicken wieder ausgeblendet oder unter die Überschrift geschoben werden. Ebenfalls zulässig sind Plus und Minus-Icons.

#### Leading Icon (Icon vor dem Titel)

**Vorteile:**
*   Wird von Screenreader-Nutzenden meist früh erkannt, da es innerhalb der Kopfzeile zuerst gelesen wird.
*   Visuelle Gewichtung liegt links – entspricht oft der gewohnten Leserichtung und ist gut sichtbar.
*   Gut geeignet für Status-Icons (z.B. Pfeil, Plus/Minus) in sehr kompakten Layouts.

**Nachteile:**
*   Der Pfeil oder das Symbol wird beim Lesen häufig zuerst interpretiert – kann verwirrend wirken, wenn der Kontext noch unklar ist.

#### Trailing Icon (Icon nach dem Titel)

**Vorteile:**
*   Fokus liegt zunächst auf dem Titel – die Information wird zuerst aufgenommen.
*   Optisch ruhiger, besonders bei Listen oder Menüs.
*   Häufiger Standard in modernen UI-Frameworks.

**Nachteile:**
*   Bei adaptiven oder responsiven Layouts kann das Icon optisch nach rechts „wegrutschen“ oder schwieriger erreichbar sein.
*   Bei rein visueller Nutzung evtl. weniger auffällig – insbesondere bei geringen Kontrasten oder mobilen Geräten.

Wichtig bei der Positionierung des Icons ist stets die **Konsistenz im Design** und **klare, eindeutige Interaktion**.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines stilisierten, aufklappbaren Accordion-Elements mit abgerundeten Ecken in zwei Zuständen. Der erste Zustand zeigt eine hellgraue rechteckige Box mit dem Text „Hi, this is the headline“ und einem hervorgehobenen blauen Rand („Focus Stroke“). Rechts daneben befindet sich ein Pfeilsymbol, das nach unten zeigt und somit ein aufklappbares Element darstellt. Darunter ist ein geöffnetes Accordion-Element zu sehen: Unter der Überschrift folgt der Fließtext „Here goes the text of the opened box.“, gefolgt von einem nach oben zeigenden Pfeilsymbol.", "Accordion Anatomie", "accordion-01" %}

## Layout

{% abbildung "Grafik eines UI-Accordion-Elements mit Maßangaben in zwei Zuständen. Das obere, geschlossene Accordion zeigt den Text „Hi, this is the headline.“ mit einem nach unten zeigenden Pfeilsymbol. Maßlinien geben Abstände von 16 px, 24 px, 16 px sowie 12 px und 24 px an. Der Innenabstand beträgt 16 px, das Icon ist 12 px von der Headline entfernt und 24 px groß. Das untere, geöffnete Accordion enthält denselben Titeltext, darunter den Fließtext „Here goes the text of the opened box.“ und ein 24 px großes Pfeilsymbol nach oben. Eine neue Maßlinie zeigt 24 px Abstand zwischen Headline und Text.", "Accordion Measurements", "accordion-02" %}

Die **Kopfzeile eines Accordions ist ein „Cluster“** mit `--ibk-spacing-12` zwischen Beschriftung und Chevron.

## Tastaturbedienung

Jede Kopfzeile ist eine eigene Station in der Tab-Reihenfolge. Darin unterscheidet sich das Accordion von den [Tabs](tabs.html), wo die ganze Leiste nur eine Station bildet und die Pfeiltasten die Arbeit übernehmen.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Kopfzeile zu Kopfzeile und in den geöffneten Inhalt hinein |
| Enter / Leertaste | Öffnet bzw. schließt den fokussierten Bereich |
| Pfeil auf / ab \* | Optional: zur vorigen bzw. nächsten Kopfzeile |
| Pos1 / Ende \* | Optionale: erste bzw. letzte Kopfzeile |

\* Pfeiltasten und Pos1/Ende sind eine Zugabe, keine Pflicht — anders als bei den Tabs. Wer sie anbietet, muss sie über alle Accordions hinweg gleich belegen.

> Der häufigste Fehler bei Accordions: Der Inhalt eines geschlossenen Bereichs muss technisch wirklich verborgen sein, nicht nur auf Höhe null gesetzt oder transparent geschaltet. Sonst wandert der Fokus per Tab in unsichtbare Links und Input Fields, und Nutzende tabben ins Nichts.

## Barrierefreiheit

Die Umsetzung eines Accordions bringt einige Anforderungen mit sich, insbesondere im Hinblick auf die Barrierefreiheit. Damit alle Nutzenden – auch mit Tastatur oder Screenreader – gut damit arbeiten können, sollten folgende Aspekte beachtet werden:

*   **Kopfzeile als Button in einer Überschrift:**
    Ein echtes `<button>` innerhalb eines Überschriftenelements (z.B. `<h3>`). Dann können Screenreader-Nutzende von Bereich zu Bereich springen, ohne jede Kopfzeile anzutabben. Ein echtes `<button>` macht `role="button"` überflüssig.
*   **Klare semantische Struktur:**
    `aria-expanded` am Button für den Zustand, `aria-controls` als Verweis auf den zugehörigen Inhalt. Nur so erkennen Screenreader die Beziehung zwischen Auslöser und Bereich.
*   **Fokusmanagement:**
    Beim Öffnen und Schließen bleibt der Fokus auf der Kopfzeile. Er springt nicht in den Inhalt und darf beim Schließen nicht verloren gehen — sonst landen Nutzende wieder am Seitenanfang.
*   **Wenn sich Bereiche gegenseitig schließen:**
    Schließt das Öffnen eines Bereichs einen anderen, muss dieser zweite Wechsel ebenfalls wahrnehmbar sein und darf keinen Fokus mitnehmen.
*   **Visuelle und semantische Hinweise:**
    Es sollte auf den ersten Blick (und/oder auf den ersten Ton) erkennbar sein, dass ein Element ein- oder ausklappbar ist. Eine rein visuelle Darstellung reicht dabei nicht aus — die Richtung des Chevrons ist kein Ersatz für `aria-expanded`.
*   **Das Icon ist Teil des Buttons,** kein eigenes Ziel in der Tab-Reihenfolge und kein eigener Ansagepunkt. Das gilt für die führende (leading) wie für die nachlaufende (trailing) Position.
*   Der „Focus stroke“ muss im geöffneten wie im geschlossenen Zustand sichtbar bleiben.

Werden diese Punkte nicht beachtet, kann das Accordion schnell zur Hürde statt zur Hilfe werden.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Accordion |
| 2 | Dominance | – |
| 3 | Type | Opened, Closed |
| 4 | Style | Leading Icon, Trailing Icon |
| 5 | State | Enabled, Focus, Disabled |
|  | Nested instances | Card |

> Anmerkung zur Taxonomie: Die Types „Opened“ oder „Closed“ sind genaugenommen „States“, die Nutzende durch ihre Interaktion direkt steuern können. Jedoch würden sich die State names in Figma doppeln und gegenseitig behindern.

{% endreiter %}
