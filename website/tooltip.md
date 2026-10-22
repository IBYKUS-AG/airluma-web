---
layout: inhaltsseite.njk
titel: Tooltip
bereich: komponenten
aktuell: tooltip
gruppe: systemfeedback
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Tooltips sind **kleine, zusätzliche Informationsfenster,** die erscheinen, wenn Nutzende mit der Maus über ein Element fahren oder es per Tastatur fokussieren. Sie sollen Zusatzinformationen zum auslösenden Element liefern, ohne das Layout textlich zu überladen. Klingt gut – aber in der Praxis sind sie oft schwer zugänglich.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Tooltips mit typischer Struktur und semantischer Gliederung. Es ist ein rechteckiges Element mit abgerundeten Ecken. Der Text steht linksbündig auf einem Hintergrund. Rechts im oberen Bereich befindet sich ein kleines „Schließen“-Icon, vom Typ „eIB“ (optional).", "Tooltip Anatomie", "tooltip-01" %}

## Layout

{% abbildung "Grafik eines Tooltip mit Maßlinien zur Darstellung typografischer und räumlicher Parameter.", "Tooltip Measurements", "tooltip-02" %}

**Der Tooltip ist ein „Cluster“** mit `--ibk-spacing-16` zwischen Text und „Schließen-eIB“, der Wert für eigenständige Elemente, weil beide unabhängig voneinander gelesen und bedient werden.

## Barrierefreiheit

### Sind Tooltips barrierefrei?

Standard-Tooltips sind **oft nicht barrierefrei,** wegen folgender Probleme.

#### 1\. Ausschließlich per Hover erreichbar

Viele Tooltips erscheinen ausschließlich bei Mouse Hover. Nutzende mit Tastatur, Screenreader oder Touch-Geräten haben dann keine Chance, sie zu sehen oder zu öffnen.

#### 2\. Probleme auf Touch-Geräten

Ein Hover-State existiert auf Touch-Geräten nicht. Viele Tooltips sind dort also schlicht unsichtbar.

#### 3\. Sie verschwinden zu schnell

Wenn ein Tooltip sofort wieder verschwindet, sobald der Mauszeiger sich bewegt, ist er für viele Menschen evtl. nicht nutzbar.

#### 4\. Screenreader-Probleme

Viele Tooltips werden nicht korrekt angekündigt, weil:
*   sie nicht oder nie im Fokus sind, *   sie nicht im DOM stehen oder
*   sie keine sinnvollen ARIA-Rollen haben.

#### 5\. Kognitive Belastung

Wenn Informationen versteckt sind, müssen die Nutzende erst einmal wissen, raten oder zufällig herausfinden, dass es überhaupt Zusatzinfos per Tooltip gibt. Das wirkt sich negative auf die Nutzererfahrung aus.

### Kann man Tooltips barrierefrei gestalten?

Tooltips sind **nicht grundsätzlich verboten** – aber man muss sie **bewusst** nach diesen wichtigen Prinzipien gestalten.

#### 1\. Wichtiges ohne Tooltip vermitteln

Das ist der wichtigste Punkt! Ein Tooltip darf niemals die einzige Quelle einer wichtigen Information sein, sondern nur eine zusätzliche, optionale Unterstützung der Hauptinformation.

Beispiele:
*   Formularfelder brauchen Labels, nicht nur Tooltips.
*   Fehlermeldungen müssen sichtbar sein (evtl. per Dialog), nicht nur als Tooltip.

#### 2\. Per Tastatur erreichbar machen

Das bedeutet, der Tooltip:
*   erscheint auch, wenn das Element den Fokus per Tastaturnavigation erhält.
*   bleibt sichtbar, solange der Fokus auf dem Auslöseelement ist.
*   verschwindet erst, wenn der Fokus der Nutzenden bewusst weiterwandert.

Bedient wird dabei immer das **auslösende Element,** nie der Tooltip selbst:

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Auf das auslösende Element — der Tooltip erscheint dabei von selbst |
| Esc | Schließt den Tooltip, ohne den Fokus zu verschieben |
| Tab (weiter) | Verlässt das Element, der Tooltip verschwindet |

