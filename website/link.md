---
layout: inhaltsseite.njk
titel: Link
bereich: komponenten
aktuell: link
gruppe: navigation
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Ein Hypertextlink, oft einfach als Link bezeichnet, ist ein essenzielles Element des World Wide Web, das es ermöglicht, nahtlos zwischen verschiedenen Webseiten und Ressourcen zu navigieren, indem es Text oder Bilder mit anderen Online-Inhalten verknüpft.

## Varianten

### Link-Farben

Um **gute Farbkontraste** und damit eine **hohe Barrierefreiheit** sicherzustellen, werden Hyperlinks in unterschiedlichen Farbabstufungen dargestellt. Dabei kommen keine neuen Farben zum Einsatz. Sämtliche Varianten basieren auf unserer bestehenden Farbpaletten. Ein Hyperlink **muss immer unterstrichen sein**, da die Unterstreichung als zweiter visueller Identifikator dient und die Erkennbarkeit deutlich erhöht.

Jeder Link verfügt grundlegend über mindestens zwei Zustände, nämlich einen Standardzustand (enabled) und einen Hover‑Zustand. Alle Userstates eines Links müssen in allen Modi optisch eindeutig voneinander abgegrenzt oder visuell wahrnehmbar sein. Die beiden Dominanzen „Regular“ und „Decent“ sollten sich ebenfalls zueinander optisch klar unterscheiden, wobei die Variante „Decent“ keinesfalls den Eindruck eines deaktivierten Elements vermitteln darf. Die Dominanz Regular orientiert sich dabei an unseren Button‑Userstates, um ein einheitliches Interaktionsverhalten im gesamten Interface zu gewährleisten.

Zusätzlich gelten für den Light‑ und Darkmode identische Abstufungsrichtungen - Helligkeiten werden in beiden Modi bei der Interaktion konsistent heller oder dunkler geführt.

#### Die Farben der Links verteilen sich wie folgt

{% abbildung "Die Farbgebung der Links im Light-Mode", "Die Farbgebung der Links im Light-Mode", "link-14" %}

{% abbildung "Die Farbgebung der Links im Dark-Mode", "Die Farbgebung der Links im Dark-Mode", "link-15" %}

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Hypertextlinks mit seinen strukturellen Bestandteilen. Dargestellt ist der farbige Linktext und der Unterstrich, zur visuellen Hervorhebung.", "Link Anatomie", "link-01" %}

## Tastaturbedienung

Ein Link ist mit `<a href="…">` von sich aus fokussierbar und bedienbar, man muss nichts hinzufügen. Entscheidend ist das `href`\-Attribut: Ein `<a>` ohne `href` ist kein Link, sondern ein Stück Text — es liegt nicht in der Tab-Reihenfolge und wird auch nicht als Link angesagt. Jeder Link ist eine eigene Station.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Von Link zu Link |
| Enter | Folgt dem Link |

Die **Leertaste hat keine Wirkung,** sie scrollt die Seite. Das ist der wichtigste Unterschied zu unseren [Buttons](button.html), die auf beide Tasten reagieren. Wer ein `<div>` oder `<span>` mit Klick-Handler als Link ausgibt, verliert beides: Das Element liegt nicht in der Tab-Reihenfolge, und Enter tut nichts.

Daraus folgt die Regel, die auch beim [Button](button.html) notiert ist: Was navigiert, ist ein Link; was etwas auslöst, ist ein Button. Die Rolle bestimmt, welche Taste Nutzende erwarten (WCAG 4.1.2 „Name, Role, Value“, Stufe A).

