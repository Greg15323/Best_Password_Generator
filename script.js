var generateBtn = document.querySelector("#generate");

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';
var numbers = '1234567890';

var pwd = '';

var lowerSelection = false;
var upperSelection = false;
var specialSelection = false;
var numberSelection = false;


// Write password to the #password input
function writePassword() {
var confirmLength = '';

while (isNaN(congirmLength) || confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("How long would you like your password to be? 8 - 128 Characters max");
    if (confirmLength === null) {
        break;
    }
}

if (confirmLength) {
    if (confirm("Do you want to include lowercase characters?") == true) {
        lowerSelection = true
    } 
  
    if (confirm("Do you want to include uppercase characters?") == true) {
        upperSelection = true
    }
  
    if (confirm("Do you want to include special characters?") == true) {
        specialSelection = true
    }
  
    if (confirm("Do you want to include numerical characters?") == true) {
        numberSelection = true
  
        if (lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false) {
          alert("At least one character type must be selected")
      }
  
    
}

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
