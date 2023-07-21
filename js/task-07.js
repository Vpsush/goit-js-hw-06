const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", makeBiggerSize);
function makeBiggerSize(input) {
  span.style.fontSize = input.currentTarget.value + "px";
}