Es gibt keine Taste, die den Tooltip selbst öffnet: Der Fokus auf dem auslösenden Element allein genügt. Und es gibt keine, die in ihn hineinführt — der Tooltip ist somit **keine Station in der Tab-Reihenfolge** und erhält nie den Fokus.

Damit erfüllen wir WCAG 1.4.13 („Content on Hover or Focus“), das für alles gilt, was bei Hover oder Fokus erscheint. Es fordert dreierlei: schließbar per Esc, ohne dass Maus oder Fokus bewegt werden müssen; überfahrbar, der Mauszeiger darf also in den Tooltip hineinfahren, ohne dass dieser verschwindet; und beständig, er bleibt sichtbar, bis Nutzende ihn schließen, den Auslöser verlassen oder die Information ungültig wird.

Weil der Tooltip keinen Fokus aufnimmt, darf er auch **keine bedienbaren Elemente enthalten.** Unser „Schließen“-Icon (eIB) wird per Tastatur nicht erreicht werden. Diese Aufgabe übernimmt dann **„Esc“**. Braucht ein Element wirklich einen Button in seinem Inneren, ist es kein Tooltip mehr, sondern ein Toggletip: Der wird per Klick auf ein Info-Icon geöffnet, darf Fokus aufnehmen und schließt sowohl per Esc als auch über seinen Button.

Beim Hover entscheiden Nutzende selbst, ob sie einen Tooltip sehen wollen. Per Tastatur entscheidet das der Fokus für sie: Der Tooltip erscheint bei jedem Durchtabben mit, auch wenn die Funktion längst bekannt ist. Was beim ersten Mal hilft, stört beim zwanzigsten Durchgang. Ein Grund mehr, **Tooltips bewusst sparsam einzusetzen** und sie per Esc wegräumbar zu machen. Fragt euch deshalb bei jedem Tooltip: Braucht ihn jemand beim zweiten Besuch noch?

#### 3\. ARIA einsetzen

Für barrierefreie Tooltips gibt es zwei etablierte ARIA‑Muster. Welche Methode angemessen ist, hängt davon ab, ob nur eine kurze Zusatzinfo präsentiert oder ein echtes Overlay gebraucht wird.

**Variante A - „aria-describedby“**

Das ist oft die einfachste und robusteste Lösung.

``` HTML
<button aria-describedby="info"\>
  Speichern
</button\>

<div id="info" role="tooltip"\>
  Speichert die aktuellen Einstellungen
</div\>
```

**Variante B - ARIA Tooltip Pattern**

Wenn du ein echtes Overlay brauchst:
*   `role="tooltip"` verwenden
*   Sichtbarkeint über `aria-expanded` oder `aria-hidden` steuern
*   Tooltip muss im DOM bleiben und darf nicht dynamisch entfernt werden

#### 4\. Touch-Geräte berücksichtigen

*   Primäre Aktionen, Handlungsaufforderungen oder Informationen auch ohne zusätzlichen Tooltip verständlich gestalten
*   Tooltip auch per „Fingertip“ öffnen lassen
*   Tooltip per „Tap“ wieder schließen
*   nicht automatisch (time based) verschwinden lassen, solange der Nutzer ihn liest
*   sichtbar belassen, bis Nutzende ihn aktiv schließen
*   fokussierbar sein (für Screenreader und Tastatur)
*   nicht den Hauptinhalt verdecken, wenn möglich

#### 5\. Tooltip stabil halten

Ein Tooltip sollte nicht einfach automatisch verschwinden, wenn:
*   der Mauszeiger minimal verrutscht
*   Nutzende versuchen, den Inhalt des Tooltips zu lesen
*   Nutzende mit der Tastatur navigieren

#### 6\. Texte kurz halten

Tooltips sind für kurze Hinweise gedacht. Soll mehr als einen Satz vermittelt werden, ist ein Tooltip das falsche UI-Element. Genauso sollten Tooltips nicht verwendet werden für:

*   Nicht für kritische Pflichtinformationen
*   Nicht für Fehlermeldungen
*   Nicht für Formulareingaben
*   Nicht für Navigation
*   Nicht für mobile-first Designs
*   Nicht für komplexe Interaktionen

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Tooltip |
| 2 | Dominance | – |
| 3 | Type | – |
| 4 | Style | – |
| 5 | State | – |
|  | Sonstiges | Text, Show Icon |

{% endreiter %}
