let display = document.getElementById('show');

function clearDisplay() {
    display.textContent = '0';
}

function appendCharacter(character) {
    if (display.textContent === '0') {
        display.textContent = character;
    } else {
        display.textContent += character;
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (e) {
        display.textContent = 'Error';
    }
}
