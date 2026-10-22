---
layout: inhaltsseite.njk
titel: Pagination Dots
bereich: komponenten
aktuell: pagination-dots
gruppe: navigation
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Als Ergänzung zur klassischen Pagination stehen Pagination-Dots (auch als Bullets / Bullet Navigation, Slider-, Page- oder Step Indicators, Carousel Dots oder Dot Navigation) zur Verfügung. Sie stellen **die minimalistische Variante** der Seitennavigation dar und kommen vor allem in **Galerien, Slideshows oder animierten Hero-Grafiken** zum Einsatz.

## Grundsätze

Die zugrunde liegende Logik entspricht dabei der [Pagination](pagination.html): Mehrere Inhalte werden in Segmente aufgeteilt, die nacheinander durchlaufen werden können. Im Unterschied zur klassischen Variante gibt es jedoch keine „Previous“- oder „Next“-Buttons. Stattdessen erfolgt die Navigation ausschließlich über (Dot12 oder Mark12) Punkte aus unserem [Iconset](icons.html), dargestellt mittels der eIB (Embedded Icon Button).

Das Interaktionskonzept ist klar definiert:
*   Das **aktive Element ist farblich hervorgehoben** und **nicht interaktiv**.
*   Weitere Punkte sind auswählbar und im Standardzustand grau dargestellt.
*   Interaktive Punkte verfügen über einen Hover-State, der die Anklickbarkeit signalisiert.

> Pagination-Dots sind damit das reduzierteste Element zur Visualisierung mehrerer Schritte oder Ansichten und eignen sich besonders für kompakte, visuell geprägte Bereiche.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik einer Pagination-Komponente im Dot-Stil mit typischer UI-Struktur. Dargestellt ist eine horizontale Reihe runder Punkte zur Navigation zwischen Seiten, wobei jeder Punkt eine Seite repräsentiert. Gezeigt werden: der „First Element“ (erster Punkt), mehrere „Active Elements“ (aktive Seitenpunkte), der „Selected Element“ (ausgewählter Punkt) sowie der „Last Element“ (letzter Punkt). Die Punkte unterscheiden sich visuell nach Status: ausgewählt (inaktiv) oder auswählbar.", "Pagination-Dots Anatomie", "pagination-dots-01" %}

## Layout

{% abbildung "Grafik einer Pagination-Komponente im Dot-Stil mit Maßlinien zur Darstellung räumlicher Parameter. Dargestellt ist eine horizontale Reihe runder Navigationspunkte mit einem Durchmesser von jeweils 20 px. Die Punkte liegen ohne Abstand nebeneinander – der horizontale Zwischenraum beträgt 8 px. Die Grafik verdeutlicht das konsistente Größenverhältnis und die kompakte Anordnung der Seitenpunkte innerhalb einer Dot-Navigation.", "Pagination-Dots Measurements", "pagination-dots-02" %}

## Tastaturbedienung

Jeder Punkt ist ein **eIB (Button)** und damit eine eigene Station in der Tab-Reihenfolge. Der aktive Punkt jedoch ist nicht interaktiv und liegt somit nicht in der Tab-Reihenfolge. Previous- und Next-Buttons gibt es hier auch nicht, Pfeiltasten wirken also nicht.

## Barrierefreiheit

### Ein Punkt trägt keinen Text und braucht deshalb einen Namen.

„Seite 3 von 7“ oder „Zu Bild 3 springen“. Ohne Namen hören Nutzende nur „Schaltfläche“ _(WCAG 4.1.2 „Name, Role, Value“, Stufe A)._

### Auch hier markiert `aria-current` die Position.

Bei einer Bildergalerie ist `aria-current="true"` passender als `"page"`, weil keine Seite gewechselt wird.

### Trefferfläche knapp innerhalb der Regel.

Die Punkte messen 20 px und liegen 8 px auseinander, der Abstand von Mittelpunkt zu Mittelpunkt beträgt also 28 px. Damit greift die Ausnahme von WCAG 2.5.8 _(„Target Size (Minimum)“, Stufe AA):_ Um jeden Punkt lässt sich ein 24-px-Kreis legen, ohne den Nachbarn zu schneiden. Das Understanding-Dokument empfiehlt trotzdem, die 24 px direkt einzuhalten — mit 20 px liegen wir unter dieser Empfehlung, aber nicht im Verstoß.

### Läuft die Galerie automatisch, braucht sie eine Pause-Funktion.

Für automatisch wechselnde Inhalte, die neben anderem Inhalt stehen, verlangt WCAG 2.2.2 _(„Pause, Stop, Hide“, Stufe A)_ eine Möglichkeit zum Anhalten, Stoppen oder Ausblenden. Die Dots zeigen die Position an, sie ersetzen diese Bedienung nicht.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Pagination-Dots |
| 2 | Dominance | Prominent, Regular |
| 3 | Type | Small, Medium, Large |
| 4 | Style | Active, Inactive |
| 5 | State | Enabled, Hover, Pressed, Focus |
|  | Nested instances | – |

{% endreiter %}
