---
layout: inhaltsseite.njk
titel: Input Field
bereich: komponenten
aktuell: input-field
gruppe: content
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Input Fields sind ein wesentliches Element bei der Gestaltung von Benutzeroberflächen, da sie es den Nutzenden ermöglichen, nicht standardisierte Informationen einzugeben. Sie bieten eine Reihe von Optionen und unterstützen verschiedene Textformate, einschließlich Zahlen.

## Grundsätze

### Label

Labels teilen den Nutzenden mit, welche Informationen in ein bestimmtes Feld gehören und ermöglichen es ihnen, ihre Eingaben zu überprüfen, bevor sie ein Formular absenden. Formularfelder sollten immer Labels enthalten.

> Labels oder Bezeichnungen beschreiben den Nutzenden, WAS in ein Feld gehört und geben Hinweise zur Verwendung des Input Fields.

#### Platzierung des Labels

Top-Platzierung

Studien zur Benutzerfreundlichkeit von Formularen mit der Eye-Tracking-Methode zeigen, dass die optimale Position für die Labels links über den Input Fields liegt. So können die Nutzenden sowohl das Input Field als auch die Beschriftung mit einer einzigen Augenbewegung erfassen. Ein zweiter Vorteil der oberen Platzierung ist, dass die Feldbezeichnungen länger sein können, da der horizontale Platz kein Problem darstellt.

{% abbildung "Labels über dem Input Field", "Top-Platzierung von Labels", "input-field-02" %}

Optional: Linke Platzierung

Es gibt jedoch lange und komplexe Desktop-Formulare, bei denen eine Top-Platzierung nicht immer möglich ist, da sie die Formulare extrem lang machen würde. In diesem Fall können die Labels links von den Feldern positioniert werden. Sie sollten jedoch ähnlich lang, möglichst nahe an den Input Fields und rechts ausgerichtet sein, da es sonst schwierig sein kann, die richtige Bezeichnung dem entsprechenden Feld zuzuordnen.

> Die linksbündige Labelplatzierung ist bei responsivem Webdesign nicht empfohlen, da Labellängen evtl. zu unerwünschten Umbrüchen führen können.

{% abbildung "Labels mit rechtsbündigem Text neben den Input Fields", "Labels mit rechtsbündigem Text neben den Input Fields", "input-field-03" %}

{% abbildung "Labels mit linksbündigem Text neben den Input Fields", "Labels mit linksbündigem Text neben den Input Fields", "input-field-04" %}

#### Pflichtfelder

Pflichtfelder können am Ende der Bezeichnung einfach mit einem **dezenten Sternchen (\*)** im Text gekennzeichnet werden.

Wahlweise kann auch etwas auffälliger **nach dem Label das „Info-Icon“** mit einem **„Asterisk“-Symbol** aus unserem [Iconset](icons.html) angezeigt werden. Für ausführlichere Hinweise – etwa welche Eingaben konkret erwartet werden oder warum ein Feld verpflichtend ist – kann unterhalb des Feldes der **„Supporting Text“** genutzt werden.

{% abbildung "Pflichtfeld mit Sternchen (\*) gekennzeichnet", "Pflichtfeld mit Sternchen (\*) gekennzeichnet", "input-field-05" %}

{% abbildung "Pflichtfeld mit Info-Icon und Supporting Text", "Pflichtfeld mit Info-Icon und Supporting Text", "input-field-06" %}

{% abbildung "Pflichtfeld ohne sichtbare Kennzeichnung", "Pflichtfeld ohne sichtbare Kennzeichnung", "input-field-07" %}

#### Verwendung von Labels

Input Fields sollten immer mit einer Bezeichnung versehen werden, außer in Kontexten, in denen sie überflüssig erscheint. Wenn zum Beispiel eine Suchleiste die Hauptaktion eines Bildschirms darstellt, braucht sie kein Label.

{% abbildung "Input Field für die Suche ohne Label am UI-Element", "Input Field für die Suche ohne Label am UI-Element", "input-field-08" %}

{% abbildung "Suchfeld mit redundantem Label am Element", "Suchfeld mit redundantem Label am Element", "input-field-09" %}

#### Info-Icon zusätzlich zum Label (optionales Element)

Wenn mehr Kontext benötigt wird, um ein Feld auszufüllen, kann die Bezeichnung ein Info-Icon enthalten, das zusätzliche Informationen über die Bedeutung der angeforderten Angaben liefert. Diese Hinweise werden in Form eines Tooltips angezeigt, wenn man mit der Maus über das Symbol fährt.

{% abbildung "Input Field mit Label und zusätzlichen Sternchen (\*)", "Input Field mit Label und zusätzlichen Sternchen (\*)", "input-field-10" %}

