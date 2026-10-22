---
layout: inhaltsseite.njk
titel: Step Button Bar
bereich: komponenten
aktuell: step-button-bar
gruppe: layouts
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Die **„Step Button Bar“** ist die zusammengesetzte Leiste, die Decrement- und Increment-Button zu einer visuellen Einheit gruppiert. Sie sorgt dafür, dass die Bestandteile als ein **zusammengehöriges Steuerelement** wahrgenommen werden, mit einheitlicher Höhe, umfassenden optionalen Rahmen und Radien an den Außenkanten.

## Varianten

Die Bar kombiniert zwei Gestaltungsachsen: eine Ausrichtung (horizontal oder vertikal) und eine Form (Type = Round, Quad oder Rect). Daraus ergeben sich folgende Layouts (Property Style):
*   **40h / 20h:** horizontale Leiste in Höhe 40 px bzw. 20 px, mit runden Enden (Type = Round).
    Unser Standardfall.
*   **40h-framed / 20h-framed:** dieselben horizontalen Leisten, zusätzlich mit Rahmen (framed).
*   **20v:** vertikale Anordnung (Plus oben, Minus unten) mit eckiger Form (Type = Quad oder Rect), um **innerhalb unserer Input Fields** genutzt zu werden.

{% abbildung "Anwendungsbeispiel: ein Input Field mit der Beschriftung „Example input“ und dem Wert 20. Am rechten Rand des Feldes sind zwei dezente „Step Buttons“ (aufwärts, abwärts) übereinander angeordnet und rot hervorgehoben. Darunter ein „Supporting text“ mit dem Hinweis: „The reduced decent step buttons fit perfectly into our input field to adjust values.“", "Step Button Example", "step-button-bar-02" %}

Faustregel: Round wird meist horizontal eingesetzt, Quad in beiden Richtungen und Rect oft nur vertikal.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Anatomie einer Step-Button Bar: zwei runde rote „Step Buttons“ mit weißen eIB-Icons (linker Chevron, rechter Chevron) liegen nebeneinander in einem hellgrauen, pillenförmigen Rahmen; der linke Button trägt einen blauen Fokusring. Beschriftungen benennen „Frame“ (Rahmen), „Focus stroke“ und „eIB-Icon“.", "Step Button Bar Anatomie", "step-button-bar-01" %}

Eine „Step Button Bar“ besteht in der Regel aus mindestens zwei zusammengehörigen Bestandteilen:
1.  **Decrement** (meist Zurück-Pfeil oder Minus-Button): verringert den Wert um einen definierten Schritt.
2.  **Increment** (meist Vorwärts-Pfeil oder Plus-Button): erhöht den Wert um einen definierten Schritt.
3.  Value (eine optionale Wertanzeige): zeigt den aktuellen Wert an.

Die beiden Steuer-Buttons nutzen die Symbole „<“ oder „–“ und „>“ oder „+“ aus [unserem Iconset](icons.html) und werden als eIB (Embedded Icon Button) umgesetzt – konsistent zu den [Pagination-Dots](pagination-dots.html).

## Zustände

Wie bei unseren übrigen interaktiven Komponenten verfügen die Step-Buttons über die üblichen User-States: Enabled, Hover, Pressed, Focus und Disabled.

Besonders relevant sind hier **die Grenzfälle:**
*   Ist ein **Minimalwert** erreicht, wird der Decrement-Button „disabled“. Er signalisiert damit, dass keine weitere Verringerung möglich ist.
*   Ist ein **Maximalwert** erreicht, wird analog der Increment-Button „disabled“.

So bleibt für Nutzende jederzeit erkennbar, in welche Richtung sie den Wert noch verändern können, ganz ohne unterbrechende Fehlermeldung.

## Kombinationen

Schrittweise Zahleneingaben bestehen selten aus nur einem Feld. Meist kommen Step Buttons zum schrittweisen Verändern und ein Button zum Bestätigen hinzu. Die folgenden Beispiele zeigen, welche Ausprägungen von [„Input Field“](input-field.html), unseren [„Button“](button.html) und [„Step Button“](step-button.html) zusammengehören und wie der Button entweder neben dem Feld oder in den Feldrahmen integriert sitzt.

{% abbildung "Grafik zur Kombination von „Textinput Regular“ mit „Step Buttons“: über dem Input Field die Beschriftung „Textinput Regular“, im Feld der Wert „1337“, rechts darin die beiden vertikal übereinanderliegenden Step Buttons als Pfeile auf und ab. Rechts neben dem Feld, außerhalb des Rahmens, ein roter „Button“ mit Icon und Beschriftung. Darunter der Supporting text: „Das Textinput Regular kombiniert sich mit den rechteckigen, dezenten Step Buttons.“.", "Step Button & Textinput-Regular with Button outside", "step-button-bar-03" %}

{% abbildung "Grafik zur Kombination von „Textinput Prominent“ mit „Step Buttons“: über dem Input Field die Beschriftung „Textinput Prominent“, im Feld der graue Platzhalter „Menge wählen“, rechts darin die beiden vertikal übereinanderliegenden Step Buttons als Pfeile auf und ab. Links am Feld die rote Maßangabe 48 für die Höhe des Input Field. Darunter der Supporting text: „Das Textinput Prominent kombiniert sich mit den quadratischen, dezenten Step Buttons.“.", "Step Button & Textinput-Prominent", "step-button-bar-04" %}

