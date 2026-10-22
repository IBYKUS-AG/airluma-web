---
layout: inhaltsseite.njk
titel: Farben
bereich: grundlagen
aktuell: farben
---
Farben spielen eine entscheidende Rolle in der Gestaltung digitaler Oberflächen und prägen maßgeblich, wie ein Produkt wahrgenommen wird. Die bewusste Auswahl und Anwendung von Farben kann Wahrnehmung, Orientierung und Emotionen stark positiv beeinflussen.

Doch zuerst ein wenig Theorie.

## Farbnamen und -schreibweise

Als Sprache für die Farbnamen nutzen wir Englisch, weil ...

1.  es zu einer **Vermeidung von Umlauten** kommt und
2.  weil es in Softwareframeworks **anerkannter** ist.

Als Schreibweise wählen wir die „camelCaseSchreibweise“, wobei der Name mit einen Kleinbuchstaben beginnt, weitere Wörter angekoppelt und jeweils mit einem Großbuchstaben gekennzeichnet werden.

## Leuchtwertdifferenz

**Das Konzept**

Ein ausreichend hohes Kontrastverhältnis zwischen Textfarben und Hintergrundfarben trägt dazu bei, dass Texte leichter lesbar und für Menschen mit Sehbeeinträchtigungen oder eingeschränkter Sichtbarkeit besser wahrnehmbar werden. Ein hohes Kontrastverhältnis steigert somit die Benutzerfreundlichkeit und die Barrierefreiheit bei Webseiten oder digitalen Apps gleichermaßen.

**Doch wie findet und kombiniert man verschiedene Farben in einem optimalen Verhältnis, ohne einen Kontrastchecker zu bemühen?**

Wir nutzen einfach den Luminanz- oder L-Wert aus dem HSL-Farbsystem.

Das HSL-Farbsystem ist ein Farbmodell, welches auf den drei Komponenten **„Hue“** (Farbton), **„Saturation“** (Sättigung) und **„Lightness“** (Helligkeit) basiert. Im Gegensatz zum RGB-Modell, bei dem Farben durch die Kombination von Rot, Grün und Blau erzeugt werden, verwendet das HSL-Modell eine zylindrische Geometrie, um die Beziehung zwischen Farbton, Sättigung und Helligkeit darzustellen. Im HSL-System wird der Farbton durch eine Zahl von 0 bis 360 Grad dargestellt, wobei jeder Grad einem anderen Farbton auf dem Farbkreis entspricht. Die Sättigung wird als Prozentsatz angegeben und beschreibt den Anteil des Farbtons, der in der Farbe vorhanden ist. Die Helligkeit wird ebenfalls als Prozentsatz angegeben und beschreibt, wie viel Weiß oder Schwarz in der Farbe vorhanden ist. Diese Helligkeit, Lightness oder auch Luminanz lässt sich, wenn die Werte bekannt sind, perfekt mit anderen Luminanzwerten vergleichen und gegeneinander verrechnen. Zieht man jeweils den kleineren vom größeren Wert ab, erlangt man eine einfache Differenz oder auch Delta. Diese Differenz muss möglichst hoch ausfallen, um einen hohen Kontrast zwischen den beiden Ausgangsfarben zu erhalten.

Die Differenz der Leuchtwerte aus zwei Farben verdeutlicht die Höhe des Kontrastes zwischen den beiden Farben:

1.  Stufe: **40+** führt zu WCAG 2.0 **AA Großtext**\-Kontrast
2.  Stufe: **50+** führt zu WCAG 2.0 **AA Normaltext**\-Kontrast oder **AAA Großtext**\-Kontrast
3.  Stufe: **70+** ergibt einen WCAG 2.0 **AAA Normaltext**\-Kontrast

Farben der Stufe 50 ergeben einen AA-Kontrast sowohl gegenüber reinem Weiß (L = 100) als auch gegenüber reinem Schwarz (L = 0).

Der L-Wert wird einfach dem englischen Farbnamen in „camelCaseSchreibweise“ mit einem Bindestrich angegliedert.

{% abbildung "Illustration des HSL-Farbsystems mit dreidimensionalem Farbmodell und erklärenden Elementen. Links ist eine senkrechte Farbskala von Schwarz (unten, 0 %) bis Weiß (oben, 100 %) dargestellt, beschriftet mit „lightness (L) / Helligkeit“ und dem Hinweis, dass der Luminanzwert in Prozent angegeben wird. Im Zentrum befindet sich ein 3D-Farbkörper in Form eines asymmetrischen Zylinders mit abgestuften Farbwürfeln in unterschiedlichen Farbtönen, Helligkeiten und Sättigungen. Diese Visualisierung steht für den Farbton „hue (H) / Farbton“, dessen Werte als Winkel in Grad angegeben werden. Rechts daneben ist ein kreisförmiges Farbrad mit den Farbwinkelwerten 0° bis 360° in 30°-Schritten abgebildet, das die „saturation (S) / Sättigung“ erklärt. Die Sättigung nimmt konzentrisch zur Mitte ab. Unter dem Farbrad steht ein CSS-Beispiel: „color: hsl(180, 100 %, 80 %)“. Die Beschriftungen sind teils auf Deutsch und Englisch verfasst und durch rote Pfeile mit den jeweiligen Achsen oder Bereichen verbunden.", "HSL-Farbsystem", "farben-01" %}

