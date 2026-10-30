---
layout: inhaltsseite.njk
titel: Table Item
bereich: komponenten
aktuell: table-item
gruppe: content
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Ob zur Darstellung von **großen Datenmengen** oder zur besseren **Strukturierung von Informationen** – HTML-Tabellen sind ein starkes Werkzeug. Sie bringen Ordnung, Klarheit und Struktur in komplexe Daten. Aber nur, wenn sie richtig eingesetzt wird.

Laut W3C besteht eine **grundlegende Tabelle** `<table>` aus drei Teilen: `<thead>`, `<tbody>`, `<tfoot>`, die wiederum durch `<tr>` (table row) in Zeilen geteilt werden. `<th>` (table head) und die Datenzellen `<td>` (table data) halten die Daten der Tabelle. Jede Tabelle kann mit einer optionalen `<caption>` (Tabellen-Beschriftung) beschriftet werden. Diese Struktur hilft nicht nur der Optik, sondern auch der Accessibility (Zugänglichkeit) – gerade für Screenreader.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik einer standardisierten HTML-Tabelle mit semantischer Gliederung in „caption“, „thead“, „tbody“ und „tfoot“. Die Tabelle beginnt mit einer optionalen Beschriftung, der „caption“, die oben links mit der Textformatierung „Text-M“ angezeigt wird. Im Tabellenkopf (thead) befindet sich ein Beispieleintrag z.B. „Standort“ in einem `<th>`-Element. Der Tabelleninhalt (tbody) umfasst fünf Zeilen, die sich abwechselnd farblich unterscheiden – klassifiziert als „odd“ und „even“. In der Fußzeile (tfoot) erscheint erneut der Eintrag „Standort“, diesmal in einem `<td>`-Element. Sämtliche Inhalte der Datenzeilen sind als `<td>`-Elemente strukturiert. Zusätzlich ist ein optionaler „Focus Stroke“ dargestellt, der die Tabelle und die Caption visuell mit einem blauen Rand hervorhebt.", "Anatomie einer Table", "table-item-01" %}

Damit unsere Tabellen im Alltag optimal funktionieren, beachten wir:
*   `<th>`\-Kopfzellen dürfen **nicht kleiner als 48 px** (3 rem) sein, um die Lesbarkeit und Bedienbarkeit zu sichern.
*   `<td>`\-Datenzellen dürfen **nicht kleiner als 40 px** (2,5 rem) sein – besonders wichtig, wenn dort weitere Elemente wie, z.B. Buttons enthalten sind.
*   `<tfoot>` gruppiert die Fußzeileninhalte einer HTML-Tabelle
    **Hinweis:** Browser nutzen `<tfoot>`, um das Scrollen des Körpers unabhängig von Kopf/Fuß zu ermöglichen und um beim Drucken die Fußzeile auf jeder Seite zu wiederholen
*   Tabellen sind standardmäßig **nicht interaktiv.** Tabellenzellen haben deshalb keinen Fokus, aber wir nutzen Hover- und Active-Zustände für ein besseres Nutzergefühl.
*   Sortiersteuerungen (z.B. fokussierbare **Buttons oder eIB**) müssen in `<th>`/`<td>`\-Zellen liegen und `aria-sort="none|ascending|descending"` aufweisen. Zudem müssen sie per Enter/Space auslösbar sein und sichtbaren Fokus zeigen.
*   **Horizontales Scrolling** kann über ein Eltern-div mit `overflow-x: auto;` ermöglicht werden.

> Nutzt kein display: block; auf Tabellen – das zerstört viele native Funktionen einer Tabelle!

## Layout

**Die Table ist ausdrücklich kein Primitiv.** Zeilen und Spalten hängen inhaltlich zusammen und dürfen nicht umbrechen. Sie fällt damit unter die Reflow-Ausnahme für zweidimensionale Inhalte _(WCAG 1.4.10, Stufe AA)_ und scrollt bei Platzmangel waagerecht/horizontal.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Table Items |
| 2 | Dominance | Regular, Decent |
| 3 | Type | TH, TD |
| 4 | Style | TH, TD even (row 2..4..6...), TD odd (row 1..3..5...) |
| 5 | State | Hover, Enabled, Hover (row), Hover (colum) |
|  | Sonstiges | Text TD, Text TH |

{% endreiter %}
