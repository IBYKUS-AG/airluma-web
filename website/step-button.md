---
layout: inhaltsseite.njk
titel: Step Button
bereich: komponenten
aktuell: step-button
gruppe: navigation
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Der „Step Button“ (auch Schrittzähler, Zähl- oder Wertsteuerung, Stepper oder Number Stepper) ist ein UI-Element, mit dem Nutzende einen Wert in **klar definierten, gleichmäßigen Schritten erhöhen oder verringern** können. Typische Einsatzfelder sind Blätterfunktionen bei Bildgalerien, Mengen (z.B. Stückzahlen im Warenkorb), Zeit- oder Zahlenwerte, Zoomstufen oder jede andere Größe, die sich sinnvoll in feste Intervalle unterteilen lässt. Statt einen Wert frei einzutippen, tippen oder klicken Nutzende einfach auf „Plus“ bzw. „Weiter“ oder „Minus“ bzw. „Zurück“. Dieses Steuerkonzept reduziert Eingabefehler und senkt die kognitive Belastung (_cognitive load_) der Nutzenden.

Technisch basiert der Step Button, ähnlich wie unsere [Pagination](pagination.html) und das [Navigation Menu](navigation-menu-item.html), auf HTML-Buttons, unterscheidet sich aber bewusst von unseren klassischen [Buttons](button.html). Er ist kein Auslöser für eine einmalige Aktion, sondern ein **Steuerelement für einen fortlaufend veränderbaren Wert.**

## Wann verwenden

### Vorteile

*   **Weniger Eingabefehler,** da Werte nur in gültigen Schritten verändert werden können.
*   **Schnelle, präzise Steuerung** kleiner Wertänderungen per Klick oder Tap.
*   **Klare Grenzen** durch das automatische Deaktivieren bei Min-/Max-Werten.
*   Technisch einfach umsetzbar, da **Button-basiert.**

### Nachteile

*   **Ungeeignet für große Wertebereiche** – Nutzende, die von 1 auf 500 möchten, klicken sich müde. Hier ist ein direktes Input Field oder ein Slider die bessere Wahl.
*   **Kleine Trefferflächen** bei zu kompakter Gestaltung – auf ausreichend große, gut tippbare Buttons achten (siehe Grundsätze der Button-Doku).

> Nutzt den Step Button, wenn Nutzende einen Wert in kleinen, überschaubaren Schritten anpassen sollen. Für weite Sprünge oder freie Eingaben kombiniere ihn mit einem Input Field oder greife auf eine andere Komponente zurück.

## Abgrenzung

> Step Buttons unterscheiden sich konzeptionell von normalen Buttons: Ein regulärer Button löst eine abgeschlossene Aktion aus, ein Step Button verändert schrittweise einen Wert und macht diese Veränderung unmittelbar sichtbar.

## Varianten

### Dominanzen

Der Step Button steht in drei Dominanzen zur Verfügung:

1.  eine visuell stärker betonte **„Prominent“**\-Version für besonders wichtige Kontexte.
2.  **„Regular“** für den Normalfall und
3.  **„Decent“** für zurückhaltende Kontexte.

{% abbildung "Übersichtsmatrix der „Step Button“-Varianten. Spalten: die Dominanzstufen „Prominent“ (rot gefüllt), „Regular“ (petrol gefüllt) und „Decent“ (nur schwarzes Icon ohne Fläche), jeweils in den Größen 40 und 20. Zeilen: die Formen „Round“ (Kreis), „Quad“ (abgerundetes Quadrat) und „Rect“ (flaches Rechteck) – „Rect“ existiert nur in Größe 20. Alle Step Buttons zeigen dasselbe eIB-Icon „Pfeil nach oben gegen einen Balken“.", "Step Button Types", "step-button-03" %}

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Anatomie eines runden Step-Buttons: ein roter Kreis mit weißem eIB-Icon und blauem Fokusring. Drei Beschriftungen benennen die Bestandteile – „Focus stroke“ (Fokus), „Background“ (Kreisfläche) und „eIB Icon“ (Embedded-Icon-Button-Icon).", "Step Button Anatomie", "step-button-01" %}

