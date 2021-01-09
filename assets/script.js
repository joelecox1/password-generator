// Assignment code here
var confirmUpper;
var confirmLower;
var confirmNum;
var confirmSpecial;
var typesOfCharacters = {
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  specialChar: "!@#$%^&*()_+"
};

function generatePassword() {
  var value = prompt("How many characters should your password contain? Choose a value between 8-128.");
  var length = parseInt(value);

  if (length < 8 || length > 128) {
    alert("Password must be between 8-128 characters.");
    return "Please try again.";
  };

  if (!length) {
    alert("Password must be between 8-128 characters.");
    return "Please try again.";
  };

  confirmUpper = confirm("Do you want the password to contain uppercase characters?");
  confirmLower = confirm("Do you want the password to contain lowercase letters?");
  confirmNum = confirm("Do you want the password to contain numbers?");
  confirmSpecial = confirm("Do you want the password to contain special characters?");

  var possibleCharacters = [];

  if (confirmUpper) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.alphaUpper.split(""));
  };

  if (confirmLower) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.alphaLower.split(""));
  };

  if (confirmSpecial) {
    possibleCharacters = possibleCharacters.concat(typesOfCharacters.specialChar.split(""));
  };

  if (confirmNum) {
    for (var i = 0; i < 10; i++) {
      possibleCharacters.push(i);
    };
  };

  var password = "";

  for (var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password = password + possibleCharacters[randomIndex];
  };

  return password;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
