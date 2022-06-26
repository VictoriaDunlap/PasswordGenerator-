// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  console.log("yeeyee");

  // 1. Prompt for length of pw 8 < 128 
  var length = prompt("How many characters would you like your password to be? (at least 8, no more than 128)");
  
  // 2. Prompt for Lowercase letters // boolean
  var lowercase = confirm("Do you want lowercase letters?"); 
  
  // 3. Prompt for Uppercase letters
  var uppercase = confirm("Do you want uppercase letters?");
  // 4. Prompt for numbers
  var numbers = confirm("Do you want numbers?");
  // 5. Prompt for special characters
  var specialChar = confirm("Do you want special characters?");
  // 6. Answers validated and at least one character type selected
  if (length < 8 || length > 128) {
    alert("Pick a number between 8 and 128.");
    return;
  } 

  if (lowercase || uppercase || numbers || specialChar){
    Math.random();
  } else { 
    alert('Select at least one specialized character')
    return
  }
  var liLower = "abcdefghijklmnopqrstuvwxyz"
  var liUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var liNumbers = "0123456789"
  var liSc = "!@#$%^&*()"
  var lstPassword = ""

  if (lowercase === true) {
    lstPassword + liLower
  } 
  if (uppercase === true) {
    lstPassword + liUpper
  }
  if (numbers === true) {
    lstPassword + liNumbers
  }
  if (specialChar === true) {
    lstPassword + liSc
  }

  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * lstPassword.length);
    lstPassword += lstPassword.substring(randomNumber, randomNumber +1);


  return lstPassword;
}}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
