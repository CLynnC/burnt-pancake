// Assignment Code
//var generateBtn = document.querySelector("#generate");
//var userNum = userNum;
var userNum = passwordLength;
var randomCharacters = ["~","`","!", "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",];
var allCharacters = ['@', '%', '+', '/', '!', '#', '?', '0', '1', '2', '3', '4', 'a', 'b', 'c', 'd', 'e'];
var passwordLength = password.length;


function initiateQuery() {
  var userNum = window.prompt("Please enter a password length between 8-128 characters.", "password length?");
  var userChoice = window.confirm("Would you like to include any capital letters?", "");

  var userChoice2 = window.confirm("Would you like to include any special characters?");
 return generatePassword();}



function generatePassword() {
  if (initiateQuery.userChoice === true) {
    password.toUpperCase;
  }  else {
    password.toLowerCase;
    }
  
  if (initiateQuery.userChoice2 === true) {
    password = (password + randomCharacters.password.length);} 
 return randomizeUserChoice();}

function randomizeUserChoice(randomCharacters , allCharacters) {
	for (var i = 0; i < allCharacters.password.length; i++) {
	    tempPassword = allCharacters[Math.floor(Math.random() * allCharacters.length)];
		finalPassword.push(tempPassword);
	}
}
// console.log('test console message');
// vars
var finalPassword = [];
var tempPassword = password;

writePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 // function writePassword() {
 //   var password = generatePassword();
 //   var passwordText = document.querySelector("#password");
}//functions
//function randomizeChars(allCharacters) {
	//for (var i = 0; i < allCharacters.length; i++) {
//	    tempPassword = allCharacters[Math.floor(Math.random() * allCharacters.length)];
//		finalPassword.push(tempPassword);
//	}
//}
//call function
//randomizeChars(allCharacters);
//print password to console
console.log(password);



if (password === null) {
    randomCharacters();
  //generate a random password...//
}
  else {
    generatePassword();
    //password =
  }

  function randomCharacters(randomCharacters , allCharacters) {
    for (var i = 0; i < allCharacters.length; i++) {
        tempPassword = allCharacters[Math.floor(Math.random() * allCharacters.length)];
      finalPassword.push(tempPassword);
    }}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

btn.addEventListener("click", initiateQuery);
