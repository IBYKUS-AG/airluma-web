---
layout: inhaltsseite.njk
titel: Meter
bereich: komponenten
aktuell: meter
gruppe: systemfeedback
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Die zwei grundsätzlichen HTML-Elemente `<meter>`, `<progress>` und der „Slider“ (Schieberegler) oder auch „Range-Slider“ dienen unterschiedlichen Zwecken bei der Darstellung von Werten und Fortschritten auf Webseiten.

Das `<meter>`\-Element **repräsentiert einen skalaren Wert** innerhalb eines bekannten Bereichs oder einen Bruchteil eines Wertes. Es wird verwendet, um Messwerte wie z.B. Disk-Auslastung, Temperaturanzeige, Batteriestand oder Bewertungsergebnisse darzustellen. Das Element verfügt über Attribute wie: „min“, „max“, „value“, „low“, „high“ und „optimum“, um wichtige Bereiche und den aktuellen Wert zu definieren.

## Varianten

Auch das Meter-Element ist in zwei Rubriken – **Normal** und **Dezent** – verfügbar.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik zweier Meter-Komponenten (Fortschrittsanzeige) mit typischen UI-Elementen in zwei gegenübergestellten Dominanzen („Regular“ und „Decent“). Oben steht jeweils ein „Label“ mit einem optionalen Info-Icon vom Typ „eIB“. Darunter verläuft eine horizontale Fortschrittsanzeige mit einem hellgrauen „Track“ und jeweils gefärbte Balkenabschnitte („Progress“), die den aktuellen Fortschritt visualisiert.", "Meter Anatomie", "meter-01" %}

## Layout

{% abbildung "Grafik eines Meter-Elements mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Der „Track“ besitzt einen Border Radius von 6 px und eine Höhe von 6 px in der Dominanzvariante „Regular“. Die Breite des Fortschrittsbalkens ist variabel. Vertikale und horizontale Maßlinien zeigen u.a. einen Abstand von 16 px zwischen Label und Track. Oberhalb des Fortschrittsbalkens ist ein Label mit einem 24 px großen Info-Icon (eIB) positioniert.", "Meter Measurements", "meter-02" %}

**Alle drei UI-Elemente sind „Stacks“:** Label, Anzeige und „Supporting text“ stehen untereinander, bei Meter und Progress jeweils mit `--ibk-spacing-16` und beim Range-Slider mit `--ibk-spacing-8`. Der Beschriftungsbereich ist jeweils ein „Cluster“ mit `--ibk-spacing-4`, der Bedienbereich des Sliders ein „Cluster“ mit `--ibk-spacing-8`.

Bahn (Rail), Fortschritt (Progress) und Griff (Thumb) des Sliders sind verankert und liegen übereinander; sie sind nicht Teil eines Primitivs.

## Motion

{% abbildung "Zwei nebeneinander dargestellte Meter-Zustände: Links der Zustand A (Low) mit einem kurzen orangefarbigen Balken auf der hellgrauen Rail/Track und rechts der Zustand B (High) mit einem längeren grünen Balken.", "Meter Zustände", "meter-03" %}

Der Wechsel zwischen den Zuständen oder dem Aussehen der farbigen Balken wird mit unserer Mikroanimation „transition-default“ realisiert.

## Umsetzung

### `<meter>`-Attribute

*   **min:** Der minimale Wert, den die Anzeige darstellen kann, z.B. `min="0"`
*   **max:** Der maximale Wert, den die Anzeige darstellen kann, z.B. `max="100"`
*   **value:** Der aktuelle Wert, der auf der Anzeige dargestellt wird, z.B. `value="50"`
*   **low:** Der Schwellenwert, unter dem der Wert als „niedrig“ betrachtet wird, was eine spezielle Darstellung hervorrufen kann (in einer Funktionsfarbe), z.B. `low="20"`
*   **high:** Der Schwellenwert, ab dem der Wert als „hoch“ gilt, ebenfalls für eine spezielle Darstellung, z.B. `high="80"`
*   **optimum:** Ein Wert, der als optimaler Bereich gilt. Werte nahe oder gleich dem Optimum werden bevorzugt dargestellt, z.B. `optimum="70"`

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Meter |
| 2 | Dominance | Regular, Decent |
| 3 | Type | – |
| 4 | Style | Max, High, Optimal, Low, Min |
| 5 | State | Enabled, Disabled |

{% endreiter %}
