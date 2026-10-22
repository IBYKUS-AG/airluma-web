---
layout: inhaltsseite.njk
titel: Fieldset
bereich: komponenten
aktuell: fieldset
gruppe: base
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Das HTML-Element `<fieldset>` ist eine **semantische Komponente,** die verwendet wird, um thematisch zusammengehörige Inhalte in einem Formular logisch zu gruppieren. Es verbessert nicht nur die visuelle Struktur eines Formulars, sondern spielt auch eine wichtige Rolle in der Barrierefreiheit, da Screenreader den Zusammenhang zwischen den gruppierten Feldern und der zugehörigen Überschrift (der `<legend>`) erkennen können.

Die `<legend>` dient als Titel oder Beschreibung des Inhalts des Fieldsets und steht typischerweise über der Gruppe am oberen Rand. Sie beschreibt den Zweck der gruppierten Input Fields und macht das Formular intuitiver und verständlicher.

## Abgrenzung

### Unterschied: Fieldset und Accordion

| Merkmal | Fieldset | Accordion |
| --- | --- | --- |
| Zweck | Gruppierung von Formularfeldern | Organisation allgemeiner Inhalte |
| Semantik | Formularspezifisch | Allgemein, meist visuell |
| HTML-Elemente | `<fieldset>` und `<legend>` | `<h3>`, `<button>`, `<div>` |
| Zugänglichkeit | Semantisch durch `<fieldset>` und `<legend>` | Manuell mit ARIA-Attributen |

## Grundsätze

### Größenregel

Die Größe der Darstellung des `<legend>`-Elements sollte an das Design der verwendeten Komponenten innerhalb des Fieldset angepasst werden, um eine klare visuelle Hierarchie zu gewährleisten. Dabei gilt es, die folgenden Regeln zu beachten:

> Wenn die im Fieldset enthaltenen Komponenten bereits eigene `<label>`\-Elemente oder andere Beschriftungen besitzen, sollte die `<legend>` mindestens eine Stufe **„auffälliger“** (font-weight: 500, 600, usw.) **oder** eine Stufe **„größer“** (z.B. von Headline XS (1 rem/600) zu Headline S (1.3125 rem/600), usw.) laut unserer [Typescale](typografie.html) gestaltet werden.

#### Ein Beispiel

**Legend:** z.B. „Kontaktinformationen“ in „h4“ (Asap-Semibold 600, 1.3125 rem)

**Labels:** an Komponenten im Fieldset, z.B.: „Vorname“, „Nachname“ in <Label-L> (Asap-Medium 500, 1 rem)

{% abbildung "Grafik eines Fieldset-Elements mit typografischer Hervorhebung der Textgrößen. Oben steht die Legende in 21 px, z.B. „Kontaktinformationen“. Darunter folgt der Supporting Text in 14 px: „Bitte tragen Sie sich mit Vor- und Nachnamen ein.“ Es schließen sich zwei beschriftete Input Fields an, jeweils mit einem Label in 16 px, etwa „Vorname“ und „Nachname“, jeweils mit einem Input-Field-Symbol. Die Grafik verdeutlicht den Unterschied der Schriftgrößen: 21 px für die Legende, 16 px für Labels und 14 px für unterstützenden Text.", "Fieldset Beispiel", "fieldset-03" %}

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Die Grafik zeigt die typischen Bestandteile eines HTML-Fieldsets. Oben befindet sich die Bezeichnung „Fieldset Legend“. Darunter ein Bereich für eine optionale Beschreibung: „Supporting text conveys additional information about the field.“.", "Fieldset Anatomie", "fieldset-01" %}

## Layout

{% abbildung "Grafik eines Fieldset-Elements mit Maßlinien zur Darstellung von vertikalen Abständen von jeweils 12 px zwischen den Elementen.", "Fieldset Measurements", "fieldset-02" %}

**Das Fieldset ist ein Behälter, kein Primitiv.** Die enthaltene Feldgruppe ist ein „Stack“; welchen Abstand sie nutzt, steht bei der jeweiligen Komponenten, z.B. [Checkbox](checkbox.html), [Radio Button](radio-button.html), [Input Fields](input-field.html), usw.

## Tastaturbedienung

Das `<fieldset>` ist selbst keine Station in der Tab-Reihenfolge und die `<legend>` demzufolge auch nicht. Beide sind nicht fokussierbar und haben keine eigene Tastenbelegung. Was Nutzende erleben, entsteht ausschließlich aus dem, was in der Gruppe liegt.

> Ein Fieldset ordnet, es bedient nicht.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Bedienelement zu Bedienelement, über die Gruppengrenze hinweg **ohne eigenen Halt am Fieldset** |
| Alle übrigen Tasten | Wirken an der jeweils fokussierten Komponente; das Fieldset ändert daran nichts |

### Zwei Dinge folgen daraus

