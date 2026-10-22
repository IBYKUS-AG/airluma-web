---
layout: inhaltsseite.njk
titel: Pagination
bereich: komponenten
aktuell: pagination
gruppe: navigation
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Pagination (auch Seitennavigation, Seitenumbruch-Navigation, Blätterfunktion / -steuerung, Page Navigation oder Paging) ist ein zentrales UI- oder Bedienkonzept auf Webseiten und digitalen Produkten. Es dient dazu, **sehr große Mengen an Inhalten oder Daten in kleinere, handhabbare Einheiten** aufzuteilen. Dadurch verbessern sich Ladezeiten, die Übersichtlichkeit steigt und die kognitive Belastung (_cognitive load_) der Nutzenden sinkt. Gleichzeitig erhöht sich jedoch die _interaction cost, _ da aktiv geklickt werden muss, um weitere Inhalte zu laden. Daher sollte stets geprüft werden, ob sich Inhalte nicht besser über alternative Bedienkonzepte wie „Infinite Scrolling“ oder einen „Load-More-Button“ darstellen lassen.

Bei der Pagination werden Inhalte in „Seiten“ segmentiert, typischerweise mit einer festen Anzahl von Elementen pro Seite (z.B. 10, 20 oder 50). Die Navigation erfolgt unterstützend über Vorwärts-/Zurück-Buttons, der Seitennummerierung selbst oder über „erste/letzte Seite“-Links. So bleibt für Nutzende jederzeit erkennbar, an welcher Position im Gesamtdatenbestand man sich gerade befindet (z.B. „Seite 22 von 999“).

Als Bedienkonzept besteht die Pagination aus ähnlichen Bausteinen wie ein [Menü](navigation-menu-item.html) und folgt dem Navigationsmuster: Sie steht in einem benannten `<nav>`\-Bereich, ihre Einträge bilden eine Liste und die aktuelle Seite trägt `aria-current="page"`. Was sie jedoch vom Navigationsmuster unterscheidet, ist die Tiefe. **Eine Pagination ist flach!** Es klappt nichts auf, deshalb kommt hier weder das Disclosure Pattern noch eine Pfeiltastensteuerung zum Tragen.

## Abgrenzung

> Pagination und Buttons unterscheiden sich konzeptionell! Bei normalen Buttons signalisiert der Hover eine mögliche Aktion, bei der Pagination hingegen kennzeichnet der fehlende Hover-State des Buttons bewusst die gewählte und aktuell sichtbare Seite.

Unsere Pagination basiert technisch auf Buttons, unterscheidet sich jedoch bewusst von unseren bekannten [Buttons](button.html). Stattdessen wurde ein speziell angepasstes Element entwickelt, das einem klaren Konzept folgt:
*   Seitenzahlen werden abhängig von der verfügbaren Gesamtanzahl angezeigt.
*   Die **aktuelle Seite** ist visuell **hervorgehoben**, ist aber **nicht interaktiv** (ohne Hover-State).
*   **Weitere Seiten** sind **interaktiv und auswählbar,** treten jedoch optisch weniger in den Vordergrund.
*   Links- und Rechtspfeile ermöglichen eine **schrittweise Navigation** zwischen den Seiten.

## Varianten

Es stehen wie gewohnt **zwei Dominanzen** zur Verfügung: „**Regular“** für den Normalfall und eine visuell stärker betonte **„Prominent“**\-Version für besonders wichtige Kontexte.

### Designvorschlag

Für Designende stehen in Figma zwei Varianten (Type) zur Verfügung:

1.  **Maximum:** Pagination mit direktem Sprung zur ersten und letzten Seite und mit optionalem „Input Field“ zum direkten Seitenabsprung und einem optionalem „Select“ für die gezielte Steuerung der Segmentierung.
2.  **Minimum:** Variante reduziert auf die beiden äußeren Navigationspfeile sowie nur drei Seitenzahlen und ohne ersten und letzte Seite, insbesondere für kompakte oder mobile Designs geeignet.

{% abbildung "Vergleichsgrafik zweier Pagination-Komponenten in maximaler und minimaler Ausführung. Die Maximal-Variante zeigt eine vollständige Navigation mit mehreren Seitenzahlen, Pfeilbuttons („<“, „>“) für vorherige und nächste Seite, sowie zusätzlichen UI-Elementen: ein Dropdown-Menü zur Seitenauswahl („Seite wählen“) und ein Input Field zur direkten Seiteneingabe. Die Minimal-Variante reduziert die Darstellung auf drei Seitenzahlen mit hervorgehobener aktueller Seite sowie die beiden äußeren Navigationsbuttons („<“ und „>“). Die Grafik illustriert die funktionalen Unterschiede und Skalierbarkeit der Pagination je nach Anwendungskontext.", "Pagination Max vs Min", "pagination-03" %}

