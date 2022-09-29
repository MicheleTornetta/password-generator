//Code to show html form and validate 

function generatePassword() {
  let generatelengthElement = document.getElementById("pwlength");
  let generatelettersElement = document.getElementById("letters");
  let generateupLettersElement = document.getElementById("upLetters");
  let generatenumbersElement = document.getElementById("numbers");
  let generatesymbolsElement = document.getElementById("symbols");

  let length = Number(generatelengthElement.value);
  let likeLowerLetters = generatelettersElement.checked;
  let likeUpperLetters = generateupLettersElement.checked;
  let likeNumbers = generatenumbersElement.checked;
  let likeSymbols = generatesymbolsElement.checked;

  if (!(likeSymbols || likeLowerLetters || likeUpperLetters || likeNumbers)) {
    alert(
      "Please choose at least one type of character to generate a password."
    );
    return;
  }

  //console.log (length);

  //items that can be used for passwords
  const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  const numbers = "0123456789";
  const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //confirm number of characters is between 8 and 128
  let pwlength = "number";

  if (length < 8 || length > 128) {
      alert ("The Length of Password needs to be between 8 & 128, please try again.");
      return;
  } 

  //confirm what items the client wanted to use = true
  let pool = "";
  if (likeSymbols) {
    pool += symbols;
  }
  if (likeLowerLetters) {
    pool += lowerLetters;
  }
  if (likeUpperLetters) {
    pool += upperLetters;
  }
  if (likeNumbers) {
    pool += numbers;
  }

  let passwordGeneration = "";

  for (let counter = 0; counter < length; counter += 1) {
    passwordGeneration += pool[Math.floor(Math.random() * pool.length)];
  }
  // math.floor means to round down the random number that will be between 0 and .999999 and multiply that by the number of items in the variable

  return passwordGeneration;
}

// Start of form for password questions

function showform() {
  let formElement = document.getElementById("form");
  formElement.style.display = "block";
  let formButton = document.getElementById("formcall");
  formButton.classList.add("hidden");
}

let formcall = document.getElementById("formcall");
formcall.addEventListener("click", showform);

function writePassword(event) {
  event.preventDefault();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  if (password !== undefined) {
    passwordText.value = password;
  }
}

let generateBtn = document.getElementById("generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
