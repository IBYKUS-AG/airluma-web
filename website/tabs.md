---
layout: inhaltsseite.njk
titel: Tabs
bereich: komponenten
aktuell: tabs
gruppe: content
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Tabs, auch Reiter, Registerkarten, Karteireiter oder Karteikarten genannt, gliedern eine Anwendung oder Seite in **Hauptbereiche auf derselben Ebene** (z.B. „Übersicht“, „Projekte“, „Berichte“, „Einstellungen“). Ein **Tabwechsel bedeutet Navigation.** Nutzende wechseln den Bereich, nicht nur den Zustand eines Inhalts. Pro Tab kann ein eigener Aktivitätenverlauf oder Seitenzustand entstehen (z.B. gesetzte Filter oder Seiten-Scrollposition).

## Wann verwenden

### Vorteile

*   **Klarer Anker:** Hauptbereiche sind sofort sichtbar.
*   **Schnelles Umschalten:** Ein Tap/Klick reicht, Orientierung bleibt erhalten.
*   **Persistenter Kontext:** Jeder Bereich kann seinen eigenen Zustand bewahren.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik einer Tabs-Navigation mit typischer UI-Struktur und verschiedenen Zuständen. Dargestellt ist eine horizontale Tab-Leiste mit mehreren nebeneinander angeordneten Tabs, die jeweils unterschiedliche Interaktionszustände zeigen: ein „Enabled Tab“ (aktivierbar), ein hervorgehobener „Selected Tab“ (ausgewählt), ein „Hovered Tab“ (im Hover-Zustand), ein „Disabled Tab“ (deaktiviert) und ein „Focus Tab“ (fokussiert). Die Tabs sind mit Texten wie „Posteingang“, „Entwürfe“, „Ausgang“ beschriftet und teilweise mit eIB ergänzt. Die Zustände werden durch unterschiedliche Farben, Hervorhebungen und Umrandungen visuell voneinander abgegrenzt.", "Tabs Anatomie", "tabs-01" %}

## Layout

{% abbildung "Grafik einer Tabs-Navigation mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Dargestellt ist eine horizontale Leiste mit mehreren nebeneinander angeordneten Tabs. Maßlinien kennzeichnen die vertikalen und horizontalen Abstände innerhalb der Tabs sowie die Gesamthöhe der Komponente von 40 px. Ein 24 × 24 px großes Icon besitzt jeweils 8 px Abstand zum oberen und unteren Rand. Der Abstand zwischen linkem Innenrand und Icon beträgt 10 px, zwischen Icon und Text 8 px sowie zwischen Text und rechtem Innenrand 14 px. Die Tab-Leiste ist durch eine 2 px starke Kontur begrenzt.", "Tabs Measurements", "tabs-02" %}

**Die Tab-Leiste ist ein „Cluster“,** der umbrechen darf. Abweichend vom Standard ist der **Abstand = 0,** die Tabs stoßen aneinander, damit die gemeinsame Grundlinie durchläuft und sie als eine Leiste gelesen werden. Der einzelne Tab ist innen ein „Cluster“ aus Icon und Beschriftung mit `--ibk-spacing-8`.

## Kombinationen

### Tabs-Counter Kombination

Manchmal reicht die Beschriftung allein nicht aus. Ein Bereich hat z.B. 42 ungelesene Nachrichten, und das soll man sehen, ohne ihn zu öffnen. Dafür treffen zwei Komponenten aufeinander: Tabs und das [Badge mit Counter](badge-counter.html). Der Tab behält seine Höhe von 40 px, seine Innenabstände und alle Zustände; das Badge bleibt weiterhin „nicht-interaktiv“.

**Neu ist allein die Position:** Das Zählwerk steht rechts neben der Beschriftung, mit demselben Abstand von 8 px, den auch das eIB-Icon zum Textlabel des Tabs hält. Dahinter folgt unverändert der rechte Innenabstand von 14 px. So fügt sich das Badge in den bestehenden Rhythmus des Tabs ein, statt eine eigene Regel mitzubringen.

