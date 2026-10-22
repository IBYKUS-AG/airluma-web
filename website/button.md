---
layout: inhaltsseite.njk
titel: Button
bereich: komponenten
aktuell: button
gruppe: navigation
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Ein Button (auf Deutsch auch „Schaltfläche“) ist ein Designelement, mit dem Nutzende **eine Aktion ausführen** können. Buttons spielen bei digitalen Produkten eine wichtige Rolle, weil sie den Nutzern helfen, z.B. einen Kauf zu bestätigen, eine Datei hochzuladen oder ein Pop-up oder Modal zu schließen. Das Design eines Buttons (Primary, Secondary oder Regular vs. Decent) sollte seine Funktion (preferred action, secondary action, usw.) klar vermitteln, damit die Nutzenden verstehen, was passiert, wenn sie ihn anklicken bzw. aktivieren. Ein Button kann mit Text, einem Symbol oder beidem versehen sein. Außerdem können Text, Bilder oder andere Designelemente in der Nähe des Buttons einen Kontext liefern, der den Zweck des Buttons noch näher verdeutlicht.

## Abgrenzung

### Der Unterschied zwischen Text-Button und Text-Link

Die zwei interaktiven Elemente „Text-Button” und „Text-Link” könnten fast identisch aussehen, haben aber einen grundlegenden Unterschied. Ein Text-Button führt eine Aktion oder Funktion auf einer Seite aus – sie tun etwas. Text-Links hingegen führen die Nutzenden zu unterschiedlichen Bereichen des Nutzererlebnisses – sie bringen Nutzende woanders hin (weg von der Ausgangsseite).

## Varianten

### Arten

#### Gefüllte Button (solid filled)

Gefüllte Buttons haben eine definierte Farbfüllung mit einer relativ auffälligen Farbe. Wir haben dafür unseren „Regular Primary“-Button.

{% abbildung "Regular Primary", "Regular Primary", "button-01" %}

#### Abgetönte Button (tonal filled)

Abgetönte Buttons haben eine hellere Hintergrundfarbe und eine dunklere Textfarbe, wodurch sie optisch weniger auffällig sind, als ein normaler gefüllter Button. Wir nutzen dafür unseren „Regular Secondary“-Button.

{% abbildung "Regular Secondary", "Regular Secondary", "button-02" %}

#### Konturlinien Button (outlined oder line button)

Konturlinien-Buttons haben keine Füllung, sondern nur eine Konturlinie oder Rahmen. Wir nutzen dafür unseren „Decent Primary“-Button.

{% abbildung "Decent Primary", "Decent Primary", "button-03" %}

#### Ghost Button

Ghost-Buttons haben im regulären Zustand keine Füllung oder Konturen. Auch dafür haben wir unsere „Decent Secondary“-Button.

{% abbildung "Decent Secondary", "Decent Secondary", "button-04" %}

#### Text Button

Text-Buttons sind optisch weniger auffällig und sollten daher für Aktionen mit wenig Nachdruck verwendet werden, z.B. für eine alternative, sekundäre Option. Hier ein direkter Vergleich unseres Textbuttons zueinander.

{% abbildung "Text-Button", "Text-Button", "button-05" %}

### Dominanzen

Um die Anforderungen unserer Softwareentwicklungen besser abzudecken, sehen wir von den üblichen Button-Hierarchien anderer Designsysteme ab. Stattdessen etablieren wir Dominanzen, welches sich an der Häufigkeit bzw. der Menge von Buttons im Userinterface (UI) ausrichtet.

{% abbildung "Dominanzen nach Häufigkeit", "Dominanzen nach Häufigkeit", "button-06" %}

#### Dominance: Prominent

Entspricht einem klassischen CTA-Button

*   Auftrittshäufigkeit weniger als ca. 1–2 % der sichtbaren Screen-Elemente
*   Sehr prominent und auffällig
*   evtl. zusätzlich vergrößert

> Ein CTA-Button (call to action) ist ein sehr auffälliger gestalteter Button, der eine primäre Aktion, Option oder Funktion enthält, die Nutzende am ehesten ausführen sollen. Seine sehr auffällige Gestaltung leitet den Nutzenden zum Auswählen, Ausführen oder Klicken des Buttons an. Ein CTA ist noch präsenter oder wichtiger als ein normaler, primärer Button, um die Aufmerksamkeit der Nutzenden sogar ungefragt auf sich zu ziehen.

#### Dominance: Regular

Gefüllter Button, 1. Rang (entspricht dem klassischen „Primary”)

Gefüllter Button, 2. Rang (entspricht dem klassischen „Secondary”)

