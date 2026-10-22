---
layout: inhaltsseite.njk
titel: Dialog
bereich: komponenten
aktuell: dialog
gruppe: systemfeedback
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Dialoge oder Alerts (auch Modal, Modal Window, Confirmation Dialog) gehören zu den **stärksten Mitteln** im UI-Design, um die **Aufmerksamkeit der Nutzenden** zu gewinnen. Sie treten in den Vordergrund, überlagern und blockieren die aktuelle Oberfläche und verlangen eine unmittelbare Reaktion. Damit eignen sie sich **für kritische Situationen,** in denen eine **bewusste Entscheidung** zeitnah notwendig ist. Etwa, ob eine Aktion, bestätigt durch unsere [Buttons](button.html), wirklich ausgeführt oder abgebrochen werden soll.

## Abgrenzung

### Dialog vs. Banner

Während ein Banner eher eine dauerhafte, aber nicht blockierende Information transportiert (z.B. ein Hinweis auf ein Update oder eine temporäre Einschränkung), ist ein **Dialog oder Alert immer modal.** Das bedeutet: Der **Arbeitsfluss wird unterbrochen**, bis die Nutzenden auf die Meldung reagieren. Dadurch entsteht Verbindlichkeit. Ein Alert zwingt zu einer klaren Entscheidung, während ein Banner auch ignoriert werden darf.

Wichtig ist, Dialoge und Alerts gezielt und mit Bedacht einzusetzen, damit sie nicht als unnötige Unterbrechung wahrgenommen werden, sondern in kritischen Situationen einen klaren Mehrwert für die Nutzenden bieten.

## Hintergrund

### Buttonausrichtung

#### Übersicht der gängigen Plattformen/Guidelines

| Plattform / HIG | Reihenfolge (LTR) | Besonderheiten |
| --- | --- | --- |
| **Apple** (macOS / iOS, Human Interface Guidelines) | Sekundär – **Primär (Default)** (ganz rechts außen) | Cancel steht links vom Primär-Button. Buttons mit klaren Verben, kein „OK/Yes/No“. |
| **Microsoft** (Windows / Fluent / WinUI) | **Primär** (affirmative Aktion) – Sekundär wie Cancel/Close (Cancel ganz rechts) | Umgekehrte Reihenfolge gegenüber Apple/Material. Starke Windows-Konvention, „OK links, Cancel rechts“. |
| **Google** (Material Design / Android & Web) | Sekundär – **Primär** (rechts außen) | Primär immer am äußersten Ende. Fokus auf visuelles Gewicht statt Reihenfolge. |
| **GNOME** (Linux / GTK HIG) | Cancel – **Primär** (z.B. Bestätigen) | Cancel soll immer zuerst stehen (links), „Enter“ löst Primär aus, „Esc“ löst Cancel aus. |
| **Nur 1 Button** (alle Systeme) | **Primär / Close** alleine | Oft „Schließen“ oder „OK“, am Rand ausgerichtet. |

#### Warum haben sich die Plattformen so entschieden?

##### 1\. Ergonomische Perspektive (Links- vs. Rechtshändigkeit)

**Rechtshänder** bedienen Smartphones typischerweise mit dem Daumen der rechten Hand → der Button ganz unten rechts ist am leichtesten erreichbar (klassische Anwendung von „Fitts’ Law“ = kürzester Weg, größter Trefferbereich).

**Linkshänder** handeln spiegelverkehrt: Für sie ist der **untere linke Bereich ergonomisch günstiger.** Damit benachteiligt ein fest auf „rechts außen“ gesetzter Primär-Button rein motorisch die Linkshänder.

Aber es kommt eine weitere Perspektive zum Tragen ...

##### 2\. Lesefluss und gelernte Konvention

Bei einer lateinischen Sprache **üblichen Leserichtung (LTR)** scannen Nutzende den Inhalt typischerweise von links nach rechts und von oben nach unten nach dem F-Schema. Der **Blick endet also stets unten rechts.** Dort den Primär-Button zu platzieren, nutzt den kognitiven Fluss.

Diese Konvention nutzen iOS und Material Design und haben sich auf **„Primär = rechts außen“** geeinigt. Das sorgt für Erwartungskonformität und Wiedererkennbarkeit. Ein Umstellen zugunsten der Linkshänder würde zwar ergonomisch helfen, aber **gegen den gewohnten „mental model“** laufen. Die Nutzenden müssten länger nachdenken, was wiederum Fehlerkosten erzeugt.

