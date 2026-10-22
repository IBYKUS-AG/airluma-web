---
layout: inhaltsseite.njk
titel: Bottom Navigation
bereich: komponenten
aktuell: bottom-navigation
gruppe: navigation
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Eine **„Bottom Navigation“** ist eine etablierte UI‑Komponente vorrangig für mobile Top‑Level‑Navigation. Sie eignet sich für **3–5 gleichwertige Hauptziele,** zwischen denen Nutzende häufig wechseln, auf 320 px breiten Geräten allerdings nur für drei (siehe Layout). Sie ist ergonomisch, oft als Leiste oder „Navigation bar“ fest (fixed/not scrollable) am unteren Bildschirmrand platziert und sollte auf großen Bildschirmen durch andere passende UI-Elemente ersetzt werden. Bei weniger als 3 Hauptzielen sind Tabs möglich und bei mehr als 5 Hauptzielen ein Menü geeigneter.

## Abgrenzung

> Auch die Bottom Navigation Items unterscheiden sich konzeptionell zu unseren Buttons: Bei normalen Buttons signalisiert der Hover eine mögliche Aktion. Bottom Navigation Items hingegen sind Navigationsziele, also Links. Hier kennzeichnet der fehlende Hover-State des (nicht länger interaktiven) selected Links bewusst die aktuelle Seite bzw. die getroffene Auswahl.

## Varianten

Obwohl die Bottom Navigation vor allem für Smartphones und kleine Tablets entwickelt wurde, findet sie inzwischen auch in Desktop‑Anwendungen ihren Platz. Um beiden Nutzungskontexten gerecht zu werden, arbeiten wir mit zwei Größen: **„Decent“** als kompakte mobile Variante mit kleinerem Icon und kleinerem Text für ergonomische Bedienung und **„Regular“** als größere Desktop‑Variante, die mehr Raum für Icons, Labels und Interaktionen bietet.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Bottom Navigation-UI-Elements mit typischer Struktur und semantischer Gliederung für eine Top-Level-Navigation. Es ist ein rechteckiges Navigationselement mit abgerundeten Ecken und einem blauen Rahmen, dem „Focus stroke“, zur Markierung des Items per Tasttatursteuerung. Der transparente Hintergrund innerhalb des Rahmens ist als „Background“ markiert, der je nach Nutzer-Zustand variiert. Zentriert im oberen Bereich befindet sich ein kleines, schwarzes (Haus-) Icon, vom Typ „eIB“. Darunter steht das Wort „Startseite“ in schwarzer Schrift, gekennzeichnet als „Label“.", "Bottom Navigation Anatomie", "bottom-navigation-01" %}

Jedes Item besteht aus einem **Icon (eIB),** z.B. aus [unserem Iconset](icons.html), und idealerweise einem kurzen **Label** (ein Wort). Labels sind **verpflichtend, wenn das Icon allein nicht eindeutig ist.** Sind die Icons jedoch selbsterklärend, können die Labels entfallen. Ein aktives Item (selected) wird visuell von den anderen, nicht ausgewählten (unselected) Elementen mit unseren Primärfarben „Petrol“ **(Regular)** oder „Rot“ **(Prominent)** hervorgehoben.

## Zustände

{% abbildung "Grafik einer Bottom Navigation-Komponente mit typischer UI-Struktur. Dargestellt ist eine horizontale Leiste mit allen „User states“ von links nach rechts: ein farblich hervorgehobenes „Selected Item“, ein normales „Enabled“, ein ausgegrautes „Disabled“, ein leicht hellgraues „Hover“, ein hellgraues „Pressed“ und ein normales aber mit einem blauen Border umrandeter „Focus“.", "Bottom Navigation States", "bottom-navigation-02" %}

## Layout

{% abbildung "Grafiken der Bottom Navigation Items in „Regular“ und „Decent“ mit Maßlinien. Das Item der Desktop-Variante („Regular“) misst mindestens 120 × 66 px, mit 12 px Innenabstand oben, 4 px unten und 8 px seitlich; das Icon ist 24 px groß, das Label steht in Asap Medium 16 px auf 24 px Zeilenhöhe, mit 2 px Abstand zum Icon. Das Item der mobilen Variante („Decent“) misst mindestens 84 × 52 px, mit 8 px Innenabstand oben, 4 px unten und 8 px seitlich; das Icon ist 20 px groß, das Label steht in Asap Regular 14 px auf 20 px Zeilenhöhe, ohne Abstand zum Icon. Beide haben einen 2 px starken Rahmen und 4 px Eckenradius.", "Bottom Navigation Measurements", "bottom-navigation-03" %}