*   Auftrittshäufigkeit bis zu ca. 10 % der Seiten oder Screen-Elemente
*   Auffällig und farbig gestaltet

#### Dominance: Decent

Transparenter Button, 1. Rang (entspricht dem klassischen „Tertiary”)

Transparenter Button, 2. Rang (entspricht dem klassischen „Quaternary”)

*   Auftrittshäufigkeit häufiger als 10 % der Seiten oder Screen-Elemente
*   Transparent gefüllt mit oder ohne Konturlinie
*   Sehr dezent gestaltet
*   Für massenhafte Verwendung bei mehreren, gleichberechtigten Funktionen
*   Oft nur als Icon-Button

### Formen

#### Text-Button

*   Breite kann sich **flexibel** an den Inhalt anpassen oder auf **100 % des Elternelements** erweitern.
*   Werden eingesetzt, wenn **große Breiten** erwartet werden (z.B. in mobilen, vertikalen Dialogen oder vertikalen Layouts).
*   Empfohlen, wenn die Lesbarkeit bei langen Button-Labels im Vordergrund steht.
*   Empfohlen, wenn die Buttons sehr gut (durch ihre große Schlatfläche) erreichbar sein sollen.

#### Icon-Text-Button

*   Breite passt sich dynamisch dem **Textinhalt plus Icon** an.
*   Einsatz für **häufige Primär- oder Sekundäraktionen**, wenn eine klare Benennung erforderlich ist (z.B. „Speichern“, „Abbrechen“).
*   Das Icon dient nur der Unterstützung, der Text muss stets klar formuliert sein und kommuniziert die Aktion.

#### Icon-Button

*   Sind **immer quadratisch** (Breite = Höhe).
*   Einsatz für **sekundäre, platzsparende Aktionen** (z.B. „Schließen“, „Hilfe“, „Einstellungen“).
*   Das Icon muss die Aktion des Buttons unmissverständlich kommunizieren können.
*   Sollten nicht für Hauptaktionen verwendet werden.

> Eine Übersicht über alle Icons findet ihr auf der Seite [Icons](icons.html).

Kurz zusammengefasst:
*   Text-Button = Flexibel bis Full-Width
*   Icon-Text-Button (leading / trailing) = Inhalts- bzw. Textbasiert
*   Icon-Button = Quadratisch

{% abbildung "Button Styles in Übersicht", "Button Styles in Übersicht", "button-09" %}

## Grundsätze

Buttons sind häufig verwendete UI-Elemente mit einer hohen Interaktivität. Es gibt eine Reihe von Regeln und Prinzipien, die ein effektives und effizientes Design ermöglichen. Grundlegende Designprinzipien haben wir bereits aufgeführt.

### Buttons müssen als Buttons erkennbar sein

Der erste Schritt ist, dass Nutzende die Buttons identifizieren können. Zudem darf ein Button räumlich nicht zu weit von seiner Funktion entfernt sein.

### Buttons müssen eine klare Botschaft kommunizieren

Wir stellen sicher, dass jeder Button seinen Zweck klar kommuniziert. Ein Button enthält immer eine Textbeschriftung, Buttonfarbe oder ein Symbol (Icon) – und manchmal auch eine Kombination aus allem – damit die Benutzenden wissen, was der Button bewirkt.

### Buttons müssen nutzbar sein

Einen Button zu drücken oder klicken, muss eine einfache Aufgabe sein. Wenn Nutzende nicht in der Lage sind, erfolgreich auf einen Button zu tippen oder dabei versehentlich auf ein benachbartes Element tippen, führt das zu einem negativen Nutzererlebnis und Zeitverlust. Das wollen wir natürlich vermeiden. Eine Studie des MIT Touch Lab\* zeigt, dass 10 mm die optimale Mindestgröße für Buttons auf dem Handy ist, basierend auf der durchschnittlichen Größe von Fingerspitzen. In Pixeln umgerechnet bedeutet das eine Mindestgröße von 37 px, die wir bei der Definition unserer Buttons für IDES im Auge behalten werden.

> \* MIT Touch Lab = Laboratory for Human and Machine Haptics, auch bekannt als Touch Lab, am Massachusetts Institute of Technology. Es handelt sich um eine interdisziplinäre Gruppe von Forschenden, die sich mit Haptik, d.h. Wahrnehmung und Manipulation durch Berührung, beschäftigt.

### Zugänglichkeit für viele Nutzende

Die physische Größe eines UI-Elementes ist einer der Faktoren, welche die Zugänglichkeit beeinflussen. Weitere wichtige Faktoren sind Schriftgröße, Farbe und diverse Kontraste.