##### Umgang mit diesem Spannungsfeld

Statt die Buttons für Linkshändige Nutzende zu spiegeln, ist es oft hilfreicher, **große Touchflächen**, **ausreichende Abstände** und **klare visuelle Gewichtung** zu nutzen – damit der Daumen nicht punktgenau treffen muss.

**Bottom Sheets statt klassische Dialoge:** Auf Mobile setzt man zunehmend auf **Bottom Sheets** oder **Full-Width Buttons,** die beide Daumen gleich gut erreichen (z. B. „Speichern“ als 100%-breiter Button). Das umgeht das Links-/Rechtshänderproblem komplett.

#### Tab-Reihenfolge und Effizienz der Tastaturnavigation

##### Wie die Tab-Reihenfolge technisch funktioniert

Standardmäßig läuft die Tab-Order im DOM (Web) bzw. im Control-Tree (Desktop) **von links nach rechts** (bei lateinisch basierten LTR-Sprachen). Das bedeutet, wenn wir „Sekundär“ links, „Primär“ rechts anordnen, landet der Tab-Fokus tatsächlich zuerst auf dem Sekundär-Button.

*   Bei **Apple & Material** ist das Verhalten gewollt. Cancel/Secondary wird zuerst erreicht, **Primary zuletzt.**
*   Bei **Microsoft** ist es umgekehrt. Der Tab-Fokus landet sofort auf „OK/Save“, Cancel kommt später.

**Windows 11:** Der Speicher-Button im Editor steht links und der Abbrechen-Button rechts davon, aber der Block befindet sich unten rechts am Rand.

**MacOS 15:** Der Speichern-Button im TextEdit steht rechts am Rand und links davon der Abbrechen-Button, aber als Block ebenfalls unten rechts am Rand.

##### Pro-Argumente für „Primary zuerst“

**1\. Effizienz:** Wer die Tastatur intensiv nutzt (z.B. Power User innerhalb einer Enterprise-Software), will mit Tab so schnell wie möglich auf „Speichern/OK“ springen. Deshalb setzt Windows traditionell den Primär-Button nach links. Diese kognitive Priorisierung: „Das Wichtigste zuerst“ kann man auch als schnelleres Signal verstehen.

##### Pro-Argumente für „Secondary zuerst“

**1\. Sicherheit:** Es verhindert, dass versehentlich durch schnelles Enter/Tab sofort eine irreversible Primäraktion ausgelöst wird. Nutzende müssen sich bewusst bis zum Primär-Button bewegen.

**2\. Leselogik:** Reihenfolge = Lesefluss: erst die „Ausweichoption“, dann die entscheidende Aktion.

**3\. Konsistenz über Plattformen hinweg:** Apple und Google akzeptieren diese kleine „Verzögerung“, weil der Fokus auf Vermeidung von Fehlklicks liegt.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Dialog-UI-Elements mit typischer Struktur zur Anzeige von Systemmeldungen oder Aktionen. Der Dialog besteht aus einer Card mit Schlagschatten („Card with drop shadow“) und enthält oben ein Titel („Update installieren“), darunter einen erklärenden Fließtext (zum Beispiel „Das neue Update ist verfügbar und kann jetzt installiert werden.“). Am unteren Rand befinden sich zwei Buttons: ein primärer Button („Installieren“) für die bevorzugte Aktion und ein sekundärer Button („Abbrechen“) für die alternative Option. Die grafischen Labels markieren semantische Bereiche wie Title, Text, Primär- und Sekundärbutton.", "Dialog Anatomie", "dialog-01" %}

## Layout

{% abbildung "Grafik eines Dialog-UI-Elements mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Gezeigt wird ein modales Dialogfenster in Form einer Card mit Schlagschatten. Es enthält ein Titel („Title in `<h4>`“), einen Beschreibungstext („Text in `<p>`“) sowie zwei Buttons am unteren Rand: einen primären für die „Preferred Action“ und einen sekundären für die „Second Action“. Maßlinien kennzeichnen die vertikale Struktur: 24 px Abstand zwischen oberem Card-Rand und Titel, 16 px zwischen Titel und Text, 32 px zwischen Text und Buttons sowie 16 px vom unteren Button zur Card-Kante. Bei horizontal oder vertikal angeordneten Buttons beträgt der Abstand zwischen diesen 16 px.", "Dialog Measurements", "dialog-02" %}