Für Screenreader gehört die Zahl in den Namen des Tabs, also „Posteingang, 42 ungelesen“, denn das Badge selbst ist nur ein optischer Hinweis.

{% abbildung "Anatomie einer Tabs-Navigation mit Counter-Badges. Dargestellt ist eine horizontale Tab-Leiste mit vier Tabs, die jeweils ein eIB-Icon und eine Beschriftung tragen, drei davon ergänzt um ein rotes Badge mit Zählwerk rechts neben der Beschriftung: „Posteingang“ mit „42“, der ausgewählte Tab „Entwürfe“ mit „1“ und roter Unterstreichung sowie „Ausgang“ mit „99“ im Hover-Zustand mit grau gefüllter Fläche. Der letzte Tab „Archiv“ ist deaktiviert, ausgegraut und trägt kein Badge. Oberhalb des ersten Badges führt eine Hilfslinie zur Beschriftung „Counter“.", "Tabs mit Counter-Badge", "tabs-03" %}

## Tastaturbedienung

Die ganze Tab-Leiste sollte genau eine Station in der Tab-Reihenfolge sein, nicht jeder Tab einzeln. Innerhalb der Leiste übernehmen die Pfeiltasten die Navigation, anders als bei einem [Menü](navigation-menu-item.html), das sich nach dem Navigationsmuster richtet.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | In die Tab-Leiste hinein und weiter in den Inhaltsbereich |
| Pfeil links / rechts | Wechselt zum vorigen bzw. nächsten Tab und zeigt den Bereich sofort |
| Pos1 / Ende | Erster bzw. letzter Tab |

Ein Tab-Stopp per Tastatur sollte immer auf dem ausgewählten Tab landen und nicht auf dem ersten. Deaktivierte Tabs überspringen die Pfeiltasten. Enter und Leertaste braucht es bei einem „direkten Wechsel“ nicht — die Pfeiltaste wechselt den Bereich bereits. Aber ...

> Das hat eine Grenze: Lädt ein Bereich sofort nach (siehe „Laden & Technik“), löst jeder Pfeiltastendruck einen Ladevorgang aus — bei sechs Tabs also sechsmal. In diesem Fall sollte dringend auf eine manuelle Aktivierung gewechselt werden. Die Pfeiltasten verschieben dann nur den Fokus, Enter oder die Leertaste öffnet anschließend den Bereich. Entscheidet das bewusst und einheitlich pro Anwendung.

## Barrierefreiheit

*   **Rollen & Beziehungen:** Gruppe als Tabs auszeichnen (ARIA: `tablist`, `tab`, `tabpanel`). Der gewählte Tab trägt `aria-selected`, verweist per `aria-controls` auf seinen Bereich, der Bereich per `aria-labelledby` zurück auf den Tab.
*   **Eine Station:** Nur der ausgewählte Tab ist per Tab erreichbar, die übrigen tragen `tabindex="-1"`. Sonst müssen Nutzende sich durch alle Tabs hindurchtabben, um zum Inhalt zu kommen.
*   **Bereich erreichbar halten:** Enthält der Inhaltsbereich kein fokussierbares Element, braucht er `tabindex="0"`, damit Tab dort überhaupt landet.
*   **Wahrnehmbare Zustände:** Der aktive Tab muss klar markiert sein und Fokus- oder Hover-States müssen gut wahrnehmbar sein. „Selected“ darf sich dabei nicht allein über die Farbe von „Hovered“ unterscheiden.
*   **Deaktivierte Tabs** müssen als deaktiviert angesagt werden, nicht nur ausgegraut erscheinen.
*   **Deeplinks:** Wird ein Tab über URL oder Anker aufgerufen, muss er auch programmatisch der ausgewählte sein — nicht nur optisch hervorgehoben.
*   **Nachladen ansagen:** Skeleton-Loading oder „Infinite Spinner“ brauchen eine Statusrolle, sonst bleibt die Wartezeit für Screenreader stumm.
*   **Trefferfläche:** Bei Touch-Geräten müssen Flächen (mind. 40 × 40 pt/dp/px) gut tappbar/klickbar sein und ausreichende Innenabstände aufweisen.
*   Das **optionale Icon** im Tab **ist dekorativ** und braucht keine eigene Ansage, weil es laut unserer Vorgabe immer zusammen mit Text steht.

