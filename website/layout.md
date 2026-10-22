---
layout: inhaltsseite.njk
titel: Layout
bereich: grundlagen
aktuell: layout
---
Die meisten Oberflächen bestehen aus überraschend wenigen Anordnungen:

*   Elemente **untereinander,**
*   Elemente **nebeneinander,**
*   **gleichwertige** Kacheln,
*   **Haupt- & Nebenspalte** (Raumverteilung).

Wir geben diesen vier Anordnungen Namen und Abstandsvorschläge. Sie heißen **„Stack“,** **„Cluster“,** **„Auto-Grid“** und **„Sidebar“** und sind unsere **Layout-Primitive** (_layout primitives_). Es sind Festlegungen, die definieren, wie Elemente zueinander stehen, aber nichts darüber sagen, wie sie aussehen. Layout Primitive haben keine Farbe, keinen Rahmen, kein Fokus, keine Dominanzstufen und keine Zustände.

Wer in Figma mit „Auto Layout“ arbeitet, kennt das Prinzip bereits: Ein Auto-Layout-Frame ist nichts anderes als ein Primitiv. Diese Seite beschreibt das Konzept, damit im Design und im Code dasselbe gemeint ist.

Ein Primitiv beschreibt eine Anordnung, keine Komponente. Die meisten Komponenten bestehen aus mehreren verschachtelten Primitiven. Unser Dialog ist z.B. ein „Stack“, dessen letztes Kind ein „Cluster“ aus Buttons ist.

{% abbildung "Illustration einer Gerätelandschaft mit unterschiedlichen Endgeräten – von Smartphone über Tablet und Laptop bis hin zu großen Monitoren und Displays – in aufsteigender Größenordnung.", "Gerätelandschaft", "layout-01" %}

## Warum kein starres Spaltenraster

Klassische Frameworks (wie Bootstrap & Co.) teilen die Seite statisch in zwölf Spalten und lassen dich festlegen, wie viele von diesen Spalten ein Element belegt. Das setzt voraus, dass ein Element weiß, wie breit der Bildschirm ist. Die Breite des Bildschirms sagt aber noch lange nichts über die wirkliche Breite des Viewports, die Größe der von den Nutzenden voreingestellten Schrift oder der Menge des (dynamischen) Contents aus. Unsere Komponenten wissen das nicht. Dieselbe Card\-Komponente kann sowohl in einer schmalen Seitenspalte oder im breiteren restlichen Hauptbereich liegen.

Wir beschreiben deshalb nicht, wie viele Spalten etwas belegt, sondern **ab welcher Breite bzw. Eigenschaft sich Elemente ändern.** Das Layout entscheidet dann je nach Situation selbst. Zwei Vorteile: Es funktioniert an jeder Stelle gleich, und es kommt mit deutlich weniger Breakpoints und zusätzlichen Code aus.

Unsere Breakpoints (Klassen) bleiben davon unberührt. Sie sind, wie dort beschrieben, ein grober Ausgangspunkt für Fälle, in denen sich das Layout wirklich grundlegend ändern soll. Sie sind nicht das Mittel der ersten Wahl.

## Zwei Fragen, zwei Antworten

Jede Anordnung von Elementen im Layout beantwortet zwei Fragen, die nichts miteinander zu tun haben:

1.  **In welche Richtung** stehen die Elemente? — Darauf antwortet das Primitiv: Stack, Cluster, Auto-Grid oder Sidebar.
2.  **Wie stark gehören sie zusammen?** — Darauf antwortet der Abstand (Spacing token).

Ein Cluster kann eng sein, weil seine Teile eine Einheit bilden, und er kann weit sein, weil seine Teile eigenständig sind. Aus dem Primitiv allein folgt noch keine Aussage zum Abstand.

Primitive werden oft auch verschachtelt. Eine Komponente kann selten nur einem Primitiv zugeordnet werden. Unser Dialog ist ein „Stack“ aus Titel, Text und Buttonleiste und die Buttonleiste darin selbst ist ein „Cluster“. Unser Select ist ein „Stack“ aus Label, Feld und „Supporting text“ und der „Supporting text“ darin ist wiederum ein „Cluster“ aus Icon und Text. Benenne deshalb immer die Ebene mit, sonst wird die Aussage falsch. Nicht „der Dialog ist ein Cluster“, sondern „die Buttonleiste des Dialogs ist ein Cluster“.

