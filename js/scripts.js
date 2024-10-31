const passwordTextElement = document.getElementById("password");
const lengthTextElement = document.getElementById("length");
const sliderElement = document.getElementById("slider");
const passwordButtonElement = document.getElementById("pass-button");
const upperCheckElement = document.getElementById("upperCheck");
const lowerCheckElement = document.getElementById("lowerCheck");
const numCheckElement = document.getElementById("numCheck");
const symbolCheckElement = document.getElementById("symbolCheck");

const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numChar = "0123456789";
const symChar = "!@#$%^&*()_+-={}[]:;<>,.?";

passwordButtonElement.disabled = true;

const getSliderValue = () => {
  lengthTextElement.textContent = `LENGTH: ${sliderElement.value}`;
};

sliderElement.addEventListener("input", getSliderValue);

const getRandomPassword = () => {
  let charactersToUse = "";

  upperCheckElement.checked ? (charactersToUse += upperChar) : "";
  lowerCheckElement.checked ? (charactersToUse += lowerChar) : "";
  numCheckElement.checked ? (charactersToUse += numChar) : "";
  symbolCheckElement.checked ? (charactersToUse += symChar) : "";

  let newString = "";
  for (let i = 0; i < sliderElement.value; i++) {
    newString +=
      charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
  }
  passwordTextElement.textContent = newString;
};

passwordButtonElement.addEventListener("click", getRandomPassword);

const setOption = () => {
  if (
    upperCheckElement.checked ||
    lowerCheckElement.checked ||
    numCheckElement.checked ||
    symbolCheckElement.checked
  ) {
    passwordButtonElement.disabled = false;
  } else {
    passwordButtonElement.disabled = true;
  }
};

upperCheckElement.addEventListener("input", setOption);
lowerCheckElement.addEventListener("input", setOption);
numCheckElement.addEventListener("input", setOption);
symbolCheckElement.addEventListener("input", setOption);
