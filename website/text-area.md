---
layout: inhaltsseite.njk
titel: Text Area
bereich: komponenten
aktuell: text-area
gruppe: content
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Text Area ist eine Variante von Input Fields, die es den Benutzenden ermöglicht, mehrzeiligen Text einzugeben und zu bearbeiten. Es bietet einen größeren Eingabebereich, der sich für längere Nachrichten, Kommentare oder benutzergenerierte Inhalte eignet. Text Areas unterstützen die gleichen Zustände und Funktionen wie die Input Fields, mit Ausnahme der Passwortfunktion. Sie können einen Zeichenzähler enthalten.

## Varianten

Text Areas gibt es in zwei Typen:

*   Fix: die Höhe ist fest und entspricht drei Textzeilen; es kann von den Nutzenden nicht manuell geändert werden.

{% abbildung "Text Area (Typ: Fix) ohne Zeichenzähler, aber mit Supporting Text", "Text Area (Typ: Fix) ohne Zeichenzähler, aber mit Supporting Text", "text-area-01" %}

{% abbildung "Text Area (Type: Fix) mit Zeichenzähler", "Text Area (Type: Fix) mit Zeichenzähler", "text-area-02" %}

*   Resize: die Mindesthöhe entspricht drei Textzeilen, aber die Nutzenden können die Höhe des Feldes mit dem Ziehpunkt unten rechts verändern.

{% abbildung "Eine Text Area vom Typ: Resize (mit einem Anfassmarker)", "Eine Text Area vom Typ: Resize (mit einem Anfassmarker)", "text-area-03" %}

{% abbildung "Eine Text Area vom Typ: Resize mit einem Zeichenzähler", "Eine Text Area vom Typ: Resize mit einem Zeichenzähler", "text-area-04" %}

{% endreiter %}

{% reiter "spezifikation" %}

## Tastaturbedienung

Beim Bewegen und Markieren verhält sich die „Text Area“ wie das einzeilige Feld. Bei zwei Tasten aber nicht, und beide Unterschiede überraschen regelmäßig.

| Taste | Wirkung |
| --- | --- |
| Enter | Erzeugt einen Zeilenumbruch und **sendet nicht** ab |
| Tab | Verlässt das Feld und **fügt kein Tabulatorzeichen** ein |
| Strg + Pos1 / Ende | An den Anfang beziehungsweise das Ende des gesamten Textes |

## Barrierefreiheit

*   Der **Ziehpunkt beim Typ „Resize“ ist nicht per Tastatur bedienbar.** Das ist vertretbar, weil er allein die Größe ändert: Der gesamte Text bleibt über die Pfeiltasten erreichbar, das Feld scrollt mit. Die Vergrößerung darf deshalb nie die einzige Möglichkeit sein, an einen Inhalt zu kommen.
*   **Der Zeichenzähler gehört ans Feld.** Über `aria-describedby` angebunden, wird die Begrenzung schon beim Betreten vorgelesen und nicht erst beim Anschlag. Die verbleibenden Zeichen erst kurz vor dem Limit über `aria-live="polite"` melden — bei jedem Tastendruck vorgelesen, wird der Zähler zum Störgeräusch.
*   Läuft der Text über die feste Höhe hinaus, muss der scrollbare Bereich per Tastatur erreichbar sein. Bei einer `<textarea>` erledigt das der Browser.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Text Area |
| 2 | Dominance | Regular |
| 3 | Type | Resize, Fix |
| 4 | Style | Placeholder, Active, Read-Only |
| 5 | State | Enabled, Disabled, Focus, Success, Alert, Warning |
|  | Sonstiges | Nested Instances |

> Hinweis zum Resize-Handle
>
> Der „Resize-Handle“ (auch „Resizer“ oder „Grip“-Icon) unten rechts wird automatisch vom jeweiligen Browser eingefügt. Ihr müsst ihn als Entwickler also nicht selbst nachbauen.
>
> Für einen realistischen, interaktiven Prototypen in Figma integrieren wir das Icon jedoch in die Komponente der Asset Library.

{% endreiter %}
