---
layout: inhaltsseite.njk
titel: Badge
bereich: komponenten
aktuell: badge
gruppe: systemfeedback
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Ein Badge ist ein **kleines**, **nicht-interaktives** UI-Element, das hauptsächlich zur Anzeige von **Statusinformationen** durch **Färbungen** oder **Zählungen** dient. Es ist typischerweise kreisförmig oder rechteckig, mit kurzen Texten oder Zahlen. Normalerweise übernehmen die Betriebssysteme die Darstellung, jedoch brauchen wir eigene Lösungen zur Nutzung in unserer Software.

Badges erscheinen sehr oft in der Nähe von Icons, um dem Nutzer wichtige oder relevante Informationen auf den **ersten Blick** zu vermitteln. Ein Badge kann viel mehr als visueller Hinweis darauf dienen, dass eine **Aktion stattgefunden** hat (z.B. neue Nachricht eingegangen) oder eine **Aktion erforderlich** ist (z.B. Aufgaben zu erledigen).

## Abgrenzung

In der Welt der Benutzeroberflächen gibt es eine Vielzahl an UI-Elementen, die uns täglich dabei unterstützen, Informationen aufzunehmen und Aktionen auszuführen. Vielleicht sind dir Begriffe wie „Badge“, „Chip“ oder „Button“ schon einmal begegnet, aber was genau verbirgt sich dahinter? Jedes dieser Elemente hat seinen eigenen Zweck und hilft uns, digitale Anwendungen intuitiv und effizient zu bedienen.

|  | Badge | Chip | Button |
| --- | --- | --- | --- |
| Zweck | Benachrichtigung, Status oder Zählung anzeigen | Auswahlmöglichkeiten, Information, Kategorien, Tags oder Filter | Aktion oder Funktionen auslösen |
| Interaktivität | **Nicht** interaktiv | **Teilweise** Interaktiv | **Meist** interaktiv (außer bei disabled Buttons) |
| Design | Kreis oder kleines stark abgerundetes Rechteck, oft mit Zahlen | Kompakt, stark abgerundetes Rechteck, kann Schlagworte und je nach Typ ein Icon enthalten | Auffälliger, größere Fläche, klare Kanten, häufig mit Text und evtl. Icon |
| Beispiele | Ob (mittels Badge-Decent und -Regular) oder Anzahl (mittels Badge) ungelesener Nachrichten | Kategorienauswahl oder Tags für z.B. „Sport“, „Musik“ | „Speichern“ oder „Absenden“ |

## Varianten

### Typen

In einem responsiven Webdesign sind unterschiedliche Badge-Größen entscheidend, um Informationen auf verschiedenen Bildschirmgrößen optimal anzuzeigen. Dafür stellen wir drei Größen zur Verfügung:

**Badge-Decent:** Das kleinste Format eignet sich besonders für dezente Hinweise, die in kompakten Layouts gut zur Geltung kommen, ohne das Interface zu überladen.

**Badge-Regular:** Diese mittlere Größe ist ähnlich wie Badge-Decent ideal für allgemeine Statusanzeigen und bleibt sowohl auf größeren als auch kleineren Bildschirmen gut wahrnehmbar.

**Badge** (mit Zählwerk): Als größtes Format bietet es Raum für Zählungen oder Mengenangaben und sorgt dafür, dass auch auf kleinen Displays wichtige Informationen, wie die Anzahl von Benachrichtigungen oder Ereignissen, deutlich wahrnehmbar sind.

Die Auswahl der passenden Badge-Größe je nach Kontext und Bildschirmgröße ermöglicht eine präzise und ansprechende Darstellung, die den Nutzenden intuitiv informiert, ohne die Übersichtlichkeit des Interfaces zu beeinträchtigen.

### Anwendungsgrößen

{% abbildung "Grafik zur Darstellung von Größenverhältnissen und Schwellenwerten bei Badges in Bezug auf die Größe flankierender Icons. Gezeigt wird die empfohlene Verwendung eines 4 px runden „Badge-Decent“ für Icongrößen zwischen 12 px und 23 px sowie eines 8 px runden „Badge-Regular“ ab 24 px. Die Schwellenmarken bei 20 px und 23 px sind durch Maßlinien hervorgehoben. Die Grafik dient als visuelle Entscheidungshilfe zur Auswahl der passenden Badge-Größe in Relation zur Iconfläche.", "Badge-Schwelle", "badge-02" %}

Wir empfehlen, das „Badge-Decent“ für Icongrößen zwischen 12 und 23 px zu verwenden. Bei kleineren Icons weniger als 12 px muss eine designende Person entscheiden, ob das Icon noch erkennbar ist und ein „Badge-Decent“ weiterhin sinnvoll ist. Ab einer Icongröße von 24 px eignet sich das „Badge-Regular“ besser, um eine stimmige Proportion zur Iconfläche zu gewährleisten. Bei Flächen größer als 48 px ist ein „Badge-Regular“ evtl. zu diskret und kann längst durch ein „Badge“ (mit Zählwerk) ersetzt werden.

Das Badge mit einem Zählwerk darf nur Zahlen anzeigen und ist auf 3 Stellen beschränkt. Zahlen über 99 werden nur noch mit 99+ gekennzeichnet. Kurze Schlagworte, wie z.B. „Neu“ können mit einem Chip-Element besser dargestellt werden.

### Funktionsfarben

Unsere [Funktionsfarben](farben.html#funktionsfarben) in Kombination mit den Badges an unseren Icons können die Typisierung präzisieren und vermitteln dem Nutzenden auf einen Blick die Art der Information – etwa Rot für Fehler, Grün für Erfolge, Blau für allgemeine Informationen usw.

{% abbildung "Badge+Farben", "Badges in Kombination mit unseren Funktionsfarben", "badge-03" %}

{% endreiter %}

{% reiter "spezifikation" %}

## Layout

{% abbildung "Grafik mit Maßlinien zur Darstellung dreier Badge-Typen im Vergleich: „Badge-Decent“ mit einem 4 px runden Punkt, „Badge-Regular“ mit einem 8 px runden Punkt und „Badge+“ mit einem Zählwerk, das 16 px hoch ist und je nach Ziffernanzahl variabel in der Breite. Das Zählwerk ist dabei 4 px nach oben und rechts gegenüber dem darunter liegenden Icon verschoben. Bei der „Decent“- und „Regular“-Variante ist der Badge oben rechts in der Ecke des zugrunde liegenden Icons positioniert.", "Badge-Größen und -Positionen", "badge-01" %}

**Das Badge ist kein Primitiv:** Es ist verankert und liegt über dem Element, zu dem es gehört. Deshalb nimmt es keinen Platz weg.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Badge |
| 2 | Dominance | Regular, Decent |
| 3 | Type | – |
| 4 | Style | Standard, Info, Success, Warning, Alert |
| 5 | State | – |

{% endreiter %}
