---
layout: inhaltsseite.njk
titel: Taxonomie
bereich: grundlagen
aktuell: taxonomie
---
## Was ist eine Taxonomie?

Der Begriff **„Taxonomie“** stammt aus dem Griechischen (τάξις „Ordnung“ und νόμος „Gesetz“) und bezeichnet die **Lehre von der Klassifikation und Systematik.** Es geht darum, Dinge, Konzepte oder Lebewesen nach bestimmten Kriterien in Gruppen oder Kategorien zu ordnen. Der Begriff wird in verschiedenen Disziplinen verwendet, daher variiert seine genaue Bedeutung je nach Kontext.

## Unsere Taxonomie

Um unsere Designbibliothek und ihre Komponenten übersichtlich und konsistent zu strukturieren, werden wir ein **fünfstufiges Modell (+ Modus)** nutzen. Dieses Modell bietet uns eine flexible Taxonomie, die sämtliche Komponenten und deren jeweiligen Funktionsumfang abdeckt und zugleich einheitliche Begriffe verwendet.

Indem wir auf Bezeichnungen wie „default“ oder „normal“ verzichten, vermeiden wir ungewollte Wertungen und schaffen eine **klare, sachliche Terminologie.** Auf diese Weise fördern wir eine effizientere Zusammenarbeit innerhalb des Teams und sorgen für eine transparente Kommunikation zwischen allen Projektbeteiligten, da sich dieses Konzept auch auf Dateinamen oder Bezeichnungen übertragen lässt, z.B.: Button/Regular/Success/Text/Enabled.

| Stufe | Begriff | Wofür | Beispiele |
| --- | --- | --- | --- |
| 0 | Mode (Modus) | Variablen oder Variablen-Bibliotheken | Light- oder Darkmode |
| 1 | Component (Komponente) | Grafisches Bauteil | Button |
| 2 | Dominance (Dominanz) | Visuelle Gewichtung oder Hierarchie im Layout | Prominent, Regular, Decent |
| 3 | Type (Typ) | Art & Weise, Funktion, Zweck | Primary, Ordered, Passive, o.ä. |
| 4 | Style (Stil) | Visuelle Gestaltung oder Erscheinung, Anordnung (ohne Farbangaben) | Standard, Text, Icon, Filled, Elevated, usw. |
| 5 | State (Zustand) | Zustände, die durch Nutzende direkt beeinflussbar sind | Enabled, Hover, Pressed, Focus, usw. |

## Unterschied Style vs. State

### Style

Zustände eines Elements, das in **funktionale Kategorien** oder visuelle **Design-Konzepte** eingeordnet wird, um es systematisch besser zu organisieren. Die Nutzenden haben **nicht oder nur indirekt Einfluss** auf die Eigenschaften.

Styles sind wichtig, wenn eine Komponente nicht allein durch die „Dominance“ klar definiert werden kann.

### State

Zustand eines Elements zu einem bestimmten Zeitpunkt, oft in Reaktion auf das Verhalten oder die **Interaktion** **der Nutzenden** (Ausnahme: „Disabled“)

Aus dieser Definition kann ein „State“ an einer nicht interaktiven Komponente folglich nur ein Style sein, da die Nutzenden nicht direkt damit interagieren können.

Nicht alle Stufen der Taxonomie sind in der Design-Bibliothek von Figma beschriftet. Wenn es nur eine „Dominance“ gibt (z.B. „Regular“), dann muss es nicht an der Komponente definiert werden, weil es die Komponente nur unnötig komplex macht. **Die Taxonomie bleibt aber gültig!** Ähnlich verhält es sich natürlich auch bei „Type“, „Style“ oder „State“.
