# Template Schnupperlehr-Webseite

Dieses Projekt ist eine Vorlage für deine eigene Webseite, welche du in dieser Schnupperlehre erstellen kannst.
Die Vorlage beinhaltet eine Hauptseite mit einem Menü, welches dir hilft, verschiedene Seiten zu navigieren.

## index.html & main.js

Die zwei Dateien index.html und main.js spielen zusammen, um die Hauptseite darzustellen. Wenn du die Webseite öffnest, siehst du den Inhalt von index.html mit einem Menü und dem Inhalt darunter. Das Menü und der Inhalt werden durch main.js gefüllt. Den Code darin musst du momentan nicht verstehen können. Wenn es dich jedoch interessiert, kannst du wenn du Zeit hast, versuchen den Code anzuschauen und zu verstehen.

## Neue Seiten erstellen

Im Ordner "pages" hat es zwei Beispielseiten. Diese dienen als Vorlagen zum erweitern der Webseite. Eine der Seiten ist eine Vorlage für einen Steckbrief, die andere ist eine leere Seite. 

So erstellst du eine neue Seite: 
1. Kopiere eine der Vorlagen in eine neue Datei mit einem anderen Namen
2. In der Datei main.js ganz oben in der Variable "routes", erstelle einen neuen Eintrag für die Seite. 
   Hier ein Beispiel für eine Datei "hallo.html" mit dem gewünschten Titel/Linktext "Hallo":

``` javascript
// Hier werden die Routen definiert
// name: Text, welcher im Menü angezeigt wird
// path: ./pages/ + der Name der Datei (relativer Pfad zur Datei)
const ROUTES = [
    { name: 'Steckbrief Vorlage', path: './pages/steckbrief-template.html'},
    // Die nächste Zeile wird als Beispiel eingefügt
    { name: 'Hallo', path: './pages/hallo.html' }
]
```

> Wichtig:  
> - Zwischen Einträgen in Arrays müssen Kommas gesetzt werden
> - Für Lesbarkeit sollte nur ein Eintrag auf eine Zeile geschrieben werden 
> - Reihenfolge der Einträge im Code stellt die Reihenfolge der Einträge auf der Seite dar

## Styling

### Gesamte Webseite
Wenn du die ganze Webseite stylen möchtest, kannst du das in der Datei "styles.css" machen. Stelle jedoch sicher, dass diese Datei in jeder HTML-Datei verlinkt ist, bevor du nach einem anderen Grund suchst, warum die Styles nicht stimmen.
``` html
...
<head>
    ...
    <link rel="stylesheet" href="../styles.css">
</head>
...
```

### Einzelne Seiten
Wenn du einzelne Seiten stylen möchtest, kannst du im Ordner "styles" eine neue Datei mit der Endung ".css" erstellen und dort die Style-Regeln hinein schreiben. Stelle nachher sicher, dass du deine CSS-Datei in deiner HTML-Datei verlinkst:

``` html
...
<head>
    ...
    <link rel="stylesheet" href="../styles/<Dateiname>.css">
</head>
...
```