{% abbildung "Input Field mit Label, Sternchen und Info-Icon", "Input Field mit Label, Sternchen und Info-Icon", "input-field-11" %}

### Placeholder (Platzhalter-Text) - Optionales Element

Platzhalter-Texte innerhalb eines Formularfelds bieten einen zusätzlichen Hinweis oder ein Beispiel für die erforderlichen Informationen. Diese Hinweise sind optional und verschwinden meist, wenn etwas in das Feld eingetippt wird. Platzhalter sind keine echten Werte und werden daher ausgegraut, um sie von Benutzereingaben unterscheiden zu können.

#### Platzhalter-Texte sollten sorgfältig verwendet werden

Benutzertests zeigen immer wieder, dass Platzhalter in Formularfeldern der Benutzerfreundlichkeit oft mehr schaden als nützen; aus diesem Grund sollten sie nur verwendet werden, wenn sie den Prozess vereinfachen und beschleunigen. Hier die wichtigsten Nachteile der Verwendung von Platzhaltern:

*   Verschwindender Platzhalter-Text ist schwer zu merken und belastet das Kurzzeitgedächtnis der Nutzenden. Außerdem macht er es schwierig, Fehler zu verstehen und zu beheben;
*   Felder mit Platzhalter-Texte werden leicht übersehen oder mit automatisch ausgefüllten Daten verwechselt;
*   Die hellgraue Standardfarbe des Platzhalter-Textes hat einen schlechten Farbkontrast zu den meisten Hintergründen;
*   Manchmal muss der Platzhalter manuell gelöscht werden, was für die Nutzenden frustrierend sein kann, wenn das Input Field kein Lösch-Icon enthält;
*   Wenn man mit der Tabulatortaste navigiert, ist die Wahrscheinlichkeit groß, dass man den Platzhalter nicht einmal gelesen hat, bevor er entfernt wird;
*   Manche Screenreader können Platzhalter überhaupt nicht lesen.

### Supporting text (Hinweistext, Hilfetext) - Optionales Element

Hinweistexte geben den Nutzenden ergänzende Anweisungen zum Ausfüllen von Input Fields mit besonderen Anforderungen oder komplexen Formaten. Ziel ist es, sie durch den Prozess zu führen und ihnen zu helfen, Fehler zu vermeiden, indem sie die notwendigen Informationen im Voraus erhalten. Außerdem werden sie gebraucht, um zu erklären, warum bestimmte Informationen erforderlich sind oder wie sie verwendet werden. Wenn vorhanden, ist der Hinweistext dauerhaft sichtbar und direkt unter dem Formularfeld platziert. Er kann ein Icon enthalten (optional), das die Botschaft hervorhebt, aber keine besondere Funktion hat.

> Der Supporting Text oder Hinweistext beschreibt den Nutzenden, WIE ein Input Field auszufüllen ist, und kann Hinweise darauf geben, WIE die Angaben verwendet werden.

### Validierungsmeldungen

Fehler- und Erfolgsmeldungen, oder Validierungsmeldungen im Allgemeinen, geben den Nutzenden eine Rückmeldung über die Gültigkeit und Vollständigkeit ihrer Eingaben. Sie sind kontextabhängig und beziehen sich auf spezifische Benutzereingaben.

Die Verwendung von semantischen Farben und bestimmten Icons sorgt dafür, dass diese Meldungen deutlich von normalen Hinweistexten unterschieden werden können, selbst für Menschen mit Rot-Grün-Blindheit.

Validierungsmeldungen sollten den Hinweistext ersetzen und nicht zu diesem hinzugefügt werden.

Damit wird verhindert, dass sich der Inhalt eines Layouts nach dem Einfügen neuer Textzeilen verschiebt.

### Fehlermeldungen

Fehlermeldungen zeigen an, wenn die eingegebenen Daten unvollständig sind oder nicht mit den Systemanforderungen übereinstimmen. Außerdem helfen sie den Nutzenden, die Fehler zu verstehen und geben Hinweise, wie diese behoben werden können. Fehlermeldungen werden in Rot dargestellt und mit einem Icon auf der linken Seite versehen, um den Alarm/Fehler zu kennzeichnen.

### Erfolgsmeldungen - Optionales Element

Erfolgsmeldungen teilen den Nutzenden mit, dass die eingegebenen Daten korrekt sind und den Systemanforderungen entsprechen. Sie sind ein optionales Element und informieren die Nutzenden darüber, dass sie ihrem Ziel näher kommen und geben ihnen ein Gefühl der Bestätigung und Motivation.

Erfolgsmeldungen werden in Grün dargestellt und mit einem Icon auf der linken Seite versehen, um den Erfolg zu kennzeichnen.

