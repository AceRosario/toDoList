function addText(input) {
   return input;
}

function outputText(text) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>${text}</h3>`;
}

function submit() {
    const inputField = document.getElementById('text');
    const inputValue = inputField.value;
    const processedText = addText(inputValue);
    outputText(processedText);
}