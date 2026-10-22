---
layout: inhaltsseite.njk
titel: Icons
bereich: grundlagen
aktuell: icons
---
Das Iconset ist für die Verwendung in der Softwareentwicklung, im Büroalltag oder im Marketingumfeld als Ergänzung zur Schrift „Asap“ gedacht und greift eine ähnliche Formensprache auf. Das Set hat ähnliche Strichstärken zur Asap (Regular), ist hell durch die Verwendung möglichst großer Innenformen und die Strichenden sind leicht kissenförmig abgerundet.

{% abbildung "Grafik zur Formensprache des Iconsets mit dem zentralen Wort „Typisch“ in heller Beige-Farbe. Links und rechts befinden sich zwei stilisierte Icons mit roten Markierungen und Beschriftungen: „Rechter od. spitzer Winkel“ und „Strichstärke“. Kreise mit vertikalen Teilungen zeigen exemplarisch die Linienbreite. Rechts über dem Schriftzug ist ein Pfeil mit der Beschriftung „Abgerundet“, der von einem Icon mit eckiger Form zu einem Icon mit abgerundeten Kanten führt.", "Formensprache des Iconsets", "icons-01" %}

Das Set verfügt zusätzlich über die 56 grundlegenden lateinischen Kleinbuchstaben von a bis z und Großbuchstaben von A bis Z. Diese Buchstaben dienen jedoch nicht zum Schreiben von Mengentexten, sondern sind lediglich zur optischen Kontrolle bei der Icon-Erzeugung per Texteingabe der Kurznamen (siehe weiter unten)!

{% abbildung "Grafik mit dem Titel „Grundformen des Iconsets“. Von links nach rechts sind fünf geometrische Formen dargestellt: 1. Ein Quadrat mit den Maßen 32 × 32 px, innen ein Kreis mit 24 px Durchmesser, dazu diagonale Markierung (45°), umlaufender Randabstand von 4 px und Beschriftung „32 × 32 px Fläche (1024)“, „4 px Randabstand“. 2. Ein einzelner Kreis mit der roten Beschriftung „24 px Kreisdurchmesser“. 3. Ein Quadrat mit „22 × 22 px Quadrat“. 4. Ein horizontal ausgerichtetes Rechteck mit „24 × 20 px Rechteck (Quer)“. 5. Ein vertikal ausgerichtetes Rechteck mit „20 × 24 px Rechteck (Hoch)“.", "Grundformen des Iconset", "icons-02" %}

## Import oder Installation

Das Iconset ist eine umfassende Sammlung von Icons, die als vektorbasierte Schriftzeichen in einer Truetype-Schriftdatei „IBYKUS-Iconset.ttf“ eingebettet sind. Dies ermöglicht es, die Icons wie Text in einer Vielzahl von Anwendungen zu verwenden und bietet eine Reihe von Vorteilen gegenüber anderen Formaten, wie PNG- oder SVG-Dateien. Die Icons sind skalierbar, was bedeutet, dass sie in beliebiger Größe angezeigt werden können, ohne an Qualität zu verlieren. Sie sind auch effizient, da wir nur eine einzige Datei benötigen, um alle Icons darstellen zu können.

Da es eine Schriftdatei ähnlich wie z.B. die Asap ist, lässt sie sich ebenso einfach auf ein Betriebssystem installieren. Parallel zum ttf-Format gibt es eine Webfontdatei „IBYKUS-Iconset.woff“ und eine Embedded OpenType „IBYKUS-Iconset.eot“.

Die aktuelle Version des Iconsets steht auf dem CDN zum Download bereit:

{% iconsetDownloads %}

### Was ist eine EOT-Datei?

