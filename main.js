
// Hier werden die Routen definiert
// name: Text, welcher im Menü angezeigt wird
// path: ./pages/ + der Name der Datei (relativer Pfad zur Datei)
const ROUTES = [
    { name: 'Steckbrief Vorlage', path: './pages/steckbrief-template.html'},
]

// Speichert den vordefinierten Titel (html title element im head)
const TITLE = document.title;

// Benutzte Elemente werden definiert
const menu = document.getElementById('navigation');
const content = document.getElementById('content');
const anchors = new Map();

// Entfernt das Highlighting von allen Buttons
function resetClickedClass() {
    for(const anchor of anchors.values()) {
        anchor.classList.remove('clicked');
    }
}

function setContent(routeIndex) {
    resetClickedClass();
    // Setzt das Highlighting auf den Link der geöffneten Seite
    anchors.get(ROUTES[routeIndex].path).classList.add('clicked');
    // Setzt den Titel des Browsertabs
    document.title = TITLE + ' - ' + ROUTES[routeIndex].name;
    // Ladet den Inhalt der geöffneten Seite
    content.src = ROUTES[routeIndex].path;
}

function setContentSize() {
    content.height = content.contentWindow.document.scrollingElement.scrollHeight;
}

function main() {
    content.onload = setContentSize;

    // Wird für jede Route ausgeführt
    for (const route of ROUTES) {
        // Erstellt einen Link
        const anchor = document.createElement('a');
        anchors.set(route.path, anchor);
        anchor.textContent = route.name;
        // Definiert, was passiert, wenn der Link gedrückt wird
        anchor.setAttribute('href', 'javascript:setContent(' + ROUTES.indexOf(route) + ')');
        // Fügt den Link zum Menü hinzu
        menu.appendChild(anchor);
    }
}

// Führt die Hauptfunktion aus
main();
setContent(0);
