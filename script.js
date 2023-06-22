// Get the calculator elements
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('.calculator button');

// Add click event listeners to buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    handleButtonClick(buttonText);
  });
});

// Function to handle button clicks
function handleButtonClick(value) {
  if (value === 'AC') {
    // Clear the input
    inputBox.value = '';
  } else if (value === 'DEL') {
    // Delete the last character
    inputBox.value = inputBox.value.slice(0, -1);
  } else if (value === '=') {
    // Evaluate the expression
    try {
      const result = eval(inputBox.value);
      inputBox.value = result;
    } catch (error) {
      inputBox.value = 'Error';
    }
  } else {
    // Append the button value to the input
    inputBox.value += value;
  }
}