## Umsetzung

### Laden & Technik

Tabs sind ein UI-Muster und **kein Technikzwang.** Ob Inhalte „neu geladen“ werden, hängt von der technischen Umsetzung ab und nicht von „Tabs“ per se. Bei einer Single-Page-App (SPA) schalten Tabs einzelne Views oder Komponenten um. Inhalte können im Speicher bleiben und ein Zurückwechseln geht ohne Reload. Bei Bedarf kann der Inhalt aber gezielt neu laden (z.B. automatisiert nach X Minuten).

Bei Multi-Page (klassische Seiten) kann jeder Tab eine eigene URL haben. Es gibt dann zusätzliche Requests, aber die können gecacht/prefetched werden. Das wäre kein harter Reload wie bei iFrames.

Bei Native Apps (unter iOS/Android) besitzen Tabs meist eigene Stacks. Die unterschiedlichen Bereiche laden beim ersten Öffnen und behalten ihren Zustand, auch wenn Nutzende dorthin zurückwechseln.

#### Techniktipps
*   **State-Caching pro Tab** (Filter, Scrollposition).
*   **Lazy Load** nicht aktiver Tabs; optional Prefetch im Idle/Hover.
*   Bei echtem Nachladen **Skeleton-loading** oder **Loading Spinner** (siehe unseren Infinite Spinner) zeigen.
*   **Routen-Caching** + **deeplink-fähige URLs** kombinieren.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Tabs |
| 2 | Dominance | Regular |
| 3 | Type | – |
| 4 | Style | Selected, Unselected, Rail |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus |
|  | Sonstiges | Tab Text, Icon |

{% endreiter %}

{% reiter "dos-donts" %}

## Klares Einsatzgebiet

*   **Nutzen,** wenn du primäre **Bereiche derselben Hierarchieebene** anbietest.
*   Nicht nutzen, wenn du Ansichten/Filter innerhalb desselben Inhalts umschaltest. Dafür ist ein [Segmented Control](segmented-control.html) besser.
*   **Nicht für Aktionen** (z.B. Sortieren, Export). Dafür besser Buttons oder ein anderes Element nutzen.

## Anzahl & Reihenfolge

*   **Pragmatisch bleiben:** Ideal sind wieder 3–5 Tabs, max. jedoch 5–6.
*   **Priorisieren:** Wichtigste Tabs nach links bzw. an den Beginn des Leseflusses.
*   **Keine zweite Zeile:** Horizontales Scrollen für Primärnavigation soll vermieden werden.

## Beschriftung (Microcopy)

*   **Kurz & eindeutig:** 1–2 Wörter (z.B. „Projekte“, „Berichte“).
*   **Konsistente Wortart:** z.B. Substantive
*   **Icons optional:** nur mit klarem Mehrwert, eindeutige Identifizierbarkeit und immer zusammen mit Text.

## Verhalten & Zustand

*   **Direkter Wechsel:** Tabwechsel zeigt den jeweiligen Bereich sofort.
*   **Zustände bewahren:** Wo sinnvoll, Filter/Scrollposition pro Tab merken.
*   **Deeplinks:** Tabs sollen direkt verlinkbar sein (URL/Anker).
*   Badges/Zähler sparsam einsetzen (z.B. „3“ bei Benachrichtigungen).

## Bei zu vielen Bereichen gilt

*   **Besser gruppieren:** Verwandte Tabs zusammenführen.
*   **Hierarchie anpassen:** Primärbereiche besser als Sidebar, Navigation oder Menü, wie auf der Seite Navigationsmuster beschrieben, anbieten und nur untergeordnete Inhalte als Tabs innerhalb eines Bereichs darstellen.
*   **Alternativen nutzen:** Für Zustandswechsel sind [Segmented Control](segmented-control.html) besser geeignet; für viele, seltene oder sekundäre Optionen wären Dropdown oder ein Menü geeigneter.

{% endreiter %}
