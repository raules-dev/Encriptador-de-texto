//Código del menú
function openMenu(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
}

// Preparación del código
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptButton = document.getElementById('encrypt-btn');
const decryptButton = document.getElementById('decrypt-btn');
const clearButton = document.getElementById('clear-btn');
const copyButton = document.getElementById('copy-btn');
const muneco = document.getElementById('muneco');
const mensaje1 = document.getElementById('mensaje_1');
const mensaje2 = document.getElementById('mensaje_2');

// Validar entrada de texto
inputText.addEventListener('input', function() {
    const regex = /^[a-z\s]*$/;

    if (!regex.test(inputText.value)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        inputText.value = inputText.value.slice(0, -1);
    }

    encryptButton.disabled = inputText.value.trim() === '';
    decryptButton.disabled = inputText.value.trim() === '';
});

// Encriptar el mensaje

function encryptMessage(message) {
    return message.replace(/e/g, 'enter')
                  .replace(/i/g, 'imes')
                  .replace(/a/g, 'ai')
                  .replace(/o/g, 'ober')
                  .replace(/u/g, 'ufat');
}

//Desencriptar el mensaje

function decryptMessage(message) {
    return message.replace(/enter/g, 'e')
                  .replace(/imes/g, 'i')
                  .replace(/ai/g, 'a')
                  .replace(/ober/g, 'o')
                  .replace(/ufat/g, 'u');
}

encryptButton.addEventListener('click', function() {
    const encryptedMessage = encryptMessage(inputText.value);
    outputText.value = encryptedMessage;
    outputText.style.display = 'block';
    muneco.style.display = 'none';
    mensaje1.style.display = 'none';
    mensaje2.style.display = 'none';
    copyButton.style.display = 'block';
    clearButton.disabled = false;
});

decryptButton.addEventListener('click', function() {
    const decryptedMessage = decryptMessage(inputText.value);
    outputText.value = decryptedMessage;
    outputText.style.display = 'block';
    muneco.style.display = 'none';
    mensaje1.style.display = 'none';
    mensaje2.style.display = 'none';
    copyButton.style.display = 'block';
    clearButton.disabled = false;
});

clearButton.addEventListener('click', function() {
    location.reload();
});

copyButton.addEventListener('click', function() {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

