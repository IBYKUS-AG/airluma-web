---
layout: inhaltsseite.njk
titel: Password Field
bereich: komponenten
aktuell: password-field
gruppe: content
reiter: [ueberblick, spezifikation, dos-donts]
---
{% reiter "ueberblick" %}

Das Password Field ist eine besondere Variante des Input Fields, das für die Eingabe von Kennwörtern vorgesehen ist. In der Regel werden Zeichen bei der Passwort-Eingabe durch Sternchen-Symbole maskiert. Das dient der Sicherheit und schützt Accounts vor Fremdzugriff. Auf Wunsch können Nutzende die Maskierung deaktivieren und ihre Passwörter im Klartext anzeigen lassen. Wenn sie auf das augenförmige Symbol klicken (Trailing Icon), wird der Passwort-Text angezeigt, und das Symbol ändert sich so, dass ein Schrägstrich darüber dargestellt wird.

## Varianten

Wenn es der Platz erlaubt, kann das Password Field auch ein Leading Icon enthalten, das die Rolle des Feldes beschreibt, aber keine zusätzliche Funktion bietet.

{% abbildung "Password Field mit ausgeblendetem Kennwort", "Password Field mit ausgeblendetem Kennwort", "password-field-01" %}

{% abbildung "Password Field mit ausgeblendetem Kennwort und Leading Icon", "Password Field mit ausgeblendetem Kennwort und Leading Icon", "password-field-02" %}

{% abbildung "Password Field mit sichtbarem Kennwort", "Password Field mit sichtbarem Kennwort", "password-field-03" %}

{% abbildung "Password Field mit sichtbarem Kennwort und Leading Icon", "Password Field mit sichtbarem Kennwort und Leading Icon", "password-field-04" %}

{% endreiter %}

{% reiter "spezifikation" %}

## Tastaturbedienung

Das Augen-Icon ist ein „Trailing Icon“ und damit eine eigene Station hinter dem Feld. Es reagiert wie jeder Button auf Enter und Leertaste, sodass Nutzende ihr Kennwort auch ohne Maus im Klartext prüfen können.

| Taste | Wirkung |
| --- | --- |
| Tab | Vom Password Field zum Augen-Icon |
| Enter / Leertaste | Schaltet die Maskierung um |

## Barrierefreiheit

*   **Der Umschaltzustand muss angesagt werden.** Sichtbar wechselt nur der Schrägstrich über dem Icon. Dafür gibt es zwei Wege, und sie schließen sich gegenseitig aus: entweder ein gleichbleibender Name („Passwort anzeigen“) zusammen mit `aria-pressed`, das zwischen `true` und `false` wechselt — oder ein Name, der selbst mitwechselt („Passwort anzeigen“ beziehungsweise „Passwort verbergen“), dann ohne `aria-pressed`. Beides zusammen führt zu einer doppelten und widersprüchlichen Ansage.
*   **Das Einfügen aus der Zwischenablage nicht unterbinden.** Wer es sperrt, sperrt Passwortmanager aus und zwingt zum fehleranfälligen Abtippen langer Kennwörter (WCAG 3.3.8 „Accessible Authentication (Minimum)“).
*   `autocomplete="current-password"` beim Anmelden und `autocomplete="new-password"` beim Vergeben setzen, damit Passwortmanager das Feld erkennen.
*   Die **Anforderungen an das Kennwort** gehören in den „Supporting text“ und damit über `aria-describedby` ans Feld — nicht erst in die Fehlermeldung.

## Taxonomie

| Stufe | Taxonomie in Figma |  |
| --- | --- | --- |
| 1 | Component | Password Field |
| 2 | Dominance | Regular, Prominent |
| 3 | Type | PW-Hidden, PW-Visible |
| 4 | Style | Placeholder, Dotted, Text |
| 5 | State | Enabled, Disabled, Focus, Success, Alert |

{% endreiter %}

{% reiter "dos-donts" %}

## Allgemein

*   Die Verwendung von Hinweistexten hilft den Nutzenden, effektive Passwörter zu erstellen, die den Anforderungen des Systems entsprechen.
*   Sobald die Eingabe überprüft wurde und das Passwort den Anforderungen entspricht, kann der Hinweistext durch den Erfolgstext ersetzt werden. Dies vermittelt den Nutzenden ein Gefühl der Bestätigung und Sicherheit und hilft ihnen, den Prozess schneller abzuschließen.

{% abbildung "Password Field mit Hinweistext vor der Validierung", "Password Field mit Hinweistext vor der Validierung", "password-field-05" %}

{% abbildung "Password Field mit Erfolgsmeldung nach der Validierung", "Password Field mit Erfolgsmeldung nach der Validierung", "password-field-06" %}

{% endreiter %}
