---
layout: inhaltsseite.njk
titel: Dropdown
bereich: komponenten
aktuell: dropdown
gruppe: navigation
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Ein Dropdown (auch Flyout, Overlay, Popover oder Aufklappmenü) ist bei uns kein eigenständiges Bedienelement, sondern **ein Behälter, der sich über den Inhalt legt.** Quasi die „geöffnete Kiste“ an einem Button, einem Menüeintrag oder einem beliebigen anderen Auslöser. Typische Einsatzfelder sind Anwendungsmenüs, Untergruppen, Auswahllisten und kompakte Werkzeugpaletten. Der Nutzen ist immer derselbe: Die Oberfläche bleibt schlank, weil selten genutzte Optionen erst auf Anforderung erscheinen.

Genau diese **Universalität ist die Schwierigkeit.** Ein Behälter hat kein Bedienkonzept, das definiert sein Inhalt. Zwei „Dropdown“, die identisch aussehen, können sich für Nutzende völlig unterschiedlich anfühlen, wenn in dem einen Optionen und im anderen Befehle stehen.

> Die offene Kiste allein sagt nichts über ihr Bedienkonzept aus. Was darin liegt, entscheidet, welche Taste auslöst.

## Abgrenzung

### Welches Muster steckt in der Kiste?

**Vier** Fälle kommen bei uns vor. Die Entscheidung fällt **vor der Gestaltung,** denn sie bestimmt die Tastaturbedienung, die Rollen und die Zahl der Stationen in der Tab-Reihenfolge.

| Was in der Kiste liegt | Muster | Stationen der Tabfolge | Nachzulesen bei |
| --- | --- | --- | --- |
| **Befehle einer Anwendung**, oft mit Tastenkürzeln | Menü mit`role="menu"` | **eine** für das ganze Menü, Pfeiltasten darin | hier auf dieser Seite |
| **Ziele** einer Navigation | Disclosure + Liste von Links | **eine je Eintrag** | Navigationsmuster |
| **Optionen**, aus denen ein Wert gewählt wird | Select / Listbox | **eine** für das Feld | [Select](select.html) |
| **Freier Inhalt**: Formularfelder, Filter, Text | Disclosure, bei Blockieren ein Dialog | **eine je Bedienelement** | Disclosure Pattern und [Dialog](dialog.html) |

**Unsere Komponente „Dropdown-Menu“ bildet den ersten Fall ab.** Sie zeigt Befehle mit Tastenkürzeln, Trennlinien und Untermenüs — ein Anwendungsmenü, wie man es aus einer Textverarbeitung kennt. Für die anderen drei Fälle gibt es eigene Komponenten; die Kiste sieht dann ähnlich aus, das Innenleben ist ein anderes.

> Beim Navigationsmuster steht, dass role="menu" für eine Seitennavigation falsch ist. Für ein Dropdown gilt es jedoch. Die Regel lautet: role="menu" ist für Anwendungsmenüs gemacht, nicht für Navigation.
>
> Eine Navigation besteht vorwiegend aus [Links](link.html). Bekommt sie jedoch role="menu", sind es keine Links mehr. Nutzende können sie nicht mehr in einem neuen Tab öffnen und die Adresse nicht mehr kopieren.
>
> Ein Menü besteht dagegen aus Befehlen. Dort ist role="menu" genau richtig, und Nutzende bekommen genau die Bedienung, die sie aus jedem Anwenderprogramm kennen.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines geöffneten Dropdown-Elements. In der Dropdown-Liste werden von oben nach unten verschiedene Zustände und Elemente dargestellt: zwei „enabled option“, eine horizontale Linie („HR“) zum Abtrennen von Sinneinheiten, eine markierte „selected option“, eine weitere \"enabled option\", eine deaktivierte „disabled option“ und als letzte eine per blauen \"Focus stroke\" markierte Option. Die gesamte Dropdown-Liste ist von einem Rahmen („Border“) umgeben, besitzt eine Hintergrundfarbe („Background“), einen Schatteneffekt („Shadow“) und einen Border Radius von 10 px an den unteren Ecken.", "Dropdown Anatomie", "dropdown-01" %}

### Der Container

