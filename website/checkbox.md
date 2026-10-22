---
layout: inhaltsseite.njk
titel: Checkbox
bereich: komponenten
aktuell: checkbox
gruppe: content
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Sowohl die Checkbox als auch der Radio Button und der Switch gehören zu den interaktiven Steuerelementen im UI Design.

Interaktive Steuerelemente im Bereich des UI-Designs fungieren als Vermittler zwischen den Benutzenden und der digitalen Umgebung. Sie bieten eine Benutzeroberfläche an, die es ermöglicht, mit dem System zu interagieren, indem sie Steuerelemente integrieren, die Aktionen ausführen, Einstellungen anpassen und den Zugriff auf Informationen ermöglichen. Diese Integration erleichtert die Bedienung des Systems und die effiziente Nutzung seiner Funktionen.

## Wann verwenden

**Checkboxes** sind ideal für Situationen, in denen **eine oder mehrere Optionen aus einer Liste verfügbarer Auswahlmöglichkeiten** ausgewählt werden können. Jede Checkbox repräsentiert eine einzelne Option und Benutzende können die Checkbox an- oder abwählen, um ihre Auswahl zu kennzeichnen.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik einer Checkbox-Komponente. Rechts neben der Checkbox befindet sich ein variables Text-Label mit einem optionalen Info-Icon vom Typ „eIB“. Die Checkbox besteht aus einem roten Rahmen („Border“), einer roten Hintergrundfläche („Background“) und einem weißen Häkchen-Symbol („Checkmark Icon“) im aktivierten Zustand. Bei Fokus wird sie durch einen „Focus Stroke“ hervorgehoben. Die Ecken der Checkbox haben einen Border Radius von 2 px (links oben und rechts unten).", "Anatomie der Checkbox", "checkbox-01" %}

## Zustände

Ein dritter undefinierter Zustand, meist mit einem horizontalen Strich, symbolisiert eine Mehrfachauswahl innerhalb eines Formulars, wenn dieses evtl. ausgeblendet ist, aber eine An- oder Abwahl aller Checkboxen des gesamten Formulars mittels einer Checkbox möglich ist.

## Layout

{% abbildung "Grafik einer Checkbox-Komponente mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Rechts neben der Checkbox befindet sich ein variables Text-Label mit einem optionalen Info-Icon vom Typ „eIB“. Die Checkbox besteht aus einem 20 × 20 px großen roten Rahmen („Border“), einer 16 × 16 px großen roten Hintergrundfläche („Background“) und einem weißen Häkchen-Symbol („Checkmark Icon“) im aktivierten Zustand. Bei Fokus wird sie durch einen „Focus Stroke“ hervorgehoben. Die Ecken der Checkbox besitzen einen Border Radius von 2 px (links oben und rechts unten).", "Maße der Checkbox", "checkbox-02" %}

**Die einzelne Checkbox ist ein „Cluster“** aus Kästchen und Label mit `--ibk-spacing-8`. Mehrere Checkboxen stehen als „Stack“ untereinander, ebenfalls mit `--ibk-spacing-8` — gleicher Wert, weil es in beiden Fällen um zusammengehörige Teile derselben Gruppe geht.

## Tastaturbedienung

Anders als beim [Radio Button](radio-button.html) ist jede Checkbox eine eigene Station in der Tab-Reihenfolge, auch dann, wenn mehrere zusammen ein Formularfeld bilden.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Checkbox zu Checkbox |
| Leertaste | Schaltet die fokussierte Checkbox an bzw. ab |

Die **Pfeiltasten haben hier keine Wirkung**, und Enter schaltet nicht, sondern sendet in einem Formular ab. Wer aus Checkboxen eine Gruppe mit Pfeilbedienung macht, bricht die Erwartung der Nutzenden.

Den dritten, unbestimmten Zustand (Indeterminate) können Nutzende nicht selbst herstellen. Er ergibt sich aus dem Zustand der untergeordneten Checkboxen. Die Leertaste auf der übergeordneten Checkbox wählt daher immer alle an oder alle ab — dieser Sprung muss zusätzlich angesagt werden, weil er mehr verändert als das eine fokussierte Element.

## Barrierefreiheit

*   Jedes Label muss programmatisch mit seiner Checkbox verknüpft sein (`<label for>`) und nicht nur rechts daneben stehen.
*   Der unbestimmte Zustand muss programmatisch mitgeteilt werden. Der horizontale Strich ist nur die visuelle Hälfte davon (WCAG 4.1.2 **„Name, Role, Value“**).
*   Der „Focus stroke“ muss in allen drei Zuständen sichtbar bleiben.
*   Bei deaktiviertem Zustand müssen verschachtelte Instanzen ebenfalls deaktiviert sein — Label und Info-Icon eingeschlossen. Eine deaktivierte Checkbox fällt aus der Tab-Reihenfolge heraus.
*   Ist das optionale Info-Icon („eIB“) am Label interaktiv, wird es zu einer eigenen Station in der Tab-Reihenfolge.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Checkbox |
| 2 | Dominance | Regular |
| 3 | Type | Unselected, Selected, Indeterminate |
| 4 | Style | Leading Label, Trailing Label, Unlabelled |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus, Alert |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

Kurz und knapp:
*   Wenn **mehr als eine Auswahlmöglichkeit gleichzeitig** ausgewählt werden kann
*   Anfangsbuchstabe des Labels muss immer großgeschrieben werden
*   Auch Checkboxen sollten nach Möglichkeit vertikal gelistet werden

{% abbildung "Korrekte Ausrichtung der Checkboxen zueinander", "Korrekte Ausrichtung der Checkboxen zueinander", "checkbox-03" %}

{% abbildung "Unterschiedliche gemischte Label-Position vermeiden", "Unterschiedliche gemischte Label-Position vermeiden", "checkbox-04" %}

{% endreiter %}