{% abbildung "Maßgrafik zur Kombination von „Textinput Prominent“ mit integriertem „Button“ und „Step Buttons“: über dem Input Field die Beschriftung „Textinput Prominent“, rechts darin die beiden Step Buttons als Pfeile auf und ab und daneben, innerhalb des Feldrahmens, ein roter „Button“ mit Icon und Beschriftung. Rote Maßangaben in px: 20 für die Breite der Step Buttons, 10 als Abstand zum Button, 48 für die Höhe des Feldes, 40 für die Höhe des Buttons. Darunter der Supporting text: „Das Textinput Prominent mit integriertem Button kombiniert sich auch perfekt mit den quadratischen, dezenten Step Buttons.“.", "Step Button & Textinput-Prominent with Button inside", "step-button-bar-05" %}

Hinweis: Wie schon bei [Pagination](pagination.html) gilt auch hier: Die vorgestellten Layouts verstehen sich als Vorschläge. Abweichende Lösungen sind zulässig, solange sie sich konsistent aus den Komponenten unseres IDES-Baukastens zusammensetzen.

## Tastaturbedienung

Wie die Bar per Tastatur bedient wird, hängt an einer einzigen Frage: **Gibt es ein Wertefeld?**

### Variante mit Wertefeld

Der Regelfall bei der Variante „20v“ im Input Field. Dann ist das Wertefeld bzw. Inputfield ein „Spinbutton“, und der W3C-Praxisleitfaden ist eindeutig: Das Feld ist die einzige Station in der Tab-Reihenfolge, weil sich Erhöhen und Verringern über die Pfeiltasten erledigen lassen. Die beiden Step Buttons sind in diesem Fall reine Zeigegeräte-Bedienung und gehören **nicht** zusätzlich in die Tab-Reihenfolge, sonst tabbt man z.B. dreimal durch dasselbe Steuerelement.

> Ein Spinbutton (auch Drehfeld oder Spinner genannt) ist ein Bedienelement im UI-Design, mit dem Nutzer einen numerischen Wert schrittweise erhöhen oder verringern können. Er besteht meist aus einem Input Field für den aktuellen Wert und zwei kleinen Pfeiltasten (nach oben/unten).

| Taste | Wirkung |
| --- | --- |
| Pfeil hoch / runter | Ein Schritt aufwärts bzw. abwärts |
| Bild auf / Bild ab | Größerer Sprung (optional) |
| Pos1 / Ende | Minimum bzw. Maximum direkt |
| Ziffern tippen | Wert direkt eingeben |

Das ist dieselbe Tastenbelegung wie beim [Range-Slider](range-slider.html). Beides sind Steuerelemente für einen Wert in festen Schritten und Nutzende erwarten die gleiche Bedienbarkeit.

### Variante ohne Wertefeld

Etwa als Blätterfunktion in einer Bildergalerie. Dann sind die beiden Buttons die einzige Bedienung und müssen jeweils eine eigene Station sein, bedient mit Enter oder Leertaste. Pfeiltasten wirken hier nicht.

Beides gleichzeitig ist der häufigste Fehler: ein Input Field mit Pfeiltastenbedienung **und** zwei zusätzlich fokussierbaren Buttons. Die Funktion ist dann doppelt erreichbar, die Tab-Reihenfolge dreimal so lang, und beim Durchtabben eines Formulars mit zehn Mengenfeldern werden daraus dreißig Stationen.

## Barrierefreiheit

### Das Wertefeld braucht Rolle und Grenzwerte.

Ein natives `<input type="number">` bringt beides mit. Wird die Anzeige selbst gebaut, verlangt das Spinbutton-Muster `role="spinbutton"` samt: `aria-valuenow`, `aria-valuemin` und `aria-valuemax`, sonst ist der Wert sichtbar, aber nicht ansagbar (WCAG 4.1.2 „Name, Role, Value“, Stufe A).

### Wo der Zahlenwert nicht selbsterklärend ist, `aria-valuetext` setzen.

Screenreader kommunizieren sonst „3“ statt „3 Stück“. Dieselbe Regel gilt schon beim Range-Slider.

### Die Bar braucht einen Namen.

Decrement, Value und Increment bilden ein Steuerelement. Ohne Bezug zum Label wissen Nutzende nicht, welchen Wert sie gerade verändern (WCAG 1.3.1 „Info and Relationships“, Stufe A).

### `disabled` am Grenzwert nimmt den Button aus der Ansage.

Erreicht der Wert das Minimum, verschwindet der Decrement-Button für die Tastatur vollständig. Nutzende erfahren nicht, dass es ihn gibt und warum er nicht mehr funktioniert. Mit `aria-disabled="true"` bleibt er auffindbar und ansagbar. Das ist dieselbe Abwägung wie beim Button. Nutzt man das Spinbutton-Muster mit Pfeiltasten, entfällt das Problem ohnehin: Dort begrenzen `aria-valuemin` und `aria-valuemax`, ohne dass eine Station verschwindet.

### Achtung beim Fokusverlust am Grenzwert.

Wer sich mit `Enter` Schritt-für-Schritt zum Minimum klickt, steht im Moment des Umschaltens auf einem Element, das gerade `disabled` wird. Der Fokus fällt dann zurück auf `<body>`, und der nächste Tab-Druck per Tastatur beginnt am Seitenanfang (WCAG 2.4.3 „Focus Order“, Stufe A). Auch das spricht klar für die Verwendung von `aria-disabled`.

### Die Wertänderung muss wahrnehmbar sein.

Steht der Wert in einem fokussierten Input Field, sagen Screenreader ihn beim Ändern mit an. Ist die Anzeige dagegen ein separates, nicht fokussierbares Element, bleibt die Änderung stumm — dann gehört sie in eine Live-Region.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Step Button Bar |
| 2 | Dominance | Decent, Regular, Prominent |
| 3 | Type | 40h, 40h-framed, 20h, 20h-framed, 20v |
| 4 | Style | Round, Quad, Rect |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus |
|  | Sonstiges | Step Button (2x) |

{% endreiter %}
