---
layout: inhaltsseite.njk
titel: Select
bereich: komponenten
aktuell: select
gruppe: navigation
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Das `<select>` -Element im HTML gehört zu den Standard-Elementen im Werkzeugkasten der Formulargestaltung. Sie sind flexibel einsetzbar und können viele Auswahloptionen auf kleinstem Raum unterbringen. Doch diese Vielseitigkeit birgt auch Herausforderungen in Bezug auf die Usability und Accessibility.

## Wann verwenden

### Vorteile

1.  **Platzsparend:** Select-Elemente sind ideal, wenn viele Optionen auf begrenztem Raum angeboten werden sollen. Sie können kompakt gestaltet werden und dennoch viele gleichartige Informationen gleichberechtigt auswählbar machen.
2.  **Standard:** Als gängiges UI-Element werden Dropdowns meist schon vom Betriebssystem her angeboten und bieten weitere Vorteile wie eingebaute Barrierefreiheit und vorhersehbares Interaktionsverhalten (z.B. Auswahlwalze bei iOS).
3.  **Vorhersehbar:** Durch vordefinierte Auswahlmöglichkeiten kannst du sicherstellen, dass die Benutzende nur gültige Eingaben treffen, was Tippfehler oder Missverständnisse reduziert.
4.  **Flexibel:** Fall noch unklar ist, wie viele Optionen es später geben wird, passt sich das Select-Element flexibel an die Anzahl der Optionen an, ohne dass du das Design jedes Mal ändern musst.

> Auf kleinen, mobilen Geräten sind Dropdowns oft schwieriger zu bedienen. Nutze auf solchen Systemen lieber die systemeigenen Elemente oder achte darauf, dass deine Dropdowns auf Touchscreens gut funktionieren und alle Optionen leicht auswählbar sind.

### Nachteile

1.  **Bedienbarkeit:** Trotz ihrer Einfachheit im Design können Select-Elemente die Eingabe für Benutzende erschweren. Die Interaktion mit diesem Element erfordert oft mehrere Bedienschritte, was besonders auf mobilen Geräten zu einem Problem werden kann.
2.  **Präsenz:** Select-Elemente können leicht übersehen werden, da sie aufgrund ihrer Kompaktheit oder einer voreingestellten Auswahl als weniger wichtig wahrgenommen werden. Ein Dropdown sollte weder den Eindruck erwecken, dass es bereits ausgefüllt ist, falls eine Auswahl notwendig ist, noch dass es leer ist.
3.  **Versteckte Optionen:** Der platzsparende Vorteil von Select-Elementen kann auch zum Nachteil werden, da die Auswahlmöglichkeiten standardmäßig verborgen sind. Benutzende müssen erst auf das Element klicken, um alle Optionen zu sehen, was die Interaktion mit der Seite oder dem Formular zusätzlich verlängert.
4.  **Geschwindigkeit:** Untersuchungen zeigen, dass Benutzende länger brauchen, um Dropdown-Formulare auszufüllen, im Vergleich zu Alternativen wie unsere Radio Buttons oder Checkboxen.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines geschlossenen Select-Elements. Oberhalb des Feldes befindet sich ein variabler Label-Text mit optionalem Info-Icon vom Typ „eIB“. Das Select-Feld zeigt eine Beispieloption mit einem nach unten zeigenden Pfeil-Icon (Indicator). Es ist von einem 2 px starken Rahmen mit 4 px Border Radius umgeben und wird bei Fokus durch einen „Focus Stroke“ hervorgehoben. Unterhalb befindet sich ein optionaler unterstützender Text in grauer Farbe: „Supporting text conveys additional information about the field.“, dem ein optionales Leading Icon („eIB“) vorangestellt ist.", "Die Anatomie eines geschlossenen Select-Elements", "select-01" %}

{% abbildung "Grafik eines geöffneten Select-Elements. Oberhalb des Feldes befindet sich ein variables Label mit dem Info-Icon (eIB) der geschlossenen Box. Im Dropdown-Bereich werden verschiedene Zustände und Elemente dargestellt: Option-Gruppen wie „OPTGROUP ONE“ und „OPTGROUP TWO“, eine „Active option“, eine deaktivierte „Disabled option“, eine markierte „Selected option“ sowie weitere aktive Optionen. Zwischen den Gruppen ist eine horizontale Linie („HR“) eingefügt. Die gesamte Dropdown-Liste ist von einem Rahmen („Border“) umgeben, besitzt eine Hintergrundfarbe („Background“), einen Schatteneffekt („Shadow“) und einen Border Radius von 4 px.", "Die Anatomie eines offenen Select-Elements", "select-02" %}

## Layout

**Das Select ist ein „Stack“:** Label, Feld und „Supporting text“ stehen mit `--ibk-spacing-6` untereinander. Innerhalb des „Supporting text“ gilt `--ibk-spacing-4`. Der Chevron und das Info-Icon sind verankert und liegen über dem Feld.

## Tastaturbedienung

Solange das Select auf dem nativen `<select>` aufsetzt, bekommt man die komplette Tastaturbedienung geschenkt und muss sie nicht selbst bauen.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Feld betreten und verlassen, die Auswahl bleibt bestehen |
| Pfeil auf / ab | Vorige bzw. nächste Option |
| Alt + Pfeil ab | Optionsliste öffnen |
| Pos1 / Ende | Erste bzw. letzte Option |
| Anfangsbuchstaben tippen | Springt zur ersten passenden Option (Type-ahead) |
| Enter | Auswahl übernehmen und Liste schließen |
| Esc | Liste schließen, ohne die Auswahl zu ändern |

