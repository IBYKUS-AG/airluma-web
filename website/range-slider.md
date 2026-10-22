---
layout: inhaltsseite.njk
titel: Range Slider
bereich: komponenten
aktuell: range-slider
gruppe: content
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Die zwei grundsätzlichen HTML-Elemente `<meter>`, `<progress>` und der „Slider“ (Schieberegler) oder auch „Range-Slider“ dienen unterschiedlichen Zwecken bei der Darstellung von Werten und Fortschritten auf Webseiten.

Ein Range-Slider ist ein **interaktives Steuerelement** (mit Fokus), mit dem Nutzende einen Wert aus einem kontinuierlichen oder diskreten Bereich auswählen können, beispielsweise zur Einstellung der Lautstärke oder Helligkeit. In HTML wird ein Slider durch das `<input>`\-Element mit dem Attribut `type="range"` implementiert. Nutzende können den Schieberegler (Thumb oder Handle) bewegen, um den gewünschten Wert auszuwählen.

## Varianten

Es gibt wie gewohnt **zwei Dominanzstufen:** „Regular“ mit 6 px hohem Track und rundem Thumb, „Decent“ mit 2 px hohem Track und schmalem Balken als Thumb. Decent ist für sehr dichte Oberflächen gedacht, in denen der Slider nicht das führende Element ist.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

Der Slider besteht aus dem Track (der Bahn), dem farbig gefüllten Value-Segment bis zur aktuellen Position und dem Thumb als Griff. Optional kommen ein Label mit Info-Icon (eIB), ein Leading und Trailing Icon an den Enden sowie ein Supporting text unterhalb hinzu.

{% abbildung "Grafik eines Range-Sliders mit rot beschrifteten Bestandteilen. Oberhalb ein „Label“ mit optionalem eIB-Icon. Der Slider selbst: „Leading Icon“ (Minus) und „Trailing Icon“ (Plus) an den Enden, dazwischen der „Track“ mit dem rot gefüllten „Value“-Segment und dem „Thumb“ als Kreis mit rotem Ring und einem Fokusring in Blau. Darunter der graue „Supporting text conveys additional information about the field.“, davor ein eIB-Icon.", "Slider Anatomie", "range-slider-01" %}

## Layout

{% abbildung "Grafik eines Range-Sliders mit Maßlinien in den Varianten „Regular“ und „Decent“, alle Werte in px. Rote Linien bemaßen Größen, blaue die Abstände; „X“ und „Y“ stehen für variable Breiten. In beiden Varianten: Label mit optionalem eIB-Icon (24), 8 Abstand zur 20 hohen Slider-Zeile, „Leading Icon“ und „Trailing Icon“ je 20 breit, Track „Y“ breit. Unterschied: „Regular“ hat einen 6 px hohen Track, einen Kreis als Thumb und 8 px Abstand zu den Icons — „Decent“ einen 2 px hohen Track, einen schmalen Balken als Thumb und 9 px Abstand.", "Slider Measurements", "range-slider-02" %}

**Alle drei UI-Elemente sind „Stacks“:** Label, Anzeige und „Supporting text“ stehen untereinander, bei Meter und Progress jeweils mit `--ibk-spacing-16` und beim Range-Slider mit `--ibk-spacing-8`. Der Beschriftungsbereich ist jeweils ein „Cluster“ mit `--ibk-spacing-4`, der Bedienbereich des Sliders ein „Cluster“ mit `--ibk-spacing-8`.

Bahn (Rail), Fortschritt (Progress) und Griff (Thumb) des Sliders sind verankert und liegen übereinander; sie sind nicht Teil eines Primitivs.

## Tastaturbedienung

Mit `<input type="range">` bekommt man die komplette Tastaturbedienung geschenkt und muss sie nicht selbst bauen.

| Taste | Wirkung |
| --- | --- |
| Pfeil links / rechts (bzw. hoch / runter) | Ein Step |
| Bild auf / Bild ab | Größerer Sprung |
| Pos1 / Ende | Min bzw. Max direkt |

> Das ist zugleich die Absicherung gegen WCAG 2.5.7 („Dragging Movements“): Der Wert muss ohne Ziehbewegung erreichbar sein.

## Barrierefreiheit

*   Das Label muss programmatisch verknüpft sein (`<label for>`), nicht nur visuell darüberstehen.
*   Den „Supporting text“ über `aria-describedby` anbinden, damit er mit dem Feld vorgelesen wird.
*   Wo der reine Zahlenwert nicht selbsterklärend ist, `aria-valuetext` setzen — Screenreader sagen sonst „50“ statt „50 Prozent“ oder „mittel“.

> WCAG 1.4.11 „Non-text Contrast“ erfordert ein Kontrastverhältnis von 3:1 für die visuelle Information, die nötig ist, um ein Bedienelement und seinen Zustand zu erkennen. Diese Rolle übernehmen bei uns das rote Value-Segment mit rund 4,1:1 gegen Weiß und der Thumb-Ring: Der aktuelle Wert ist an der Grenze zwischen rot und grau klar ablesbar, und die Ausdehnung des Tracks markieren zusätzlich „Leading- und Trailing-Icon“ bzw. die Texte. Der inaktive Track ist damit Restfläche und kein erforderlicher Erkennungshinweis - sein Kontrast von 1,24:1 gegen Weiß ist vertretbar.

## Einschränkungen

(Stand: Juli 2026)

1.  „Leading- und Trailing-Icon“ oder die Textbeschriftungen sind **nicht klickbar,** sie sind reine Beschriftung, keine Buttons. Wer eine schrittweise Erhöhung per Klick braucht, kombiniert den Slider mit [„Step Buttons“](step-button.html).
2.  Kein Alert- oder Success-Zustand beim „Supporting text“. Der Slider kennt **keine Validierungsstufen;** für Fehlermeldungen ist er derzeit nicht vorgesehen.
3.  **Keine vertikale Ausrichtung.** Der Slider existiert momentan nur horizontal.
4.  **Nur ein Thumb.** Trotz des Namens wählt die Komponente einen einzelnen Wert innerhalb eines Bereichs aus, nicht eine Spanne von—bis. Ein zweiter Thumb wäre eine weitere Ausbaustufe.
5.  Der aktuelle **Wert ist nicht sichtbar** (z.B. per `<output>`), bisher nur durch die Thumb-Position.

## Umsetzung

### Range-Slider-Attribute

*   **min:** Der minimale Wert, den der Slider annehmen kann, z.B. `min="0"`
*   **max:** Der maximale Wert, den der Slider annehmen kann, z.B. `max="100"`
*   **value:** Der aktuelle Wert des Sliders, der als Standardwert angezeigt wird, z.B. `value="50"`
*   **step:** Gibt die Intervalle an, in denen der Slider bewegt werden kann. Ein `step="10"` würde den Slider in Schritten von 10 erhöhen oder verringern

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Range-Slider/Thumb |
| 2 | Dominance | Regular, Decent |
| 3 | Type | – |
| 4 | Style | – |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus |

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Range-Slider/Track/Regular + ...Track/Decent |
| 2 | Dominance | Regular, Decent |
| 3 | Type | – |
| 4 | Style | – |
| 5 | State | Enabled-Start, Enabled-Mid, Enabled-End, Disabled |

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Range-Slider |
| 2 | Dominance | Regular, Decent |
| 3 | Type | Icon, Text |
| 4 | Style | – |
| 5 | State | Enabled, Disabled, Focus, Warning |

{% endreiter %}
