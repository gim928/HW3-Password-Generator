// Assign button to query selector
var generateBtn = document.querySelector("#generate");

//Create arrays for character types
var specialChars = "!@#$%^&*()<>{}[]:;".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberChars = "0123456789".split("");
var userArray;
//declare global variables-values determined by user input
var passwordLength;
var specialTrue;
var lowerTrue;
var upperTrue;

// Write password to the #password input
function writePassword(event) {
  event.preventDefault(); //takes away refresh when button is clicked
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  passwordLength = confirmLength();
  specialTrue = confirmSpecial();
  lowerTrue = confirmLower();
  upperTrue = confirmUpper();
  numberTrue = confirmNumber();

  var result = mainCreateFunction();

  return result;
}
//function to gather and store user input for password length
function confirmLength() {
  var validLength = false;

  do {
    var numberChars = prompt(
      "Please provide the number of characters for your password. The number must be between 8 and 123)."
    );
    if (numberChars > 123 || numberChars < 8) {
      alert(
        "This is not a valid length. Please provide a number between 8 and 123."
      );
      validLength = false;
    } else {
      validLength = true;
    }
  } while (!validLength);

  return numberChars;
}
//prompts to gather user input on character type
function confirmSpecial() {
  var specialSelection = confirm(
    "Do you want special characters in your password?"
  );
  return specialSelection;
}

function confirmLower() {
  var lowerSelection = confirm(
    "Do you want lowercase letters in your password?"
  );
  return lowerSelection;
}

function confirmUpper() {
  var upperSelection = confirm(
    "Do you want uppercase letters in your password?"
  );
  return upperSelection;
}

function confirmNumber() {
  var numberSelection = confirm("Do you want numbers in your password?");
  return numberSelection;
}

function mainCreateFunction() {
  //if user selected no to all prompts
  if (!specialTrue && !lowerTrue && !upperTrue && !numberTrue) {
    alert(
      "Invalid. You must choose one character type. Click Generate Password again"
    );
  }

  //If user selected yes for all four options
  if (specialTrue && lowerTrue && upperTrue && numberTrue) {
    userArray = numberChars.concat(specialChars, lowerCase, upperCase);
  }

  //If user selected yes to 3 conditions
  if (!specialTrue && lowerTrue && upperTrue && numberTrue) {
    userArray = numberChars.concat(lowerCase, upperCase);
  }
  if (specialTrue && !lowerTrue && upperTrue && numberTrue) {
    userArray = numberChars.concat(specialChars, upperCase);
  }
  if (specialTrue && lowerTrue && !upperTrue && numberTrue) {
    userArray = numberChars.concat(specialChars, lowerCase);
  }
  if (specialTrue && lowerTrue && upperTrue && !numberTrue) {
    userArray = specialChars.concat(lowerCase, upperCase);
  }

  //if statements for one selection only
  if (!specialTrue && !lowerTrue && upperTrue && !numberTrue) {
    userArray = numberChars.concat(upperCase);
  }

  if (!specialTrue && lowerTrue && !upperTrue && !numberTrue) {
    userArray = numberChars.concat(lowerCase);
  }

  if (specialTrue && !lowerTrue && !upperTrue && !numberTrue) {
    userArray = numberChars.concat(specialChars);
  }
  if (!specialTrue && !lowerTrue && !upperTrue && numberTrue) {
    userArray = numberChars.concat(specialChars);
  }
  //for loop to choose characters randomly from array based on user choices
  var passwordRandom = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * userArray.length);
    passwordRandom += userArray[randomChar];
    console.log(passwordRandom);
  }
  return passwordRandom;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