Der Container trägt Rahmen, Hintergrund und Schatten und ist an den **unteren Ecken gerundet** — oben bleibt er eckig, damit er bündig am Auslöserelement ansetzt. Der Rahmen ist 2 px stark, die Fläche sollte sich gegen den Seitenhintergrund abheben und wird verstärkt durch den Schatten `--ibk-shadow-1`. Innen stehen oben und unten 10 px Luft, zwischen den Einträgen jeweils 6 px. Die Breite richtet sich nach dem längsten Eintrag.

### Die Einträge

Ein Eintrag ist 32 px hoch und besteht aus bis zu vier Teilen:

*   **Leading Icon** (optional): Ein Symbol aus unserem Iconset am Anfang der Zeile, eingesetzt als \[eIB\], das die Auswahl visuell unterstützt. Es beschreibt nur, es ist nicht selbst bedienbar.
*   **Textlabel:** Der zentrale Bestandteil — die eigentliche Option, die Nutzende auswählen können.
*   **Trailing Text** (optional): das Tastenkürzel (oder Shortcut), rechtsbündig in „Asap Regular“ in derselben Größe wie das Textlabel, jedoch bewusst leichter, weil es eine Zusatzinformation ist.

*   **Trailing Icon** (optional): Ein Chevron aus dem Iconset (Pfeil nach rechts zeigend) am rechten Ende. Es bedeutet **immer** „hier öffnet sich ein Untermenü“ und darf für nichts anderes stehen.

> Es kann nur einen geben. „Trailing Text“ und „Trailing Icon“ schließen einander aus. Ein Eintrag hat entweder ein Kürzel oder ein Untermenü, nie beides zusammen. Ein Untermenü lässt sich nicht mit einem Kürzel öffnen.

{% abbildung "Darstellung eines geöffneten Dropdown-Menüs mit mehreren Optionen und Maßangaben. Die erste Option trägt das Label „Weiterführend“ mit einem Icon links und einem Pfeilsymbol rechts, darunter folgen weitere Optionen mit den Labels „Platzsparend“, „Per Klick zur Stelle“, „Icons optional“, „Öffnet nach unten“ und „Übersichtlich“. Zwischen den Einträgen bestehen definierte Abstände, jedes Item ist 32 px hoch. Icons sind jeweils 24 × 24 px groß und in festgelegten Abständen zum Text positioniert. Der Rahmen hat eine 2 px Kontur, oben ohne Radius, unten mit abgerundeten Ecken von 10 px.", "Dropdown Measurements", "dropdown-02" %}

### Die Trennlinie

Das „HR-Item“ gliedert lange Menüs in Sinngruppen. Es ist 17 px hoch, die Linie selbst 1 px. Es ist selbst **kein Eintrag**: Es lässt sich nicht auswählen, bekommt keinen Fokus und wird übersprungen.

## Zustände

Die Einträge kennen vier Zustände: **Enabled**, **Disabled**, **Hover/Pressed** und **Focus**. Der Fokus wird durch den „Focus stroke“ innerhalb des Eintrags markiert, Hover und Pressed teilen sich eine Flächenhinterlegung.

## Layout

Das Dropdown ist **verankert, nicht verteilt.** Es hängt unter seinem Auslöser (`position: absolute`) und nimmt im Seitenlayout keinen Platz weg. Es gehört damit zu den überlagernden Elementen, die unser [Layout-Artikel](layout.html) von den Primitiven abgrenzt. Dasselbe gilt für das Untermenü, das rechts neben seinem Eintrag hängt.

Innerhalb des Dropdown bestehen zwei Ebenen aus Primitiven:

*   **Die Liste ist ein „Stack“** mit `--ibk-spacing-6` zwischen den Einträgen und `--ibk-spacing-10` Innenabstand oben und unten. Die Breite richtet sich nach dem längsten Eintrag, nicht nach dem Bildschirm.
*   **Ein Eintrag ist ein „Cluster“** mit `--ibk-spacing-10` zwischen seinen Teilen. Leading Icon und Textlabel bilden dabei eine eigene Einheit, das Tastenkürzel bzw. das Chevron wird an den rechten Rand gedrückt.