### Icons in Input Fields - Optionale Elemente

Icons innerhalb eines Input Fields können die Art der erforderlichen Eingabe beschreiben und/oder zusätzliche Funktionen zur Verfügung stellen. Als optionale Elemente sollten sie nur dann eingefügt werden, wenn ausreichend Platz vorhanden ist und sie den Nutzenden einen Mehrwert bieten.

Icons werden als Iconset-Schrift eingefügt; weitere Informationen zum Iconset und dessen Verwendung sind auf der Seite „[Iconset](icons.html)“ zu finden.

Abhängig von ihrer Position innerhalb des Input Fields lassen sich zwei Arten von Icons unterscheiden:

### Leading Icon (Führendes Icon)

Ein Leading-Icon wird innerhalb des Containers direkt vor dem Eingabetext platziert. Es wird verwendet, um die Bedeutung des Input Fields grafisch zu verdeutlichen und den Nutzenden zu helfen, es auf einen Blick zu erkennen.

### Trailing Icons (Nachlaufende Icons)

Trailing Icons werden innerhalb des Containers direkt nach dem Eingabetext platziert. Sie haben eine bestimmte Funktion und helfen den Nutzenden, Aktionen mit einem einzigen Klick auszuführen. Beispiele dafür sind ein Clear-Icon zum Löschen des eingegebenen Textes oder ein Mikrofon-Icon zur Eingabe von Zeichen per Sprache.

#### Namen der Funktions-Icons

Ein „eIB“ im Input Field ist ein Button, kein Bild. Er braucht deshalb keinen Alt-Text, sondern einen „Accessible Name“, technisch ein `aria-label`. Die Rolle ergänzt der Screenreader selbst durch die Art des Elements; „Icon“, „Symbol“ oder „Schaltfläche“ gehören deshalb nicht in den Namen. **Der Name benennt die Aktion,** nicht den Zustand: z.B. „Passwort sichtbar“ klingt wie eine Statusmeldung und lässt offen, ob das Passwort gerade sichtbar ist oder es durch den Klick erst wird.

Hier sind Vorschläge für mögliche Namen, die aber je nach Verwendung genau geprüft und entsprechend angepasst werden müssen:

| Icon | Name (DE) | Name (EN) | Ansage durch Screenreader |
| --- | --- | --- | --- |
| Lupe (Search) | Suche starten | Start search | „Suche starten, Schaltfläche“ |
| Auge (Vis) | Passwort anzeigen | Show password | „Passwort anzeigen, Schaltfläche“ |
| Auge, durchgestrichen (UnVis) | Passwort verbergen | Hide password | „Passwort verbergen, Schaltfläche“ |
| Backspace / Cls | Eingabe löschen | Clear input | „Eingabe löschen, Schaltfläche“ |
| Mikrofon (Mic), wenn inaktiv | Spracheingabe starten | Start voice input | „Spracheingabe starten, Schaltfläche“ |
| Mikrofon (MicMute), wenn aktiv | Spracheingabe beenden | Stop voice input | „Spracheingabe beenden, Schaltfläche“ |

**Beim Auge** gilt weiter die Regel aus dem Abschnitt zum Password Field: wechselnder Name oder `aria-pressed`, niemals beides. **Empfehlung** ist der **wechselnde Name,** weil VoiceOver und ältere JAWS-Versionen `aria-pressed` uneinheitlich vorlesen.

**Beim Lösch-Icon** bleibt „Eingabe löschen“ der Standard. Enthält ein Formular jedoch mehrere Felder mit Lösch-Icon, hören Nutzende diesen Namen mehrfach, weil der Feldbezug fehlt. Das Label des Feldes wird beim Button nicht mitgelesen. In diesem Fall muss das Label mit in den Namen aufgenommen werden: z.B. „E-Mail-Adresse löschen“ oder „Suchbegriff löschen“.

{% endreiter %}

{% reiter "spezifikation" %}

## Anatomie

{% abbildung "Grafik eines Input Fields mit typischer UI-Struktur. Oberhalb des Feldes befindet sich ein variables Label, gefolgt von einem Info-Icon vom Typ „eIB“. Im Input Field selbst sind ein Leading Icon (eIB) am linken Rand, ein Platzhaltertext („Placeholder Text“), ein Caret sowie bis zu drei rechts positionierte Trailing Icons (eIB) sichtbar. Unterhalb befindet sich ein unterstützender Hinweistext: „Supporting text conveys additional information about the field.“, flankiert von einem Leading Icon. Das Feld ist von einem 2 px starken Rahmen mit Border Radius (6 px links oben und rechts unten) umgeben und wird bei Fokus durch einen zusätzlichen „Focus Stroke“ hervorgehoben.", "Anatomie eines Input Fields", "input-field-01" %}

