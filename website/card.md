---
layout: inhaltsseite.njk
titel: Card
bereich: komponenten
aktuell: card
gruppe: content
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Eine Card bündelt zusammengehörige Inhalte, wie Texte, verschiedene Medien oder klickbare Aktionen, zu einer optisch klar abgegrenzten, eigenständigen Einheit. Sie ist ein **Container** und sonst nichts: Wir definieren ihre Fläche, ihren Innenabstand und ihre Kante. Was innerhalb der Card steht, entscheidet der spezielle Anwendungsfall.

Häufig, aber nicht zwingend, ist eine Card ein Anreißer, mit verkürztem Inhalt und einer Verlinkung auf die vollständigen Details. Das ist jedoch eine Verwendung, keine Variante, und genau der Fall mit den meisten Fallstricken (siehe „Wenn die ganze Card klickbar sein soll“).

## Wann verwenden

> Eine Card ist kein Ersatz für Struktur. Wer nur optisch bündeln will, nimmt einen größeren Abstand oder zeichnet durch [Typografie](typografie.html) aus. Wer Formularfelder gruppiert, nimmt unbedingt unser [Fieldset](fieldset.html). Die Card grenzt ab, sie erklärt nichts.

Wenn mehrere Cards in einem Layout stehen, enthalten sie oft nicht dieselbe Art von Information. Die eine trägt eine Textzusammenfassung, die nächste ein Bild und die dritte Card nur Kennzahlen. Cards erlauben deshalb unterschiedliche Höhen bei gleicher Breite.

Damit sind sie ideal, wenn viele verschiedene Inhaltselemente auf einer Seite nebeneinander stehen sollen, z.B. auf einem Dashboard. Sie eignen sich außerdem besonders für Situationen, in denen Nutzende nicht gezielt suchen, sondern stöbern. Wer gezielt sucht und vergleicht, ist mit einer [Table](table-item.html) besser bedient. Cards sind zum Überfliegen gebaut, nicht zum Wertevergleich von Spalte zu Spalte.

> Nicht jede Fläche ist eine Card. Unser [Dialog](dialog.html) und [Banner](banner.html) sehen aus wie eine Card mit Schatten, sind aber eigene Komponenten mit eigenem Verhalten. Verwendet die jeweiligen Komponenten für ihre festgelegten Muster und nicht einfach eine Card.

## Varianten

### Drei Typen, vier Flächen

Der **Type** bestimmt, wie die Kante entsteht, **Style** legt die Helligkeit der Fläche fest:

| Type | Kante |
| --- | --- |
| Filled | Gefüllte Fläche, keine Linie, kein Schatten = meist Standardfall |
| Bordered | Transparent, 1 px Linie |
| Elevated | Gefüllte Fläche plus Schatten – für eine sichtbare Tiefenwirkung |

