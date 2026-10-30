---
layout: inhaltsseite.njk
titel: Navigation Menu Item
bereich: komponenten
aktuell: navigation-menu-item
gruppe: navigation
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

Das „Navigation Menu“ ist ein spezielles UI-Element, das technisch auf einem HTML-Button basiert. Es unterscheidet sich jedoch im Styling und Handling deutlich von unseren bereits [definierten Buttons](button.html). Sein Zweck (der Komponente) ist es, **horizontale oder vertikale Menüs** aufzubauen und so die Orientierung der Nutzenden zwischen verschiedenen Hauptzielen innerhalb einer Anwendung oder Website zu erleichtern.

Während ein normaler Button durch einen Hover-State eine mögliche Aktion signalisiert, verhält es sich bei Navigation Items genau andersherum: Navigation Items haben ein „selected“- (aktuell aktiv) und „unselected“- (navigierbar) Zustand und der fehlende Hover-State des „selected Item“markiert bewusst das aktuell ausgewählte (nicht länger interaktive) Navigationsziel.

## Wann verwenden

### Vorteile

*   Klarer Aufbau von **horizontalen oder vertikalen Menüs.**
*   Deutliche **visuelle Unterscheidung** zwischen ausgewählten und nicht ausgewählten Items.
*   Flexibel **kombinierbar** mit Dropdowns für mehrstufige Navigation.
*   Technisch einfach umsetzbar, da sie **Button basiert** sind.

### Nachteile

*   **Selected** Items sind **nicht** weiter **klickbar** – das kann für manche User ungewohnt wirken.
*   **Weniger für komplexe Menüs** geeignet, da die Übersichtlichkeit leiden kann.
*   **Verwechslungsgefahr** mit Tabs, wenn die Gestaltung nicht eindeutig differenziert ist.

> Nutze Navigation Items, wenn du eine klare, strukturierte Menüführung brauchst. Sie sind besonders geeignet für Hauptnavigationen oder Untermenüs, die den aktuellen Standort deutlich markieren sollen.

## Abgrenzung

> Ähnlich wie bei der Pagination unterscheiden sich Navigation Items stark konzeptionell von unseren regulären Buttons!

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Navigation Menu mit typischer UI-Struktur und verschiedenen Zuständen. Dargestellt ist eine horizontale Anordnung mit mehreren nebeneinander angeordneten „Navigation Menu Items“, die jeweils unterschiedliche Interaktionszustände zeigen: „Enabled“ (aktivierbar), ein hervorgehobenes „Selected Item“ (ausgewählt), „Hovered“ (im Hover-Zustand), „Disabled“ (deaktiviert) und ein „Focus“ (fokussiert). Die Items sind mit Labeltexten wie „Bearbeiten“, „Diagramm“, „Import“, „Export“ und „Entfernen“ beschriftet und mit Leading- und Trailing-Icons ergänzt. Die Zustände werden durch unterschiedliche Farben, Hervorhebungen und Umrandungen visuell voneinander abgegrenzt.", "Navigation Menu Anatomie", "navigation-menu-item-01" %}

Ein „Navigation Menu“ besteht aus mindestens einem „Navigation Menu Item“. Jedes Item kann entweder Selected oder Unselected sein:
*   **„Unselected Items“:** besitzen die üblichen User-States wie Hover, Focus, Enabled und Disabled.
*   **„Selected Items“:** sind bereits gewählt und daher nicht mehr interaktiv – sie markieren den aktuellen Standort in der Navigation.

## Layout

{% abbildung "Grafik eines Navigation Menu mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Dargestellt ist eine vertikale Anordnung. Maßlinien kennzeichnen die vertikalen und horizontalen Abstände innerhalb eines Items sowie die Gesamthöhe von 40 px. Zwei 24 × 24 px große Icons besitzt jeweils 8 px Abstand zum oberen und unteren Rand und einen 8 px Abstand zum linken oder rechten Rand. Der Abstand zwischen den Icons und den variablen Labeltext beträgt 8 px. Der Focus-State ist durch eine 2 px starke Kontur hervorgerufen.", "Navigation Menu Item Measurements", "navigation-menu-item-02" %}

**Der einzelne Eintrag ist ein „Cluster“** aus Icon und Beschriftung mit `--ibk-spacing-8`, linksbündig. Wie mehrere Einträge zueinander stehen, beschreibt das Navigationsmuster.

