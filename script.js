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

while (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
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

var characters = '';
characters += (lowerSelection ? lower : '');
characters += (upperSelection ? upper : '');
characters += (specialSelection ? special : '');
characters += (numberSelection ? numbers : '');

 pwd = password(confirmLength, characters);

 document.getElementById("password").innerHTML = pwd;

}

function password(l, characters) {
    var pwd = '';
    for (var i = 0; i < l; ++i) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    return pwd;
}

 var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);