* * *

## Grundfarben

Die Primärfarbe ist ein kräftiges Rot mit dem Namen **„ibkRed-41“**. Um mehr Vielseitigkeit und Flexibilität zu erreichen, wird sie um zwei weitere Buntfarben ergänzt:

1.  brandPrimary = **„ibkRed-41“** oder „Rot“
2.  brandSecondary = **„ibkSisal-80“** oder „Sisal“
3.  brandTertiary = **„ibkPetrol-32“** oder „Petrol“

### Hauptfarben

Die grundlegenden Buntfarben.

{% farbtabelle "hauptfarben" %}

* * *

### Kontrastcheck der Hauptfarben

{% abbildung "Vergleich der Kontrastverhältnisse von drei Hauptfarben im Farbsystem anhand von Textlesbarkeit. Links: Ein Quadrat in kräftigem Rot (ibkRed-41) mit weißem Text. Oben ein grünes Häkchen mit „5, 6:1“ (gut lesbar auf hell), unten ein rotes Kreuz mit „3, 7:1“ (nicht ausreichend für dunkel). Mitte: Ein Quadrat in hellem Beige (ibkSisal-80) mit schwarzem Text. Oben ein rotes Kreuz mit „1, 5:1“ (zu geringer Kontrast), unten ein grünes Häkchen mit „13, 7:1“ (hoher Kontrast, gut lesbar). Rechts: Ein Quadrat in dunklem Petrol (ibkPetrol-32) mit weißem Text. Oben ein grünes Häkchen mit „7, 7:1“ (sehr gut), unten ein rotes Kreuz mit „2, 7:1“ (zu gering). Alle Beispiele zeigen, welche Farbkombinationen den Barrierefreiheitsstandards für Kontrast genügen oder nicht.", "Hauptfarben im Kontrastcheck", "farben-02" %}

Der Kontrastcheck bezieht sich auf die Verwendung als Schrift- und Hintergrundfarbe.

ibkRed-41 vs. ibkSisal-80 : Leuchtwertdifferenz 39, Ratio 3, 68:1, nur für sehr große Schriftgrößen geeignet

ibkRed-41 vs. ibkPetrol-32 : Leuchtwertdifferenz 9, Ratio 1, 37:1, nicht geeignet

ibkSisal-80 vs. ibkPetrol-32: Leuchtwertdifferenz 48, Ratio 5, 05:1, für normale Schriftgrößen geeignet

* * *

### ibkRed-Abstufungen

L-Stufen: 73, 49, ..., 33, 18, 14, 10, 6

{% farbtabelle "ibkRed" %}

Die Hauptfarbe „ibkRed-41“ kann bei Bedarf abgestuft und für besondere Anwendungen benutzt werden. Weitere helle L-Stufen sind jedoch nicht empfehlenswert, da ein Rotton in hellen Stufen zu sehr in ein Rosa abdriftet.

> Vor der Anwendung dieser Farben sollte stets eine Design-Kompetenz konsultiert werden!

### ibkSisal-Abstufungen

L-Stufen: 98, 94, 90, 86, 82, 80, 78 ... 18, 14, 10, 6

{% farbtabelle "ibkSisal" %}

Hinweis: Die Abstufung L = 2 sollte nicht verwendet werden, da der Farbton dem neutralGrey-2 zu ähnlich sieht. Dafür gibt es eine zusätzliche Abstufung im hellen Bereich mit L = 98.

### ibkPetrol-Abstufungen

L-Stufen: 98, 94, 90, 86, 82, 78 ... 40, 32, 26, 22, 18, 14, 10, 6

{% farbtabelle "ibkPetrol" %}

* * *

## Graupaletten

### Neutrale Graupalette

L-Stufen: 0, 2, 6, 10, 14, 18, 22, 26, 34, 42, 50, 58, 66, 74, 78, 82, 86, 90, 94, 98, 100

{% farbtabelle "neutralGrey" %}

