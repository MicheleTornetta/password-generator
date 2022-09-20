//tips:  Look at random numbers, alerts, bootstrap model, can use forms, have to get user input (4 ways - form or alerts and confirms)
//will need 2 for loops
//get booliean

let likeSymbols = confirm("Do you want symbols?"); //will get you a true/false
let likeLetters = confirm("Do you want letters?"); //will get a true/false
let likeNumbers = confirm("Do you want numbers?"); //will get a true/false
let length = Number(
  prompt(
    "How long would you like your password to be?  Pick a number between 8 and 128."
  )
);
while (isNaN(length) || length < 8 || length > 128) {
  //3 conditions to ensure number entered, and is between 8 and 128
  length = Number(
    prompt("Try again, you need to pick a number between 8 and 128.")
  ); //keep running until they get it right
}

//console.log (length);

//items that can be used for passwords
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//confirm what items the client wanted to use = true
let pool = "";
if (likeSymbols) {
  pool += symbols;
}
if (likeLetters) {
  pool += letters;
}
if (likeNumbers) {
  pool += numbers;
}

console.log (pool)

for (let counter = 0; counter < length; counter += 1) {
  
}

pool[Math.floor(Math.random() * pool.length)]; 


// math.floor means to round down the random number that will be between 0 and .999999 and multiply that by the number of items in the variable

/*
    //or use a form (above Generate Password)

//need a random number generator
 let myName

//Object characters that can be used

function random



// Assignment Code


let generateBtn = document.getElementById("generate");
// generateBtn.innerText = 'Helloooo!';

console.log(generateBtn.innerText);

// Write password to the #password input
function writePassword() {
  let password = generatePassword(Length);
  
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/
