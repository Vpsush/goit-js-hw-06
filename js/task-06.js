const input = document.querySelector("#validation-input");
// const inputLength = article.dataset.indexNumber;

input.onblur = function () {
  console.log(input.value.length);
  if (
    Number(input.getAttribute("data-length")) === Number(input.value.length)
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};