Unsere [Layout-Seite](layout.html) verlangt von jeder Komponente drei Angaben: das genutzte Primitiv, jede Abweichung mit Begründung und das Ergebnis der 320-px-Prüfung. Die vierte, die Mindestbreite im Auto-Grid, entfällt hier, da die Leiste keines ist.

### Sie nutzt keines der vier Primitive

Die Leiste besteht aus 3–5 gleichwertigen Zielen **in einer Zeile,** die **nicht umbrechen darf.** Damit scheiden „Cluster“ und „Auto-Grid“ aus, denn beide brechen um. Eine umbrechende Leiste wäre plötzlich doppelt so hoch und würde noch mehr Inhalt verdecken.

Stattdessen gilt eine feste Spaltenzahl. Der Abstand zwischen den Zielen beträgt 2 px in der Variante „Mobile“ und 8 px in „Desktop“. Beides liegt unter der Nähe-Skala, weil die Leiste als **ein Element** gelesen werden soll, wie bei unseren [Tabs](tabs.html).

``` CSS
.ibk-bottom-nav {
  display: grid;
  grid-template-columns: repeat(var(--ibk-bottom-nav-count, 4), 1fr);
}
```

### Sie liegt über dem Layout und nimmt trotzdem Platz weg

Unsere Layout-Seite kennt zwei Fälle: Elemente, die im Layout stehen, und solche, die darüber liegen, z.B. Dialog, Toast, Tooltip oder Dropdown.

Die **Bottom Navigation ist ein dritter Fall.** Sie liegt fest am unteren Rand über dem Inhalt, verschwindet aber nicht.

Daraus folgt eine Pflicht für die Seite, nicht für die Komponente: Der Seiteninhalt braucht unten einen Freiraum in Höhe der Leiste, sonst ist das letzte Element nie erreichbar. Auf Geräten mit Gestensteuerung kommt der Sicherheitsabstand des Systems hinzu.

``` CSS
.ibk-page-with-bottom-nav {
  padding-block-end: calc(var(--ibk-bottom-nav-height) + env(safe-area-inset-bottom, 0px));
}
```

### Mobile oder Desktop wird gewählt, nicht geschaltet

Die Property Type mit den Werten „Mobile“ oder „Desktop“ sieht nach einem Breakpoint aus, ist aber keiner. Sie wird beim Einsetzen entschieden, nicht zur Laufzeit umgeschaltet. Damit bleibt die Regel unserer Layout-Seite gewahrt: keine Viewport-Media-Query in einer Komponente. Muss die Variante doch automatisch wechseln, gehört die Abfrage an die Anwendungshülle, **als Container Query,** nicht als Viewport-Abfrage.