Der Abstand (Whitespace) zwischen Elementen ist keine reine Dekoration, sondern Information. Was nah beieinandersteht, wird als zusammengehörig gelesen. Was weit entfernt steht, wird als neue Sinneinheit wahrgenommen. Wählt den richtigen Abstand nach der Zusammengehörigkeit, nicht nach dem verfügbaren Platz.

## Die Nähe-Skala

Fünf Stufen. Die ersten vier sind an unseren bestehenden Komponenten abgelesen:

| Abstand | Was er ausdrückt | Beispiele |
| --- | --- | --- |
| `--ibk-spacing-4` | **Teile** einer Beschriftung | „Label“ und „Info-Icon“ an den Komponenten oder „Supporting text" mit „Leading-Icon“ |
| `--ibk-spacing-6` | Ein Formularfeld und seine eigene Beschriftung | „Label“, „Feld“ und „Supporting text“ bei Select, Input Field, Password Field, Text Area |
| `--ibk-spacing-8` | Bauteile in einem Bedienelement, und gleichartige Geschwister einer Gruppe | Icon und Text im Button, Kästchen und Label der Checkbox, mehrere Radio Buttons untereinander |
| `--ibk-spacing-16` | Eigenständige Blöcke zueinander | Die Buttons im Dialog, Text und Schließen-eIB im Tooltip, die Bereiche des Banners |
| `--ibk-spacing-24` | Eigenständige Bereiche einer Seite zueinander | Kacheln im Auto-Grid, Haupt- und Nebenspalten |

Diese Skala ist ein guter **Ausgangspunkt, aber keine abschließende Liste.** So wie es unsere Breakpoints bisher auch sind. Nicht jede Anordnung lässt sich vorab denken. Alle Werte aus unseren Weißräumen stehen zur Verfügung; die Stufen oben sind die Fälle, die bei uns am häufigsten vorkommen und deshalb ohne weitere Überlegung übernommen werden können.

Drei Dinge sind dabei verbindlich:

1.  **Innen enger als außen.** Der Abstand innerhalb einer Einheit muss kleiner sein als der zu ihren Nachbarn. Sonst zerfällt die Einheit optisch, und Nutzende ordnen ein Label dem falschen Feld zu.
2.  **Gleiche Beziehung, gleicher Abstand.** Zwei Dinge, die im selben Verhältnis zueinander stehen, bekommen denselben Wert, auch wenn sie in verschiedenen Komponenten sitzen.
3.  **Was darüber hinausgeht, muss begründet werden.** Reichen die Stufen der Nähe-Skala nicht, etwa vor einem Bereich, der eine eigene Entscheidung verlangt, nimm den nächstgrößeren passenden Wert aus unseren Weißräumen. Die Abweichung wird im Komponentenartikel begründet.

Was optisch eine Gruppe bildet, muss auch programmatisch eine Gruppe sein. Ein Abstand allein trägt für Screenreader nichts zur Sache. Die Zusammengehörigkeit braucht zusätzlich ein Element, das sie ausdrückt, etwa ein „Fieldset mit Legende“ oder eine Liste (WCAG 1.3.1 „Info and Relationships“, Stufe A).

Unsere vier Primitive kurz erklärt.

## Stack = untereinander

{% abbildung "Grafik zum Layout-Primitiv „Stack“: drei unterschiedlich hohe Platzhalterflächen liegen übereinander und nehmen jeweils die volle Breite ein. Die beiden Zwischenräume sind als eingefärbte Bereiche markiert; von beiden führt eine Hilfslinie zur Beschriftung „--ibk-spacing-16“ (1 rem). Der vertikale Abstand ist zwischen allen gestapelten Elementen gleich.", "Stack", "layout-02" %}

Elemente stehen in einer Spalte, alle gleich weit auseinander. Der **häufigste Fall** überhaupt: Formulare, Textabschnitte, der Inhalt einer Card, die Bestandteile eines Dialogs.

Abstand nach der Nähe-Skala. Voreingestellt ist `--ibk-spacing-16` für eigenständige Abschnitte; für gleichartige Elemente einer Gruppe setzt ihr `.gap-spacing-8`.

``` CSS
.ibk-stack {
  display: flex;
  flex-direction: column;
  gap: var(--ibk-layout-gap, var(--ibk-spacing-16));
}
```

Ein Stack **darf** auch **verschachtelt** werden: Ein Abschnitt mit `--ibk-spacing-24` kann darin Felder mit `--ibk-spacing-16` enthalten. Der äußere Abstand muss dann stets der größere sein.

## Cluster = nebeneinander, mit Umbruch

