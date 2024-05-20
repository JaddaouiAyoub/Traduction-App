document.getElementById('translateBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const sourceLang = document.getElementById('sourceLangSelect').value;
    const targetLang = document.getElementById('targetLangSelect').value;
    const outputTextElement = document.getElementById('outputText');

    if (!inputText) {
        outputTextElement.textContent = 'Veuillez entrer du texte à traduire.';
        return;
    }

    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`);
        const data = await response.json();
        const translatedText = data.responseData.translatedText;
        outputTextElement.textContent = translatedText;
    } catch (error) {
        console.error('Erreur lors de la traduction:', error);
        outputTextElement.textContent = 'Erreur lors de la traduction. Veuillez réessayer.';
    }
});
