const html = document.querySelector('html');
const h1 = document.querySelector('h1');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element, style) => {
    window.getComputedStyle(element).getPropertyValue(style);
}

const initialColors = {
    bg: getStyle(html, '--bg'),
    bgPanel: getStyle(html, '--bg-panel'),
}

const darkMode = {
    bgPanel: 'rgba(255, 255, 255, 0.6)',
    bg: '#000',
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})