**Der Dialog ist ein „Stack“** aus Titel, Text und Buttonleiste. Die Buttonleiste darin ist ein „Cluster“ mit `--ibk-spacing-16`, dem Abstand für eigenständige Elemente nebeneinander. Sie bricht um, wenn die Buttons nicht in eine Zeile passen; in der Variante „vertical“ stehen sie untereinander über die volle Breite, mit demselben Abstand.

**Der äußere Stack,** zur „Card“, ist bewusst ungleichmäßig: 24 px vom oberen Card-Rand zum Titel, 16 px zwischen Titel und Text, 32 px vor der Buttonleiste und 16 px zum unteren Rand. Titel und Text gehören zusammen und stehen deshalb enger beieinander als die Buttonleiste, die eine Entscheidung verlangt.

## Tastaturbedienung

Mit dem nativen `<dialog>`\-Element und `showModal()` bekommt man den größten Teil geschenkt: Der Dialog landet im „Top Layer“, der Rest des Dokuments wird automatisch `inert`, und Esc schließt ihn, ohne dass man die Taste selbst abfangen muss.

Solange der Dialog offen ist, besteht die Tab-Reihenfolge **nur noch aus den Stationen im Dialog** — bei uns also aus den zwei bis drei Buttons. Alles dahinter ist für Maus, Tastatur und Screenreader gleichermaßen nicht mehr vorhanden.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Button zu Button; am letzten springt der Fokus zurück zum ersten |
| Enter | Löst den fokussierten Button aus |
| Esc | Schließt den Dialog wie ein Klick auf „Abbrechen“ |

Dass der **Fokus im Kreis** läuft und nicht hinter den Dialog gelangt, ist gewollt: Ein Dialog, aus dem man heraustabben kann, verliert genau die Verbindlichkeit, für die wir ihn einsetzen.

Das ist zugleich die Absicherung gegen WCAG 2.1.2 („No Keyboard Trap“). Das Kriterium verbietet diesen Kreis nicht, es verlangt einen Ausweg und nennt den modalen Dialog ausdrücklich als erlaubten Fall, sofern er sich über „Abbrechen“, den Bestätigungs-Button oder die Esc-Taste verlassen lässt. Da unsere Anatomie kein Schließen-Icon vorsieht, sind die Buttons und Esc die einzigen Auswege. Esc ist damit keine Bequemlichkeit, sondern Pflicht.

### Der Fokus in drei Momenten

**Beim Öffnen** springt der Fokus in den Dialog. Wohin genau, hängt vom Inhalt ab. Für unsere kurzen Dialoge ist das der erste Button; festlegen lässt sich das mit dem `autofocus`\-Attribut am gewünschten Element. Bei längeren Texten ist der Titel die bessere Wahl, über `tabindex="-1"` fokussierbar gemacht, damit der Text nicht schon beim Öffnen aus dem Sichtfeld scrollt.

**Bei einer nicht umkehrbaren Aktion** — Daten löschen, Zahlung auslösen — gehört der initiale Fokus auf den **am wenigsten zerstörerischen** Button, also auf „Abbrechen“. Wer hier die Primäraktion vorfokussiert, macht ein versehentliches Enter zur Katastrophe.

**Beim Schließen** kehrt der Fokus auf das Element zurück, das den Dialog geöffnet hat. Sonst stehen Nutzende wieder am Seitenanfang und tabben sich den ganzen Weg zurück (WCAG 2.4.3 „Focus Order“).

## Barrierefreiheit

