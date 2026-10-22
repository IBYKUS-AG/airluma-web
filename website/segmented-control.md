---
layout: inhaltsseite.njk
titel: Segmented Control
bereich: komponenten
aktuell: segmented-control
gruppe: content
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Ein **Segmented Control**, auch Segmented Button oder Segmentsteuerung, ist ein UI-Element (aus der macOS/iOS-Welt und dem Material-Framework), mit dem wir zwischen **eng verwandten Optionen** oder **Inhaltszuständen** umschalten, z.B. „Liste / Karte“, „Heute / Woche / Monat“ oder „Alle / Offen / Erledigt“. Die Nutzenden bleiben auf derselben Seite. Nur die Darstellung des Inhalts ändert sich.

## Wann verwenden

### Vorteile

*   **Übersichtlich:** Alle Optionen sind gleichzeitig sichtbar, ein Klick genügt zum Wechseln.
*   **Schneller Vergleich:** Ideal, wenn Nutzende häufig hin- und herwechseln müssen.
*   **Klarer Fokus:** Kein Navigationswechsel, nur ein Zustandswechsel.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Anatomie eines „Segmented Control“: drei nebeneinander angeordnete Segmente in einem gemeinsamen, pillenförmigen Container mit hellgrauer, 2 px starker Kontur. Das ausgewählte Segment „Heute“ ist als petrolfarbene Pille mit weißer Beschriftung hervorgehoben, die unausgewählten Segmente „Woche“ und „Monat“ tragen schwarze Beschriftungen auf weißem Grund. Hilfslinien führen zu drei roten Beschriftungen, die die Bestandteile benennen – „Selected“ (das ausgewählte Segment), „Segments“ (die drei Einzeloptionen) und „Container“ (die umschließende Rahmenstruktur).", "Segmented Control Anatomie", "segmented-control-01" %}

## Layout

{% abbildung "Grafik einer Segmented-Control-Komponente mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Gezeigt wird ein pillenförmiger Container mit vier Segmenten, die jeweils ein eIB-Icon und eine Beschriftung tragen: „Segment One“ ist als petrolfarbene Pille ausgewählt, „Segment Three“ wird bei Fokus durch einen „Focus stroke“ hervorgehoben, „Segment Two“ und „Segment Four“ sind unausgewählt. Maßangaben in px: 48 für die Gesamthöhe des Containers, 40 für die Höhe eines Segments, 24 für die Icon-Größe und 2 für die inneren Abstände; 2 px betragen die Kontur des Containers, der Abstand zwischen Kontur und Segmenten sowie die Abstände zwischen den Segmenten.", "Segmented Control Measurements", "segmented-control-02" %}

Unsere [Layout-Seite](layout.html) verlangt von jeder Komponente drei Angaben: das genutzte Primitiv, jede Abweichung mit Begründung und das Ergebnis der 320-px-Prüfung. Die Vierte, die Mindestbreite im Auto-Grid, entfällt hier, da der Segmented Control keines ist.

### Er nutzt keines der vier Primitive

Die Segmente stehen **in einer Zeile,** die **nicht umbrechen darf,** sonst zerfiele die pillenförmige Kontur in zwei Reihen. Damit scheiden „Cluster“ und „Auto-Grid“ aus, beide brechen um. Der Container bleibt deshalb ein einfaches, nicht umbrechendes Flex-Element ohne `flex-wrap`.

### Abstand unter der Nähe-Skala

Zwischen den Segmenten liegen 4 px (`--ibk-spacing-4`), zwischen Kontur und Segmenten sowie in der Kontur selbst je 2 px. Beide Werte liegen bewusst unter der Nähe-Skala für lose Gruppen: Die Segmente sollen, wie schon bei der Pagination (ebenfalls 4 px), als **eine zusammenhängende Einheit** gelesen werden, nicht als Reihe einzelner Elemente.

``` CSS
.ibkSegmentedControl {
  display: inline-flex;
  gap: var(--ibk-spacing-4, 0.25rem);
  padding: var(--ibk-spacing-2, 0.125rem);
  border: 2px solid var(--ibk-neutral-grey-74);
}
```

### Die Breite entsteht aus dem Inhalt, nicht aus einer Vorgabe

Kein Segment hat eine Mindestbreite. Sie ergibt sich allein aus Label und Icon plus 14 px Innenabstand je Seite. Deshalb lässt sich die 320-px-Prüfung nicht pauschal beantworten, sondern hängt von den konkreten Labellängen ab. Genau wie bei unserer [Card](card.html).