Moderne Web-Browser wählen das Webfont-Format aus, das sie benötigen. Eine Ausnahme bildete der veraltete Internet Explorer. Damals musste bis einschließlich Version 8 die Schriften im EOT-Format (embedded open type) vorliegen. Falls ihr mehr zum Thema EOT wissen wollt, geht auf [Typografie.info](https://www.typografie.info/3/wiki.html/e/eot-r59/).

In der Regel unterstützen es moderne Browser nicht mehr bzw. benötigen es nicht.

## Anbindung

Das Iconset kann auch über ein **sicheres, europäisches CDN** (Content Delivery Network) eingebunden werden. Das CDN unterstützt die Einhaltung europäischer Datenschutzstandards, da die Datenverteilung über europäische Server erfolgt. Dadurch lässt sich die Schriftdatei zentral aktualisieren, sodass in den angebundenen Anwendungen stets automatisch die aktuelle Version verwendet wird. Gleichzeitig bleiben die einzelnen Webseiten schlank, da die Fontdatei nicht lokal in jedem Projekt vorgehalten werden muss.

``` CSS
@font-face {
  font-family: 'IBYKUS-Iconset';
  src: url('https://airluma-cdn.b-cdn.net/IBYKUS-Iconset.woff2') format('woff2'), url('https://airluma-cdn.b-cdn.net/IBYKUS-Iconset.woff') format('woff'), url('https://airluma-cdn.b-cdn.net/IBYKUS-Iconset.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```

## Verwendung

Das Iconset lässt sich auf mehrere Arten und Weisen nutzen:

### 1\. Eine optische Auswahl mittels Windows Zeichentabelle oder Mac Schriftensammlung / Font Book

In den jeweiligen Anwendungen einfach das bereits installierte „IBYKUS-Iconset“ aus den verfügbaren Schriften auswählen, das passende Icon aussuchen und in die Zwischenablage kopieren.

### 2\. Direkteingabe des Unicode Codepoint

Grundlegende Symbole, die auch im Unicode Standard (siehe [Wikipedia](https://de.wikipedia.org/wiki/Unicode) oder [decodeunicode](https://decodeunicode.org/)) definiert sind, wurden mit dem entsprechenden Unicode Codepoint abgeglichen. Unser Home-Icon entspricht z.B. dem „HOUSE BUILDING“ (Code Point: U+1F3E0). Alle nicht zuordenbaren Icons liegen im dafür reservierten **„Supplementary Private Use Area“** des Unicodes. Zur Nutzung dieser Methode muss jedoch eine Eingabe per Unicode im Betriebssystem möglich sein. Sowohl Windows als auch MacOS lassen jedoch die Eingabe fünf- oder sechsstelliger Codepunkte in Hexadezimal nicht zu!

So erzeugt die Eingabe „Alt“ + „41“ oder „Option“ + „Umschalt“ + „0041“ das A als Großbuchstabe.

„Alt“ + „1f3e0“ würde das Haus-Icon erzeugen, welches aber nicht direkt per Tastatur eingegeben werden kann, da die Betriebssysteme nur eine Eingabe von max. 4 Zeichen zulassen.

### 3\. Texteingabe der Kurznamen (Ligaturen)

Unsere Truetype-Schriftdatei unterstützt vordefinierte Abkürzungen oder Kurznamen. So kann man beispielsweise in einem Texteditor, der eine automatische Ligaturersetzung unterstützt, das Icon für Haus durch die Eingabe „H“ + „o“ + „m“ + „e“ per Tastatur erzeugen.

> Das Einfügen von Icons per Ligatur wird nicht in allen Softwareprogrammen unterstützt. Um das Einfügen von Icons zu nutzen, wählt bitte den primären, oben genannten Weg per Zeichentabelle/Schriftensammlung.

Auch in der Webentwicklung lassen sich die Ligaturen nutzen. Dazu muss man einfach die entsprechenden Schrifteigenschaften im CSS aktivieren:

``` CSS
font-family: "IBYKUS-Iconset", sans-serif;
font-feature-settings: "liga";
-moz-font-feature-settings: "liga";
```

### Ligaturen in Microsoft Word aktivieren

In Microsoft Word ist eventuell eine Aktivierung der automatischen Ligaturersetzung nötig. Dazu einfach per Maus den Text / Kurznamen auswählen und als Schrift „IBYKUS-Iconset“ auswählen. Danach im Menü „Format“ das Menüfenster „Schriftart“ öffnen und in den Reiter „Erweitert“ wechseln. Dort im Bereich „Erweiterte Typografie“ im Unterpunkt „Ligaturen“ im Dropdown-Menü: „Alle“ auswählen. Word erkennt nun die Kurznamen und ändert die Buchstaben in das entsprechende Icon um.

Im Menü „Format“ das Menüfenster „Schriftart“ öffnen und in den Reiter „Erweitert“ wechseln. Dort im Bereich „Erweiterte Typografie“ im Unterpunkt „Ligaturen“ im Dropdown-Menü „Alle” auswählen.

### Sonderfall: Powerpoint for Mac

PowerPoint auf dem Mac hat Einschränkungen bei der Unterstützung von Iconfonts und Ligaturen. Im Gegensatz zu Word, das OpenType-Features wie Ligaturen aus unserem Iconfont besser unterstützt, interpretiert PowerPoint einige Unicode-Zeichen nicht korrekt. Dadurch kommt es vor, dass Symbole aus Iconfonts manchmal richtig dargestellt werden und manchmal nicht.

Kopieren von Symbolen aus Word oder der macOS-Zeichentabelle funktioniert in PowerPoint ebenfalls nicht zuverlässig, da PowerPoint automatisch die Schriftart ändert oder bestimmte Unicode-Zeichen durch Standard-Emojis ersetzt.

Diese Einschränkungen sind spezifisch für PowerPoint auf dem Mac, und eine konsistente Darstellung von Iconfonts ist daher oft nicht möglich. Für eine stabile Lösung empfiehlt es sich, die gewünschten Icons als Vektorgrafik (SVG) oder Bild einzufügen.

## Text-Icon-Kombination

Eine 24 pt Asap Regular passt harmonisch zu einem 32 pt Icon aus unserem Iconset. Sie stehen also im Verhältnis 3 (Schriftgröße) zu 4 (Icongröße) (Faktor 1,333). Dieses Verhältnis gilt es auch bei anderen Größenverhältnissen zu beachten.

Ein kleiner zusätzlicher Abstand zwischen Icon und Text von ca. 4–8 px bringt mehr Klarheit, obwohl die Icons schon eigene Innenabstände mitbringen.

## Zeichenübersicht

Eine Liste der Namen, Unicode Codepoints und der entsprechenden Kurznamen (Ligaturen) aller Icons. Die Stichwörter für die Suche sind wie im Iconset englisch.

{% iconuebersicht %}