Beide Werte weichen von unserer [Nähe-Skala](layout.html#die-naehe-skala) bewusst ab: Ein Menü ist eine dichte Liste, keine Feldgruppe. Die 6 px zwischen den Einträgen halten die Zeilen zusammen, ohne dass die Trefferflächen sich berühren - die 32 px Zeilenhöhe sorgen zusätzlich dafür.

Die Trennlinie steht außerhalb dieses Rhythmus: Sie trägt ihren Abstand selbst (`--ibk-spacing-8` ober- und unterhalb), damit eine Sinngruppe deutlicher getrennt ist als zwei benachbarte Einträge.

## Tastaturbedienung

Ein Menü verhält sich **anders als alles andere in unserem System** — und das ist so gewollt. Überall sonst gilt: Jedes Bedienelement ist eine eigene Station in der Tab-Reihenfolge. Im Menü ist das gesamte Menü jedoch **eine einzige Station,** und die Pfeiltasten übernehmen darin die Bewegung. Nutzende kennen das aus jedem Betriebssystem.

Der Grund ist schlicht die Effizienz: Ein Menü mit zwölf Befehlen würde die Tab-Reihenfolge um zwölf Stationen verlängern, obwohl es nur einen Befehl ausführen soll.

### Am Auslöser

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Zum Auslöser (Menübutton) und weiter |
| Enter / Leertaste | Öffnet das Menü, der Fokus springt auf den ersten Eintrag |
| Pfeil ab | Öffnet das Menü ebenfalls (Zugabe, aber verbreitet) |

### Im geöffneten Menü

| Taste | Wirkung |
| --- | --- |
| Pfeil ab / Pfeil auf | Zum nächsten bzw. vorigen Eintrag |
| Pos1 / Ende | Zum ersten bzw. letzten Eintrag |
| Anfangsbuchstaben tippen | Springt zum nächsten Eintrag mit diesem Anfangsbuchstaben |
| Enter | Löst den Eintrag aus und schließt das Menü |
| Pfeil rechts | Öffnet das Untermenü, der Fokus springt auf dessen ersten Eintrag |
| Pfeil links | Schließt das Untermenü, der Fokus geht auf den übergeordneten Eintrag zurück |
| Esc | Schließt das Menü, der Fokus geht auf den Auslöser zurück |
| Tab | Verlässt das Menü und schließt es |

> Esc ist hier Pflicht, nicht Zugabe. Das Menü legt sich über den Inhalt, und WCAG 1.4.13 („Content on Hover or Focus“, Stufe AA) verlangt, dass sich überlagernder Inhalt ohne Mausbewegung wieder schließen lässt. Öffnen Untermenüs zusätzlich bei Hover, gilt dasselbe Kriterium doppelt: Der Zeiger muss vom Eintrag ins Untermenü wandern können, ohne dass es unterwegs zuklappt.

### Deaktivierte Einträge bleiben erreichbar

Das ist die zweite Abweichung von unseren sonstigen Regeln. Beim [Button](button.html) empfehlen wir, `disabled` zu vermeiden, weil es das Element aus der Tab-Reihenfolge und aus der Ansage nimmt. Im Menü ist das anders geregelt: **Deaktivierte Einträge sind fokussierbar, aber nicht auslösbar** und tragen `aria-disabled="true"`.

Der Grund leitet sich aus der einen Station in der Tab-Reihenfolge ab. **Im Menü bewegt** man sich mit den **Pfeiltasten** von Eintrag zu Eintrag, nicht mit Tab. Würden deaktivierte Einträge dabei übersprungen, wäre ein und dasselbe Menü mal sieben und später neun Einträge lang — je nachdem, was gerade durch die Anwendung möglich ist. Der vierte Eintrag von oben wäre nicht mehr verlässlich derselbe.

Deshalb bleibt der Eintrag „Rückgängig“ (siehe Grafik) auch dann erreichbar und ansagbar, wenn es gerade nicht geht. Dass es den Befehl überhaupt gibt, ist eine wichtige Information.

{% abbildung "Darstellung eines geöffneten Dropdown-Menüs, unterhalb einer Menubar mit mehreren Optionen und einem weiteren „Submenu“.", "Dropdown Example", "dropdown-03" %}

## Barrierefreiheit

*   **Der Auslöser trägt** `aria-haspopup="menu"` und `aria-expanded`. Das Attribut `aria-expanded` wechselt bei jedem Öffnen und Schließen. Anders als beim Disclosure ist `aria-haspopup` hier richtig, weil es tatsächlich einen Rollen-Container gibt.
*   **Der Container trägt** `role="menu"`, **die Einträge** `role="menuitem"`. Ein Eintrag mit Untermenü bekommt zusätzlich `aria-haspopup="menu"` und `aria-expanded`.
*   **Der Fokus kehrt beim Schließen auf den Auslöser zurück:** bei Esc, nach dem Auslösen eines Befehls und beim Klick nach außen. Sonst stehen Nutzende wieder am Seitenanfang _(WCAG 2.4.3 „Focus Order“, Stufe A)._
*   **Das Tastenkürzel gehört nicht in den Namen.** Steht „Strg / Command + V“ als schlichter Text im Eintrag, liest der Screenreader „Einfügen Strg Schrägstrich Command Plus V“. Besser: den sichtbaren Text mit `aria-hidden="true"` ausblenden und das Kürzel über `aria-keyshortcuts="Control+V"` mitgeben. Das Attribut meldet nur, dass es das Kürzel gibt, aber **umsetzen muss es die Anwendung selbst.**
*   **Die Trennlinie ist kein Eintrag.** Sie darf keine „menuitem“-Rolle bekommen und keinen Fokus, sonst zählt sie beim Durchsteppen mit.
*   **Das Leading Icon ist Dekoration** und bekommt `aria-hidden="true"`. Der Name des Eintrags ist sein Text.
*   **Das Chevron kündigt das Untermenü an**, ersetzt aber `aria-expanded` nicht. Eine rein visuelle Darstellung des Zustands reicht nicht aus _(WCAG 4.1.2 „Name, Role, Value“, Stufe A)._
*   **Der „Focus stroke“ bleibt in allen Zuständen sichtbar,** auch auf deaktivierten Einträgen, die ja fokussierbar sind _(WCAG 2.4.7 „Focus Visible“, Stufe AA)._
*   **Die Trefferfläche ist unkritisch:** 32 px Zeilenhöhe über die volle Breite liegen deutlich über den geforderten 24 × 24 CSS-Pixeln _(WCAG 2.5.8 „Target Size (Minimum)“, Stufe AA)._
*   **Ein Menü ohne sichtbaren Namen braucht einen** zugewiesenen Namen. Der Auslöser liefert ihn: `aria-labelledby` auf den Menübutton zeigen lassen, dann heißt das Menü „Bearbeiten“ und muss nicht getrennt gepflegt werden.

## Einschränkungen

> Safari nutzt manchmal native Komponenten. Dadurch können sich Schriftarten, Abstände, Pfeil-Icons oder Scrollbars von der geplanten Gestaltung unterscheiden. Manche Styles lassen sich nicht überschreiben, weil Apple bewusst die Bedienbarkeit an das System bindet.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Dropdown-Items |
| 2 | Dominance | — |
| 3 | Type | Dropdown-Item, HR-Item |
| 4 | Style | HR, Trailing Text, Trailing Icon |
| 5 | State | Enabled, Disabled, Hover, Focus |
|  | Sonstiges | Show Leading Icon, Show Trailing Text, Nested eIBs |

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Dropdown-Menu |
| 2 | Dominance | — |
| 3 | Type | — |
| 4 | Style | Dropdown-Menu |
| 5 | State | — |
|  | Sonstiges | Dropdown-Items (Nested Instances) |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

### Do's

*   Nutze **aussagekräftige Labels** für Einträge. Nutze konkrete Verben wie „Einfügen“ oder „Wert rücksetzen“.
*   Halte die **Texte kurz** und einzeilig.
*   Gliedere ab etwa sieben Einträgen mit Trennlinien („HR-Item“) in **Sinngruppen.**
*   **Sortiere sinnvoll** nach Häufigkeit oder nach Arbeitsablauf, nicht unbedingt alphabetisch.

### Don'ts

*   Vermeide **mehr als zwei Ebenen.** Ein Untermenü im Untermenü ist mit der Maus kaum zu treffen, weil der Mauszeiger über Ecken geführt werden muss.
*   Verwende das Dropdown **nicht als Ersatz für ein** [Select](select.html), wenn ein Wert gewählt und gespeichert wird. Eine Auswahl ist kein Befehl.
*   Verwende es **nicht für Seitennavigation** — dort gilt das Navigationsmuster mit Liste, Link und `aria-expanded`.
*   Lasse **Einträge nicht ohne Label**, auch nicht mit noch so eindeutigem Icon.

{% endreiter %}
