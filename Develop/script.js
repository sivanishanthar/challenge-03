// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //-----------------------------------
  // Start working code
// User input variables: 
var passwordLen;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);
  //----------------------------------

   // Get user preference
    passwordLen = parseInt(prompt("How many characters would you like your password? Must be between 8 and 128"));
   // First if statement for user validation 
   if (!passwordLen) {
       alert("This needs a number between 8 and 128");
   } else if (passwordLen < 8 || passwordLen > 128) {
       // Check user input
       passwordLen = parseInt(prompt("You must choose between 8 and 128"));

   } else {
       // Ask other options from user
       confirmNumber = confirm("Will this contain numbers?");
       confirmUppercase = confirm("Will this contain Uppercase letters?");
       confirmLowercase = confirm("Will this contain Lowercase letters?");
       confirmCharacter = confirm("Will this contain special characters?");
   };

   // Check user at least choose on criteria
   if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
       choices = alert("You must choose a criteria.");

   }
  
   // Password with special character, number, uppercase, and lowercase
   else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

       choices = character.concat(number, alpha, alpha2);
   }
   // Password with special character, number and uppercase
   else if (confirmCharacter && confirmNumber && confirmUppercase) {
       choices = character.concat(number, alpha2);
   }
   // Password with special character, number and lowercase 
   else if (confirmCharacter && confirmNumber && confirmLowercase) {
       choices = character.concat(number, alpha);
   }
   //Password with special character, lowercase and uppercase 
   else if (confirmCharacter && confirmLowercase && confirmUppercase) {
       choices = character.concat(alpha, alpha2);
   }
   //Password with number, lowercase and uppercase 
   else if (confirmNumber && confirmLowercase && confirmUppercase) {
       choices = number.concat(alpha, alpha2);
   }
   // Password with special character and number
   else if (confirmCharacter && confirmNumber) {
       choices = character.concat(number);
// Password with special character and lowercase 
   } else if (confirmCharacter && confirmLowercase) {
       choices = character.concat(alpha);
//Password with special character and uppercase 
   } else if (confirmCharacter && confirmUppercase) {
       choices = character.concat(alpha2);
   }
   //Password with lowercase and number
   else if (confirmLowercase && confirmNumber) {
       choices = alpha.concat(number);
//Password lowercase and uppercase 
   } else if (confirmLowercase && confirmUppercase) {
       choices = alpha.concat(alpha2);
//Password with number and uppercase 
   } else if (confirmNumber && confirmUppercase) {
       choices = number.concat(alpha2);
   }
   // Password with special character only
   else if (confirmCharacter) {
       choices = character;
   }
   //Password with number only
   else if (confirmNumber) {
       choices = number;
   }
   //Password with lowercase only
   else if (confirmLowercase) {
       choices = alpha;
   }
   // Password with upercase 
   else if (confirmUppercase) {
       choices = space.concat(alpha2);
   };

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