Hier sind neutrale Grauwerte oder die „Unbuntfarben“ zwischen „black-0“ (Schwarz) mit einem Leuchtwert von L = 0 und „white-100“ (Weiß) mit einem Leuchtwert L = 100 aufgeführt. Eine Sonderrolle nimmt der Grauwert „neutralGrey-50“ ein, da dieser Grauton sowohl zu Schwarz als auch zu Weiß positiv einen Kontrastcheck besteht.

* * *

## 60-30-10-Verteilung

Diese Regel zur optimalen Verteilung der Farben stammt aus der Welt des Designs, passt aber perfekt zu digitalen Produkten. Die 60 % – 30 % – 10 %-Regel funktioniert, weil sie ein Gefühl der Ausgewogenheit vermittelt und dem Auge hilft, sich reibungslos von z.B. einem „CTA“-Button (Call to action) zu einem anderen Bereich zu bewegen.

{% abbildung "Grafik zur Farbverteilung nach dem 60%-30%-10%-Prinzip. Dargestellt sind drei unterschiedlich große, gestapelte Farbflächen", "Farbverteilung 60-30-10", "farben-03" %}

* * *

## Farbverläufe

### ibkRed-18 zu ibkRed-41

**ibkRed-18** #5c001b

**ibkRed-41** #cf003d

{% farbverlauf "#5c001b", "#cf003d" %}

```CSS
linear-gradient(90deg, #5c001b 0%, #cf003d 100%)
```

### ibkPetrol-22 zu ibkRed-41

**ibkPetrol-22** #2d3943

**ibkRed-41** #cf003d

{% farbverlauf "#2d3943", "#cf003d" %}

```CSS
linear-gradient(90deg, #2d3943 0%, #cf003d 100%)
```

### ibkPetrol-22 zu ibkPetrol-32

**ibkPetrol-22** #2d3943

**ibkPetrol-32** #425563

{% farbverlauf "#2d3943", "#425563" %}

```CSS
linear-gradient(90deg, #2d3943 0%, #425563 100%)
```

### ibkSisal-78 zu ibkSisal-90

**ibkSisal-78** #d4cbba

**ibkSisal-90** #ece8e0

{% farbverlauf "#d4cbba", "#ece8e0" %}

```CSS
linear-gradient(90deg, #d4cbba 0%, #ece8e0 100%)
```

* * *

## Funktionsfarben

Semantische Farben oder Funktionsfarben sind spezielle Farben, die bestimmte emotionelle Farbwirkungen mit Zuständen für Status- oder Feedback-Änderungen kombiniert. Diese Farben verwenden wir, um den Status, den Zustand von Elementen oder Benutzerinteraktionen deutlicher hervorzuheben. Zum Beispiel kann eine grüne Farbe einen erfolgreichen Abschluss einer Aktion anzeigen, während eine rote Farbe die Nutzenden auf einen Fehler oder ein Problem hinweist.

{% abbildung "Raster aus farbigen Rechtecken mit abgestuften Farbtönen. Alle Farben verlaufen jeweils von sehr hell (links) zu sehr dunkel (rechts) und stellen unterschiedliche Funktionsfarbtöne in Helligkeitsvariationen dar.", "Funktionsfarben", "farben-04" %}

### Anforderungen:
1.  Die rote Farbe für einen Alarm muss sich visuell gut von der Primärfarbe ibkRed-41 unterscheiden lassen.
2.  Die Funktionsfarben müssen in den diversen Kombinationen weiterhin gute Kontraste aufweisen.
3.  Abstufungen der Farben sollen sich sowohl für den Light- als auch für den Dark-Mode eignen.

> Die Primärfarbe ibkRed-41 darf nicht für Input Fields verwendet werden!

### Die Funktionsfarben

für „Alert”, „Warning”, „Success” und „Info”

{% farbtabelle "funktionsfarben" %}

* * *

Um auf jede Situation reagieren zu können, brauchen wir, ähnlich zur neutralen Graupalette, mehrere Abstufungen der Funktionsfarben.

### Alert

L-Stufen: 2, 6, 10, 14, 18, 22, 26, 34, 42, 50, 58, 66, 74, 78, 82, 86, 90, 94, 98

{% farbtabelle "ibkAlert" %}

### Warning

L-Stufen: 2, 6, 10, 14, 18, 22, 26, 34, 42, 50, 58, 66, 74, 78, 82, 86, 90, 94, 98

{% farbtabelle "ibkWarning" %}

### Success

L-Stufen: 2, 6, 10, 14, 18, 22, 26, 34, 42, 50, 58, 66, 74, 78, 82, 86, 90, 94, 98

{% farbtabelle "ibkSuccess" %}

### Info

L-Stufen: 2, 6, 10, 14, 18, 22, 26, 34, 42, 50, 58, 66, 74, 78, 82, 86, 90, 94, 98

{% farbtabelle "ibkInfo" %}