### Ausrichtung der Trailing Icons

Die Navigationselemente sind so gestaltet, dass die optionalen **„Trailing Icons“**, rechts von dem Menüeintrag, standardmäßig mit einem **Abstand von 8 px** hinter dem Label platziert werden. Bei vertikaler Ausrichtung führt dies jedoch zu **unruhigen Sprüngen** der Icons, wenn die Einträge bzw. Labels unterschiedlich lang sind. Um eine saubere, einheitliche Ausrichtung zu gewährleisten, sollten die **„Trailing Icons“ rechtsbündig positioniert** werden, sodass alle Icons untereinander stehen. Sind nicht bei allen Menüeinträgen Trailing Icons vorhanden, entfällt eine nachträgliche Anpassung.

{% abbildung "Grafik eines vertikalen Menüs mit Einträgen „Edit“, „Diagramms“, „Import“, „Export“ und „Delete“ samt Leading-Icons links. Rechts sind Dropdown-Pfeile als „Trailing-Icons“ zu sehen, die unabhängig von der Label-Länge an einer gemeinsamen vertikalen Linie rechtsbündig ausgerichtet sind. Eine rote gestrichelte Linie markiert die neue gemeinschaftliche Ausrichtung.", "Navigation Menu Icon Alignment", "navigation-menu-item-04" %}

## Kombinationen

Ein **horizontales Navigation-Menü** lässt sich hervorragend mit [Dropdowns](dropdown.html) kombinieren, um komplexere Menüstrukturen abzubilden. Wie aus mehreren Ebenen eine bedienbare Navigation wird, könnt ihr im Navigationsmuster nachlesen. Speziell dafür ist der Type = Dropdown vorgesehen, die keine Radien an den unteren Rändern im „Selected“-Zustand aufweisen, um ein geöffnetes Dropdown anzuschließen. Sie sollten aber nicht mit den [Tabs](tabs.html) (Tabbar) verwechselt werden, da diese andere Interaktionsmuster und Anwendungsfälle haben.

{% abbildung "Beispielhafte Darstellung eines geöffneten Dropdown-Menüs, unterhalb eines horizontalen Navigation Menu mit mehreren Optionen.", "Navigation Menu Example", "navigation-menu-item-03" %}

## Tastaturbedienung

Der Name der Komponente führt hier auf eine falsche Fährte. „Menu“ hat in ARIA eine feste Bedeutung: das Menubar-Muster für Anwendungsmenüs, mit **einer einzigen Station** in der Tab-Reihenfolge und Pfeiltasten für den Wechsel zwischen den Einträgen. Für eine Seitennavigation ist das der falsche Weg, und das W3C sagt das ausdrücklich:

> „The `menubar` pattern requires complex functionality that is unnecessary for typical site navigation that is styled to look like a menubar with expandable sections or fly outs.“

Empfohlen wird stattdessen für aufklappbare Gruppen das Disclosure-Muster — also eine Liste von Links, bei der ein Button eine Untergruppe ein- und ausblendet.

Damit gilt für unser „Navigation Menu“ die einfache Variante: **Jeder Eintrag ist eine eigene Station.** Keine Pfeiltastensteuerung, keine gemeinsame Station für das ganze Menü.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Eintrag zu Eintrag |
| Enter | Folgt dem Eintrag |
| Leertaste | Wirkt **nur**, wenn der Eintrag technisch ein Button ist |

Die letzte Zeile ist der Haken an unserer Umsetzung. Bei einem Link reagiert nur Enter, die Leertaste scrollt die Seite (nachzulesen bei den [Links](link.html)). Bei einem Button reagieren beide. Weil unser „Navigation Menu“ auf HTML-Buttons basiert, verhält es sich derzeit wie ein Button, obwohl es navigiert. Nutzende, die Navigation erwarten, bekommen ein Element ohne Adresse: kein Kontextmenü, kein Öffnen in einem neuen Tab, keine kopierbare URL.

### Type „Dropdown“

Der aufklappbare Eintrag ist ein „Disclosure“: Der Eintrag selbst bleibt ein Button, weil er nichts öffnet außer der Untergruppe.

*   Der Button trägt `aria-expanded="true"` beziehungsweise `"false"` und `aria-controls` mit der ID der Gruppe, die er ein- und ausblendet.
*   Enter und Leertaste schalten um.
*   Die Einträge der geöffneten Gruppe sind ganz normale Stationen und folgen dem Button in der Tab-Reihenfolge.