### Der Container

Input Fields sollten auffallen und darauf hinweisen, dass die Nutzenden Informationen eingeben können. Der Container definiert die Form des Feldes und ermöglicht es ihnen, es als solches zu erkennen. Er wird durch die Umrandung und die Füllung definiert, deren Farbwechsel eine Interaktion und/oder den Übergang zu einem anderen Zustand signalisiert. Die abgerundeten Ecken oben links und unten rechts spiegeln den Stil des Designsystems wider.

## Zustände

Input Fields sind in den folgenden Zuständen verfügbar:

### Disabled

Deaktivierte Felder stehen nicht für Interaktionen zur Verfügung; dies verhindert, dass Nutzende versuchen, Daten einzugeben oder zu ändern.

### Enabled

Der Enabled-Zustand bezieht sich auf das ursprüngliche Aussehen und Verhalten eines Input Fields, wenn es zum ersten Mal geladen wird oder wenn keine Benutzerinteraktion stattgefunden hat.

### Placeholder / Alert

Der Alert-Zustand stellt ein Pflichtfeld dar, mit dem die Nutzenden nicht interagiert haben, ohne das der Prozess aber nicht fortgesetzt werden kann.

### Focused

Der Focused-Zustand beschreibt ein Input Field, mit dem Nutzende aktiv interagieren und das bereit ist, Eingaben zu empfangen.

### Active / Enabled

Der Enabled-Zustand tritt auf, wenn die von den Nutzenden eingegebenen Informationen verarbeitet und als den Anforderungen entsprechend akzeptiert wurden.

### Active / Alert

Der Alert-Zustand im Active-Style tritt auf, wenn Nutzende ungültige oder nicht korrekte Informationen eingeben. Die Eingabe kann nicht erfolgreich verarbeitet werden oder entspricht nicht den Anforderungen.

### Active / Success

Im Erfolgszustand wird das positive Ergebnis des ausgefüllten Zustands durch eine Erfolgsmeldung verstärkt. Dies sorgt für positives Feedback, Bestätigung und ein Erfolgserlebnis.

### Read-Only-Style

Read-Only-Felder zeigen vorausgefüllten Text an, der automatisch ausgegeben wird und Nutzende nicht bearbeiten können. Der graue Hintergrund zeigt an, dass das Feld zwar aktiv ist, aber nicht zur Interaktion zur Verfügung steht.

## Layout

**Input Field, Password Field und Text Area sind „Stacks“:** Label, Feld und „Supporting text“ stehen mit `--ibk-spacing-6` untereinander, die Teile des „Supporting text“ als „Cluster“ mit `--ibk-spacing-4`. Leading und Trailing Icons sind verankert und liegen über dem Feld, sie nehmen keinen Platz in der Reihe weg. Deshalb muss ihre Trefferfläche eigens geprüft werden.

### Größe

#### Höhe der Input Fields

Input Fields sind in zwei verschiedenen Höhen vorhanden:

1\. **Regular-Input-Field** mit 40 px Höhe

{% abbildung "Grafik eines Input Fields mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Oberhalb befindet sich ein variables Text-Label mit einem Info-Icon vom Typ „eIB“, 6 px vom Input Field entfernt. Das 40 px hohe Input Field enthält ein Leading Icon (eIB) am linken Rand, einen Platzhaltertext („Placeholder Text“), ein Caret sowie bis zu drei rechts positionierte Trailing Icons (eIB). Die Icons haben einen Abstand von 8 px zum linken bzw. rechten und 6 px zum oberen bzw. unteren Feldrand. Das Input Field besitzt einen Border Radius von 6 px (links oben und rechts unten) und wird bei Fokus durch einen „Focus Stroke“ mit erweitertem Border Radius von 10 px hervorgehoben. Die Gesamthöhe des Eingabeelements beträgt dadurch 48 px. Unterhalb steht ein Info-Icon mit einem unterstützenden Text: „Supporting text conveys additional information about the field.“, in 8 px Abstand zum Input Field.", "Abmessungen eines Regular-Input-Fields", "input-field-36" %}

2\. **Prominent-Input-Field** mit 48 px Höhe

