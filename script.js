// Assignment Code
var generateBtn = document.querySelector("#generate");
var charatersNum = 0;
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", ".", "?"];
var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getInfo() {

    var getPasswordLength = parseInt(prompt("How long would you like your password to be? 8 - 128 Characters max"));
    if (isNaN(getPasswordLength)) {
        alert("Try Again. Enter a number.");
        getInfo();
    } else if (getPasswordLength < 8 || getPasswordLength > 128) {
        alert("Try Again. Enter number between 8-128.");
        getInfo();
    }
    var askSpecialCharacter = confirm("Do you want special characters in your Password?");
    console.log(getPasswordLength);
}
getInfo(); 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
