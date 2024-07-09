function switchStyle() {
    var currentStyle = document.querySelector('link[rel=stylesheet]');
    if (currentStyle.getAttribute('href') === 'style.css') {
        currentStyle.setAttribute ('href', 'high-contrast.css');
    } else {
        currentStyle.setAttribute('href', 'style.css');
    }
}
