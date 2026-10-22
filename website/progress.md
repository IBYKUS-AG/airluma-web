---
layout: inhaltsseite.njk
titel: Progress
bereich: komponenten
aktuell: progress
gruppe: systemfeedback
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Die zwei grundsätzlichen HTML-Elemente `<meter>`, `<progress>` und der „Slider“ (Schieberegler) oder auch „Range-Slider“ dienen unterschiedlichen Zwecken bei der Darstellung von Werten und Fortschritten auf Webseiten.

Das `<progress>`\-Element zeigt den **Fortschritt einer Aufgabe** an, typischerweise als von den Nutzenden nicht-interaktiven, nicht-manipulierbaren Fortschrittsbalken (zwischen 0 und 100 %). Es wird verwendet, um den Abschlussgrad von Aufgaben wie z.B. Datei-Uploads oder Downloads darzustellen. Progress gibt es in zwei Varianten: **Progress-Linear** und **Progress-Circular** (ringförmig). Das Element selbst besitzt nur zwei Attribute „value“ und „max“, um den aktuellen Fortschritt und das Gesamtziel zu definieren.

Wenn das value-Attribut fehlt, zeigt der Fortschrittsbalken einen unbestimmten (indeterminate) Zustand an, da die Dauer der Aufgabe unbekannt ist.

## Varianten

Das Progress-Element ist in den Varianten Linear und Circular jeweils wiederholt in zwei Rubriken – **Regular** und **Dezent** – verfügbar, um flexibel auf unterschiedliche Anforderungen und Designbedürfnisse einzugehen, insbesondere im responsiven Webdesign. Das Label kann je nach verfügbarem Raum weggelassen werden, und die horizontale Ausdehnung („Y“) des linear Progress-Elements kann flexibel an den verfügbaren Platz angepasst werden.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik zweier Progress-Komponenten (Fortschrittsanzeige) mit typischen UI-Elementen in gegenübergestellten Dominanzen („Regular“ und „Decent“). Oben steht jeweils ein „Label“ mit einem optionalen Info-Icon vom Typ „eIB“. Darunter verläuft eine horizontale Fortschrittsanzeige mit einem hellgrauen „Track“ und einem rot gefärbten Balkenabschnitt („Progress“), der den aktuellen Fortschritt visualisiert.", "Progress-Linear Anatomie", "progress-01" %}

{% abbildung "Grafik der Progress-Circular-Komponente mit typischen UI-Elementen in gegenübergestellten Dominanzen „Regular“ und „Decent“. Zentrales Element ist die ringförmige Fortschrittsanzeige mit einem hellgrauen „Track“ und den farbigen Ringabschnitt („Progress“ oder auch Value), der den aktuellen Fortschritt visualisiert. Ein „Label“ mit einem optionalen Info-Icon vom Typ „eIB“ ist optional und hier nicht sichtbar.", "Progress-Circular Anatomie", "progress-02" %}

## Layout

{% abbildung "Grafik eines Progress-Elements mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Der „Track“ besitzt einen Border Radius von 6 px und eine Höhe von 6 px in der Dominanzvariante „Regular“. Die Breite des Fortschrittsbalkens ist variabel. Vertikale und horizontale Maßlinien zeigen u.a. einen Abstand von 16 px zwischen Label und Track. Oberhalb des Fortschrittsbalkens ist ein Label mit einem 24 px großen Info-Icon (eIB) positioniert.", "Progress-Linear Measurements", "progress-03" %}

**Alle drei UI-Elemente sind „Stacks“:** Label, Anzeige und „Supporting text“ stehen untereinander, bei Meter und Progress jeweils mit `--ibk-spacing-16` und beim Range-Slider mit `--ibk-spacing-8`. Der Beschriftungsbereich ist jeweils ein „Cluster“ mit `--ibk-spacing-4`, der Bedienbereich des Sliders ein „Cluster“ mit `--ibk-spacing-8`.

Bahn (Rail), Fortschritt (Progress) und Griff (Thumb) des Sliders sind verankert und liegen übereinander; sie sind nicht Teil eines Primitivs.

## Motion

{% abbildung "Zwei nebeneinander dargestellte Progress-Zustände vom Typen „Linear“: Links der Zustand A (ca. 40 %) mit einem kurzen roten Balken auf der hellgrauen Rail bzw. Track und rechts der Zustand B (ca. 75 %) mit einem längeren roten Balken.", "Progress Zustände", "progress-04" %}

Der Wechsel beim linearen Progress, also das Zu- oder Abnehmen, zwischen den Ausdehnungen der farbigen Balken wird auch hier mit unserer Mikroanimation „transition-default“ realisiert.

## Umsetzung

**Hinweis:** In Figma ist unserer „Infinite Spinner“ auch ein Teil des Progress-Circular, da das Aussehen optisch nahezu identisch ist und die UI-Designende somit eine bewusste Entscheidung zwischen den beiden Typen (indeterminate und determinate) treffen müssen.

### `<progress>`-Attribute

*   **value:** Gibt den aktuellen Stand der Aufgabe an.
*   **max:** Gibt den Zielwert für den Fortschritt an.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Progress-Linear bzw. Progress-Circular |
| 2 | Dominance | Regular, Decent |
| 3 | Type | (beim Progress-Circular: Progress, Spinner) |
| 4 | Style | – |
| 5 | State | Enabled, Disabled |

{% endreiter %}
