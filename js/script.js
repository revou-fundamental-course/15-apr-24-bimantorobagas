// script.js
const resultField = document.querySelector("#convert-result");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  resultField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToTemperature();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertToTemperature() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "celcius") {
      const CelciusToFahrenheit = (inputValue * (9 / 5)) + 32;
      resultField.innerHTML = `${CelciusToFahrenheit.toFixed(3)} &deg;F`;
    } else if (tempType.value === "fahrenheit") {
      const FahrenheitToCelcius = ((inputValue - 32 ) * (5 / 9));
      resultField.innerHTML = `${FahrenheitToCelcius.toFixed(3)} &deg;C`;
    }
  }, 1200)
}