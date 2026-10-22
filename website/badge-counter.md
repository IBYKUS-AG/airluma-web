---
layout: inhaltsseite.njk
titel: Badge Counter
bereich: komponenten
aktuell: badge-counter
gruppe: systemfeedback
reiter: [ueberblick, spezifikation]
---
{% reiter "ueberblick" %}

**Badge** (mit Zählwerk): Als größtes Format bietet es Raum für Zählungen oder Mengenangaben und sorgt dafür, dass auch auf kleinen Displays wichtige Informationen, wie die Anzahl von Benachrichtigungen oder Ereignissen, deutlich wahrnehmbar sind.

Das Badge mit einem Zählwerk darf nur Zahlen anzeigen und ist auf 3 Stellen beschränkt. Zahlen über 99 werden nur noch mit 99+ gekennzeichnet. Kurze Schlagworte, wie z.B. „Neu“ können mit einem Chip-Element besser dargestellt werden.

## Abgrenzung

In der Welt der Benutzeroberflächen gibt es eine Vielzahl an UI-Elementen, die uns täglich dabei unterstützen, Informationen aufzunehmen und Aktionen auszuführen. Vielleicht sind dir Begriffe wie „Badge“, „Chip“ oder „Button“ schon einmal begegnet, aber was genau verbirgt sich dahinter? Jedes dieser Elemente hat seinen eigenen Zweck und hilft uns, digitale Anwendungen intuitiv und effizient zu bedienen.

|  | Badge | Chip | Button |
| --- | --- | --- | --- |
| Zweck | Benachrichtigung, Status oder Zählung anzeigen | Auswahlmöglichkeiten, Information, Kategorien, Tags oder Filter | Aktion oder Funktionen auslösen |
| Interaktivität | **Nicht** interaktiv | **Teilweise** Interaktiv | **Meist** interaktiv (außer bei disabled Buttons) |
| Design | Kreis oder kleines stark abgerundetes Rechteck, oft mit Zahlen | Kompakt, stark abgerundetes Rechteck, kann Schlagworte und je nach Typ ein Icon enthalten | Auffälliger, größere Fläche, klare Kanten, häufig mit Text und evtl. Icon |
| Beispiele | Ob (mittels Badge-Decent und -Regular) oder Anzahl (mittels Badge) ungelesener Nachrichten | Kategorienauswahl oder Tags für z.B. „Sport“, „Musik“ | „Speichern“ oder „Absenden“ |

{% endreiter %}

{% reiter "spezifikation" %}

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Badge+Counter |
| 2 | Dominance | – |
| 3 | Type | – |
| 4 | Style | Standard |
| 5 | State | – |

{% endreiter %}