{% abbildung "Grafik eines Input Fields mit Maßlinien zur Darstellung typografischer und räumlicher Parameter. Oberhalb befindet sich ein variables Text-Label mit einem Info-Icon vom Typ „eIB“, 6 px vom Input Field entfernt. Das 48 px hohe Input Field enthält ein Leading Icon (eIB) am linken Rand, einen Platzhaltertext („Placeholder Text“), ein Caret sowie bis zu drei rechts positionierte Trailing Icons (eIB), jeweils mit einer 24 px Größe. Die Icons haben einen Abstand von 8 px zum linken bzw. rechten und 6 px zum oberen bzw. unteren Feldrand. Das Input Field besitzt einen Border Radius von 10 px (links oben und rechts unten) und wird bei Fokus durch einen „Focus Stroke“ mit erweitertem Border Radius von 14 px hervorgehoben. Die Gesamthöhe des Eingabeelements beträgt dadurch 56 px. Unterhalb steht ein Info-Icon mit einem unterstützenden Text: „Supporting text conveys additional information about the field.“, in 8 px Abstand zum Input Field.", "Abmessungen eines Prominent-Input-Fields", "input-field-37" %}

#### Breite der Input Fields

Die Feldbreite ist nicht festgelegt, sondern kann je nach Formular und Eingabe angepasst werden.

In einzeiligen Feldern wird Text, der länger als die Eingabezeile ist, automatisch nach links verschoben, wenn der Cursor den rechten Feldrand erreicht.

## Tastaturbedienung

Solange das Input Field auf dem nativen `<input>` aufsetzt, bekommt man die komplette Tastaturbedienung geschenkt und muss sie nicht selbst bauen. Was hier steht, gilt ebenso für das Password Field und die Text Area. Die beiden Abschnitte weiter unten ergänzen nur deren Besonderheiten.

Das Feld selbst ist **eine** Station in der Tab-Reihenfolge. Jedes interaktive Icon ist eine weitere: das „Info-Icon“ am Label und die bis zu drei „Trailing Icons“ danach. Das „Leading Icon“ beschreibt nur und bekommt keinen Fokus. Ein Feld mit Info-Icon und Clear-Icon hat also drei Stationen und nicht eine — beim Entwurf langer Formulare ist das der Punkt, der am häufigsten unterschätzt wird. Daher sollten die Funktionen innerhalb des Input Field bewusst eingesetzt werden.

| Taste | Wirkung |
| --- | --- |
| Tab / Shift + Tab | Feld betreten und verlassen; danach folgen die Trailing Icons |
| Pfeil links / rechts, Pos1 / Ende | Cursor im Text bewegen |
| Umschalt + Pfeil, Strg + A | Text markieren |
| Enter | Sendet das Formular ab, sofern es einen Submit-Button gibt |

Absicherung gegen WCAG 2.1.1 („Keyboard“): Jede Funktion, die ein Icon im Feld anbietet, muss auch per Tastatur auslösbar sein. Ein Clear-Icon, das nur auf einen Mausklick reagiert, ist keine Abkürzung, sondern eine Funktion, die einem Teil der Nutzenden fehlt.

## Barrierefreiheit

*   Das Label muss programmatisch verknüpft sein `<label for>`, nicht nur visuell darüberstehen.
*   Den „Supporting text“ über `aria-describedby` anbinden, damit er mit dem Feld vorgelesen wird.
*   **Das Sternchen am Pflichtfeld ist nur die visuelle Hilfe.** Ohne `required` beziehungsweise `aria-required="true"` erfährt ein Screenreader nicht, dass das Feld ausgefüllt werden muss (WCAG 3.3.2 „Labels or Instructions“).
*   **Die Fehlermeldung ersetzt den Hinweistext auch programmatisch.** Sie hängt am selben `aria-describedby`, und das Feld bekommt `aria-invalid="true"`. Sonst sehen Nutzende die rote Meldung, hören sie aber nicht (WCAG 3.3.1 „Error Identification“).
*   **Read-Only und Disabled verhalten sich unterschiedlich.** Ein `readonly`\-Feld bleibt in der Tab-Reihenfolge, ist fokussierbar und wird vorgelesen — sein Inhalt lässt sich also lesen und kopieren. Ein `disabled`\-Feld fällt aus der Tab-Reihenfolge und aus der Ansage heraus. Für vorausgefüllte Werte, die Nutzende nachvollziehen sollen, ist Read-Only die richtige Wahl.
*   **Jedes Trailing Icon braucht einen Namen.** Ein „eIB“ ohne Text wird sonst nur als „Schaltfläche“ angesagt; `aria-label` beschreibt, was er tut (WCAG 4.1.2 „Name, Role, Value“). Erste grobe Textvorschläge stehen bei [unserem Iconset](icons.html) oder weiter oben im Artikel.
*   **Bei Feldern für persönliche Daten** das passende `autocomplete` setzen, etwa für Name, E-Mail-Adresse oder Postleitzahl. Das ist keine Bequemlichkeit, sondern WCAG 1.3.5 („Identify Input Purpose“).
*   Der **„Focus stroke“** muss in jedem Zustand **sichtbar bleiben,** auch in „Focus+Alert“ (WCAG 2.4.7 „Focus Visible“).
*   **Zustandswechsel müssen hörbar sein.** Der Name allein genügt bei Lösch- und Mikrofon-Icon nicht. Die Wirkung des Klicks muss ebenfalls bei Nutzenden ankommen. Deshalb sollte nach dem Löschen eine kurze Meldung über `aria-live="polite"` („Eingabe gelöscht“) ausgegeben werden, anschließend den Fokus in das Feld setzen. Bei der Spracheingabe „Aufnahme läuft“ beziehungsweise „Aufnahme beendet“ über dieselbe Live-Region. Ein rein visueller Puls-Effekt erreicht Screenreader-Nutzende nicht. Beim Auge jedoch ist keine Live-Meldung nötig, da der wechselnde Name wird beim Aktivieren automatisch neu vorgelesen.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Input Field |
| 2 | Dominance | Regular, Prominent |
| 3 | Type | – |
| 4 | Style | Placeholder, Active, Read-Only |
| 5 | State | Enabled, Disabled, Focus, Success, Alert |

