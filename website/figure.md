---
layout: inhaltsseite.njk
titel: Figure
bereich: komponenten
aktuell: figure
gruppe: base
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

## Grundsätze

### figcaption für Bildunterschriften

Für Bilder oder andere visuelle Inhalte bietet HTML5 das `<figure>`\-Element, das zusammen mit `<figcaption>` verwendet werden kann, um eine Bildunterschrift hinzuzufügen. Dies ist die empfohlene Methode für Bildunterschriften.

Beispiel:

```html
<figure>
  <img src="bild.jpg" alt="Beschreibung des Bildes">
  <figcaption>Das ist die Bildunterschrift</figcaption>
</figure>
```

{% abbildung "figcaption oben-unten", "", "figure-01" %}

Das `<figure>`-Element gruppiert das Bild mit der Bildunterschrift, und das `<figcaption>`-Element beschreibt den Inhalt. Diese Kombination kann nicht nur für Bilder verwendet werden, sondern auch für Diagramme, Grafiken, Videos und andere Inhalte. Die Platzierung der `<figcaption>` kann sowohl oberhalb als auch unterhalb des Bildes erfolgen, je nachdem, wo du die `<figcaption>` im Code ober- oder unterhalb des `<img>`-Tag platzierst.

Wir empfehlen eine linksbündige Ausrichtung des Textes mit einer „Text-M“-Formatierung.

{% abbildung "", "", "figure-02" %}

### caption für Tabellen

Das `<caption>`\-Element in HTML wird verwendet, um einer Tabelle eine Beschriftung hinzuzufügen. Standardmäßig wird das `<caption>`\-Element zentriert und oberhalb der Tabelle angezeigt. Du kannst jedoch die Eigenschaft caption-side: bottom verwenden, um die Position auf unterhalb der Tabelle zu verschieben. Des Weiteren kannst du den Text im `<caption>`-Element mit gängigen CSS-Eigenschaften stylen:
*   caption-side = Position der Beschriftung (oben oder unten)
*   text-align = Ausrichtung des Textes (links, zentriert, rechts)
*   font-size, color oder font-family = Stil des Textes
*   padding, margin = Abstände innerhalb und außerhalb der Caption
*   background-color und border = Hintergrundfarbe und Rahmen

Wir empfehlen jedoch die Position oberhalb und linksbündig der Tabelle in der „Text-M“-Formatierung, damit bei übergroßen Inhalten der Bezug zur Beschriftung nicht verloren geht und ggf. ein Screenreader es vor dem Inhalt der Tabelle vorlesen wird.

> Wenn das Element verwendet wird, muss das `<caption>` jedoch das erste Kindelement seines übergeordneten `<table>`\-Elements sein.

{% abbildung "caption oben", "", "figure-03" %}

> Wenn eine Tabelle per `<table>` innerhalb eines `<figure>`\-Elements als einziges Inhaltselement eingebettet ist, sollte sie über ein `<figcaption>` für das `<figure>` beschriftet werden, anstatt über ein `<caption>` innerhalb der `<table>`.

{% endreiter %}

{% reiter "spezifikation" %}

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Figcaption oder Caption |
| 2 | Dominance | Regular |
| 3 | Type | Figcaption, Caption |
| 4 | Style | Top or Bottom (für Figcaption) |
| 5 | State | – |

{% endreiter %}

{% reiter "dos-donts" %}

## Formulierung

Eine Bildunterschrift muss **mit kurzen Worten oder Wortgruppen** in **normaler Schreibweise** jedoch mit **klarer und präziser Sprache** formuliert sein. Dabei kann es das Bild näher **beschreiben oder ergänzende** Informationen, z.B. bei Grafiken oder die Nutzungsrechte bei Bildern, kommunizieren.

{% endreiter %}
