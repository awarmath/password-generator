// Assignment code here
// define all character types
lower = ["a, b, c, d"];
upper = ["A, B, C, D"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!@#$%^&*()[]{}<>,./?"];

var enter;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmCharacter;

function generatePassword() {
  // begin prompts for number of characters
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Alert if user chooses anything outside of 8 and 128
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Prompts for lowercase, uppercase, number and characters
      confirmLowercase = confirm("Would you like Lowercase letters?");
      confirmUppercase = confirm("Would you like Uppercase letters?");
      confirmNumber = confirm("Would you like Numbers?");
      confirmCharacter = confirm("Would you like Special Characters?");
  };
      // Error message if 4 cancels
      if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmCharacter) {
        choices = alert("You must choose a criteria!");

    }
    // If all 4 options are chosen
    else if (confirmLowercase && confirmUppercase && confirmNumber && confirmCharacter) {

        choices = lower.concat(upper, number, character);
    }
    // If 3 options are chosen
    else if (confirmLowercase && confirmUppercase && confirmNumber) {
        choices = lower.concat(upper, number);
    }
    else if (confirmLowercase && confirmUppercase && confirmCharacter) {
        choices = lower.concat(upper, character);
    }
    else if (confirmLowercase && confirmNumber && confirmCharacter) {
        choices = lower.concat(number, character);
    }
    else if (confirmUppercase && confirmNumber && confirmCharacter) {
        choices = upper.concat(number, character);
    }
    // If 2 options are chosen
    else if (confirmLowercase && confirmUppercase) {
        choices = lower.concat(upper);

    } else if (confirmLowercase && confirmNumber) {
        choices = lower.concat(number);

    } else if (confirmLowercase && confirmCharacter) {
        choices = lower.concat(character);
    }
    else if (confirmUppercase && confirmNumber) {
        choices = upper.concat(number);

    } else if (confirmUppercase && confirmCharacter) {
        choices = upper.concat(character);

    } else if (confirmNumber && confirmCharacter) {
        choices = number.concat(character);
    }
    // If 1 option is chosen
    else if (confirmLowercase) {
        choices = lower;
    }
    else if (confirmUppercase) {
        choices = upper;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmCharacter) {
      choices = character;
  
    };

}


// Place password into textbox
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