**Größenkontraste**

Wir werden die Größe der verschiedenen Teilelemente, wie z.B. Icons und Texte mittels relativen Größenangaben oder Faktoren versehen, damit sich die Elemente besser an die Bedürfnisse oder Vorgaben der Nutzenden richtet. Dazu haben wir schon eine [Typescale](typografie.html) und einen optimalen Icon-zu-Text-Faktor von 0,75 oder 1,33 definiert.

**Farbkontraste**

Bei der farblichen Gestaltung unserer Produkte wollen wir immer auch an Menschen mit Einschränkungen denken. Um sicherzustellen, dass unsere Farben für alle zugänglich sind, haben wir –> [das L-Wert-Konzept](farben.html#leuchtwertdifferenz) für unsere Hausfarben eingeführt, welches sicherstellen soll, dass immer nur Farben mit einem hohen Farbkontrast kombiniert werden. Weitere Anforderungen, z.B. Farbfehlsichtigkeiten können über Online-Prüfer getestet und entsprechend sichergestellt werden.

**Eindeutige Farben**

Bei der Wahl der Buttonfarben haben wir auf die Farbsprachen Rücksicht genommen. Ein roter Button kann im Gegensatz zu einem grünen Button eine andere Botschaft im Kontext vermitteln. Unsere [Funktionsfarben](farben.html#funktionsfarben) kommen auch bei den Buttons zur Anwendung.

> Vermeidet dringend die Verwendung gleicher Farben für interaktive und nicht interaktive Elemente bzw. Buttons! Wenn interaktive und nicht-interaktive Elemente die gleiche Farbe haben, ist es für die Nutzenden schwer zu erkennen, wo oder was sie tippen oder klicken müssen.

### Screenreader, Text-to-speech, Voice-over Ausgabe

Designende sollten eng mit den Entwicklungsteams zusammenarbeiten, um sicherzustellen, dass die Buttons korrekt ausgegeben und eventuell mit Bildschirmlesegeräten funktionieren. Dazu soll z.B. im Webdesign die „Button-Rolle“ für klickbare Elemente verwendet werden. Durch Hinzufügen von `role="button"` wird ein Element einem Bildschirmleser als Button erkenntlich gemacht. Zudem sollten auch sinnvolle Texte für eine Sprachausgabe konzipiert und im Code hinterlegt werden. Initiale Vorschläge für unsere Icons findet ihr bereits bei unserem [Iconset](icons.html).

### Buttons müssen stringent verwendet werden

Eine geradlinige Verwendung erhöht die Geschwindigkeit und Genauigkeit und hilft, Fehler zu vermeiden. Bei der Gestaltung unserer Buttons haben wir versucht, gemeinsame Elemente wie Farben, Formen usw. zu verwenden und diese konsequent beizubehalten.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik der Anatomie eines Buttons. Der Button besteht aus einem rechteckigen Hintergrund („Background“) mit einem umlaufenden Rahmen („Border“) und einem abgerundeten Border Radius von 6 px (links oben und rechts unten). Bei Fokus wird der Button zusätzlich durch einen 2 px breiten „Focus Stroke“ hervorgehoben. Im Inneren befindet sich zentriert gesetzter Text („Button Text“) sowie optional ein Leading-Icon links oder ein Trailing-Icon rechts vom Text.", "Anatomie eines Button", "button-07" %}

{% abbildung "Grafik der Anatomie eines Buttons mit Maßlinien zur Darstellung räumlicher Parameter. Der Button ist 40 px hoch und besteht aus einem rechteckigen Hintergrund („Background“) mit einem umlaufenden Rahmen („Border“) sowie einem abgerundeten Border Radius von 6 px (links oben und rechts unten). Bei Fokus wird der Button zusätzlich durch einen 2 px breiten „Focus Stroke“ hervorgehoben. Im Inneren befindet sich zentriert gesetzter Text („Button Text“) sowie optional ein 20 × 20 px großes Leading-Icon links oder ein ebenso großes Trailing-Icon rechts vom Text. Die Breite des Buttons passt sich der Länge des Textinhalts an.", "Maße eines Button", "button-08" %}

| Fontsize (Text) | 1× = 16 px (Basesize) = 1 rem | 1× |
| --- | --- | --- |
| Text Lineheight | 1× | 1× |
| Text Align | Center | Center |
| Icon (Font) size | 4/3× | 1,33× |
| Icon Lineheight | 1× | 1× |
| Icon (Text) Align | Center | Center |
| Internal Spacing | 1/4× | 0,25× |
| Padding Top | 3/4× | 0,75× |
| Padding Bottom | 3/4× | 0,75× |
| Padding Side to Icon | 3/4× | 0,75× |
| Padding Side to Text | 1× | 1× |
| Border (falls sichtbar) | 1/16× | 1 px |
| Border Radius | 3/8× - 0 - 3/8× - 0 | 0,375× - 0 - 0,375× - 0 |

## Zustände

### Regulärer aktive Zustand (enabled state)

Der aktive Zustand (Enabled-Status) ist der ursprüngliche oder klickbare Zustand eines Buttons. Er kommuniziert dem Nutzer, dass das Element interaktiv ist oder eine Funktion ausführen wird.

_Gestaltung:_ Kontrastreiche Farben, die den Standards für Barrierefreiheit entsprechen.

### Inaktive Zustand (disabled state)

Der inaktive Zustand zeigt an, dass ein Button nicht für Interaktionen zur Verfügung steht. Normalerweise müssen die Nutzende eine andere Aktion ausführen – wie die Pflichtfelder eines Formulars – bevor der Button angeklickt werden kann. Ein per `disabled` deaktivierter Button ist mit der Tastatur schlicht nicht erreichbar und wird Screenreadern nicht angekündigt – siehe „Barrierefreiheit“.

_Gestaltung:_ Die visuelle Darstellung sollte durch gedämpfte Farben, reduzierte Deckkraft oder eine geringere Höhe zurückhaltend sein. Ein deaktivierter Button ist zwar unauffällig, sollte aber dennoch lesbar bleiben.

### Mouse-over / Hover state

Bei Webanwendungen, bei denen die Nutzende in der Regel eine Maus verwenden, zeigt der Hover-Status an, wenn die Nutzende den Mauszeiger über einem interaktiven Button platziert hat.

_Gestaltung:_ Die Farbe oder die Höhe des Default-Status werden leicht geändert, um anzuzeigen, dass das Element interaktiv ist. Die Änderungen sollten nicht zu drastisch sein, eher subtil, aber dennoch auffällig.

### Fokussierter Zustand (focused state)

Der Fokus-Status zeigt an, wenn ein Nutzende einen Button mit der Tastatur oder der Stimme hervorgehoben hat. Sie sollten besonders ausgezeichnet werden, da sie nicht durch andere visuelle Hinweise angezeigt werden. Erreicht wird dieser Zustand auch mit der Tabulatortaste; ausgelöst wird der Button dann mit Enter oder der Leertaste.

_Gestaltung:_ Der Fokus wird durch die Implementierung eines Rahmens oder einer Umrandung mit einer blauen Farbe (Focus Stroke) angezeigt.

### Gedrückter Zustand (pressed state)

Der Pressed-Status wird angezeigt, wenn Nutzende auf einen Button klicken oder tippen (drücken) und informiert sie darüber, dass die Aktion umgehend ausgeführt wird.

_Gestaltung:_ Visuelle Effekte wie eine dunklere Farbe oder eine innere Schattierung zeigen dem Nutzer, dass die Aktion ausgeführt wird. Der Effekt sollte umkehren, sobald der Klick losgelassen wird.

### Ladezustand (loading)

Der Ladezustand wird aktiviert, wenn das System eine Aktion verarbeitet, die durch einen Klick oder Tap des Nutzenden ausgelöst wurde. Dieser Zustand folgt unmittelbar auf den aktiven Zustand, nachdem der Nutzende seinen Klick oder Tap losgelassen hat. Der Fokus bleibt dabei auf dem Button.

_Gestaltung:_ Am besten wird der Loading-Status durch die Implementierung eines Spinners oder einer anderen Ladeanzeige dem Nutzendekommuniziert.

### Erfolgszustand (success)

Der Success Status wird aktiviert, wenn das System eine Aktion erfolgreich ausgeführt hat. Dieser Zustand kann einem Loading-Status folgen. Er ist die Wahl, solange der Button sichtbar bleibt. Der Wechsel muss auch ohne Blick auf ein Häkchen wahrnehmbar sein. Wechselt der Kontext oder schließt sich ein Dialog, übernimmt [unser Toast](toast.html) im „Style: Success“. Beide Massnahmen zusammen sind zwei Signale für ein Ereignis.

_Gestaltung:_ Am besten wird der Success-Status durch die Implementierung eines Checkmarks dem Nutzenden kommuniziert. Der Fokus bleibt dabei auf dem Button, und der Wechsel wird zusätzlich angesagt.

### Misserfolg (destructive)

Scheitert eine Aktion, zeigt der Button das **nicht** an. Ein roter Button sagt nie, warum etwas nicht ging, und der Grund ist die eigentliche Information. Der Button kehrt deshalb in den aktiven Zustand zurück, damit ein zweiter Versuch möglich ist. Die Meldung gehört dorthin, wo sie stehen bleibt: an das betroffene Feld, z.B. der Alert-Zustand der [Input Fields](input-field.html),  als [Banner](banner.html) für die Gesamtaktion oder – wenn sie den Ablauf blockiert – in einen [Dialog](dialog.html). Ein Toast taugt dafür nicht, weil er verschwindet, bevor Nutzende reagieren können.

_Gestaltung:_ Keine eigene Darstellung am Button, obwohl ein „destructive“ Button im Figma existiert. Dieser Zustand ist für nicht umkehrbare Aktionen reserviert.

## Layout

**Der Button ist innen ein „Cluster“:** Icon und Beschriftung stehen mit `--ibk-spacing-8` nebeneinander, mittig ausgerichtet.

## Tastaturbedienung

Ein echter `<button>` bringt die Tastaturbedienung mit: Er liegt von sich aus in der Tab-Reihenfolge und reagiert auf zwei Tasten. Jeder Button ist dabei eine eigene Station.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Button zu Button |
| Enter | Löst den Button aus |
| Leertaste | Löst ihn ebenfalls aus – anders als bei einem Link |

Das gilt nur für echte Buttons. Ein [Link](link.html) jedoch reagiert ausschließlich auf Enter, die Leertaste scrollt dort die Seite. Und ein `<div>` mit role="button" reagiert von sich aus auf gar nichts: Dort müssen tabindex="0" sowie Enter und Leertaste selbst behandelt werden. Das ist die technische Seite unseres ersten Grundsatzes – was wie ein Button aussieht, sollte auch einer sein.

## Barrierefreiheit

*   Die **Beschriftung ist der Name des Buttons.** Beim Icon-Button ohne Text muss dieser Name ausdrücklich mitgegeben werden, sonst hören Screenreader-Nutzende nur „Schaltfläche“. Erste Textvorschläge stehen bei [unserem Iconset](icons.html).
*   **Der „Focus stroke“ wird nicht abgeschaltet,** auch nicht aus gestalterischen Gründen. Er ist der einzige Hinweis darauf, wo die Tastatur gerade steht.
*   **Trefferfläche:** Unsere 37 px liegen über dem geforderten Minimum von 24 × 24 px (WCAG 2.5.8 „Target Size (Minimum)" (AA)); für Hauptaktionen auf Touch-Geräten sind 44 × 44 px die bessere Zielgröße (WCAG 2.5.5 (AAA)).
*   **Deaktivierte Buttons verschwinden** für die Tastatur. Das HTML-Attribut `disabled` nimmt den Button aus der Tab-Reihenfolge und aus der Ansage – Nutzende erfahren nicht, dass es ihn gibt. Wo das wichtig ist, etwa bei „Speichern“, solange Pflichtfelder fehlen, ist `aria-disabled="true"` die bessere Wahl: Der Button bleibt erreichbar und ansagbar, und der Grund steht als Text daneben.
*   **Im Lade- und Erfolgszustand bleibt der Fokus auf dem Button.** Wer ihn im Moment des Klicks auf `disabled` setzt, reißt den Fokus weg, und Nutzende landen wieder am Seitenanfang – auch hier gehört `aria-disabled` hin.
*   **Der Zustandswechsel braucht eine Ansage.** Spinner und Häkchen sind die sichtbare Hälfte; „wird gespeichert“ und „gespeichert“ müssen zusätzlich über einen Live-Bereich ausgegeben werden.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Button |
| 2 | Dominance | Regular, Decent |
| 3 | Type | Primary, Secondary, Destructive, Success |
| 4 | Style | Text, Icon, Icon-Trailing, Icon-Leading |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus |
|  | Sonstiges | Button Text, Icon Ligature |

{% endreiter %}

{% reiter "dos-donts" %}

## Beschriftung

Texte auf Buttons sollten so kurz und bündig wie nötig sein und, wenn immer möglich, Verben enthalten, um unseren Nutzenden klar das Ziel der Aktion verständlich zu erklären oder zu führen.

1.  **Kurze Worte** oder Wortgruppen in normaler Schreibweise
2.  Formulierungen sollten **Verben** enthalten
3.  **Klare, präzise Sprache**
4.  Das **Ziel** muss klar sein
5.  **Confirmshaming vermeiden**

Standard-Website-Buttons wären z.B.:
*   Anmelden
*   Kostenlos anmelden
*   Abonnieren
*   E-Mail senden

{% endreiter %}
