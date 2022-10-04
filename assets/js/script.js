// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var userChoice = true;
  while (userChoice) {
    var passwordLength = Number(prompt("How many characters would you like your password to be?\nMust be between 8 and 128 characters."));
    if (passwordLength > 8 && passwordLength < 128) {
      userChoice = false;
    } else {
      return;
    }
  }
  while (!userChoice) {
    var special = confirm("Would you like your password to include special characters?");
    var lowerCase = confirm("Would you like your password to include lowercase letters?");
    var upperCase = confirm("Would you like your password to include uppercase letters?");
    var numeric = confirm("Would you like your password to include numbers?");
    
    alert( "Special characters: " + special + "\nLowercase letters: " + lowerCase + "\nUppercase letters: " + upperCase + "\nNumbers: " + numeric);
    if (special == true || lowerCase == true || upperCase == true || numeric == true ) {
      userChoice = true;
    } else {
      alert("You must contain at least one character type");
    }
  }
  if (special == true) {
    special = "`~!@#$%^&*()-_=+[]{}\|:;?/.,<>"
  } else {
    special = ""
  }
  if (lowerCase == true) {
    lowerCase = "abcdefghijklmnopqrstuvwxyz"
  } else {
    lowerCase = ""
  } if (upperCase == true) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    upperCase = ""
  } if (numeric == true) {
    numeric = "0123456789"
  } else {
    numeric = ""
  } 
  var finalPassword = numeric.concat(lowerCase, upperCase, special);
  var randomNumber = "";
  for (var i = 0; i < passwordLength; i++) {
    randomNumber += finalPassword[Math.floor(Math.random() * finalPassword.length)];
  } 
  return randomNumber;
}
