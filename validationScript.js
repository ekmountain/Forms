// Retrieve the input field value
let textInput = document.getElementById('inputField');
console.log(textInput.value);

// Regular expression pattern for alphanumeric input
let alphaRegex = /^[a-zA-Z0-9]+$/

// JavaScript code for form validation
let form = document.getElementById('myForm');
form.addEventListener('submit', function(event){
  
  //retrieve current input value
  let inputValue = textInput.value;

  //Check if input value is empty or alphanumeric
    if(inputValue === '' || !alphaRegex.test(inputValue)){
      alert('Invalid input: Only alphanumeric characters are allowed.');
      console.log('Invalid Input: Only Alphanumeric Input Allowed');
      // Prevent form from submitting    
      event.preventDefault();       
    } else {
      // Display a successful completion alert
      alert('Form successfully validated!')
    }
  });

textInput.addEventListener('blur', function(){
  let inputValue = textInput.value;
  // check if input is alphanumeric
  if(!alphaRegex.test(inputValue)){
    alert('Invalid input: Only alphanumeric characters are allowed.')
    console.log('Invalid input: Only alphanumeric characters are allowed.')
  } else {
    errorMessage.textContent = '';
  }
});