> Die vorgestellten Layouts verstehen sich als Vorschläge und abweichende Lösungen sind jederzeit zulässig, sofern sie sich konsistent aus den Komponenten unseres IDES-Baukastens zusammensetzen.

## Grundsätze

### Blätterlogik

#### Minimale Variante

Die Logik ist bewusst einfach gehalten. Es gibt Pfeile zum Vor- und Zurückblättern sowie drei sichtbare Seitenzahlen: die vorherige, die aktuelle und die nächste Seite. Die aktuelle Seite steht möglichst in der Mitte und ist nicht klick- oder tippbar.

#### Maximale Variante

Die Paginierung sollte Nutzenden jederzeit, zeitnah und verständlich über den aktuellen Systemstatus informieren. Es muss klar erkennbar sein, was das System gerade tut, was abgeschlossen wurde und welche nächsten Schritte zu erwarten sind.

Zusätzlich zur minimalen Variante kann man in der maximalen Variante direkt zur ersten Seite (1) oder zur letzten Seite (z. B. 999) springen. In der Mitte wird, analog zur minimalen Variante, ein kleiner Bereich angezeigt, bestehend aus der aktuellen Seite sowie der vorherigen und der nächsten Seite. Damit nicht zu viele Seiten gleichzeitig dargestellt werden, erscheint ab Seite 4 ein Platzhalter zwischen der ersten Seite und diesem mittleren Bereich. Der Platzhalter ist rein visuell und nicht anklickbar.

Das folgende Video zeigt die Blätterlogik der maximalen Variante.

_Pagination Blätterlogik_

Das Video zeigt die Blätterlogik der maximalen Variante der Pagination mit allen aktiven und inaktiven Zuständen der jeweiligen Buttons an.

#### Die aktuelle Seite braucht ein programmatisches Gegenstück

Dass die aktuelle Seite hervorgehoben und nicht klickbar ist, macht sie für die Tastatur unsichtbar: Nutzende tabben von „3“ direkt auf „5“ und erfahren nirgends, dass sie auf Seite 4 stehen. Sichtbar trägt die Hervorhebung diese Information, programmatisch trägt sie bislang nichts.

Dafür gibt es eine eigene W3C-Empfehlung: [„ARIA26“](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA26) _(„Using_ `_aria-current_` _to identify the current item in a set“)_ beschreibt genau diesen Fall: ein Element, das nur visuell hervorgehoben ist. Sie gilt als ausreichend für WCAG 1.3.1 _(„Info and Relationships“, Stufe A)_ und 2.4.8 _(„Location“, Stufe AAA)_. Für Seitenzahlen ist `aria-current="page"` der richtige Wert. Er darf innerhalb einer Pagination aber nur einmal vorkommen.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik einer Pagination-Komponente mit typischer UI-Struktur. Dargestellt ist eine horizontale Navigationsleiste zur Seitenwahl mit folgenden Elementen von links nach rechts: „Previous Button“ (Zurück), die „First Page“, mehrere durchnummerierte, aktive Seitenlinks, ein hervorgehobenes, aber inaktives Feld für die „Selected Page“, die „Last Page“ sowie rechts der „Next Button“. Die „Previous“- und „Next“-Buttons bestehen aus den Pfeilsymbolen „<“ und „>“. Sie flankieren die Navigationselemente. Platzhaltertexte und beschreibende Labels markieren die semantische Funktion der einzelnen Bestandteile.", "Pagination Anatomie", "pagination-01" %}

## Layout

{% abbildung "Grafik einer Pagination-Komponente mit Maßlinien zur Veranschaulichung typografischer und räumlicher Parameter. Dargestellt ist eine horizontale Navigationsleiste zur Seitenwahl mit beschrifteten, 40 px hohen Navigationselementen – darunter „First Page“, durchnummerierte Seiten, „Last Page“ sowie Pfeilsymbole für „Zurück“ und „Weiter“. Maßlinien verdeutlichen horizontale Abstände von jeweils 8 px zwischen den Navigationselementen sowie innerhalb einzelner Buttons. Der Innenabstand der Seitenzahlen zum Rand beträgt jeweils 16 px.", "Pagination Measurements", "pagination-02" %}

**Die Pagination ist ein „Cluster“** mit `--ibk-spacing-4`, der umbrechen darf. Der enge Abstand ist beabsichtigt: Die Ziffern gehören als eine Leiste zusammen. Die Dots stehen als eigener „Cluster“ mit `--ibk-spacing-8`.