Die Hinweise unter [Tastaturbedienbarkeit im Browser](#tastaturbedienbarkeit-im-browser) ergänzen das um die technische Seite — Browser-Einstellungen, Tabindex und Accesskeys.

### Tastaturbedienbarkeit im Browser

In einigen Webbrowsern (z.B. Google Chrome) ist die Tastaturbedienbarkeit sofort nutzbar. Im Firefox für Mac z.B. funktioniert es nicht per Default. Nutzende müssen daher in die Einstellungen > Allgemein > Surfen gehen und dort „Markieren von Text mit der Tastatur zulassen“ und „Tab-Taste verwenden, um den Fokus zwischen Formular-Steuerung und Links zu verschieben“. Im Safari findet man die Funktion unter: Einstellungen > Erweitert > Bedienungshilfen: „Über Tabulator jedes Objekt auf einer Webseite hervorheben“.

**Nachteil:** Bei Firefox blinkt ab sofort immer am aktiven Element der Eingabe-Marker (Caret). Auch an nicht fokussierbaren Elementen.

#### Tabindex

Anschließend wird überall der „Tabindex“, falls er im HTML-Code definiert wurde, befolgt. Falls nichts zur Tabulatorreihenfolge festgelegt wurde, legt der Browser die Abfolge der Elemente anhand der Reihenfolge im Code fest.

Der Wert 0 (Null) oder ohne eine Festlegung entspricht dem Vorkommen des fokussierbaren Elements im HTML-Code. Ein negativer Zahlenwert (-1) bedeutet, dass ein Element mit der Tabulator-Taste nicht fokussierbar sein wird. Ein positiver Wert (größer als 1) legt die TAB-Reihenfolge fest, beginnend mit der 1 aufwärts. Positive Werte solltet ihr, wenn möglich, vermeiden. Sie drängen das Element vor alle Elemente mit `tabindex="0"` und lösen die Reihenfolge damit vom Lesefluss ab. Sobald mehrere Stellen im Projekt das tun, ist die Tab-Reihenfolge nicht mehr vorhersagbar. Die richtige Lösung ist, die Reihenfolge im Markup herzustellen (WCAG 2.4.3 „Focus Order“).

#### HTML-Zugriffskürzel (Accesskeys)

Auf einigen Webseiten sind verschiedenen Elementen auf dieser Seite bestimmte Tastenkombinationen zugeordnet. Um den Mauszeiger direkt auf eines dieser Elemente zu bewegen, drücken die Nutzenden einige Steuerungstasten und das Zugriffskürzel gleichzeitig. Die Tastenkombinationen sind von Browser zu Browser verschieden.

**Unter MacOS:**
*   Firefox, Chrome, Safari, Edge: \[Control\] + \[Option\] + \[Taste\]

**Unter Windows:**
*   Firefox: \[Shift\] + \[Alt\] + \[Taste\]
*   Edge: \[Alt\] + \[Taste\]
Die Betriebssysteme, Browser und andere assistierende Technologien verfügen schon über eine Vielzahl an Tastaturbefehlen. Die „Accesskeys“ dürfen diese nicht überlagern, weshalb als Kurztasten eigentlich nur die Ziffern 1 bis 9 und 0 zur Verfügung stehen.

#### Zugabe

Im Firefox lassen sich Links auf Webseiten auch über die Tastatur aufrufen, wenn die Tastaturbedienbarkeit noch nicht eingeschaltet wurde. Dazu reicht die Tastenkombination: \[Shift\] + \[#\]. Es öffnet sich ein kleines Eingabefeld am unteren Rand des Browsers. Dort kann man den Link eintippen und das Programm markiert diesen Link. Durch Drücken der Return-Taste wird der Link aufgerufen. Mit der „Tabulator-Taste“ können Nutzende zwischen mehreren gleichnamigen Links springen.

## Barrierefreiheit

Die „Web Content Accessibility Guideline“ (WCAG) schreiben vor, bei der Unterscheidung von Buttons oder Links zum restlichen Text, sich nicht nur auf Farben zu verlassen. Nutzende mit beeinträchtigtem Sehvermögen oder Farbfehlsichtigkeiten wird es dadurch erheblich erschwert, diese Unterscheidung zu treffen. Zusätzlich zur Farbe sollte also **immer ein Unterstreichen** des Links vorgenommen werden. Außerdem ist hier dringend auf einen guten Farbkontrast zwischen Text- und Hintergrundfarbe zu achten (AA, AAA). Neben diesen Dingen ist es auch sehr sinnvoll einen Fokus-Status zu definieren, da Hyperlinks interaktive Elemente sind.

Hinweis: Die CSS `border-bottom` Property kann anstelle der CSS `text-decoration` Property genutzt werden, um einen Link zu unterstreichen. So ist es möglich den Unterstrich etwas tiefer zu setzen und zu verhindern, dass die Unterlängen der Textzeichen von der Unterstreichung beeinträchtigt werden.

Ein weiterer wichtiger Aspekt einer guten Accessibility ist es, stets an die Unterstützung von Screenreadern zu denken. Wenn wir also beispielsweise Link-Texte kürzen, sollten sie für den Screenreader immer noch unterscheidbar sein. Alternativ kann man auch das HTML-Attribut `"aria-label"` verwenden. Dieses macht es möglich, erklärende Texte hinzuzufügen, welcher nur von Screenreadern wiedergegeben werden.

Weiter Hinweise:
*   **Der Fokus-Status ist Pflicht, nicht Kür.** Der Absatz oben nennt ihn „sinnvoll“ — WCAG 2.4.7 („Focus Visible“) macht ihn auf Stufe AA verbindlich. Unsere Taxonomie führt „Focus“ und „Focus+Visited“ als eigene States; beide müssen sichtbar bleiben.
*   **Die Unterstreichung ist ebenso wenig eine Empfehlung.** Farbe als einziges Unterscheidungsmerkmal verstößt gegen WCAG 1.4.1 („Use of Color“, Stufe A). Die W3C-Fehlerbeschreibung F73 hält zusätzlich fest, dass ein Hinweis, der erst bei Hover oder Fokus erscheint, nicht genügt — er muss dauerhaft sichtbar sein. Genau deshalb gilt bei uns: immer unterstreichen.
*   `aria-label` **nur mit Bedacht.** Es ersetzt den sichtbaren Text als zugänglichen Namen, statt ihn zu ergänzen. WCAG 2.5.3 („Label in Name“, Stufe A) verlangt, dass der Name den sichtbaren Text enthält. Sonst läuft die Sprachsteuerung ins Leere: Wer „Klicke Mehr erfahren“ sagt, findet den Link nicht mehr, wenn er intern anders heißt. Ein sprechender Linktext ist die bessere Lösung; wo das nicht geht, muss der sichtbare Text im `aria-label` **enthalten** sein.
*   **Trefferfläche:** Links im Fließtext sind von der 24-px-Regel ausgenommen — WCAG 2.5.8 („Target Size (Minimum)“) nennt ausdrücklich die Ausnahme für Ziele in einem Satz. Frei stehende Links, etwa in einer Linkliste oder im Breadcrumb, fallen nicht darunter.
*   Öffnet ein Link in einem neuen Tab, gehört das in den Linktext. Ein unangekündigter Wechsel nimmt den Nutzenden die Kontrolle über den Zurück-Button. WCAG 3.2.5 („Change on Request“) fordert das erst auf Stufe AAA — als Hausregel ist es trotzdem sinnvoll.

{% abbildung "Ein gut und detailliert beschreibender Link", "Ein gut und detailliert beschreibender Link", "link-12" %}

{% abbildung "Ein nicht sehr aussagekräftiger Linktext", "Ein nicht sehr aussagekräftiger Linktext", "link-13" %}

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Link (Hyperlink) |
| 2 | Dominance | Regular, Decent (unterliegen der Typescale) |
| 3 | Type | – |
| 4 | Style | – |
| 5 | State | Enabled, Hover, Pressed, Focus, Visited, Focus+Visited |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

Links, welche sinnvolle Phrasen enthalten, sind wesentlich verständlicher als beispielsweise Links, welche nur aus einem Wort bestehen. Ein gut formulierter Link-Text sollte daher auch Sinn haben, wenn er alleine steht.

{% abbildung "Ein beschreibender Link mit einer Aussage", "Ein beschreibender Link mit einer Aussage", "link-02" %}

{% abbildung "Ein Link alleine ist nicht aussagekräftig genug", "Ein Link alleine ist nicht aussagekräftig genug", "link-03" %}

Bei langen URLs ist es für gewöhnlich sinnvoll, diese mittels eines URL-Shortener zu kürzen. Andernfalls sind sie nicht nur unansehnlich, sondern nehmen sehr viel Platz in Anspruch und sind zudem schlecht im Gedächtnis zu behalten. Es gibt Services, z.B. Google URL-Shortener, Bitly, TunyURL, um URLs individuell zu kürzen.

{% abbildung "Ein kurzer und schnell zu erfassender Link", "Ein kurzer und schnell zu erfassender Link", "link-04" %}

{% abbildung "Lang und unübersichtlicher Link mit zu vielen Zeichen", "Lang und unübersichtlicher Link mit zu vielen Zeichen", "link-05" %}

Handelt es sich um Download-Links, ist es ratsam, so viele Informationen wie möglich den Nutzenden anzubieten. Zum Beispiel sollten Angaben zur Datengröße und -format ersichtlich sein, da diese Informationen für Menschen mit langsamer Internetverbindung, limitiertem Speicherplatz oder einem bestimmten Ziel, wie dem Editieren einer ladbaren Datei, entscheidend sein können.

{% abbildung "Link mit Zusatzinformation in einer Klammer", "Link mit Zusatzinformation in einer Klammer", "link-06" %}

{% abbildung "Fehlende Zusatzinformation oder Kontext zum Link", "Fehlende Zusatzinformation oder Kontext zum Link", "link-07" %}

Es sollten nicht zu viele Links in einem Textabschnitt auftauchen. Dies könnte eine betrachtende Person eventuell überfordern. Besser wäre es, eine zusammengefasste Liste mit den Links unterhalb des Textabschnittes zu präsentieren.

{% abbildung "Mehrere Links übersichtlich gesammelt in einer Liste", "Mehrere Links übersichtlich gesammelt in einer Liste", "link-08" %}

{% abbildung "Zu viele Links in einem Absatz des Fließtextes", "Zu viele Links in einem Absatz des Fließtextes", "link-09" %}

Wenn wir einen Inhalts-Block mit mehreren Aktionspunkten für den gleichen Link anbieten, ist es besser den kompletten Block, als nur einzelne Elemente, wie Text oder Bild, als klickbaren Link zu definieren. Dieser Block kann zusätzlich sekundäre (oder tertiäre) Links enthalten.

{% abbildung "link_card_primärlink", "Primäre Link-Fläche", "link-10" %}

{% abbildung "link_card_sekundärlink", "Sekundäre Links", "link-11" %}

> Empfehlung:
> Die Dominanzen „Regular“ und „Decent“ sollten in Mengentexten oder Absätzen nicht gemischt werden. Für ein konsistentes Erscheinungsbild wird eine sortenreine Verwendung von Regular empfohlen.

{% endreiter %}
