---
layout: inhaltsseite.njk
titel: Radio Button
bereich: komponenten
aktuell: radio-button
gruppe: content
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Sowohl die Checkbox als auch der Radio Button und der Switch gehören zu den interaktiven Steuerelementen im UI Design.

Interaktive Steuerelemente im Bereich des UI-Designs fungieren als Vermittler zwischen den Benutzenden und der digitalen Umgebung. Sie bieten eine Benutzeroberfläche an, die es ermöglicht, mit dem System zu interagieren, indem sie Steuerelemente integrieren, die Aktionen ausführen, Einstellungen anpassen und den Zugriff auf Informationen ermöglichen. Diese Integration erleichtert die Bedienung des Systems und die effiziente Nutzung seiner Funktionen.

## Wann verwenden

**Radio Buttons** werden verwendet, wenn nur eine Option **aus einer Gruppe** einander ausschließenden Optionen auszuwählen ist. Im Gegensatz zu Checkboxen erlauben Radio Buttons dem Benutzenden nur die Auswahl **einer einzigen Option.** Wenn ein Radio Button ausgewählt wird, dann wird automatisch jeder zuvor ausgewählte Radio Button in derselben Gruppe abgewählt. Radio Buttons eignen sich besonders für Situationen, in denen eine einzelne Auswahl getroffen werden muss, wie z.B. die Angabe des Geschlechts oder die Auswahl einer Zahlungsmethode.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Radio-Button-Elements. Rechts neben dem Radio Button befindet sich ein variables Text-Label mit einem optionalen Info-Icon vom Typ „eIB“. Der Radio Button besteht aus einem roten äußeren Kreis („Border“) und einem rot gefüllten inneren Punkt („Indicator“) im aktivierten Zustand. Bei Fokus wird das Element durch einen „Focus Stroke“ hervorgehoben.", "Anatomie des Radio Button", "radio-button-01" %}

## Layout

{% abbildung "Grafik eines Radio-Button-Elements mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Rechts neben dem Radio Button befindet sich ein variables Text-Label mit einem optionalen Info-Icon vom Typ „eIB“. Der Radio Button besteht aus einem 20 × 20 px großen roten äußeren Kreis („Border“) und einem zentrierten, roten, gefüllten Kreis („Indicator“) mit 8 px Durchmesser im aktivierten Zustand. Bei Fokus wird das Element durch einen „Focus Stroke“ hervorgehoben.", "Maße des Radio Button", "radio-button-02" %}

Der **einzelne Radio Button ist ein „Cluster“** aus Knopf und Label mit `--ibk-spacing-8`, die **Gruppe ein „Stack“** mit demselben Wert. Der „Supporting text“ folgt als „Cluster“ mit `--ibk-spacing-8`.

## Tastaturbedienung

Radio Buttons werden nicht einzeln angesprungen, sondern als Gruppe: Die ganze Gruppe ist genau eine Station in der Tab-Reihenfolge.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | In die Gruppe hinein und wieder heraus — nicht von Option zu Option |
| Pfeiltasten (alle vier) | Wechselt innerhalb der Gruppe und wählt die Option unmittelbar aus |
| Leertaste | Wählt die fokussierte Option, wenn in der Gruppe noch keine gewählt ist |

Das ist der Grund für unsere Vorgabe, Radio Buttons immer vertikal zu listen: Die Pfeilrichtung und die Leserichtung müssen zusammenfallen, sonst läuft die Tastaturbedienung gegen die visuelle Ordnung.

## Barrierefreiheit

*   Die Gruppe muss programmatisch als Gruppe erkennbar sein (z.B. über ein [Fieldset](fieldset.html) mit Legende. Ohne das erfährt niemand „Option 2 von 5“, sondern hört fünf zusammenhanglose Optionen (WCAG 1.3.1 „Info and Relationships“).
*   Jedes Label muss programmatisch mit seinem Radio Button verknüpft sein (`<label for>`), nicht nur rechts daneben stehen.
*   Der „Focus stroke“ muss sichtbar bleiben, auch auf der bereits gewählten Option.
*   Bei deaktiviertem Zustand muss auch das zugehörige Label deaktiviert sein. Ein deaktivierter Radio Button fällt aus der Tab-Reihenfolge heraus — dann ist das Label der einzige verbleibende Hinweis.
*   Ist das optionale Info-Icon („eIB“) am Label interaktiv, wird es zu einer eigenen Station in der Tab-Reihenfolge. Das ist zulässig, muss aber gewollt sein.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Radio Button |
| 2 | Dominance | Regular |
| 3 | Type | Unselected, Selected |
| 4 | Style | Leading Label, Trailing Label, Unlaebelled |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus, Alert |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

Kurz und knapp:
*   Wenn es **wenige Auswahlmöglichkeiten** gibt
*   Wenn **nur eine Option gleichzeitig** ausgewählt werden kann
*   Anfangsbuchstabe des Labels muss immer großgeschrieben werden
*   Radio Buttons sollten immer vertikal gelistet werden

{% abbildung "Korrekte Ausrichtung der Radio Buttons zueinander", "Korrekte Ausrichtung der Radio Buttons zueinander", "radio-button-03" %}

{% abbildung "Mehrere ausgewählte Radio Button und unterschiedliche Label Position", "Mehrere ausgewählte Radio Button und unterschiedliche Label Position", "radio-button-04" %}

{% endreiter %}
