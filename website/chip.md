---
layout: inhaltsseite.njk
titel: Chip
bereich: komponenten
aktuell: chip
gruppe: content
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Ein „Chip“ (auch bekannt als „Tag“, „Pill“, „Flag“ oder vereinzelt auch „Label“) ist ein kompaktes, **teilweise interaktives UI-Element,** das zur Darstellung von Kategorien, Filteroptionen, Attributen oder kurz gefassten Informationen dient. Im Gegensatz zu Badges bieten Chips erweiterte Interaktionsmöglichkeiten, da sie anklickbar sein können und Funktionen wie Auswahl, Löschung oder Filterung ermöglichen.

## Abgrenzung

In der Welt der Benutzeroberflächen gibt es eine Vielzahl an UI-Elementen, die uns täglich dabei unterstützen, Informationen aufzunehmen und Aktionen auszuführen. Vielleicht sind dir Begriffe wie „Badge“, „Chip“ oder „Button“ schon einmal begegnet, aber was genau verbirgt sich dahinter? Jedes dieser Elemente hat seinen eigenen Zweck und hilft uns, digitale Anwendungen intuitiv und effizient zu bedienen.

|  | Badge | Chip | Button |
| --- | --- | --- | --- |
| Zweck | Benachrichtigung, Status oder Zählung anzeigen | Auswahlmöglichkeiten, Information, Kategorien, Tags oder Filter | Aktion oder Funktionen auslösen |
| Interaktivität | **Nicht** interaktiv | **Teilweise** Interaktiv | **Meist** interaktiv (außer bei disabled Buttons) |
| Design | Kreis oder kleines stark abgerundetes Rechteck, oft mit Zahlen | Kompakt, stark abgerundetes Rechteck, kann Schlagworte und je nach Typ ein Icon enthalten | Auffälliger, größere Fläche, klare Kanten, häufig mit Text und evtl. Icon |
| Beispiele | Ob (mittels Badge-Decent und -Regular) oder Anzahl (mittels Badge) ungelesener Nachrichten | Kategorienauswahl oder Tags für z.B. „Sport“, „Musik“ | „Speichern“ oder „Absenden“ |

## Varianten

### Dominanzen

Chips stehen, ähnlich wie bei unseren Buttons, in zwei Dominanzen zur Verfügung: **„Regular“** und **„Dezent“.** Der normale Stil erscheint mit einer farbigen Hintergrundfüllung, während der dezente Stil lediglich mit einer farbigen Umrandung und farbigen Text dargestellt wird, um je nach Kontext eine unterschiedliche visuelle Wirkung zu erzielen.

{% abbildung "Vergleichende Grafik mehrerer Chip-Komponenten in unterschiedlichen Dominanzen und Typen. Dargestellt sind Varianten in den Dominanzen „Regular“ und „Decent“, jeweils im passiven und aktiven Aussehen. Im passiven Zustand ist der Chip ausschließlich mit dem Text „Schlagwort“ beschriftet. Im aktiven Zustand enthält der Chip zusätzlich ein rechtsbündig positioniertes Schließen-Icon (×). Die Darstellung veranschaulicht visuelle Unterschiede zwischen Designvarianten und Interaktionszuständen, einschließlich Fokus-Stroke.", "", "chip-02" %}

Chips behalten unabhängig davon, ob sie ein Icon (aktiv) oder kein Icon (passiv) haben, stets die gleiche Größe. Dadurch bleibt ihr Erscheinungsbild einheitlich. Wenn Chips interaktiv sind, könnten sie durch `tabindex` fokussierbar gemacht werden, um eine barrierefreie Navigation per Tastatur zu unterstützen. Mehr dazu unter Tastaturbedienbarkeit. Im fokussierten Zustand erhalten die Chips, ähnlich zu allen interaktiven Elementen, einen blauen Rahmen (Focus stroke).

### Funktionsfarben

{% abbildung "Vergleichende Grafik mehrerer Chip-Komponenten mit unterschiedlichen Funktionsfarben in der Dominanz „Regular“ und „Decent“. Dargestellt sind Chips in den Kategorien „Regular“, „Info“, „Success“, „Warning“ und „Alert“, jeweils im passiven und aktiven Aussehen. Im passiven Zustand ist der Chip nur mit dem jeweiligen Funktionslabel beschriftet. Im aktiven Zustand enthält der Chip zusätzlich ein rechtsbündig positioniertes Schließen-Icon (×).", "Die Chips in den Funktionsfarben", "chip-03" %}