{% abbildung "Grafik zum Layout-Primitiv „Cluster“: innerhalb zweier gestrichelter Begrenzungslinien liegen vier unterschiedlich breite Platzhalterflächen in zwei Zeilen. Drei oben, eine darunter, die nicht mit den oberen fluchtet. Am rechten Rand führt ein gebogener Pfeil aus der oberen Zeile zurück in die nächste und zeigt den Umbruch an. Die beiden senkrechten Zwischenräume der oberen Zeile und der waagerechte Zwischenraum zwischen den Zeilen sind markiert und tragen dieselbe Beschriftung „--ibk-spacing-16“ (1 rem). Somit sind Spalten- und Zeilenabstand gleich.", "Cluster", "layout-03" %}

Gleichrangige Elemente in einer Zeile, die umbrechen dürfen, wenn der Platz nicht reicht. Buttonleisten, Chip-Reihen, Filterzeilen, Werkzeugleisten.

Abstand nach der Nähe-Skala (hier ist die Spannweite am größten): `--ibk-spacing-4` innerhalb eines Beschriftungsblocks oder `--ibk-spacing-16` zwischen eigenständigen Buttons. Beides sind Beispiele für ein Cluster.

Unsere Tabs setzen den Abstand bewusst auf **„0“**, damit die Leiste als ein Element gelesen wird.

``` CSS
.ibk-cluster {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--ibk-layout-gap, var(--ibk-spacing-16));
}
```

Das `flex-wrap: wrap` ist der Kern und keine Feinheit: Ein Cluster, der nicht umbrechen kann, erzwingt waagerechtes Scrollen und verstößt damit gegen die Reflow-Anforderung weiter unten. Dichtere Zusammenstellungen weichen bewusst ab — unsere Pagination nutzt `--ibk-spacing-4`, unser Toast `--ibk-spacing-8`, unsere Tabs stoßen sogar mit **0** aneinander. Solche Abweichungen gehören mit Begründung in den jeweiligen Komponentenartikel.

## Auto-Grid = gleichwertige Kacheln

{% abbildung "Grafik zum Layout-Primitiv „Auto-Grid“: innerhalb zweier gestrichelter Begrenzungslinien liegen vier Platzhalterflächen in zwei Zeilen — drei oben, eine darunter, die mit der ersten Spalte fluchtet. Jede Fläche der oberen Zeile trägt eine Maßlinie mit der Beschriftung „x“ und darunter die Angabe „min 20 rem“: Alle Spalten sind gleich breit und unterschreiten 20 rem nicht. Am rechten Rand führt ein gebogener Pfeil aus der oberen Zeile zurück in die nächste. Die senkrechten Zwischenräume zwischen den Spalten und der waagerechte zwischen den Zeilen sind markiert und tragen dieselbe Beschriftung „--ibk-spacing-24“ (1,5 rem).", "Auto-Grid", "layout-04" %}

Mehrere gleichartige Elemente nebeneinander, alle gleich breit, mit freier Höhe. Sobald der Platz für eine weitere Spalte reicht, entsteht eine Neue. Das ist genau das Verhalten, das unser Card-Artikel andeutet.

Kacheln (meist als Cards) sind oft eigenständige, aber gleichwertige Blöcke und der Abstand zueinander liegt deshalb bei `--ibk-spacing-24`.

``` CSS
.ibk-auto-grid {
  display: grid;
  gap: var(--ibk-layout-gap, var(--ibk-spacing-24));
  grid-template-columns: repeat(auto-fit, minmax(min(var(--ibk-auto-grid-min, 20rem), 100%), 1fr));
}
```

Der einzige Wert, auf den ihr hier wirklich Einfluss habt, ist die Mindestbreite (im Beispiel eben 20 rem). Sie beantwortet die Frage: Ab wann wird diese Kachel unleserlich? Darüber **entscheidet der Inhalt,** **nicht der Bildschirm.** Deshalb stehen die konkreten Werte im jeweiligen Komponentenartikel und nicht hier. Ein Breakpoint ist dafür technisch nicht nötig.

Drei Stufen decken die üblichen Fälle ab. Für alles andere setzt ihr `--ibk-auto-grid-min` direkt am Grid:

| Klasse | Mindestbreite je Kachel |
| --- | --- |
| `.ibk-auto-grid-narrow` | 12 rem — Kennzahlen, kleine Kacheln |
| `.ibk-auto-grid` | 20 rem — Standard |
| `.ibk-auto-grid-wide` | 28 rem — inhaltsreiche Cards |