> Hinweis für Figma
> Der Text im Active-Style im Input Field einer Figma-Komponente kann direkt in der Instanz geändert werden. Diese Änderung bleibt erhalten, auch wenn du zwischen verschiedenen Properties in der rechten Spalte wechselst. Ein zusätzliches Eingabefeld als Property ist daher nicht erforderlich.

{% endreiter %}

{% reiter "dos-donts" %}

## Label

Labels sollten nicht durch Platzhalter-Texte ersetzt werden, um die Übersichtlichkeit einer Seite zu verbessern oder die Länge eines Formulars zu reduzieren. Platzhalter-Texte verschwinden, sobald man mit der Eingabe beginnt, und um sie wiederzusehen, muss man die bereits eingegebenen Daten löschen; das erschwert es, Eingaben zu überprüfen, Probleme zu finden und zu lösen.

{% abbildung "Input Fields mit Label, aber Platzhalter nur, wenn nötig, als zusätzlicher Hinweis", "Input Fields mit Label, aber Platzhalter nur, wenn nötig, als zusätzlicher Hinweis", "input-field-12" %}

{% abbildung "Input Fields mit Platzhalter anstelle des Labels", "Input Fields mit Platzhalter anstelle des Labels", "input-field-13" %}

**Wichtige Grenzfälle:**

*   Einige Input Fields sind selbsterklärend; zum Beispiel benötigen Nutzende kein Label, um zu verstehen, wie man eine Suchleiste verwendet.

{% abbildung "Input Field für die Suche mit Platzhalter anstelle des Labels", "Input Field für die Suche mit Platzhalter anstelle des Labels", "input-field-14" %}

{% abbildung "Input Field für die Suche mit redundantem Label sollte vermieden werden", "Input Field für die Suche mit redundantem Label sollte vermieden werden", "input-field-15" %}

*   Labels sollten einzeilig und vollständig sichtbar sein.

{% abbildung "Optimale Labels sind:", "Optimale Labels sind:", "input-field-16" %}

*   einzeilig
*   vollständig
*   in Substantivform

{% abbildung "Suboptimale Labels sind:", "Suboptimale Labels sind:", "input-field-17" %}

*   mehrzeilig
*   abgeschnitten
*   in Sätzen und/oder mit Verben

*   Labels sollten in Substantivform formuliert werden.

{% abbildung "Labels in relativ kurzer Substantivform", "Labels in relativ kurzer Substantivform", "input-field-18" %}

{% abbildung "Labels in Form von Sätzen und/oder Verben", "Labels in Form von Sätzen und/oder Verben", "input-field-19" %}

**Wichtige Grenzfälle:**

*   Wenn ein Input Field nicht Teil eines Formulars ist und einzeln auf einer Seite platziert wird, kann die Feldbezeichnung als Handlungsaufforderung formuliert werden. Der Grund dafür ist, dass es keinen umgebenden Kontext gibt und die Verwendung eines Substantivs allein verwirrend sein könnte.

{% abbildung "Label als Handlungsaufforderung, wenn das Input Field nicht in einem Kontext steht", "Label als Handlungsaufforderung, wenn das Input Field nicht in einem Kontext steht", "input-field-20" %}

{% abbildung "Label in Substantivform, wenn das Input Field nicht in einem Kontext steht", "Label in Substantivform, wenn das Input Field nicht in einem Kontext steht", "input-field-21" %}

## Platzhaltertext