Die genaue Wirkung im **geschlossenen** Feld hängt vom Betriebssystem ab: unter Windows wechseln die Pfeiltasten den Wert direkt, unter macOS öffnen sie zunächst die Liste. Das ist dieselbe Plattformabhängigkeit, die oben schon für Darstellung und Scrollbar gilt. Sie ist gewollt und darf nicht wegprogrammiert werden, weil Nutzende die Bedienung ihres Systems erwarten.

Absicherung gegen WCAG 3.2.2 („On Input“): Ein Select darf beim Ändern des Wertes nicht automatisch absenden oder die Ansicht wechseln. Denn die Pfeiltaste durchläuft jeden Zwischenwert — wer daran ein Neuladen hängt, macht das Feld per Tastatur unbedienbar. Die Auswahl wird immer erst durch einen Button bestätigt.

## Barrierefreiheit

*   Das Label muss programmatisch verknüpft sein (`<label for>`), nicht nur visuell über dem Feld stehen.
*   Den „Supporting text“ über `aria-describedby` anbinden, damit er mit dem Feld vorgelesen wird.
*   Deaktivierte Optionen überspringt die Tastaturnavigation. Ein weiterer Grund, „Group-Items“ (`<optgroup>`) nie als deaktivierte Optionen zu missbrauchen.
*   „Group-Items“ gliedern nur, sie sind nicht auswählbar; das „HR-Item“ ist rein visuell und braucht keine eigene Ansage.
*   Der „Focus stroke“ muss in jedem Zustand sichtbar bleiben, auch in „Focus+Alert“ (WCAG 2.4.7 „Focus Visible“).

## Einschränkungen

> Warnung: Der Safari-Browser unter iOS und macOS stellt das Select-Element nach eigenen Regeln dar, was zu abweichenden Darstellung führen wird, speziell Schriftarten, Abstände, Pfeil-Icons oder Scrollbars.

> Das Erscheinungsbild einer Scrollbar in einem Select-Element mit vielen Optionen wird vom Betriebssystem des Benutzers gesteuert. Daher kann das Styling dieser Scrollbar je nach verwendetem Betriebssystem und Browser variieren und es ist nicht immer möglich, das Aussehen vollständig vorherzusagen oder zu kontrollieren.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Select-Closed |
| 2 | Dominance | Regular |
| 3 | Type | – |
| 4 | Style | – |
| 5 | State | Enabled, Disabled, Hover, Focus, Success, Alert, Focus+Alert |

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Select-Items |
| 2 | Dominance | Regular |
| 3 | Type | Option-Item, Group-Item, HR-Item |
| 4 | Style | – |
| 5 | State | Enabled, Disabled, Hover, Focus, Selected, Selected+Hover |

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Select-Opened |
| 2 | Dominance | Regular |
| 3 | Type | – |
| 4 | Style | – |
| 5 | State | – |
|  | Sonstiges | Nested Instances (Select-Items) |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

### Do's

*   **Aussagekräftige Label:** Nutze generell für alle UI-Elemente sowohl ein aussagekräftiges Label als auch eine klare Beschreibung der Standardauswahl im Element selbst. Dies hilft besonders bei der Fehlervermeidung und für Benutzende mit Screenreadern.
*   **Sortierte Optionen:** Wenn möglich, sortiere die Einträge logisch, alphabetisch oder nach einem klaren Muster (z.B. Wochentage). Unvorhersehbare Sortierungen zwingen die Benutzenden, die Optionen gedanklich selbst zu ordnen.

{% abbildung "Kurz und prägnant", "Kurz und prägnant", "select-03" %}
    Die Optionen sollen kurz und klar formuliert sein.

{% abbildung "Optionen zu lang", "Optionen zu lang", "select-04" %}
    Lange Optionstexte in Select-Elementen können abgeschnitten werden.

{% abbildung "Beschreibende Option verwenden", "Beschreibende Option verwenden", "select-05" %}
    Eine sinnvolle Standardoption (vorausgewählt) führt besser ins Thema ein. Oft ist es die erste aktiv wählbare Option.

{% abbildung "Geeignete UI-Elemente", "Geeignete UI-Elemente", "select-06" %}

    Da die Optionen nicht visuell verborgen werden, eignen sich bei wenigen Einträgen andere UI-Elemente besser. Überlege, ob ein Dropdown wirklich die beste Wahl ist.

{% abbildung "Leere Felder vermeiden", "Leere Felder vermeiden", "select-07" %}
    Geschlossene Dropdown nicht unbeschriftet lassen, da dies die Barrierefreiheit beeinträchtigt.

{% abbildung "Zu wenige Optionen", "Zu wenige Optionen", "select-08" %}
    Bei wenigen Optionen bieten sich eventuell andere UI-Elemente besser an.

### Don'ts

*   **Zu viele Optionen:** Wenn möglich, vermeide Dropdowns, die eine zu große Anzahl an Optionen bereitstellen (z.B. alle Jahre von 1900 bis 2024). Alternative Eingabemethoden wie Radio Buttons oder Input Fields sind in solchen Fällen benutzerfreundlicher.
*   **Lange Ladezeiten**: Gerade mit vielen Optionen können lange Ladezeiten die Nutzungserfahrung negativ beeinflussen.
*   **Optgroup als Option:** Verwende nie die Optgroups als deaktivierte Optionen, da sie sich später nicht mehr auswählen lassen.

{% endreiter %}
