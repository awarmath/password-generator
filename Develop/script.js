// Assignment code here
function genRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}
function genRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}
function genRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
function genRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(genRandomLower());
console.log(genRandomUpper());
console.log(genRandomNumber());
console.log(genRandomSymbol());


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
