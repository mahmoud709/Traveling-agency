function loadLanguage(lang) {
    return fetch(`${lang}.json`)
        .then(response => response.json());
}

function translateElements(translations) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[key];
        if (translation) {
            element.textContent = translation;
        }
    });
}

function detectLanguage() {
    const languageSelector = document.getElementById('language-selector');
    return languageSelector.value;
}

const languageSelector = document.getElementById('language-selector');
languageSelector.addEventListener('change', () => {
    const lang = detectLanguage();
    loadLanguage(lang)
        .then(translation => translateElements(translation))
        .catch(error => console.error(error));
});

loadLanguage('en')
    .then(translation => translateElements(translation))
    .catch(error => console.error(error));