*   Der Platzhalter sollte nicht das Label wiederholen, sondern ein Beispiel dafür bieten, wie das Feld ausgefüllt werden sollte. Dies ist nützlich für Input Fields mit besonderen Formaten, wie z.B. ein Datum oder eine Telefonnummer mit internationaler Vorwahl;
*   Platzhalter sollten nie für kritische Informationen verwendet werden;
*   Bei Input Fields, deren Bedeutung eindeutig ist (z.B. der Name), sollten Platzhalter vermieden werden.

{% abbildung "Optimale Platzhalter sind:", "Optimale Platzhalter sind:", "input-field-22" %}

*   Ergänzung der Labels
*   kurze Beispieleinträge für Input Fields mit besonderen Formaten

{% abbildung "Suboptimale Platzhalter sind:", "Suboptimale Platzhalter sind:", "input-field-23" %}

*   Wiederholung der Labels
*   Redundant für Felder, die einfache und intuitive Informationen erfordern (z.B. Name)

## Hinweistext

*   Der Hinweistext sollte keine Wiederholung des Labels sein, sondern zusätzliche kontextbezogene Informationen liefern. Wenn das Label genügend Kontext bietet, um das Feld erfolgreich auszufüllen, kann der Hinweistext weggelassen werden;
*   Der Hinweistext sollte nur eine Zeile einnehmen, kann aber bei Bedarf mehrere Zeilen umfassen;
*   Wenn der Platz nicht ausreicht, um sowohl die Anweisung als auch ein Beispiel einzufügen, ist es ratsam, das Beispiel als Platzhalter und die Anweisung als Hinweistext einzufügen;
*   Wenn in einem Feld nur ein Fehler möglich ist, beschreibt der Hinweistext, wie man ihn vermeiden kann;
*   Wenn in einem Feld mehrere Fehler möglich sind, beschreibt der Hinweistext, wie man den wahrscheinlichsten vermeiden kann.

{% abbildung "Optimale Hinweistexte", "Optimale Hinweistexte", "input-field-24" %}

*   die Labels ergänzen und zusätzlichen Anweisungen zum Ausfüllen des Feldes geben
*   für Input Fields mit besonderen Anforderungen oder komplexen Formaten

{% abbildung "Suboptimale Hinweistexte", "Suboptimale Hinweistexte", "input-field-25" %}

*   die Labels nur wiederholen und keine zusätzlichen Anweisungen zum Ausfüllen des Feldes geben
*   für alle Input Fields

## Fehlermeldungen

Eine effektive Fehlermeldung sollte wie folgt formuliert werden:

*   das Hauptproblem klar benennen und überflüssige Informationen vermeiden;
*   klare Anweisungen geben, wie Nutzer das Problem selbst lösen können;
*   eine klare und verständliche Sprache verwenden, die Fachjargon und komplexe Formulierungen vermeidet;
*   einen positiven, konstruktiven und nicht wertenden Tonfall nutzen;
*   die Botschaften an den Kontext anpassen, in dem sich die Nutzer befinden. Zum Beispiel kann eine Fehlermeldung für Unerfahrene anders aussehen als für erfahrene Nutzer.

{% abbildung "Optimale Fehlermeldungen", "Optimale Fehlermeldungen", "input-field-26" %}

*   die das Problem klar benennen und Hinweise geben, wie es gelöst werden kann
*   in der gleichen Sprache, die die Nutzenden sprechen
*   verwenden einen positiven, konstruktiven und nicht wertenden Tonfall

{% abbildung "Suboptimale Fehlermeldungen", "Suboptimale Fehlermeldungen", "input-field-27" %}

*   Allgemeine Fehlermeldungen, die keine konkreten Anweisungen liefern
*   Verwendung von Fachjargon und komplexen Formulierungen
*   Verwendung eines negativen Tons, der impliziert, dass die Nutzenden einen Fehler gemacht haben

*   Fehlermeldungen ersetzen den Hinweistext, bis der Fehler behoben ist;
*   Wenn eine Fehlermeldung erscheint, sollte die Eingabe im Input Field beibehalten werden. Für die Benutzenden ist es einfacher, die fehlerhafte Daten zu korrigieren, als noch einmal von vorne zu beginnen.

{% abbildung "Optimale Fehlermeldung", "Optimale Fehlermeldung", "input-field-28" %}

*   ersetzt den Hinweistext, bis der Fehler behoben ist
*   Die Eingabe bleibt im Input Field, nachdem die Fehlermeldung angezeigt wurde

{% abbildung "Suboptimale Fehlermeldung", "Suboptimale Fehlermeldung", "input-field-29" %}