| Style | Farbe |
| --- | --- |
| Delta-0 | White100 (#ffffff) |
| Delta-2 | Grey98 (#fafafa) |
| Delta-6 | Grey94 (#f0f0f0) |
| Delta-10 | Grey90 (#e6e6e6) |

Das ergibt zwölf Kombinationen, von denen längst nicht alle sinnvoll sind. **Welche funktionieren, hängt allein vom Hintergrund ab, auf dem die Card liegt.** Mehr dazu im Abschnitt Barrierefreiheit.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik mit der Darstellung einer hellgrauen, rechteckigen Fläche mit abgerundeten Ecken, die eine „Card“ symbolisiert. Rechts neben der Fläche ist eine Beschriftung „Card“ in roter Schrift mit einer horizontalen Linie zur Fläche hin. Unterhalb der Fläche befindet sich ein dezenter Schatteneffekt, auf den eine weitere rote Beschriftung mit der Linie „Dropshadow“ zeigt.", "Anatomie einer Card", "card-01" %}

Die Card besteht in Figma aus genau zwei Teilen: der Fläche und einem Inhaltsbereich („Slot“), der durch die Innenabstände begrenzt wird. Der Schatten ist kein dritter Teil, sondern gehört nur zum Typ „Elevated“.

## Layout

{% abbildung "Grafik einer hellgrauen Card mit abgerundeten Ecken auf weißem Hintergrund. Die Card zeigt markierte Abstände: Oben und links jeweils ein rosa eingefärbter Bereich mit der Beschriftung „16 px“ in Rot, welche auf einen Innenabstand von 16 px hinweist. Unten rechts ist ein kleiner Kreis mit einer Linie und der Beschriftung „10 px“ versehen, der den Border-Radius von 10 Pixeln markiert.", "Innenabstände und Border-Radius der Card", "card-02" %}

| Maß | Wert | Token |
| --- | --- | --- |
| Innenabstand, umlaufend | 16 px | `--ibk-spacing-16` |
| Eckenradius | 10 px | `--ibk-radius-10` |
| Schatten (nur „Elevated“) | 0 / 4 / 4 px, Schwarz 25 % | `--ibk-shadow-1` |

Der Radius `--ibk-radius-10` (10 px) ist unser Wert für große Flächen: z.B. Card, Dialog, Banner und Dropdown teilen ihn sich. Ein 4 px hoher Chip verträgt ihn nicht.

Unsere [Layout-Seite](layout.html) verlangt von jeder Komponente vier Angaben: das genutzte Primitiv, jede Abweichung mit Begründung, die Mindestbreite im Auto-Grid und das Ergebnis der 320-px-Prüfung. Die Card ist der Musterfall für das Auto-Grid. Hier stehen deshalb alle vier Angaben:

### Außen: Auto-Grid

Mehrere Cards nebeneinander sind gleichwertige Kacheln mit gleicher Breite und freier Höhe. Genau dafür gibt es `.ibk-auto-grid`, mit `--ibk-spacing-24` zwischen den Kacheln.

**Die Card selbst bekommt keine Breite.** Wie breit sie wird, entscheidet das Grid, nicht die Komponente. Dieselbe Card muss in einer 20 rem breiten Nebenspalte genauso funktionieren wie im breiteren Hauptbereich.

### Mindestbreite im Auto-Grid

Die Mindestbreite beantwortet eine einzige Frage: **Ab wann wird der Inhalt dieser Card unleserlich?** Darüber entscheidet der Inhalt und nicht der uns unbekannte Bildschirm.

| Inhalt der Card | Klasse | Mindestbreite |
| --- | --- | --- |
| Eine Kennzahl, ein Label | `.ibk-auto-grid-narrow` | 12 rem |
| Überschrift, kurzer Text, eine Aktion | `.ibk-auto-grid` | 20 rem |
| Bild, Fließtext, mehrere Aktionen | `.ibk-auto-grid-wide` | 28 rem |

### Innen: Stack

Der Inhalt einer Card ist oft ein `.ibk-stack`: Überschrift, Text, Aktionsleiste untereinander. Sollen die Buttons mehrerer Cards auf einer Höhe abschließen, obwohl die Texte verschieden lang sind, setzt `.ibk-stack-push` auf die Aktionsleiste. Dann rutscht sie an den unteren Rand, ohne dass irgendwo eine feste Höhe steht.

Das funktioniert, weil Kacheln einer Zeile standardmäßig gleich hoch sind. Wer das nicht will, nimmt `.ibk-auto-grid-align-start`.

### Eine Card ohne Layout-Container ist nur so breit wie ihr Inhalt

`.ibkCard` ist im Code `display: inline-block`. In einem Grid oder Flex-Container spielt das keine Rolle, dort wird die Card ohnehin zum Block. Steht sie aber **allein im Fließtext,** schrumpft sie auf ihren Inhalt zusammen, statt die Breite auszufüllen. Das überrascht regelmäßig. Eine einzelne Card gehört deshalb in einen `.ibk-stack` oder bekommt `display: block`.

### Ergebnis der 320-px-Prüfung

Das Auto-Grid besteht die Prüfung von sich aus: `minmax(min(var(--ibk-auto-grid-min), 100%), 1fr)`. Das `min(…, 100%)` sorgt dafür, dass eine Kachel nie breiter wird als der verfügbare Platz. Bei 320 px steht also **eine Card pro Zeile,** auch bei 28 rem Mindestbreite. Dazu ist kein waagerechtes Scrollen und kein Breakpoint zur richtigen Darstellung nötig _(WCAG 1.4.10 „Reflow“, Stufe AA)._

**Zu prüfen bleibt der Inhalt:** Eine Tabelle, ein breites Bild oder eine Zeile aus vier Buttons in der Card kann bei 320 px trotzdem überlaufen. Die Card schützt nur ihre eigene Kante, nicht das, was darin steht.

## Tastaturbedienung

Eine Card ist ein Container und **hat** deshalb **keine eigene Tastaturbedienung.** Sie ist kein Tab-Stopp, sie bekommt kein `tabindex`, sie reagiert auf keine Taste. Was bedienbar ist, sind die Elemente darin und die bringen ihre Bedienung jeweils selbst mit. Daraus resultieren drei Fälle, und nur der dritte ist heikel.

### Fall 1: Card ohne Bedienelemente

Reiner Inhalt. Nichts zu tun. Die Card taucht in der Tab-Reihenfolge nicht auf.

### Fall 2: Card mit Bedienelementen darin

Der Normalfall. Jeder Link und jeder Button in der Card ist eine eigene Station, in der Reihenfolge des Quelltextes. Sichtbare und programmatische Reihenfolge müssen dabei zusammenpassen _(WCAG 2.4.3 „Focus Order“, Stufe A)._ Das Auto-Grid ordnet nicht um, solange niemand `order` oder `grid-auto-flow: dense` einsetzt. Tut es doch jemand, laufen Auge und Tabulator auseinander.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Zum nächsten bzw. vorigen Bedienelement auch über Cardgrenzen hinweg |
| Enter | Löst Link oder Button aus |
| Leertaste | Löst Buttons aus, keine Links |

Bei zehn Cards mit je drei Aktionen sind das dreißig Stationen. Das ist kein Fehler, aber ein wichtiger Grund, die Anzahl der Aktionen je Card kleinzuhalten.

### Fall 3: Wenn die ganze Card klickbar sein soll

Hier liegt der eigentliche **Fallstrick,** und er ist nicht gestalterisch, sondern technisch. Der HTML-Standard sagt zum `<a>`\-Element:

> „Transparent, but there must be no interactive content descendant, `a` element descendant, or descendant with the `tabindex` attribute specified.“

Eine Card, die als Ganzes in einem `<a>` steckt, **darf also keinen weiteren Link und keinen Button enthalten.** Für `<button>` gilt dieselbe Einschränkung. Wer es trotzdem tut, erzeugt ungültiges HTML und Browser und Screenreader gehen damit jeweils unterschiedlich um.

Dazu kommen zwei praktische Nachteile: Der zugängliche Name des Links ist dann der **gesamte Cardinhalt.** Screenreader lesen somit Überschrift, Fließtext und Bildbeschreibung als einen einzigen, sehr langen Linktext vor. Und markierbar ist der Text nicht mehr, weil jedes Ziehen mit der Maus zum Klick wird.

> Unsere Empfehlung: Nicht die Card, sondern die Überschrift verlinken und deren Trefferfläche über die Card ausdehnen.

``` CSS
.ibkCard { position: relative; }

.ibkCard h3 a::after {
  content: "";
  position: absolute;
  inset: 0;
}

.ibkCard:focus-within {
  outline: solid 2px var(--ibk-focusstroke);
  outline-offset: 2px;
}
```

Damit bleibt genau ein Tab-Stopp mit einem kurzen, sinnvollen Linktext, die Fläche ist trotzdem vollständig klickbar, und weitere Bedienelemente in der Card funktionieren weiter. Sie brauchen nur `position: relative`, um über der Fläche zu liegen.

Zwei Dinge sind dabei zu beachten: `overflow: hidden` auf der Card (beliebt, um ein Bild an den Radius anzupassen) schneidet den Fokusring ab. Und `:focus-within` reagiert auch auf jedes andere fokussierte Element in der Card. Wenn innerhalb der Card **mehrere Aktionen** liegen, gehört der Ring an das jeweils fokussierte Element statt an die ganze Card.

## Barrierefreiheit

*   **Jede Card braucht eine Überschrift.** Sie ist die einzige Ansage, dass hier eine neue Einheit beginnt; die Kante ist reine Optik _(WCAG 1.3.1 „Info and Relationships“, Stufe A)._ Die Überschriftenebene richtet sich nach der Seite, nicht nach der Card: Steht das Raster unter einer `<h2>`, sind die Cards `<h3>`, und zwar alle. Eine Card ohne Überschrift ist ein `<div>` und kein `<section>`.
*   **Ein Raster aus Cards ist eine Liste.** Erst dadurch wird „Liste mit 8 Einträgen“ angesagt und die Länge vorab erfassbar. Die optische Anordnung im Grid trägt das nicht _(WCAG 1.3.1)._ Dieselbe Regel wie bei unserer [Bottom Navigation](bottom-navigation.html).
*   **Kein** `role` **ohne Not.** Die Card selbst braucht keine ARIA-Rolle. Ist ihr Inhalt in sich abgeschlossen und auch außerhalb der Seite sinnvoll (Meldung, Beitrag, Produkt), ist `<article>` richtig. Ein `<section>` ist nur dann sinnvoll, wenn es über `aria-labelledby` auf die Überschrift zeigt. Ein unbenanntes `<section>` erzeugt Rauschen ohne Nutzen.
*   **Die Kante muss gegen den Hintergrund ankommen.** Das ist der wichtigste Punkt dieses Artikels, denn die Farbwahl der Card ist frei. Solange sie nur gruppiert, ist das kein Verstoß: Eine **dekorative Abgrenzung fällt nicht unter** _WCAG 1.4.11 („Non-text Contrast“, Stufe AA)._
*   **Wird die Card als Ganzes bedienbar,** identifiziert ihre Kante das Bedienelement. Dann gilt _WCAG 1.4.11,_ und keine der vier Flächen erreicht auf hellem Grund 3 : 1.
*   Die **Kombination Filled + Delta-0 auf weißem Grund = unsichtbar.** Keine Linie, kein Schatten, gleiche Farbe wie die Seite. Sie ist technisch gültig und praktisch sinnlos. Dasselbe gilt für jede Kombination, bei der Cardfarbe und Seitenfarbe übereinstimmen.
*   **Der Schatten ist Dekoration, kein Zustand.** „Elevated“ sagt nichts über Klickbarkeit, Auswahl oder Aktivität aus. Wer über den Schatten signalisiert, dass etwas anklickbar ist, nutzt Farbe und Tiefe als einziges Mittel _(WCAG 1.4.1 „Use of Color“, Stufe A)._ Klickbarkeit erkennt man an einem beschrifteten [Link](link.html) oder [Button](button.html) in der Card.
*   **„Mehr erfahren“ reicht nicht.** In einem Raster stehen zwanzig identische Linktexte untereinander, und Screenreader-Nutzende rufen Links häufig als Liste ohne Umgebung ab. Der Zweck muss aus dem Linktext oder dem programmatisch bestimmten Kontext hervorgehen _(WCAG 2.4.4 „Link Purpose (In Context)“, Stufe A)._ Der Weg über die verlinkte Überschrift löst das nebenbei mit; wer beim generischen Text bleibt, ergänzt ihn per `aria-label` um den Titel. Aus dem Linktext allein verständlich zu sein, ist Stufe AAA _(WCAG 2.4.9 „Link Purpose (Link Only)“)._
*   **Bilder in der Card sind fast immer dekorativ.** Ein Anreißerbild, dessen Aussage schon in der Überschrift steht, bekommt `alt=""`. Trägt das Bild eigene Information, braucht es einen Alternativtext und darf dann nicht ausschließlich das Bild verlinken.
*   **Die Trefferflächen liegen innen, nicht außen.** Die Card ist mit mindestens 8 × 8 rem groß genug und in der Praxis nie das Problem. Kritisch sind kleine Bedienelemente darin, etwa ein eIB in der Ecke: Er muss 24 × 24 CSS-Pixel erreichen _(WCAG 2.5.8 „Target Size (Minimum)“, Stufe AA)._
*   **Der Fokusring darf nicht abgeschnitten werden** _(WCAG 2.4.7 „Focus Visible“, Stufe AA)._ Zwei Ursachen sehen wir immer wieder: `overflow: hidden` auf der Card und ein zu knapper `gap` im Grid, bei dem der Ring des einen Elements unter der Nachbarkarte verschwindet. Die 24 px aus dem Auto-Grid reichen dafür aus.

## Einschränkungen

Anwendungsfälle für Cards werden extrem unterschiedlich sein. Deshalb geben wir bewusst wenig vor, und es ist wichtig zu wissen, was wenig heißt.

**Festgelegt sind:** Innenabstand 16 px umlaufend, Eckenradius 10 px, Mindestmaße 8 × 8 rem, der Schatten für „Elevated“ sowie die vier Flächenfarben Delta-0 bis Delta-10.

**Nicht festgelegt sind:** der gesamte Inhalt, die Breite, die Höhe, jede Aufteilung im Innern und ob und wie die Card bedienbar ist.

Für die Farbwahl gelten die allgemeinen Benutzungshinweise: nur Farben aus der Variablen-Bibliothek, und die Luminanzwerte sind zu beachten. Der Abschnitt Barrierefreiheit zeigt, was das konkret bedeutet. Vier unterschiedlich helle Flächen auf hellem Grund unterscheiden sich kaum: Delta-10 auf Weiß erreicht 1,25:1 und Delta-0 auf Weiß nur 1:1.

## Umsetzung

Die Web Component `<ibk-card>` kennt eine **Property variant** mit den Werten „solid“, „elevated“ und „border“. Sie entsprechen den Figma-Typen „Filled“, „Elevated“ und „Bordered“. Eine Entsprechung zur Style-Ebene gibt es im Code nicht: Die Komponente liefert immer Grey94 als Fläche. Andere Flächenfarben werden derzeit auf Seitenebene überschrieben.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Card |
| 2 | Dominance | – |
| 3 | Type | Filled, Bordered, Elevated |
| 4 | Style | Delta-0, Delta-2, Delta-6, Delta-10 |
| 5 | State | – |
|  | Sonstiges | „Slot“ (als Figma-Technik, um Inhalt einzufügen) |

{% endreiter %}
