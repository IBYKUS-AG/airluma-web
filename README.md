# Airluma

Airluma ist ein offenes Designsystem: Farben, Typografie, Layout, Icons und Komponenten, von Anfang an barrierefrei gedacht. Es ist aus dem Designsystem Ides hervorgegangen.

Dieses Repository enthält die Website von Airluma: **[www.airluma.de](https://www.airluma.de)**

## Website lokal ansehen

Voraussetzung ist [Node.js](https://nodejs.org/) (Version 20 oder neuer).

```bash
npm ci
npm run vorschau
```

Die Website läuft dann unter http://localhost:8080 und lädt nach Änderungen selbst neu.

Zum Bauen ohne Vorschau: `npm run bauen`. Das Ergebnis liegt in `_site/`, darin auch das Suchverzeichnis (`_site/pagefind/`).

## Aufbau

| Ort | Inhalt |
| --- | --- |
| `website/` | Seiten, Bausteine (`_includes/`), Daten (`_data/`), Styles, Skripte, Schrift und Bilder |
| `eleventy.config.js` | Einstellungen für den Bau mit [Eleventy](https://www.11ty.dev/) und die Suche mit [Pagefind](https://pagefind.app/) |
| `Ressourcen/IBYKUS-Iconset.svg` | Iconset, aus dem der Bau die Zeichenübersicht der Icons-Seite erzeugt |
| `werkzeuge/quellen.json` | Ort der Quellen für den Bau |

Die Inhaltsseiten der Doku (`website/*.md`) werden aus der Dokumentation von Ides erzeugt und nicht von Hand bearbeitet.

## Mitmachen

Wie du Fehler meldest oder etwas beiträgst, beschreiben wir auf der Seite [Mitmachen](https://www.airluma.de/mitmachen.html), sobald der Ablauf feststeht.

## Lizenz

Airluma steht unter der [Apache License 2.0](LICENSE). Rechteinhaber und enthaltene Werke Dritter stehen in [NOTICE](NOTICE). Die Schrift Asap steht unter der [SIL Open Font License 1.1](website/fonts/OFL.txt).
