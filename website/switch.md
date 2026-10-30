---
layout: inhaltsseite.njk
titel: Switch
bereich: komponenten
aktuell: switch
gruppe: content
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Sowohl die Checkbox als auch der Radio Button und der Switch gehören zu den interaktiven Steuerelementen im UI Design.

Interaktive Steuerelemente im Bereich des UI-Designs fungieren als Vermittler zwischen den Benutzenden und der digitalen Umgebung. Sie bieten eine Benutzeroberfläche an, die es ermöglicht, mit dem System zu interagieren, indem sie Steuerelemente integrieren, die Aktionen ausführen, Einstellungen anpassen und den Zugriff auf Informationen ermöglichen. Diese Integration erleichtert die Bedienung des Systems und die effiziente Nutzung seiner Funktionen.

## Wann verwenden

**Switch** oder Switches werden verwendet, wenn eine bestimmte Funktion oder Einstellung ein- oder ausgeschalten werden muss. Sie werden in Situationen eingesetzt, in denen **eine binäre Entscheidung** getroffen werden muss, wie das Aktivieren oder Deaktivieren einer Funktion oder das Umschalten zwischen zwei Zuständen. Switches zeigen in der Regel zwei Zustände an, mit einer visuellen Anzeige des aktuellen Zustands, wie:
*   ein / aus,
*   aktiviert / deaktiviert oder
*   ja / nein.

Beispiele für Switches sind das Ein- oder Ausschalten von WLAN auf einem Mobiltelefon oder das Wechseln zwischen dem Dark- und Light-Mode in einer App.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Switch-Buttons. Rechts neben dem Schalter befindet sich ein variables Text-Label mit einem optionalen Info-Icon vom Typ „eIB“. Der Switch besteht aus einem ovalen, roten Rahmen („Border“) mit farbiger Hintergrundfläche („Background“) und einem runden, weißen Schiebeelement („Thumb“), das den aktiven Zustand symbolisiert. Bei Fokus wird der Switch durch einen „Focus Stroke“ hervorgehoben. Die Ecken des Schalters weisen einen ausgeprägten Border Radius auf.", "Anatomie des Switch", "switch-01" %}

## Layout

{% abbildung "Grafik eines Switch-Buttons mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Rechts neben dem Schalter befindet sich ein variables Text-Label mit einem optionalen Info-Icon vom Typ „eIB“. Der Switch besteht aus einem 40 px breiten und 20 px hohen, ovalen roten Rahmen („Border“) mit farbiger Hintergrundfläche („Background“) und einem 12 px großen, runden, weißen Schiebeelement („Thumb“), das den aktiven Zustand symbolisiert. Bei Fokus wird der Switch durch einen „Focus Stroke“ hervorgehoben. Die Ecken des Schalters besitzen einen starken Border Radius.", "Maße des Switch", "switch-02" %}

**Der Switch ist ein „Cluster“** aus Schalter und Label mit `--ibk-spacing-8`, darunter als „Stack“ der „Supporting text“ mit demselben Wert. Der Knopf des Schalters ist verankert und nicht Teil des Clusters. Er liegt über dem Rail / der Bahn, statt neben ihr zu stehen.

## Motion

{% abbildung "Zwei nebeneinander dargestellte Switch-Zustände (Schalterkästen): links der Zustand A mit einem grauen „unselected“ (ausgeschaltet) und rechts der Zustand B mit einem roten „selected“ (eingeschaltet) Aussehen.", "Switch Zustände", "switch-05" %}

Zusätzlich zu den Nutzerzuständen wie „Hover“ oder „Pressed“ verwendet der Switch beim Wechsel seines Zustands unsere Mikroanimation „transition‑default“.

## Tastaturbedienung

Der Switch ist eine einzelne Station in der Tab-Reihenfolge und braucht nur eine Taste.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Zum Switch und weiter |
| Leertaste | Schaltet um |

Enter schaltet nicht mit. Da ein Switch keine Bestätigung durch einen Button braucht, wirkt die Umschaltung sofort. Diese Aktion darf dabei aber weder den Fokus verschieben noch die Ansicht neu laden, sonst verlieren Nutzende mit der Tastatur ihre Position (WCAG 3.2.2 „On Input“). Braucht die Aktion eine Bestätigung, ist der Switch das falsche Element.

Der Zustand darf nicht allein aus der Position des „Thumb“ hervorgehen. Er muss zusätzlich programmatisch als ein/aus ausgezeichnet sein, damit ihn Screenreader ansagen, und die Unterscheidung von „Thumb“ und Fläche braucht nach WCAG 1.4.11 („Non-text Contrast“) ein Kontrastverhältnis von 3:1 — das gilt für Hintergrund und Rahmen gleichermaßen.

## Barrierefreiheit

*   Das Label muss programmatisch mit dem Switch verknüpft sein (`<label for>`), nicht nur rechts daneben stehen.
*   Das Label benennt die Sache, nicht den Zustand: „Benachrichtigungen“, nicht „Benachrichtigungen aus“. Sonst widersprechen sich Beschriftung und Ansage, sobald umgeschaltet wird.
*   Der „Focus stroke“ muss in beiden Zuständen sichtbar bleiben.
*   Bei deaktiviertem Zustand muss auch das zugehörige Label deaktiviert sein. Ein deaktivierter Switch fällt aus der Tab-Reihenfolge heraus.
*   Ist das optionale Info-Icon („eIB“) am Label interaktiv, wird es zu einer eigenen Station in der Tab-Reihenfolge.

## Einschränkungen

> Aktuell sollen Checkbox, Switch und Radio Button nur mit "trailing label" benutzt werden.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Switch |
| 2 | Dominance | Regular |
| 3 | Type | Unselected, Selected |
| 4 | Style | Leading Label, Trailing Label, Unlabelled |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus, Alert |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

*   Wenn ein Switch aktiviert oder deaktiviert wird, erfolgt eine unmittelbare Aktion, die oft auch sofort auf dem Bildschirm sichtbar wird (z.B. Dark-/Light-Mode)
*   Switches brauchen keine extra Bestätigung durch beispielsweise einen Button
*   Der Anfangsbuchstabe des Switch Label muss großgeschrieben werden

{% abbildung "Korrekte Ausrichtung der Switches zueinander", "Korrekte Ausrichtung der Switches zueinander", "switch-03" %}

{% abbildung "Button überflüssig und unterschiedliche Label Positionen", "Button überflüssig und unterschiedliche Label Positionen", "switch-04" %}

{% endreiter %}