### Ergebnis der 320-px-Prüfung

Bereits beantwortet im Kasten unter [„Anzahl & Anordnung“](#anzahl-anordnung): Ob eine gegebene Anzahl Segmente bei 320 px in eine Zeile passt, entscheiden die Labellängen und ist zu prüfen, nicht zu schätzen _(WCAG 1.4.10 „Reflow“, Stufe AA)._ Passt es nicht, weicht die Doku ausdrücklich auf ein [Select](select.html) aus.

## Tastaturbedienung

Ein Segmented Control ist **keine Reihe einzelner Buttons,** sondern eine Auswahl aus einer Gruppe, wie unsere [Radio Buttons](radio-button.html), nur horizontal und ohne Kreise. Daraus folgt die gesamte Tastaturbedienung _(WCAG 2.1.1 „Keyboard“, Stufe A)._ Die Gruppe ist genau **eine Station in der Tab-Reihenfolge,** nicht jedes Segment einzeln. Innerhalb der Gruppe übernehmen die Pfeiltasten.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | In die Gruppe hinein und wieder heraus — nicht von Segment zu Segment |
| Pfeil links / rechts | Wechselt zum vorigen bzw. nächsten Segment und wählt es unmittelbar aus |
| Pfeil oben / unten | Wirken genauso: oben wie links, unten wie rechts |
| Leertaste | Wählt das fokussierte Segment, falls es nicht schon gewählt ist |

Beim Hineintabben landet der Fokus auf dem ausgewählten Segment, nicht auf dem ersten. Ist noch keins gewählt, dann auf dem ersten (bei Shift + Tab je nach Browser auf dem letzten). Am letzten Segment springen die Pfeiltasten zurück zum ersten. **Die Gruppe ist ein Ring,** kein Weg mit Ende. Deaktivierte Segmente bleiben in der Pfeiltasten-Runde: mit `aria-disabled="true"`, nicht `disabled`. Der Fokus erreicht sie, die Auswahl wechselt aber nicht auf sie.

Bei den Radio Buttons lautet unsere Vorgabe „immer vertikal listen“, damit Pfeilrichtung und Leserichtung zusammenfallen. Beim Segmented Control gilt dieselbe Regel in der anderen Achse: horizontal, von links nach rechts.

_Pos1_ und _Ende_ gibt es hier nicht. Anders als bei Tabs sieht das Muster der Auswahlgruppe sie nicht vor. Wer sie ergänzt, weicht bewusst ab.

_Enter_ braucht es nicht. Das ist kein Versehen, weil die Pfeiltaste unmittelbar auswählt, ist der Wechsel mit dem Tastendruck schon erledigt. Das ist „direktes Umschalten“ mit der Tastatur. Dieses Verhalten hat dieselbe Grenze wie bei den Tabs. Lädt jedes Segment seinen Inhalt frisch nach, löst **jeder Pfeiltastendruck einen Ladevorgang** aus. Bei fünf Segmenten fünfmal von links nach rechts. Dann sollte auf manuelle Aktivierung gewechselt werden. Die Pfeiltasten verschieben nur den Fokus, „Leertaste“ oder „Enter“ wählt aus. Der W3C-APG führt diesen Fall ausdrücklich als Variante für Gruppen, die in einer Toolbar liegen. Entscheidet bewusst und einheitlich pro Anwendung.

**Was das mit WCAG 3.2.2 zu tun hat.**

Das Kriterium gilt hier wie beim Select: Wer eine Einstellung ändert, darf dadurch nicht in einen anderen Kontext geworfen werden _(WCAG 3.2.2 „On Input“, Stufe A)._ Entscheidend ist nicht die Komponente, sondern, was der Pfeiltastendruck auslöst. Beim [Select](select.html) und bei der [Pagination](pagination.html) hängt am Wert ein Absenden und die Pfeiltaste läuft durch jeden Zwischenwert, jeder davon würde die Ansicht wechseln. Deshalb unsere Regel, dass erst ein Button bestätigt. Beim Segmented Control hängt am Segment nur die Darstellung im selben Bereich, eine Inhaltsänderung, kein Kontextwechsel:

> „A change of content is not always a change of context.“

Kurz: Umschalten ja, Wegspringen nein. Der Fokus bleibt auf dem Segment, die Seite lädt nicht neu, und niemand landet woanders.

> Ein Segmented Control tauscht die Darstellung im selben Bereich = Inhaltsänderung.
>
> Ein Select, das beim Blättern absendet, wechselt die Ansicht = Kontextänderung.

## Barrierefreiheit

### Die Gruppe muss eine Gruppe sein und einen Namen haben.

Ohne Gruppierung hört niemand „Woche, ausgewählt, 2 von 3“, sondern drei zusammenhanglose Buttons _(WCAG 1.3.1 „Info and Relationships“, Stufe A)._ Die Gruppe braucht einen Namen, der aussagt, worum es geht: „Zeitraum“, „Ansicht“, „Status“. „Heute, ausgewählt“ allein beantwortet nicht, was ausgewählt ist. Nativ über ein [Fieldset](fieldset.html) mit Legende, sonst `role="radiogroup"` mit `aria-label`.

### Wahrnehmbare Zustände

Rolle, Name und Zustand gehören ins Markup, nicht in die Optik. „Selected“ ist in unserer Taxonomie ein Style. Für Screenreader muss der Zustand programmatisch vorliegen _(WCAG 4.1.2 „Name, Role, Value“, Stufe A):_ entweder `<input type="radio">` im Fieldset oder `role="radio"` mit `aria-checked`. Es gilt, was wir schon beim Chip zitieren:

> Wenn ein natives HTML-Element die gewünschte Bedeutung und das gewünschte Verhalten schon mitbringt, nimm dieses Element.

Nativ bekommt man Gruppenansage, Pfeiltasten, „von n“-Zählung und die einzelne Tab-Station geschenkt. Nachgebaut muss man alle vier selbst liefern.

### Nur eine Station in der Tab-Reihenfolge.

Bei nativen Radio Buttons erledigt das der Browser. Wird die Gruppe nachgebaut, tragen die nicht gewählten Segmente `tabindex="-1"`, und der Fokus wandert innerhalb der Gruppe mit („roving tabindex“). Sonst müssen Nutzende bei fünf Segmenten durch fünf Stationen, um zum Inhalt zu kommen.

### Der „Focus stroke“ bleibt sichtbar, auch auf dem gewählten Segment.

Er darf nicht ausgeblendet werden _(WCAG 2.4.7 „Focus Visible“, Stufe AA)_ und braucht Platz im Layout. Der Fokusrahmen muss sich mit 3 : 1 von seiner Umgebung abheben _(WCAG 1.4.11 „Non-text Contrast“, Stufe AA),_ und seine Fläche muss mindestens einem 2 px starken Umriss des Segments entsprechen _(WCAG 2.4.13 „Focus Appearance“, Stufe AAA)._

### „Selected“ darf sich nicht allein über die Farbe von „Unselected“ und „Hover“ unterscheiden.

Das W3C verlangt 3 : 1 für „visual information required to identify user interface components and states“ _(WCAG 1.4.11, Stufe AA)_ und untersagt Farbe als einziges Merkmal _(WCAG 1.4.1 „Use of Color“, Stufe A)._ Für uns heißt das: Der Helligkeitsunterschied zählt als zweites Merkmal, sobald er 3 : 1 erreicht. Unter 3 : 1 trägt allein der Farbton, und das genügt nicht.

### Deaktivierte Segmente müssen angesagt werden, nicht nur ausgegraut sein.

Damit die Ansage jemanden erreicht, muss das Segment fokussierbar bleiben — deshalb `aria-disabled` und nicht `disabled`. Ein Segment, das die Pfeiltasten nicht erreichen, ist per Tastatur nicht vorhanden und braucht keine Ansage. WCAG 1.4.11 nimmt inaktive Elemente vom 3 : 1-Kontrast aus, das blasse Grau ist also erlaubt. **Prüft, ob es das deaktivierte Segment überhaupt braucht.** In einer dreiteiligen Gruppe ist eine nicht wählbare Option schwerer zu erklären.

### Nicht der Zustandswechsel muss angesagt werden, sondern sein Ergebnis.

Den Wechsel übernimmt die Rolle: „Woche, ausgewählt, 2 von 3“ kommt automatisch. Stumm bleibt, was dahinter passiert. Ob 12 Einträge stehen oder keiner. Der „Empty State“ aus dem Abschnitt „Inhalt & Verhalten“ braucht deshalb eine Statusrolle _(WCAG 4.1.3 „Status Messages“, Stufe AA)._ Sichtbar ist „0 Treffer“ sofort, hörbar sonst nie.

### Das optionale Icon im Segment ist dekorativ

Es bekommt `aria-hidden="true"`, weil es nach unserer Vorgabe nie allein steht. Ein Segment nur mit Icon braucht einen eigenen zugänglichen Namen. Wir schließen das aber schon aus.

### Trefferfläche

Die Segmenthöhe von 40 px liegt über dem geforderten Minimum von 24 × 24 px _(WCAG 2.5.8 „Target Size (Minimum)“, Stufe AA);_ für Touch-Geräte wären 44 × 44 px die bessere Zielgröße _(WCAG 2.5.5 „Target Size (Enhanced)“, Stufe AAA)_ — dieselbe Lücke wie beim [Button](button.html). Die Breite richtet sich nach dem Text; bei einwortigen Labels trägt der Innenabstand zur Trefferfläche.

### Warum nicht `tablist`?

Weil Tabs Navigation zwischen Bereichen versprechen. Die Rollen `tab` und `tabpanel` sagen dem Screenreader „Reiter“ und kündigen einen eigenen Bereich an, den wir hier nicht haben: Wir wechseln nur die Darstellung. Wer merkt, dass die Segmente doch Hauptbereiche umschalten, hat keine Rollenfrage, sondern die falsche Komponente — dann sind es [Tabs](tabs.html).

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Segmented Control |
| 2 | Dominance | Regular, Prominent |
| 3 | Type | – |
| 4 | Style | Selected, Unselected |
| 5 | State | Enabled, Disabled, Hover, Pressed, Focus |
|  | Sonstiges | Segment name, Icon (Optional) |

{% endreiter %}

{% reiter "dos-donts" %}

## Klares Einsatzgebiet

*   **Nutzen**, wenn wenige, eng zusammenhängende Segmente den Inhalt anders darstellen oder filtern.
*   **Nicht nutzen**, wenn es um Navigation zwischen Hauptbereichen geht oder bei sehr viele Optionen.

## Anzahl & Anordnung

*   **Stark beschränken:** auf kleinen Screens max. **3 Segmente,** auf größeren **bis zu 5.**
*   **Nach Nutzen sortieren:** Häufigste Option nach links (bzw. dort, wo der Lesefluss beginnt).
*   **Nur eine Zeile:** Ein Zeilenumbruch ist nicht vorgesehen. Wird es zu eng: Segmente reduzieren, zusammenfassen oder alternative UI-Elemente nutzen.

> Nur eine Zeile und kein Umbruch?
>
> Der Inhalt muss bei 320 CSS-Pixeln Breite ohne Scrollen in zwei Richtungen nutzbar bleiben (WCAG 1.4.10 „Reflow“, Stufe AA) und bei 200 % Textvergrößerung ohne Informationsverlust (WCAG 1.4.4 „Resize Text“, Stufe AA). Die Ausnahme gilt für zweidimensionale Inhalte: Landkarten, Datentabellen, Werkzeugleisten. Ob fünf Segmente in eine Zeile passen, entscheiden ihre Labellängen. Das ist bei 320 px zu prüfen und nicht zu schätzen. Passt es nicht, wird auf ein [Select](select.html) ausgewichen.

## Aussagekräftige Beschriftung (Microcopy)

Wie bei unseren [Buttons](button.html) gelten auch hier einige Regeln für die Beschriftung:
*   **Kurz & eindeutig:** Ein Wort, höchstens zwei Wörter („Liste“, „Karte“, „Woche“).
*   **Konsistente Wortart:** z.B. nur Substantive.
*   **Fachjargon vermeiden:** Nur, wenn er für die Zielgruppe verständlich ist.
*   **Icons vermeiden:** Nur mit klarer Bedeutung und immer mit Text.

## Inhalt & Verhalten

*   **Direktes Umschalten:** Ein Wechsel wirkt sofort, ohne Bestätigung.
*   **Zustand merken:** Wenn technisch sinnvoll, die letzte Ansicht der Nutzenden speichern.
*   **Leere Zustände bedenken:** Bei „0-Treffern“ einen „Empty-State“-Hinweis zeigen.

## Bei mehr Optionen gilt

*   **Besser aufteilen:** Kategorien neu zusammenfassen oder Hierarchie vereinfachen.
*   **Alternative UI nutzen:**
    *   [Tabs](tabs.html) für Hauptbereiche (persistenter Kontext, eigene Navigation)
    *   [Select & Dropdown](select.html) (Pull-Down) für seltene, viele oder sekundäre Optionen (z.B. Sortieren)
    *   Filter-Sheet bei komplexen Kombinationen (mehrere Kriterien)

{% endreiter %}
