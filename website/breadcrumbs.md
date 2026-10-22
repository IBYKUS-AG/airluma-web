---
layout: inhaltsseite.njk
titel: Breadcrumbs
bereich: komponenten
aktuell: breadcrumbs
gruppe: navigation
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Ein Breadcrumb-Element ist ein Navigationshilfsmittel, das auf Websites verwendet wird, um den aktuellen Pfad oder die Hierarchie der besuchten Seiten anzuzeigen. Es besteht typischerweise aus einer Liste von Links, die den Weg zurück zur Startseite oder zu übergeordneten Seiten darstellen. Breadcrumbs dienen dazu, eine Orientierung innerhalb der Website zu ermöglichen und zu zeigen, wo man sich innerhalb der Seitenstruktur befindet.

## Varianten

### Single Breadcrumb

Eine weitere Möglichkeit bietet der Single Breadcrumb, wie er oft auch im Mobile-App-Design angewendet wird. Dieser kann eingesetzt werden, sollte die Hierarchie-Tiefe weniger als 3 betragen, aber auch falls es aus irgendeinem Grund, z.B. aufgrund von langen Item-Namen oder begrenztem Platz, nicht möglich ist, einen normalen Breadcrumb darzustellen. Der Single Breadcrumb bietet lediglich die Möglichkeit, eine Ebene oder Seite in der Navigation zurückzuspringen. Oft steht als Textlabel einfach der Begriff „Zurück“, kann aber auch ein sprechender, kurzer Linktext sein.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik einer Pfadnavigation („Breadcrumb“) mit drei Navigationsebenen. Dargestellt sind die Texte „First Level“, „Second Level“ und „Current Level“ als aufeinanderfolgende Elemente. Zwischen den Ebenen befinden sich nach rechts gerichtete Pfeilsymbole („Chevron Icons“), die die hierarchische Struktur und Navigationsrichtung visualisieren. Der Ausgangspunkt („First Level“) und der zweite Eintrag („Second Level“) sind als klickbare Links dargestellt, während „Current Level“ die aktuelle, nicht klickbare Seite markiert. Die Grafik dient zur Veranschaulichung der strukturellen Bestandteile und semantischen Ebenen eines Breadcrumb-Navigationspfads.", "Breadcrumb Anatomie", "breadcrumbs-01" %}

{% abbildung "Grafik eines einzelnen Navigationselements („Hyperlink“) innerhalb einer Pfadnavigation. Dargestellt ist der Text „First Level“ als klickbarer Link, dem ein nach links gerichtetes Pfeilsymbol („Chevron Icon“) vorangestellt ist, das symbolisch auf die vorherige Ebene verweist.", "Single-Breadcrumb Anatomie", "breadcrumbs-06" %}

## Tastaturbedienung

Der Breadcrumb bringt keine eigene Tastaturbedienung mit: Er ist eine Reihe gewöhnlicher Links, jeder eine eigene Station. Die Chevron-Icons dazwischen sind reine Dekoration und bekommen keinen Fokus.

## Barrierefreiheit

*   Der Pfad der Breadcrumb steht in einem `<nav>`\-Bereich mit eigenem Namen, etwa `aria-label="Breadcrumb"`. Ohne den ist er von der Hauptnavigation nicht zu unterscheiden, speziell, wenn ihr ohnehin mit dem Navigationsmuster arbeitet.
*   Die **aktuelle Seite wird mit** `aria-current="page"` **ausgezeichnet.** Unser „Current Level“ ist kein Link — in diesem Fall ist die Auszeichnung laut APG optional, sie schadet aber nicht und macht die Position eindeutig.
*   Die **Chevrons gehören nicht in den Vorlesefluss.** Als Icon-Font aus unserem [Iconset](icons.html) eingefügt, brauchen sie `aria-hidden="true"`. Die Struktur trägt die Liste, nicht das Trennzeichen.
*   Der **Single Breadcrumb braucht einen aussagekräftigen Namen.** „Zurück“ allein sagt nicht, wohin es geht. Im benannten `<nav>`\-Bereich ist der Kontext zwar gegeben (WCAG 2.4.4 „Link Purpose (In Context)“, Stufe A) — ein sprechender Text wie „Zurück zu First Level“ ist trotzdem besser.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Breadcrumb |
| 2 | Dominance | Regular, Decent |
| 3 | Type | Single, 3 bis 7 Level |
| 4 | Style | – |
| 5 | State | – |
|  | Sonstiges | enthält Link (Hyperlink) |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

Folgende Dinge sind bei der Anwendung eines Breadcrumb-Elements zu beachten:
*   Das Breadcrumb-Element zeigt die aktuelle Seite als letzten Eintrag.
*   Alle Einträge außer der aktuellen Seite werden als Hyperlinks dargestellt.
*   Die Breadcrumb-Leiste beginnt mit einem Link zur Startseite.
*   Es gibt eine optische Unterscheidung zwischen Startseite/Items und dem Eintrag zur aktuellen Seite
*   Breadcrumbs werden erst ab einer Hierarchie-Tiefe von drei Ebenen verwendet.
*   Die Breadcrumb-Leiste wird auf einer einzelnen Zeile dargestellt, um ein responsives Design zu unterstützen.

Daraus ergeben sich einige Dos and Don'ts:
Das ist ein Beispiel für die Hierarchie-Tiefe. Ein korrekter Breadcrumb enthält zumindest ein zusätzliches Item, neben der Startseite und der aktuellen Seite.

{% abbildung "Eine Breadcrumb-Navigation mit mindestens 3 Ebenen", "Eine Breadcrumb-Navigation mit mindestens 3 Ebenen", "breadcrumbs-02" %}

{% abbildung "Zu wenige Ebenen bei der Breadcrumb-Navigation", "Zu wenige Ebenen bei der Breadcrumb-Navigation", "breadcrumbs-03" %}

Neben der Minimalgröße gibt es auch eine gewisse Maximalgröße für das Breadcrumb-Element. Diese Maximalgröße wird einerseits durch den verfügbaren, variablen Platz des Ausgabemediums, als auch durch die Bedingung der Einzeiligkeit festgelegt. Ein mehrzeiliges Breadcrumb-Element führt zu Verwirrungen und Missverständnissen.

{% abbildung "Ein einzeilige Breadcrumb mit aktiven Links", "Ein einzeilige Breadcrumb mit aktiven Links", "breadcrumbs-04" %}

{% abbildung "Zweizeilige Breadcrumb sollte vermieden werden", "Zweizeilige Breadcrumb sollte vermieden werden", "breadcrumbs-05" %}

Sollte es technisch nicht möglich sein den Breadcrumb einzeilig darzustellen, so kann das 3-Punkte Symbol (Tripple-Point-Horizontal oder &#x22ef; &#8943;) aus dem Iconset verwendet werden, um Items innerhalb des Elements zu ersetzen. Die Startseite und das letzte Item vor der aktuellen Seite dürfen dabei nicht ersetzt werden.

{% endreiter %}