Unsere Chips nutzen natürlich die gleichen [Funktionsfarben](farben.html#funktionsfarben) wie die Badges, um den Nutzern intuitiv die Art der Information zu vermitteln. Jede Farbe steht für eine spezifische Bedeutung. Diese klare Farbgebung ermöglicht es, wichtige Informationen auf einen Blick zu erfassen und die Funktionen der Chips konsistent zu den Buttons oder Badges zu gestalten.

{% endreiter %}

{% reiter "spezifikation" %}

## Layout

{% abbildung "Vergleichende Grafik zweier Chip-Komponenten im passiven und aktiven Aussehen mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Beide Chips tragen das variable Text-Label „Schlagwort“. Im aktiven Aussehen ist rechts ein Schließen-Icon (×) aus dem Iconset enthalten; im passiven Aussehen fehlt dieses Icon. Das Schließen-Icon misst 20 × 20 px und ist rechtsbündig innerhalb des Chips positioniert. Die gesamte Höhe beträgt 20 px, die Breite variiert je nach Textlänge. Der Chip verfügt über einen horizontalen Innenabstand von jeweils 8 px und einen vertikalen von 3 px.", "Passiver und aktiver Chip im Vergleich", "chip-01" %}

**Der Chip ist ein „Cluster“** mit `--ibk-spacing-4` zwischen Beschriftung und optionalem Icon.

## Tastaturbedienung

„Teilweise interaktiv“ ist die Kernaussage der Vergleichstabelle ganz oben — und für die Tastatur die unbequemste Eigenschaft, die eine Komponente haben kann. Bevor über Tasten geredet werden kann, muss feststehen, welcher von drei Fällen vorliegt:

| Fall | Was der Chip ist | Stationen in der Tab-Reihenfolge |
| --- | --- | --- |
| **Nur Anzeige** (Type „Passive“) | Ein Textetikett, das eine Kategorie benennt | — |
| **Auswählbar** (Filter, Plus-Icon) | Ein Umschalter: an oder aus | Eine Station: der Chip (Regelfall) |
| **Entfernbar** (Close-Icon) | Ein Eintrag mit Löschfunktion | Eine Station: das Schließen-Icon |

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Chip zu Chip (bzw. von Schließen- zu Schließen-Icon) |
| Enter / Leertaste | Wählt den Chip aus oder ab, beziehungsweise entfernt ihn |

Ein reiner Anzeige-Chip bekommt keinen Fokus, und das ist kein Mangel: Er ist Text, und Text liest man, ohne ihn anzusteuern. Wer ihn trotzdem fokussierbar macht, verlängert die Tab-Reihenfolge ohne Gegenwert. Bei zwanzig Tags auf einer Seite sind das zwanzig leere Stationen.

Wichtig: Einen Chip nur durch `tabindex` fokussierbar zu machen, greift meist zu kurz. Ein `tabindex="0"` an einem `<span>` erzeugt zwar einen Fokus, aber keine Rolle und keine Tastenreaktion. Screenreader sagen nur den Text an, Enter und Leertaste hingegen reagieren nicht. Die erste Regel des W3C zum ARIA-Einsatz gilt auch hier:

> Wenn ein natives HTML-Element die gewünschte Bedeutung und das gewünschte Verhalten schon mitbringt, nimm dieses Element.

Für den auswählbaren Chip bedeutet das ein `<button>` mit `aria-pressed` oder für den entfernbaren ein `<button>` um das Schließen-Icon.

### Der entfernbare Chip hat genau nur eine Station

Beim Type „Active“ liegt es nahe, den Chip **und** sein Schließen-Icon fokussierbar zu machen. Das ist nicht nur doppelt, sondern ungültiges HTML! Das Inhaltsmodell des `<button>`\-Elements verlangt ausdrücklich „no interactive content descendant and no descendant with the \`tabindex\` attribute specified“.

Ein **anklickbarer Chip mit** einem **anklickbaren ×** darin ist danach **nicht zulässig.**

Zwei saubere Auflösungen:
1.  Der **Chip ist Anzeige,** nur das **× ist ein Button.** Der Regelfall bei Filterlisten und Empfängerfeldern.
2.  Der **Chip ist der Button,** das **× ist Dekoration** (`aria-hidden="true"`) und wird mit ihm gemeinsam ausgelöst. Dann muss der Name das mitteilen: „Sport entfernen“.

## Barrierefreiheit

### Ein interaktiver Chip braucht Rolle, Name und Zustand.

Ohne Rolle bleibt er für Screenreader ein Stück Text (WCAG 4.1.2 „Name, Role, Value“, Stufe A). Beim auswählbaren Chip trägt `aria-pressed` den Zustand; bildet eine Chip-Reihe einen Mehrfachfilter innerhalb eines Formulars, sind Checkbox-Semantiken die bessere Wahl, weil Nutzende die Gruppe dann als Gruppe angesagt bekommen.

### Das Schließen-Icon braucht einen eigenen, unterscheidbaren Namen.

„×“ ist ein Zeichen aus [unserem Iconset](icons.html),  kein zugänglicher Name. „Entfernen“ allein reicht nicht: Bei zehn Chips hört man zehnmal dasselbe und weiß nie, welchen man gerade löscht. Der Name muss somit eine Kombination aus dem „Schlagwort“ des Chips und der Absicht enthalten, z.B. „Sport entfernen“.

### Beim Entfernen muss der Fokus weitergereicht werden.

Wer per Tastatur ein × auslöst, steht auf einem Element, das im selben Moment verschwindet. Ohne Zutun fällt der Fokus zurück auf `<body>`, und der nächste Tab-Druck beginnt am Seitenanfang (WCAG 2.4.3 „Focus Order“, Stufe A). Der Fokus gehört auf den nächsten Chip, beim letzten auf das zugehörige Input Field oder die Liste. Dass der Chip weg ist, sollte zusätzlich angesagt werden (WCAG 4.1.3 „Status Messages“, Stufe AA) — sichtbar ist es sofort, hörbar sonst nicht.

### Die fünf Funktionsfarben unterscheiden sich allein durch Farbe.

„Standard“, „Info“, „Success“, „Warning“ und „Alert“ tragen kein eigenes Icon und kein Textpräfix — erlaubt sind derzeit nur „×“ und „Plus“. Damit trägt die Farbe die Bedeutung allein, **ein Verstoß** gegen WCAG 1.4.1 („Use of Color“, Stufe A).

Die Bedeutung gehört in den Text des Chips.

### Die Umrandung der Dominanz „Decent“ ist ein Erkennungsmerkmal.

Ohne Füllung trägt allein der Rahmen die Abgrenzung des Chips. Er braucht deshalb ein Kontrastverhältnis von mindestens 3:1 gegen den Hintergrund (WCAG 1.4.11 „Non-text Contrast“, Stufe AA). Für die Textfarbe gelten weiterhin unsere [Funktionsfarben](farben.html#funktionsfarben) und die [Leuchtwertdifferenz](farben.html#leuchtwertdifferenz).

### Der „Focus stroke“ ist keine Option.

Die Beschreibung oben nennt ihn im Zusammenhang mit `tabindex`. Sobald ein Chip fokussierbar ist, ist der sichtbare Fokus verbindlich (WCAG 2.4.7 „Focus Visible“, Stufe AA) — auch beim schmalen Chip, wo der Platz knapp ist.

### Die Trefferfläche liegt unter dem Minimum.

Der Chip ist 20 px hoch, das Schließen-Icon misst 20 × 20 px. WCAG 2.5.8 („Target Size (Minimum)“, Stufe AA) fordert 24 × 24 CSS-Pixel. Die Ausnahme greift nur, wenn sich um jedes Ziel ein 24-px-Kreis legen lässt, ohne ein anderes zu schneiden — bei einer Reihe eng gesetzter Chips ist das der kritische Fall.

## Einschränkungen

> Aktuell ist die Verwendung von Chips auf solche mit einem Close- („Cls“) oder Plus-Icon („Plus“) beschränkt! Andere Icons sollten vorerst vermieden werden, können aber bei Bedarf ergänzt werden.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Chip |
| 2 | Dominance | Regular, Decent |
| 3 | Type | Active, Passive |
| 4 | Style | Standard, Info, Success, Warning, Alert |
| 5 | State | Enabled, Hover, Pressed, Focus |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

> Chips dürfen nicht als Mini-Buttons verwendet werden – ihre Hauptaufgabe liegt in der Kennzeichnung oder Filterung von Inhalten.

{% endreiter %}
