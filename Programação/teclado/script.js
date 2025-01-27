const phrases = [
    "A rápida raposa marrom pula sobre o cão preguiçoso.",
    "O céu está claro e azul hoje.",
    "Eu gosto de programar em JavaScript.",
    "Vamos praticar a digitação todos os dias.",
    "A prática leva à perfeição."
];

let currentPhraseIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const phraseElement = document.getElementById('phrase');
    const inputField = document.getElementById('input-field');
    const keyboard = document.getElementById('keyboard');

    // Função para gerar o teclado
    const generateKeyboard = () => {
        const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
        keys.forEach(key => {
            const keyElement = document.createElement('div');
            keyElement.classList.add('key');
            keyElement.textContent = key;
            keyElement.id = `key-${key}`;
            keyboard.appendChild(keyElement);
        });
    };

    // Função para atualizar a frase
    const updatePhrase = () => {
        phraseElement.textContent = phrases[currentPhraseIndex];
    };

    // Função para destacar a tecla pressionada
    const highlightKey = (key) => {
        const keyElement = document.getElementById(`key-${key}`);
        if (keyElement) {
            keyElement.classList.add('active');
            setTimeout(() => {
                keyElement.classList.remove('active');
            }, 200);
        }
    };

    // Evento de digitação
    inputField.addEventListener('input', (event) => {
        const inputText = event.target.value;
        const currentPhrase = phrases[currentPhraseIndex];

        if (inputText === currentPhrase) {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            updatePhrase();
            inputField.value = '';
        }
    });

    // Evento de tecla pressionada
    document.addEventListener('keydown', (event) => {
        highlightKey(event.key);
    });

    // Inicialização
    generateKeyboard();
    updatePhrase();
});