// Utility function that returns the input text unchanged
function addText(input) {
  return input;
}

// Initialize empty array to store todo items
let messages = []; 

// Main function to display and manage todo items
function outputText(text) {
  // If text parameter exists, add it to messages array
  if (text) {
    messages.push(text);
  }
  
  // Get reference to output container element from DOM
  let output = document.getElementById("output");
  // Clear all existing content from output container
  output.innerHTML = ""; 

  // Loop through each message in the messages array
  messages.forEach((message) => {
    // Create new h3 element to hold todo item
    const todo = document.createElement("h3");
    // Set the text content of h3 to current message
    todo.textContent = message;

    // Create new button element for delete function
    const deleteButton = document.createElement("button");
    // Set the button text to "Delete"
    deleteButton.textContent = "Delete";
    // Set button ID attribute to "delete"
    deleteButton.id = "delete";

    // Add click event listener to delete button
    deleteButton.addEventListener("click", () => {
      const index1 = messages.indexOf(message);
      messages.splice(index1, 1); // splices removes
      outputText();
    });

    // Add delete button as child of todo item container
    todo.appendChild(deleteButton);
    // Add completed todo item to output container
    output.appendChild(todo);
  });
}

function submit() {
  const input = document.getElementById("text");
  const valueOfText = input.value;
  const processedText = addText(valueOfText);
  outputText(processedText);
  input.value="";
}
