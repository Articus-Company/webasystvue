import './wa-content/wa-2.0.css'

const fontawesomeScript = document.createElement('script')
fontawesomeScript.src = '/wa-content/fontawesome-all.min.js'
fontawesomeScript.async = false
document.head.appendChild(fontawesomeScript)

const html = document.documentElement

function syncTheme() {
    if (html.classList.contains('htw-dark')) {
        html.setAttribute('data-theme', 'dark')
    } else {
        html.removeAttribute('data-theme')
    }
}

syncTheme()

const observer = new MutationObserver(syncTheme)

observer.observe(html, {
    attributes: true,
    attributeFilter: ['class'],
})