*   wird dem Hinweistext hinzugefügt, bis der Fehler behoben ist
*   Die Eingabe verschwindet aus dem Input Field, nachdem die Fehlermeldung angezeigt wurde

## Erfolgsmeldungen

*   Erfolgsmeldungen sollten nicht erscheinen, wenn die einzige Anforderung für ein Feld ist, dass es ausgefüllt werden muss, da diese Meldung den Nutzenden keinen zusätzlichen Kontext bietet;
*   Erfolgsmeldungen sollten bei Eingaben mit komplexen Anforderungen (z.B. Passwort, IBAN usw.) verwendet werden. So wird verhindert, dass die Nutzenden raten oder mehrmals überprüfen müssen, ob ihre Eingabe den Systemvorgaben entspricht.

{% abbildung "Erfolgsmeldung zur Bestätigung der Genauigkeit der Eingaben bei komplexen Input Fields", "Erfolgsmeldung zur Bestätigung der Genauigkeit der Eingaben bei komplexen Input Fields", "input-field-30" %}

{% abbildung "Erfolgsmeldungen als Bestätigung für das Ausfüllen von Input Fields", "Erfolgsmeldungen als Bestätigung für das Ausfüllen von Input Fields", "input-field-31" %}

### Eine effektive Erfolgsmeldung sollte

*   die Botschaft klar und prägnant vermitteln;
*   die Nutzenden nicht ablenken und nur verwendet werden, wenn das zusätzliche Feedback dazu beiträgt, das Formular schneller oder genauer auszufüllen;

## Leading Icon

Da es keine spezifische Funktion hat, sollte das Icon vermieden werden, wenn das Feld zu klein ist und die Darstellung des Eingabetextes beeinträchtigt werden könnte.

{% abbildung "Leading Icon, das die Sichtbarkeit der Eingabe nicht beeinträchtigt", "Leading Icon, das die Sichtbarkeit der Eingabe nicht beeinträchtigt", "input-field-32" %}

{% abbildung "Leading Icon, das die Sichtbarkeit der Eingabe beeinträchtigt", "Leading Icon, das die Sichtbarkeit der Eingabe beeinträchtigt", "input-field-33" %}

## Trailing Icons

*   (Trailing Icons mit) **Funktionen** sollten nur dann hinzugefügt werden, wenn sie den Nutzenden einen Mehrwert bieten, indem sie den Prozess vereinfachen und beschleunigen.
*   Ein Input Field kann maximal drei Funktionen (Trailing Icons) gleichzeitig enthalten. Es sollte betont werden, dass dies nicht die Norm ist, sondern Ausnahmesituationen, wie z.B. eine Suchleiste mit zusätzlichen Funktionen (Beispiel: Google Suchleiste).

{% abbildung "Optimale Verwendung", "Optimale Verwendung", "input-field-34" %}

Die Trailing Icons beeinträchtigen nicht die Sichtbarkeit der Eingabe

{% abbildung "Suboptimale Verwendung", "Suboptimale Verwendung", "input-field-35" %}

Die Trailing Icons beeinträchtigen die Sichtbarkeit der Nutzendeneingabe

## Höhe

*   Input Fields mit unterschiedlicher Höhe dürfen nicht im selben Formular platziert werden;
*   Wenn das Formular einen Button enthält, sollte dieser die gleiche Höhe wie die Felder haben.

{% abbildung "Optimale Verwendung", "Optimale Verwendung", "input-field-38" %}

*   Input Fields gleicher Höhe innerhalb desselben Formulars
*   Button in der gleichen Höhe wie die Input Fields

{% abbildung "Suboptimale Verwendung", "Suboptimale Verwendung", "input-field-39" %}

*   Input Fields unterschiedlicher Höhe innerhalb desselben Formulars
*   Button in einer anderen Höhe als die Input Fields

## Breite

*   Im Idealfall sollten Nutzende die gesamte Eingabe sehen können, ohne durch das Feld scrollen zu müssen. Je mehr Text verborgen ist, desto schwieriger wird es für sie, die Richtigkeit ihrer Angaben zu überprüfen;
*   Die Feldbreite bestimmt die Erwartungen der Nutzenden und sollte die Länge der geforderten Eingabe vorschlagen. Benutzertests zeigen, dass Formulare, in denen alle Felder gleich breit sind, zwar optisch ansprechender, aber schwieriger auszufüllen sind.

{% abbildung "Input Fields, deren Breite proportional zur erwarteten Eingabe ist", "Input Fields, deren Breite proportional zur erwarteten Eingabe ist", "input-field-40" %}

{% abbildung "Input Fields gleicher Breite innerhalb eines Formulars", "Input Fields gleicher Breite innerhalb eines Formulars", "input-field-41" %}

{% endreiter %}
