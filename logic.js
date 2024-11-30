function addText(input) {
  return input;
}

let messages = [];

function outputText(text) {
  let output = document.getElementById("output");
  messages.push(text);
  output.innerHTML = "";

  messages.forEach((message) => {
    output.innerHTML += message + "<br>";
  });
}

function submit() {
  const input = document.getElementById("text");
  const valueOfText = input.value;
  const processedText = addText(valueOfText);
  outputText(processedText);
}