Dasselbe gilt für den Satz in der [Einleitung](#ueberblick), die Leiste solle auf großen Bildschirmen durch ein anderes Element ersetzt werden: Das ist eine Entwurfsentscheidung, keine automatische Umschaltung.

### Ergebnis der 320-px-Prüfung

Ein Ziel misst mindestens **84 × 52 px** (Mobile) beziehungsweise **120 × 66 px** (Desktop). Daraus ergibt sich die Mindestbreite der ganzen Leiste:

| Ziele | Mindestbreite (Mobile) | Bei 320 px |
| --- | --- | --- |
| 3 | 256 px (3 \* 84 + 2 \* 2) | passt |
| 4 | 342 px (4 \* 84 + 3 \* 2) | passt **nicht** |
| 5 | 428 px (5 \* 84 + 4 \* 2) | passt **nicht** |

**Bei 320 CSS-Pixeln sind nur drei Ziele zulässig.** Vier oder fünf erzwingen waagerechtes Scrollen und verstoßen gegen _WCAG 1.4.10 („Reflow“, Stufe AA)._ Die Ausnahme für zweidimensionale Inhalte greift nicht, da eine Navigationsleiste eindimensional ist. Ab etwa 360 px Breite passen vier Ziele, ab 440 px fünf.

Die **Trefferfläche ist dabei nie das Problem:** 84 × 52 px liegen deutlich über den geforderten 24 × 24 CSS-Pixeln _(WCAG 2.5.8 „Target Size (Minimum)“, Stufe AA)_ und auch über den 44 × 44 px, die für Touch empfohlen werden _(WCAG 2.5.5 „Target Size (Enhanced)“, Stufe AAA)._

### Was mit langen Labeln passiert

Das Label steht auf einer Zeile und bricht nicht um. Ein Ziel wächst deshalb über seine Mindestbreite hinaus, sobald das Wort breiter ist als der Innenraum. In der mobilen Variante bleiben von den 84 px nach Rahmen und Innenabstand rund 64 px für den Text, z.B. „Startseite“ in Asap Regular 14 px braucht schon etwas mehr, das Ziel wird also rund 86 px breit. Vier solcher Ziele sprengen die 320 px Grenze.

Daraus folgt die Regel: **ein kurzes Wort pro Label.** Das ist keine Stilempfehlung, sondern die Bedingung dafür, dass die Bottom Navigation als Einzeiler aufgeht. Reicht ein Wort nicht, ist sie für diese Ziele das falsche Element.

> Bei 200 % Textvergrößerung wächst das Label mit. Da es nicht umbricht, wächst die Leiste in die Breite und nicht in die Höhe. An dieser Stelle kann die Prüfung nach WCAG 1.4.4 („Resize Text“, Stufe AA) auch auf einem schmalen Gerät scheitern und muss überprüft werden.

## Tastaturbedienung

Die Bottom Navigation ist eine Navigation und folgt deshalb unserem Navigationsmuster: eine Liste von Links in einem benannten Bereich. Sie bekommt ihre Bedienung damit von HTML geschenkt.

**Jedes Ziel ist eine eigene Station in der Tab-Reihenfolge.** Es gibt keine gemeinsame Station und keine Pfeiltastensteuerung für die Leiste, anders als beim ähnlich aussehenden [Segmented Control](segmented-control.html), das eine Auswahl trifft statt zu navigieren.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Ziel zu Ziel |
| Enter | Folgt dem Ziel |
| Leertaste | Wirkt **nur,** wenn das Ziel technisch ein Button ist |

Das aktuelle Ziel ist nicht mehr interaktiv und liegt damit **nicht in der Tab-Reihenfolge.** Nutzende tabben also an ihm vorbei. Dass sie gerade dort stehen, muss ihnen die Auszeichnung sagen, nicht die Farbe.

### Wo die Leiste in der Tab-Reihenfolge steht

Sichtbar liegt sie unten, im Quelltext kann sie überall stehen. Beides muss zusammenpassen _(WCAG 2.4.3 „Focus Order“, Stufe A)._ Wir setzen sie **ans Ende des Dokuments:** Sie enthält Hauptziele, keine Werkzeuge für die aktuelle Seite, und wer per Tastatur arbeitet, will zuerst an den Inhalt.

Bei langen Seiten wird der Weg dorthin dann allerdings weit. Ein Sprunglink am Seitenanfang, der direkt zur Navigation führt, löst das. Dieselbe Technik, die auch zum Inhalt springt.

### Nach dem Wechsel

Ein Zielwechsel tauscht den Seiteninhalt aus, der Fokus bliebe aber auf der Leiste stehen. Nutzende hören dann nicht, dass sich etwas geändert hat. Der Fokus gehört nach dem Laden auf die Hauptüberschrift der neuen Seite. Das ist zugleich die Antwort auf den Plattform-Hinweis unter [Do’s & Don’ts](#dos-donts): Ob eine Sektion zurückgesetzt wird oder nicht, ist eine Produktentscheidung, aber dass der Fokus wandert, ist keine.

## Barrierefreiheit

*   **Die Leiste steht in einem benannten** `<nav>`**\-Bereich,** etwa `aria-label="Hauptnavigation"`. Gibt es auf der Seite noch eine zweite Navigation, unterscheidet nur der Name die beiden.
*   **Die Ziele stehen in einer Liste.** Erst dadurch wird „Liste mit 5 Einträgen“ angesagt und die Länge der Leiste vorab erfassbar _(WCAG 1.3.1 „Info and Relationships“, Stufe A)._ Optische Anordnung allein trägt das nicht.
*   **Der ausgewählte Zustand heißt „Active“ / „Selected“.** Programmatisch trägt das aktuelle Ziel `aria-current="page"`. Die farbliche Hervorhebung ist nur die sichtbare Hälfte: Ohne `aria-current` erfahren Screenreader-Nutzende nie, wo sie sind, und weil das Ziel nicht interaktiv ist, tabben sie auch nicht darüber. Zwei Attribute passen hier ausdrücklich nicht: `aria-selected` gehört zu Auswahllisten und `aria-pressed` zu Umschaltern. Dieselbe Technik (ARIA26) nutzen wir im [Navigation Menu](navigation-menu-item.html), in der [Pagination](pagination.html) und im [Breadcrumb](breadcrumbs.html).
*   **Ein Ziel ohne sichtbares Label braucht trotzdem einen Namen.** Weiter oben steht, dass das Label bei selbsterklärenden Icons entfallen kann. Das ist eine gestalterische Entscheidung und ändert nichts daran, dass der Name programmatisch vorhanden sein muss _(WCAG 4.1.2 „Name, Role, Value“, Stufe A; für Links zusätzlich 2.4.4 „Link Purpose (In Context)“, Stufe A)._ „Selbsterklärend“ gilt für das Auge, nicht für den Screenreader.
*   **Das Badge gehört in den Namen.** Eine rote Zahl am Icon ist sonst reine Optik. Der Name muss sie mittragen: „Nachrichten, 3 ungelesen“ statt „Nachrichten“. Ändert sich die Zahl während der Nutzung, gehört die Änderung zusätzlich in eine Live-Region _(WCAG 4.1.3 „Status Messages“, Stufe AA)._
*   **Deaktivierte Ziele besser mit** `aria-disabled`. Bei einer Navigation ist gerade die Information wichtig, dass ein Bereich existiert und nur gerade nicht erreichbar ist. Das HTML-Attribut `disabled` nimmt das Ziel aus der Tab-Reihenfolge und aus der Ansage. Dieselbe Abwägung wie beim [Button](button.html).
*   **Die Leiste darf den Fokus nicht verdecken.** Sie ist eine feststehende Fußzeile, und genau die nennt das W3C als typischen Fehlerfall: Ein fokussiertes Element darf nicht vollständig von anderem Inhalt überdeckt werden _(WCAG 2.4.11 „Focus Not Obscured (Minimum)“, Stufe AA)._ Der Freiraum aus dem Layout-Abschnitt löst das im Normalfall; zusätzlich hilft `scroll-padding-bottom` in derselben Höhe, damit beim Tabben nichts unter die Leiste rutscht.
*   **Der „Focus stroke“ bleibt in allen Zuständen sichtbar** _(WCAG 2.4.7 „Focus Visible“, Stufe AA)._ Bei der kompakten Variante „Decent“ ist der Platz knapp. Er darf trotzdem nicht entfallen.
*   **Reihenfolge und Position bleiben auf allen Seiten gleich** _(WCAG 3.2.3 „Consistent Navigation“, Stufe AA)._ Ein Ziel, das je nach Seite an anderer Stelle steht, kostet genau die Orientierung, für die es die Leiste gibt.
*   **Die Ziele sind zusätzlich anderswo erreichbar.** Eine feste Leiste mit fünf Zielen ist für Nutzende mit Tremor schwer zu treffen; _WCAG 2.4.5 („Multiple Ways“, Stufe AA)_ verlangt ohnehin mehr als einen Weg zu einer Seite.
*   **Die mobile Variante nutzt den kleineren eIB.** Unsere Bibliothek unterscheidet „eIB Regular“ (24 px) und „eIB Decent“ (20 px) und kennzeichnet letzteres als nicht WCAG-konform. Solange das Label die Bedeutung trägt, ist das unkritisch, da das Icon nur begleitet. Entfällt das Label, trägt das Icon die Bedeutung allein: Dann braucht es einen zugewiesenen Namen und muss als Erkennungsmerkmal ausreichend kontrastieren _(WCAG 1.4.11 „Non-text Contrast“, Stufe AA)._

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Bottom Navigation Item |
| 2 | Dominance | Decent, Regular, Prominent |
| 3 | Type | Mobile, Desktop |
| 4 | Style | – |
| 5 | State | Enabled, Active (Selected), Disabled, Hover, Pressed, Focus |
|  | Sonstiges | Nested eIB, Label, Show Label |

Dominance und Type sind gekoppelt:

*   „Desktop“ gibt es als „Regular“ oder „Prominent“,
*   „Mobile“ als „Decent“ oder „Prominent“.

„Decent“ und „Regular“ bestimmen dabei die Größe, „Prominent“ die Farbe „Red-41“ statt „Petrol“.

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Bottom Navigation Bar |
| 2 | Dominance | – |
| 3 | Type | Mobile, Desktop |
| 4 | Style | – |
| 5 | State | – |
|  | Sonstiges | Bottom Navigation Items |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

Badges sollten nur für relevante, dynamische Informationen und stets sparsam eingesetzt werden. Wir wollen resultierende Überladung für die Nutzenden vermeiden.

> Achtet immer auf plattformkonformes Verhalten! Auf Android kann ein Wechsel die Sektion zurücksetzen; auf iOS sollte der Zustand erhalten bleiben. Entscheidet bewusst und dokumentiert gegebenenfalls die Abweichungen.

{% endreiter %}
