let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

const clickOndecrementBtn = (event) => {
  counterValue -= 1;
  console.log((valueRef.textContent = counterValue));
};

const clickOnincrementBtn = (event) => {
  counterValue += 1;
  console.log((valueRef.textContent = counterValue));
};

decrementBtn.addEventListener("click", clickOndecrementBtn);
incrementBtn.addEventListener("click", clickOnincrementBtn);