## Tastaturbedienung

Unsere Pagination basiert technisch auf Buttons und erbt damit deren Bedienung: Jeder Button ist eine eigene Station in der Tab-Reihenfolge, Enter und Leertaste lösen aus. Die Einzelheiten stehen beim [Button](button.html).

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Button zu Button |
| Enter / Leertaste | Löst den fokussierten Button aus |

**Die Pfeiltasten haben keine Wirkung.** Anders als bei den [Tabs](tabs.html) ist die Pagination keine zusammenhängende Gruppe mit einer gemeinsamen Station, sondern eine Reihe einzelner Buttons. Das ist beabsichtigt: Wer mit Pfeiltasten durch die Seitenzahlen liefe, würde bei jedem Schritt eine neue Seite laden.

Zwei Elemente liegen nicht in der Tab-Reihenfolge: die **„aktuelle Seite“**, weil sie nicht interaktiv ist, und der **„Platzhalter“** zwischen erster Seite und Mittelbereich, der rein visuell ist. In der maximalen Variante kommen dagegen das „Input Field“ und das „Select“ als weitere Stationen hinzu — jeweils mit ihrer eigenen Bedienung, siehe Input Fields und Select.

## Barrierefreiheit

### Die Pagination gehört in einen benannten `<nav>`\-Bereich, etwa `aria-label="Seitennavigation"`.

Das unterscheidet sie von der Hauptnavigation und erlaubt es, sie zu überspringen. In der „maximalen Variante“ in Figma liegen bis zu neun Stationen zwischen Nutzenden und dem nächsten Inhalt.

### Die aktuelle Seite bekommt `aria-current="page"`.

Ohne diese Auszeichnung geht die Positionsangabe für Screenreader verloren _(WCAG 1.3.1 „Info and Relationships“, Stufe A; Technik_ [_ARIA26_](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA26)_)._

### „<“ und „>“ sind Textzeichen, keine Beschriftung.

Vorgelesen werden sie als „kleiner als“ und „größer als“ oder gar nicht. Beide Buttons brauchen einen echten Namen, z.B. „Vorherige Seite“ und „Nächste Seite“, ebenso „First Page“ und „Last Page“ _(WCAG 4.1.2 „Name, Role, Value“, Stufe A)._

### Auch die Seitenzahlen sagen allein zu wenig.

Eine „7“ ohne Kontext ist keine Beschriftung. Innerhalb des benannten \`<nav>\`-Bereichs ist der Kontext gegeben; sonst gehört er in den Namen: „Seite 7“.

### Deaktivierte Pfeile besser mit `aria-disabled`.

Auf der ersten Seite ist „Zurück“ wirkungslos. Das HTML-Attribut \`disabled\` nimmt den Button aus der Tab-Reihenfolge und aus der Ansage — Nutzende erfahren nicht, dass es ihn gibt. Mit \`aria-disabled="true"\` bleibt er auffindbar und ansagbar. Das ist dieselbe Abwägung wie beim [Button](button.html).

### Der Platzhalter ist Dekoration.

Er ist nicht anklickbar, gehört nicht in die Tab-Reihenfolge und braucht somit `aria-hidden="true"`, damit die Auslassungspunkte nicht vorgelesen werden.

### Der Seitenwechsel muss angesagt werden.

Der Abschnitt „Blätterlogik“ fordert bereits, dass die Pagination „jederzeit, zeitnah und verständlich über den aktuellen Systemstatus“ informiert. Für Screenreader heißt das konkret: Entweder wandert der Fokus nach dem Wechsel an den Anfang der Ergebnisliste, oder eine Statusmeldung nennt den neuen Stand („Seite 5 von 999, 20 Ergebnisse“). Ohne beides bleibt der Fokus auf dem Button stehen und der Wechsel unbemerkt _(WCAG 4.1.3 „Status Messages“, Stufe AA)._

### Der Sprung in der maximalen Variante erst auf Bestätigung.

Weder das „Input Field“ noch das „Select“ dürfen bei jeder Eingabe oder jedem Pfeiltastendruck laden. Erst Enter oder ein eigener Button löst den Sprung aus _(WCAG 3.2.2 „On Input“, Stufe A)_ — dieselbe Regel wie beim Select.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Pagination |
| 2 | Dominance | Regular, Prominent |
| 3 | Type | Inactive, Active, Icon |
| 4 | Style | Start, Middle, End (um Zustände zu simulieren) |
| 5 | State | disabled, enabled, hover, pressed, focus |
|  | Nested instances | eIB |

{% endreiter %}