`.ibk-auto-grid-fill` behält in der letzten Zeile die Kachelgröße, statt sie zu strecken. `.ibk-auto-grid-align-start` schaltet die gleiche Höhe ab. Ohne diese Klasse sind alle Kacheln einer Zeile so hoch wie die höchste, was für eine Reihe Cards meist gewollt ist.

## Sidebar = Neben- und Hauptspalte

{% abbildung "Grafik zum Layout-Primitiv „Sidebar“: zwei gleich hohe Platzhalterflächen liegen nebeneinander. Die linke, schmalere trägt die Beschriftung „aside“ und eine Maßlinie mit „20 rem“, die rechte, breitere die Beschriftung „main“ und eine Maßlinie mit „x“ für die verbleibende Breite. Der Zwischenraum ist markiert; eine Hilfslinie führt zur Beschriftung „--ibk-spacing-24“ (1,5 rem).", "Sidebar", "layout-05" %}

**Zwei ungleiche Bereiche nebeneinander:** ein Hauptbereich, der den Restplatz vom Viewport einnimmt, und eine Nebenspalte mit ungefährer Wunschbreite. Wird der Platz für die Nebenspalte zu eng, rutscht sie von selbst unter den Hauptbereich.

Haupt- und Nebenspalte sind immer die eigenständigsten Blöcke, die wir haben; der Abstand liegt bei `--ibk-spacing-24` oder darüber. Entscheidet das je nach Anwendungsfall.

``` CSS
.ibk-sidebar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--ibk-layout-gap, var(--ibk-spacing-24));
}

.ibk-sidebar > .ibk-sidebar-main {
  flex: 1 1 var(--ibk-sidebar-main-min, 30rem);
  min-inline-size: 0;
}

.ibk-sidebar > .ibk-sidebar-aside {
  flex: 0 1 var(--ibk-sidebar-aside-size, 20rem);
  min-inline-size: 0;
}
```

Auch dafür kommen noch keine Breakpoints ins Spiel. Der Umbruch entsteht, sobald Haupt- und Nebenspalte nebeneinander nicht mehr in die Zeile passen, ohne ihre Mindestbreite zu unterschreiten. Welche Mindestbreiten das sind, hängt vom Inhalt ab.

