---
layout: inhaltsseite.njk
titel: Toast
bereich: komponenten
aktuell: toast
gruppe: systemfeedback
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Ein Toast (oder auch Inline notification, Status-, Popup- oder Transient-Message) ist ein kleines, temporäres Benachrichtigungselement, das dem Nutzenden **kurzzeitig eine Information** oder Systemfeedback anzeigt, ohne ihn in seinem aktuellen Workflow zu unterbrechen. Er **verschwindet automatisch** nach wenigen (meist) 2–3 Sekunden und erfordert keine direkte Interaktion.

## Wann verwenden

Toasts sind ideal **für kurze Statusmeldungen oder Systemrückmeldungen,** wie z.B. „Einstellungen gespeichert“ oder „Offline-Modus aktiviert“. Sie tauchen oft am unteren Rand (Android) des Bildschirms auf und verschwinden, bevor der Nutzende überhaupt daran denkt, etwas tun zu müssen – genau so ist es gedacht.

### Wann ein Toast das falsche Element ist

#### Fehler und Warnungen.

Wer die Meldung verpasst, erfährt nicht, was schiefging. Fehler gehören z.B. an das [Input Field](input-field.html) oder in einen [Banner](banner.html), der stehen bleibt.

#### Alles mit einer Aktion.

Ein „Rückgängig“ im Toast ist per Tastatur nicht erreichbar: Der Fokus kommt nicht hin, und nach zwei Sekunden ist das Element weg. Das ist die Snackbar aus dem Abschnitt [Toast vs. Snackbar](#toast-vs-snackbar) — sie braucht eine eigene Umsetzung samt Fokusverwaltung.

#### Längere Texte.

Zwei bis drei Sekunden reichen für „Einstellungen gespeichert“. Für zwei Zeilen reichen sie nicht, schon gar nicht für Nutzende, die vergrößern, übersetzen oder langsamer lesen. Unser Type „eIB+twoLabel“ ist damit der Grenzfall, den man sich genau ansehen sollte.

## Abgrenzung

### Toast vs. Snackbar

Die Snackbar ist ein verwandtes Element, bietet aber im Gegensatz zum Toast oft eine direkte Aktion (z.B. „Rückgängig“). Sie wird deshalb eher im Kontext von Dialogen oder interaktiven Benachrichtigungen eingesetzt.

> Ein Toast ist wie ein flüchtiges Schulterklopfen –
> nett, aber vorbei, bevor man reagieren kann.

> Eine Snackbar ist wie ein Zettel, den dir jemand in die Hand drückt –
> du kannst ihn ignorieren oder sofort darauf antworten.

## Varianten

Im Ides bieten wir zwei Dominanzen:
1.  Regular und
2.  Decent,

sowie **drei Typen** eines Toasts:
1.  mit einem dekorativem eIB oder
2.  ohne eIB (nur Text) oder
3.  mit einem dekorativem eIB und zwei Textlabel.

und alle Typen wiederum in **vier Styles** an:
1.  Regular,
2.  Success,
3.  Warning und
4.  Alert.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Toast-UI-Elements zur kurzzeitigen Anzeige von Systemmeldungen. Der Toast besteht aus einem rechteckigen Feld mit stark abgerundeten Ecken und einem dunklen Hintergrund. Enthalten ist ein kurzer Informationstext sowie ein optionales Info-Icon vom Typ „eIB“, das linksbündig vor dem Text platziert ist.", "Toast Anatomie", "toast-01" %}

## Layout

{% abbildung "Grafik eines Toast-UI-Elements mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Gezeigt wird eine rechteckige Toast-Meldung mit dem Text „Einstellungen gespeichert“ und einem optionalen, führenden eIB-Icon. Die Maßangaben verdeutlichen vertikale und horizontale Abstände: Das Icon ist 20 px groß, der Abstand oberhalb und unterhalb des Textes beträgt jeweils 10 px. Horizontal sind 16 px Abstand vom linken Rand zum Icon, 16 px zwischen Icon und Text sowie 32 px zwischen Text und rechtem Rand vorgesehen.", "Toast Measurements", "toast-02" %}

**Der Toast ist ein „Cluster“** mit `--ibk-spacing-8`, der umbrechen darf. Dasselbe gilt für seinen Inhalt und den Textbereich.

## Tastaturbedienung

**Der Toast hat schlicht keine** — und das ist kein Versäumnis, sondern seine Definition. Er enthält keinen Button, kein Schließen-Icon und keinen Link; der eIB ist optional. Damit ist der Toast **keine Station in der Tab-Reihenfolge**, es gibt keine Taste, die auf ihn wirkt, und Nutzende können ihn weder erreichen noch anhalten.

Solange er nur bestätigt, was gerade passiert ist („Einstellungen gespeichert“), ist das unproblematisch. Kritisch wird es in dem Moment, in dem er etwas mitteilt, das man gelesen haben muss.

> Deshalb gilt: Ein Toast darf nie der einzige Weg zu einer Information sein. WCAG 2.2.1 („Timing Adjustable“, Stufe A) betrifft jedes vom Inhalt gesetzte Zeitlimit. Das Understanding-Dokument stellt jedoch klar, dass das Verschwinden einer Meldung kein Zeitlimit setzt, solange sich dieselbe Information auch anders feststellen lässt. Genau daran hängt die Zulässigkeit unseres Toasts. Trüge er etwas Exklusives, bräuchte er eine Möglichkeit, ihn anzuhalten oder zu verlängern — und wäre damit kein Toast mehr.

## Barrierefreiheit

### Der Toast muss angesagt werden, ohne den Fokus zu nehmen.

Zitat: _„Sichtbar erscheint er am Bildschirmrand“, _ jedoch für Screenreader existiert er nur, wenn er in einer Live-Region steht (WCAG 4.1.3 „Status Messages“, Stufe AA). Den Fokus dorthin zu verschieben, wäre ausdrücklich falsch! Er unterbräche damit genau den Arbeitsfluss, den er nicht unterbrechen soll.

### Die Rolle richtet sich nach dem Style.

Für „Regular“ und „Success“ ist `role="status"` richtig; „Warning“ und „Alert“ gehören zu `role="alert"`, weil sie die laufende Ausgabe unterbrechen dürfen. Das entspricht der Zuordnung, die WCAG 4.1.3 für Zustandsmeldungen einerseits und für Warnungen und Fehler andererseits nennt.

### Die vier Styles dürfen sich nicht allein durch die Farbe unterscheiden.

Derzeit tun sie genau das! Falls der eIB als dekorativ definiert ist und es kein Textpräfix gibt, trägt die Hintergrundfarbe damit die Unterscheidung zwischen „Success“, „Warning“ und „Alert“ ganz allein. Das verstößt gegen WCAG 1.4.1 („Use of Color“, Stufe A). Zwei Wege führen heraus, und sie schließen einander nicht aus:

1.  Entweder **wird der eIB je Style bedeutungstragend**, z.B. ein „Haken“ bei Success, ein „Ausrufezeichen“ bei Alert. Dann ist er nicht länger dekorativ und braucht einen zugänglichen Namen statt \`aria-hidden="true"\`.
2.  Oder **der Text benennt die Art der Meldung**, z.B. „Fehler: Verbindung unterbrochen“. Das kostet an der Komponente nichts, muss dafür aber als Schreibregel festgehalten werden.

### Ein rein dekorativer eIB bekommt `aria-hidden="true"`.

Sonst gibt der Screenreader das Zeichen der Icon-Font aus.

### Mehrere Toasts kurz nacheinander überschreiben einander.

Eine Live-Region gibt jeweils nur die letzte Änderung aus. Wo mehrere Meldungen dicht aufeinanderfolgen können, braucht es eine Warteschlange — sonst hören Nutzende nur die letzte, während sehende Nutzende alle gesehen haben.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Toast |
| 2 | Dominance | Regular, Decent |
| 3 | Type | Label, eIB+Label, eIB+twoLabel |
| 4 | Style | Regular, Success, Warning, Alert |
| 5 | State | – |
|  | Nested instances | eIB, Text, Text S |

{% endreiter %}