*   `role="dialog"` und `aria-modal="true"` kennzeichnen das Fenster, der Titel wird über `aria-labelledby` verknüpft. Beim nativen `<dialog>` mit `showModal()` bringt der Browser die Rolle bereits mit.
*   `**aria-modal="true"**` **nur setzen, wenn der Dialog wirklich modal ist.** Der APG ist hier deutlich: erlaubt erst dann, wenn der Code jede Interaktion mit dem Hintergrund unterbindet und die Gestaltung ihn sichtbar verdeckt. Ein „modal“ ausgezeichneter Dialog, hinter den man weiterhin gelangt, schadet mehr, als er nützt.
*   **Für Bestätigungen destruktiver Aktionen** `**role="alertdialog"**` statt `dialog`. Assistive Technologien behandeln das gesondert, etwa mit einem Signalton. Die Meldung selbst wird über `aria-describedby` angebunden, damit sie beim Öffnen mit vorgelesen wird.
*   **Der Hintergrund wird inert, nicht** `**aria-hidden**`**.** `showModal()` erledigt das von selbst; bei einem nachgebauten Dialog ist das `inert`\-Attribut am Rest der Seite der richtige Weg. `aria-hidden` allein blendet den Hintergrund nur für Screenreader aus — per Tab landet man weiterhin dort.
*   **Die Buttons tragen ihren Namen im Text.** Konkrete Verben wie „Löschen“ und „Abbrechen“ sind nicht nur eine Empfehlung aus den [Do’s & Don’ts](#dos-donts), sie sind zugleich der zugängliche Name. „OK“ und „Ja“ sagen außerhalb ihres Kontexts nichts.
*   **Der „Focus stroke“ bleibt sichtbar,** auch auf dem beim Öffnen vorfokussierten Button (WCAG 2.4.7 „Focus Visible“). Er ist der einzige Hinweis darauf, welche der zwei oder drei Aktionen Enter gerade auslösen würde.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Dialog |
| 2 | Dominance | Regular, Decent |
| 3 | Type | Vertical, Horizontal |
| 4 | Style | 1 Button, 2 Button, 3 Button |
| 5 | State | – |
|  | Nested instances | Button |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

*   Nur für wirklich **wichtige Entscheidungen** nutzen. Jeder unnötige Dialog unterbricht den Userflow und sorgt für Frust.
*   **Klar und verständlich formulieren.** Der Titel benennt die Situation, die Nachricht muss zum Kontext passen, die Aktions-Buttons müssen eindeutig beschriftet sein.
*   Konkrete Handlungen benennen, wie „Löschen“ und „Abbrechen“.
*   **Dringlichkeit differenzieren.** Alerts für kritische Situationen (z.B. Sicherheitsfragen), einfache Dialoge für weniger riskante Entscheidungen.
*   **Nicht überladen.** Ein Dialog oder Alert sind keine Infoblöcke. Die Botschaft muss kurz und prägnant sein, mit zwei bis maximal drei Buttons.
*   Buttons (preferred action) wahrnehmbar gestalten = **klare visuelle Gewichtung**

{% abbildung "Vergleichende Grafik zweier Dialog-UI-Elemente mit Fokus auf die Button-Dominanz. Links ist ein Dialog mit Buttons der Dominanz „Regular“ dargestellt, rechts ein Dialog mit Buttons der Dominanz „Decent“. Beide Dialoge enthalten jeweils eine Headline, einen Beschreibungstext und zwei Buttons: einen primären für die „preferred action“ und einen sekundären für die „second action“. Die Darstellung verdeutlicht die visuellen Unterschiede zwischen den beiden Button-Dominanzen innerhalb eines modalen Dialogfensters.", "Dialog Dominances", "dialog-03" %}

## Wahrnehmbarkeit der Buttons

Die Wahrnehmbarkeit der Buttons in Dialogen folgt klaren Regeln, damit Nutzende schnell erkennen können, welche Handlung im Vordergrund steht und wie sie sich entscheiden sollen.

### Ein-Button-Dialoge
Enthält ein Dialog nur einen Button, wird dieser stets im Typ „Regular Primary“ dargestellt. So wird die bevorzugte Aktion klar hervorgehoben und ist für die Nutzenden sofort erkennbar.

### Zwei-Button-Dialoge
Dialoge mit zwei oder mehr Buttons nutzen entweder Buttons vom Typ „Regular“ oder „Dezent“ für beide Aktionen – jedoch für die bevorzugte (preferred action) immer „Primary“ und für die sekundäre (second action) wahlweise „Primary“ oder „Secondary“, je nach Wichtigkeit der Aktionen.

### Drei-Button-Dialoge
Bei Dialogen mit drei Buttons werden jeweils die preferred, second und third action wieder wahlweise von Buttons der Typen „Regular“ oder „Dezent“ genutzt. Je nach gewünschter Auffälligkeit. Dabei gilt: Die „preferred action“ muss visuell stets am deutlichsten hervortreten, um die Priorität zu verdeutlichen.

Auch bei optisch zurückhaltendere Gestaltung sollte stets der Fokus (preferred action) klar erkennbar bleiben, damit die Nutzenden nicht überfordert werden.

{% abbildung "Darstellung einer vergleichenden Grafik dreier Dialog-UI-Elemente mit vertikal angeordneten Buttons zur Veranschaulichung von Wahrnehmbarkeit und Priorisierung bei unterschiedlichen Button-Klassen. Gezeigt werden: ein Dialog mit einem einzelnen Button („Regular Primary“) für die bevorzugte Aktion; ein Dialog mit zwei Buttons, bestehend aus einem „Decent Primary“ für die bevorzugte und einem „Decent Secondary“ für die alternative Aktion; sowie ein Dialog mit drei Buttons: „Regular Primary“ (preferred action), „Regular Secondary“ (second action) und „Third Action“ für eine zusätzliche Option. Die Grafik macht deutlich, dass die bevorzugte Aktion („Preferred Action“) gemäß den Button-Regeln visuell stets am auffälligsten gestaltet sein sollte.", "Vertical Dialog", "dialog-04" %}

## Buttonausrichtung

Nutzungskontext vorher abklären und mit UX-Designenden abwägen:
*   Enterprise-Apps oder Power-User-Kontexte = Primär links (Microsoft-Style) ist oft beliebter, weil Tastatureffizienz wichtiger ist versus ...
*   Consumer-Apps oder Web & Mobile = Primär rechts (Apple/Google) ist gängiger – hier überwiegt visuelle Konsistenz und Fehlertoleranz.

### 1\. Generelle Regeln (für alle Ausrichtungen)

*   Die **„Preferred Action“ ist stets am auffälligsten** gestaltet (visuelle Gewichtung).
*   **Klare Benennung:** Buttons tragen konkrete Verben (z. B. „Speichern“, „Abbrechen“) statt generische Labels.
*   Tastaturkürzel verwenden:
    `Enter` löst den fokussierten Button aus.
    `Esc` aktiviert Cancel.
*   **Destruktive Aktionen:** solche zerstörenden Aktionen müssen klar gekennzeichnet sein (Farbe/Icon) und sollten nach Möglichkeit ein Undo-Muster bereitstellen.

### 2\. Horizontale Button-Ausrichtung

*   **LTR (Left to right) Leserichtung beachten:** Buttons von links nach rechts anordnen → Sekundär → Primär (rechts außen).
*   **Tab-/Fokus-Reihenfolge:** Der Primär-Button erhält initial den Tastaturfokus (auch wenn er rechts liegt). Tab springt anschließend in logischer Reihenfolge weiter.
*   Breite der Buttons: Die Breite passt sich mit **„fit-content“** („hug“ in Figma) dem Text an.

### 3\. Vertikale Button-Ausrichtung

*   Breite: Alle Buttons sind **„full-width“** („fill“ in Figma).
*   Positionierung: Die **„Preferred Action“** steht immer **an oberster Stelle.**
*   **Nur Text-Buttons** nutzen

{% abbildung "Vergleichende Grafik dreier Dialog-UI-Elemente mit horizontal angeordneten Buttons zur Veranschaulichung der Wahrnehmbarkeit und Priorisierung verschiedener Button-Klassen. Gezeigt werden: ein Dialog mit einem einzelnen Button vom Typ „Regular“ für die „Preferred Action“; ein Dialog mit zwei Buttons, z. B. im Typ „Decent“ – rechts für die „Preferred Action“, links daneben für die „Second Action“; sowie ein Dialog mit drei Buttons – ganz rechts die „Preferred Action“ im Typ „Regular“, mittig die „Second Action“ und ganz links die „Third Action“. Die Darstellung macht deutlich, dass die bevorzugte Aktion („Preferred Action“) stets visuell am auffälligsten und am rechten unteren Rand des Dialogs positioniert sein sollte – unabhängig von Anzahl und Typ der Buttons.", "Horizontal Dialog", "dialog-05" %}

{% endreiter %}
