const refs = {
  input: document.querySelector("#name-input"),
  nameUser: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
  refs.nameUser.textContent = event.currentTarget.value;

  if (event.currentTarget.value === " ")
    return (nameUser.textContent = "Anonymous");
});
