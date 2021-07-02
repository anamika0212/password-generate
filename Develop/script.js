// Assignment code here
//User input variables

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;
//Function used to determine the length of the password
function determineLength(){
  passwordLength = window.prompt("How many characters would you like your password to be(between 8-128 characters):? ");
  if(passwordLength < 8){
    window.alert("Password length must be a number between 8-128 characters");
    determineLength();
  }else if (passwordLength>128){
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  }else if (isNaN(passwordLength)){
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  }else{
  alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
  }
  return passwordLength;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Function used to take all the input from the previous functions and generate a password using a random number generator and 
 //the charAt method 
 function generatePassword(){
   determineLength();
   console.log(passwordLength);
 }

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