„Esc“ zum Schließen ist im „Disclosure-Muster“ nicht vorgesehen. Es ist eine verbreitete und sinnvolle Ergänzung, aber keine Anforderung, anders als beim [Dialog](dialog.html), wo Esc der vorgeschriebene Ausweg ist.

## Barrierefreiheit

### Das Menü gehört in einen benannten `<nav>`\-Bereich.

Gibt es mehrere Navigationen auf einer Seite, also Hauptnavigation und Untermenü, unterscheidet nur der Name sie voneinander: `aria-label="Hauptnavigation"`.

### Die Einträge stehen in einer Liste.

Ein `<ul>` mit einem `<li>` je Eintrag lässt Screenreader „Liste mit 5 Einträgen“ ansagen und macht die Länge des Menüs vorab erfassbar (WCAG 1.3.1 „Info and Relationships“, Stufe A). Ohne Liste hangelt man sich blind durch.

### Das ausgewählte Item bekommt `aria-current="page"`.

Sichtbar markiert die Hervorhebung den aktuellen Standort, programmatisch trägt sie bislang nichts und weil das „Selected Item“ nicht interaktiv ist, wird es beim Tabben übersprungen. Das W3C-Beispiel formuliert die Regel knapp: Das Attribut steht an dem Eintrag, dessen Ziel der aktuellen Seite entspricht, und wird entfernt, sobald das nicht mehr zutrifft. Dieselbe Technik: [ARIA26](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA26) nutzen wir bei der nicht-wählbaren [Pagination](pagination.html), im [Breadcrumb](breadcrumbs.html) und im Navigationsmuster.

### Was navigiert, sollte ein Link sein.

Die erste Regel des W3C zum ARIA-Einsatz lautet:

> Wenn ein natives HTML-Element die gewünschte Bedeutung und das gewünschte Verhalten schon mitbringt, nimm dieses Element.

Für ein Navigationsziel ist das `<a href>`. Was eine Untergruppe ein- und ausblendet, ist stets ein `<button>`. Diese Unterscheidung ist keine Geschmacksfrage, sondern eine Aussage über die Rolle des Elements. Richtet euch gern nach dem Navigationsmuster.

### „Show Text“ aus heißt: Name fehlt.

Ein Eintrag, der nur aus dem Leading Icon besteht, hat keinen zugänglichen Namen. Screenreader sagen „Schaltfläche“ oder „Link“ und sonst nichts. Der Name muss dann ausdrücklich mitgegeben werden (WCAG 4.1.2 „Name, Role, Value“, Stufe A; für Links zusätzlich 2.4.4 „Link Purpose (In Context)“, Stufe A).

### Style „HR“ ist Dekoration, Style „Headline“ ist Struktur.

Die Trennlinie braucht `aria-hidden="true"`, damit sie nicht als Zeichen vorgelesen wird. Die Überschrift dagegen gliedert das Menü und sollte diese Gliederung auch programmatisch tragen, als Überschriftenelement oder als Name einer Gruppe innerhalb der Liste (WCAG 1.3.1).

### Deaktivierte Einträge besser mit `aria-disabled`.

Das HTML-Attribut `disabled` nimmt den Eintrag aus der Tab-Reihenfolge und aus der Ansage. Nutzende erfahren nicht, dass es ihn gibt oder gab. Bei einer Navigation ist gerade das aber die Information — dass ein Bereich existiert, aber gerade nicht erreichbar ist. Dieselbe Abwägung wie beim Button.

### Der „Focus stroke“ bleibt sichtbar

Auch auf dem Eintrag mit Dropdown und auch im aufgeklappten Zustand (WCAG 2.4.7 „Focus Visible“, Stufe AA). Die Anatomie führt ihn mit 2 px Stärke als eigenen festen Bestandteil.

### Die Trefferfläche ist unkritisch.

Mit 40 px Höhe und 24 px großen Icons liegen die Einträge deutlich über den 24 × 24 CSS-Pixeln aus WCAG 2.5.8 („Target Size (Minimum)“, Stufe AA).

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Navigation Menu |
| 2 | Dominance | Prominent, Regular |
| 3 | Type | Standalone, Dropdown |
| 4 | Style | Selected, Unselected, HR, Headline |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus |
|  | Sonstiges | Leading Icon, Show Text, Trailing Icon |

{% endreiter %}