`.ibk-sidebar-aside-first` stellt die Nebenspalte **nur optisch** nach links, so wie in der Grafik oben. Tastatur und Screenreader folgen weiterhin dem Quelltext. Die Lesereihenfolge gehört deshalb ins Markup und nicht in eine Klasse _(WCAG 1.3.2 „Meaningful Sequence", Stufe A)._

## Unsere Werte im Überblick

| Primitiv | Anordnung | Abstände | Umbruch |
| --- | --- | --- | --- |
| Stack | untereinander | `--ibk-spacing-16`, enger per `.gap-spacing-*` | — |
| Cluster | nebeneinander | `--ibk-spacing-4` bis `--ibk-spacing-16` | ja, bei Platzmangel |
| Auto-Grid | Kacheln, gleich breit | `--ibk-spacing-24` | ja, spaltenweise |
| Sidebar | Haupt- & Nebenspalte | `--ibk-spacing-24` oder mehr | ja, Nebenspalte nach unten |

## Den Abstand setzen

Alle vier Primitive lesen ihren Abstand aus derselben Variablen. Eine einzige Klassenfamilie steuert sie:

`.gap-spacing-0`, `-2`, `-4`, `-6`, `-8`, `-10`, `-12`, `-14`, `-16`, `-24`, `-32`, `-40`, `-48`

``` HTML
<div class="ibk-stack gap-spacing-8">
  …
</div>
```

Die Variable ist bewusst nicht vererbend deklariert. Ein `.gap-spacing-24` an einem äußeren Stack wirkt deshalb nicht in einen Cluster hinein, der darin liegt. Jede Ebene setzt ihren Abstand selbst oder behält den Standard ihres Primitivs.

## Feineinstellung je Primitiv

| Klasse | Wirkung |
| --- | --- |
| `.ibk-stack-push` | Schiebt dieses Kind und alles danach an die Unterkante; die Aktionszeile einer Card bleibt unten, egal wie lang der Text ist |
| `.ibk-cluster-start` / `-center` /  `-end` | Ausrichtung entlang der Zeile |
| `.ibk-cluster-between` | Zwei Gruppen an die beiden Ränder. Übersteht einen Umbruch |
| `.ibk-cluster-push` | Kürzere Form für dasselbe, wirkt aber nur solange die Zeile nicht umbricht |
| `.ibk-cluster-grow` | Ein Kind nimmt den Rest, z.B. ein Suchfeld neben zwei Buttons |
| `.ibk-cluster-align-start` / `-end` / `-baseline` / `-stretch` | Ausrichtung quer zur Zeile; ohne Angabe stehen die Elemente mittig |
| `.ibk-sidebar-aside-first` | Stellt die Nebenspalte optisch nach links; die Lesereihenfolge bleibt der Quelltext |

## Was auf die Komponentenseite gehört

Diese Seite hier beschreibt Primitive und die Grundregel. Die Werte einer einzelnen Komponente stehen in ihren eigenen Artikeln, so wie es z.B. Designprinzipien schon für die Tastaturbedienung festlegen: Der Grundsatz wird verlinkt, nicht wiederholt.

Pro Komponente erfahrt ihr also zusätzlich:

*   Welches Primitiv sie nutzt.
*   Die Abweichung vom Standard, mit einer Begründung. Steht dort nichts, gilt der Standard.
*   Die Mindestbreite, wenn die Komponente in einem „Auto-Grid“ liegt.
*   Das Ergebnis der 320-px-Prüfung (siehe „Reflow und Zoom“).

## Reflow und Zoom

> Der Inhalt muss bei 320 CSS-Pixeln Breite ohne Scrollen in zwei Richtungen nutzbar bleiben (WCAG 1.4.10 „Reflow", Stufe AA) und bei 200 % Textvergrößerung ohne Informationsverlust (WCAG 1.4.4 „Resize Text", Stufe AA). Die Ausnahme gilt für zweidimensionale Inhalte: Landkarten, Datentabellen, Werkzeugleisten.

Diese WCAG Anforderung ist der Grund, warum drei der vier Primitive umbrechen können. Sie ist bei 320 px Viewportbreite zu prüfen und nicht zu schätzen. Passt eine Anordnung dort nicht, ist nicht der Abstand das Problem, sondern die Wahl der Komponente. Unser Segmented Control z.B. weicht in diesem Fall ausdrücklich auf ein Select aus.

Wähle `rem` statt `px`, wo eine **Größe mit der Schrift wachsen soll.** Das betrifft vor allem die Mindestbreiten im Auto-Grid und in der Sidebar: In px gesetzt, brechen sie bei 200 % Zoom nicht um, obwohl der Text längst nicht mehr passt.

## Wenn eine Komponente ihren Platz kennen muss

Reicht das Umbrechen nicht und muss sich eine Komponente wirklich anders verhalten, fragt sie **ihren eigenen Platz** ab, nicht den Bildschirm. Denn dieselbe Leiste kann unter einer breiten Tabelle oder in einer 20 rem schmalen Nebenspalte sitzen, und der Viewport sagt darüber nichts.

``` CSS
/* am Vorfahren */
.ibk-query-container { container-type: inline-size; }

/* in der Komponente */
@container (inline-size < 30rem) { … }
```

Unsere Pagination nutzt das bereits. Ihre frühere Viewport-Abfrage bei 480 px ist dadurch ersetzt.

> Vorsicht Falle
>
> .ibk-query-container niemals auf eine Box setzen, die ihre Breite aus dem eigenen Inhalt bezieht: ein Float, ein inline-block oder ein Flex-Kind mit dem voreingestellten flex-basis: auto. Die Abfrage lässt eine solche Box ihre Breite berechnen, als wäre sie leer. Sie fällt auf null zusammen und ihr Inhalt läuft über die Nachbarn hinaus. Aus demselben Grund kann die Klasse nicht auf der Komponente selbst sitzen, sondern gehört auf einen Vorfahren auf Blockebene.

## Abgrenzung

**Nicht alles ist ein Primitiv.** Zwei Fälle bleiben außen vor:

1.  **Datentabellen:** Zeilen und Spalten hängen inhaltlich zusammen, sie dürfen nicht umbrechen. Dafür ist unsere Table zuständig.
2.  **Überlagernde Elemente:** Dialog, Toast, Tooltip, Dropdown. Sie liegen über dem Layout statt darin. Ihr Inhalt ist innen wieder ein Stack oder ein Cluster.

### Wenn etwas darüber liegt

Nicht jedes Element nimmt Platz weg. Der Chevron im Select, das Badge auf einem Navigationseintrag, der Schließen-eIB im Banner und der Griff des Range-Sliders **„liegen über“** ihrer Komponente, statt in einer Reihe danebenzustehen. Sie werden nicht von einem Primitiv verteilt, sondern an eine Kante gehängt. In Figma wird das über **Constraints** (Left, Right, Left & Right, usw.) geregelt, im CSS über `position: absolute` und `inset`.

### Die Unterscheidung:

> **Nimmt** das Element seinen **Platz weg,** ist es Teil eines **Primitivs.
> Liegt es darüber,** wird es als Constraint **verankert.**

Verankerte Elemente sind bei uns fast immer Bestandteil einer Komponente und nicht Mittel des Seitenlayouts. Der „Select-Chevron“ ist ein lupenreines Constraint. Zwei Dinge sind dabei zu beachten: Ein verankertes Element bricht nicht um, es muss also bei 320 px noch innerhalb seiner Komponente liegen. Und es braucht eine ausreichende Trefferfläche, wenn es bedienbar sein soll. Mehr dazu steht schon beim Button.

> Kleine Fallgrube beim Übersetzen der Figma Constraints: Left & Right heißt „mitwachsen“ was im CSS das left: 0; right: 0 bzw. inset-inline: 0 ist. Figmas Scale dagegen hat keine saubere CSS-Entsprechung (es skaliert prozentual mit) und wird in der Umsetzung fast immer zu etwas anderem. Wenn ihr in Figma „Scale“ setzt, gehört in den Komponentenartikel ein Satz dazu, was in der Umsetzung gemeint ist.

## Container und Seitenränder

Der „Container“ beantwortet zwei Fragen, die kein Primitiv beantwortet: **wie breit eine Seite höchstens wird** und **wie viel Rand links und rechts bleibt.** Er zentriert den Inhalt und begrenzt ihn nach oben.

Unser Seitenrand atmet mit dem Viewport (`clamp(1rem, 4vw, 2rem)`): Auf dem Telefon bleibt 1 rem Luft, auf einem breiten Monitor klebt der Text nicht am Fensterrahmen.

| Klasse | Maximale Breite | Wofür |
| --- | --- | --- |
| `.ibk-container` | 80 rem | die Standard-Seitenbreite |
| `.ibk-container-sm` | 40 rem | einspaltiges Formular, Anmeldeseite |
| `.ibk-container-md` | 60 rem | Artikel, Einstellungsseite |
| `.ibk-container-lg` | 80 rem | normale Anwendungsseite |
| `.ibk-container-xl` | 100 rem | Dashboard, breite Tabelle |
| `.ibk-container-full` | ohne | Hero oder Banner über die volle Fensterbreite |
| `.ibk-container-prose` | 70 ch | Fließtext |
| `.ibk-container-flush` | — | hebt zusätzlich den Seitenrand auf |

Die Werte stehen in `"rem"`, damit die Obergrenze mit der eingestellten Schriftgröße mitwächst, statt bei 200 % Zoom denselben Textblock in dieselbe Breite zu pressen. `.ibk-container-prose` ist die Ausnahme und rechnet in `"ch"`: Für die Lesbarkeit zählen die Zeichen pro Zeile (etwa 65–75), und `ch` ist die einzige Einheit, die das bei einem Schriftwechsel behält.

Das Grundgerüst einer Seite sind damit drei Zeilen: Container, Stack der Abschnitte, und je Abschnitt das passende Primitiv:

``` HTML
<div class="ibk-container ibk-container-lg">
  <div class="ibk-stack gap-spacing-32">
    …
  </div>
</div>
```

## Was wir nicht tun

### Keine feste Breite auf der Komponente

Ein `max-width: 458px` an einem Accordion ist immer falsch: Die Komponente weiß nicht, wie viel Raum sie bekommen hat, und ein px-Wert wächst nicht mit der Schriftgröße. Eine Obergrenze gehört an den **Container:** `.ibk-container-sm`, eine `.ibk-sidebar-aside` oder `--ibk-auto-grid-min`.

### Kein Cluster ohne Umbruch

`flex-wrap: nowrap` an einer Werkzeugleiste erzwingt waagerechtes Scrollen. Darf eine Zeile wirklich nicht brechen, ist die Komponente für diese Breite die falsche, so wie unser Segmented Control auf ein Select ausweicht.

### Keine Viewport-Media-Query in einer Komponente

Stattdessen eine Container Query, siehe oben.

### Kein Abstand nach verfügbarem Platz

Der Abstand folgt der Zusammengehörigkeit, siehe Nähe-Skala.
