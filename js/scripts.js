const passwordTextElement = document.getElementById("password");
const lengthTextElement = document.getElementById("length");
const sliderElement = document.getElementById("slider");
const passwordButtonElement = document.getElementById("pass-button");
const upperCheckElement = document.getElementById("upperCheck");
const lowerCheckElement = document.getElementById("lowerCheck");
const numCheckElement = document.getElementById("numCheck");
const symbolCheckElement = document.getElementById("symbolCheck");

const characters = {
  upperChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerChar: "abcdefghijklmnopqrstuvwxyz",
  numChar: "0123456789",
  symChar: "!@#$%^&*()_+-={}[]:;<>,.?",
};

const getSliderValue = () => {
  lengthTextElement.textContent = `LENGTH: ${sliderElement.value}`;
};

const getRandomPassword = () => {
  let charactersToUse = "";
  upperCheckElement.checked ? (charactersToUse += characters.upperChar) : "";
  lowerCheckElement.checked ? (charactersToUse += characters.lowerChar) : "";
  numCheckElement.checked ? (charactersToUse += characters.numChar) : "";
  symbolCheckElement.checked ? (charactersToUse += characters.symChar) : "";
  let newString = "";
  for (let i = 0; i < sliderElement.value; i++) {
    newString +=
      charactersToUse[Math.floor(Math.random() * charactersToUse.length)];
  }
  passwordTextElement.textContent = newString;
};

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

sliderElement.addEventListener("input", getSliderValue);
passwordButtonElement.addEventListener("click", getRandomPassword);
upperCheckElement.addEventListener("input", setOption);
lowerCheckElement.addEventListener("input", setOption);
numCheckElement.addEventListener("input", setOption);
symbolCheckElement.addEventListener("input", setOption);