Die Tab-Reihenfolge ergibt sich aus der Reihenfolge im Quelltext, nicht aus der Anordnung im Layout. Wer eine Gruppe mehrspaltig setzt, muss prüfen, ob der Fokus anschließend noch der Leserichtung folgt. Sonst springt er quer durch die Gruppe _(WCAG 2.4.3 „Focus Order“)._

`disabled` am `<fieldset>` deaktiviert alle enthaltenen Formularelemente auf einmal und nimmt sie gemeinsam aus der Tab-Reihenfolge. Genau das ist der Nutzen des Zustands: Man muss nicht jedes Feld einzeln sperren. Eine Ausnahme gibt es: Bedienelemente innerhalb der **ersten** `<legend>` bleiben bedienbar. Ein Schalter, z.B. „Angaben bearbeiten“, in der Legende bleibt also erreichbar. Das ist ein Werkzeug und kein Fehler, muss aber gewollt sein.

Enthält die Gruppe [Radio Buttons](radio-button.html), gilt zusätzlich deren eigene Regel: Die Radiogruppe ist genau eine Station, gewechselt wird mit den Pfeiltasten. Bei [Checkboxen](checkbox.html) bleibt jede eine eigene Station. Das Fieldset ändert an beidem nichts. Es benennt die Gruppe, es verändert nicht ihre Bedienung.

## Barrierefreiheit

*   Die `<legend>` **muss das erste Kindelement** des `<fieldset>` **sein.** Nur dann wird sie als Name der Gruppe ausgewertet. Steht sie weiter unten oder in einem `<div>` verschachtelt, sehen Nutzende zwar eine Überschrift, ein Screenreader betritt aber eine namenlose Gruppe _(WCAG 1.3.1 „Info and Relationships“)._
*   **Kein Fieldset ohne Legende.** Eine Gruppe ohne Namen ist zusätzliches Rauschen: Angesagt wird, dass eine Gruppe beginnt, aber nicht wozu. Wer nur optisch bündeln will, nimmt kein Fieldset, sondern Abstand und [Typografie](typografie.html) oder unsere [Card](card.html).
*   **Die Legende wird jedem enthaltenen Feld vorangestellt angesagt!** „Kontaktinformationen, Vorname, Eingabefeld“. Deshalb kurz halten, ein bis drei Wörter und kein Satz, und nicht in den Labels wiederholen. In einer Legende „Kontaktinformationen“ wird ein Label „Kontakt-Vorname“ **bei jedem Feld doppelt** vorgelesen.
*   Der „Supporting text“ gehört **über** `aria-describedby` an das `<fieldset>`, nicht an die Legende. Er beschreibt dann die Gruppe. Was zur Eingabe eines einzelnen Feldes nötig ist, z.B. Format, Pflichtangabe, Fehler, gehört trotzdem zusätzlich an dieses Feld: Beschreibungen an einer Gruppe werden je nach Screenreader nur beim Eintritt vorgelesen und nicht bei jedem Feld erneut.
*   Die Legende trägt die Stufe der Typescale, nicht das Überschriften-Element. Ein „h4“ innerhalb der `<legend>` sieht identisch aus, hängt die Legende aber zusätzlich in die Überschriftengliederung der Seite und wird von manchen Screenreadern doppelt angesagt. **Gestaltet wird über die Klasse, nicht über das Element.**
*   **Unser Fieldset hat keinen sichtbaren Rahmen.** Die Gruppe ist rein über Typografie und Abstand erkennbar. Umso wichtiger ist, dass die Semantik die Arbeit übernimmt — ein optischer Kasten allein erzeugt keine Gruppe, und das Fehlen eines Kastens hebt sie nicht auf.
*   Der **„Focus stroke“** der enthaltenen Komponenten **darf** am Rand der Gruppe **nicht abgeschnitten werden.** Der Innenabstand des Fieldsets ist knapp; wo eine Komponente bündig am Rand sitzt, braucht der Fokusring Platz. **Kein** `overflow: hidden` **auf der Gruppe** _(WCAG 2.4.11 „Focus Not Obscured (Minimum)“)._
*   **Verschachtelung sparsam einsetzen.** Jedes zusätzliche Fieldset wird als weitere Gruppenebene angesagt. Ab der dritten Ebene hört man vor jedem Feld mehr Struktur als Inhalt. Ein deaktiviertes äußeres Fieldset lässt sich außerdem durch ein inneres nicht wieder aktivieren.
*   **Ein deaktiviertes Fieldset ist per Tastatur vollständig unerreichbar.** Nutzende tabben daran vorbei, ohne zu erfahren, dass es die Gruppe gibt oder warum sie gesperrt ist. Der Grund gehört deshalb als sichtbarer Text in die Gruppe und nicht als Tooltip an ein Element, das keinen Fokus mehr bekommen kann.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Fieldset |
| 2 | Dominance | – (unterliegt der Typescale) |
| 3 | Type | – |
| 4 | Style | – |
| 5 | State | Enabled, Disabled |

{% endreiter %}