## Layout

**Der einzelne Step Button ist ein zentrierter „Cluster“** ohne inneren Abstand. Die „Step Button Bar“ fasst mehrere zu einem „Cluster“ zusammen.

### Größen

Der Step Button steht in zwei Größen zur Verfügung, die über die Property Type gesteuert werden: 40 px für die Standardanwendung und eine kompakte 20 px-Variante für dichte oder mobile Layouts. Die exakten Innen- und Außenabstände sowie die Icon-Größen sind in Figma hinterlegt und sollten von dort übernommen werden.

{% abbildung "Maßzeichnung dreier petrolfarbenen „Step Buttons“ in der Form Quad bzw. Rect: 40 × 40 px mit einer inneren Icon-Größe von 24 × 24 px, 20 × 20 px sowie 20 × 16 px. Bei allen drei markiert ein roter Kreis die abgerundete Ecke; Hilfslinien führen zur Beschriftung „Border Radius“.", "Step Button Measurements", "step-button-02" %}

## Tastaturbedienung

Ein einzelner Step Button ist ein HTML-Button und verhält sich auch so: eine Station in der Tab-Reihenfolge, ausgelöst mit Enter oder Leertaste. Die Einzelheiten sind schon beim [Button](button.html) aufgeführt.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Zum Step Button und weiter |
| Enter / Leertaste | Führt einen Schritt aus |

Interessant wird es erst im Verbund. Sobald zwei Step Buttons einen Wert steuern, als „Step Button Bar“ oder im Input Field, gelten andere Regeln als für einzelne Buttons. Sie stehen weiter unten bei der Bar.

## Barrierefreiheit

### Ein Step Button ohne Text braucht einen Namen.

„+“, „−“, „<“ und „>“ sind Symbole aus dem Iconset, kein zugänglicher Name. Ohne `aria-label` hören Nutzende nur „Schaltfläche“ und bei zwei Buttons nebeneinander eben zweimal dasselbe. „Wert erhöhen“ und „Wert verringern“ zum Beispiel sagen, was genau passiert (WCAG 4.1.2 „Name, Role, Value“, Stufe A).

### Die kleinen Größen liegen unter der Mindest-Trefferfläche.

WCAG 2.5.8 („Target Size (Minimum)“, Stufe AA) fordert 24 × 24 CSS-Pixel. Die 40er-Variante erfüllt das mühelos, die 20er-Varianten nicht — und „Rect“ mit 20 × 16 px leider am wenigsten.

Zwei Auswege lässt das Kriterium zu:
1.  Entweder liegen die Ziele so weit auseinander, dass sich um jedes ein 24-px-Kreis legen lässt, ohne den Nachbarn zu schneiden — bei zwei direkt aneinandergrenzenden Step Buttons ist das jedoch nicht erfüllt.
2.  Oder es gibt auf derselben Seite ein gleichwertiges Bedienelement in ausreichender Größe. Ein Input Field mit einer direkten Eingabe des Wertes.

Der Nachteil „Kleine Trefferflächen bei zu kompakter Gestaltung“ unter [Wann verwenden](#wann-verwenden) ist damit nicht nur eine Bequemlichkeitsfrage, sondern ein Konformitätskriterium und muss sehr bewusst eingesetzt werden.

### Der „Focus stroke“ bleibt in allen Zuständen sichtbar.

Das schreibt WCAG 2.4.7 „Focus Visible“, Stufe AA vor. Die Anatomie führt ihn als eigenen Bestandteil, er darf auch in der 20er-Variante nie wegfallen, auch wenn der Platz knapp ist.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Step Button |
| 2 | Dominance | Decent, Regular, Prominent |
| 3 | Type | 40, 20 |
| 4 | Style | Round, Quad, Rect |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus |
|  | Sonstiges | eIB (Nested instances) |

{% endreiter %}
