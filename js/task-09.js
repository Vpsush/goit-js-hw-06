function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", backgroundColorChange);

function backgroundColorChange() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector(".color").textContent = color;
}
