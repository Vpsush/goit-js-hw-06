const form = document.querySelector(".login-form");
form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please enter both email and password.");
  } else {
    const userDetails = { email: email.value, password: password.value };

    console.log(userDetails);
    event.currentTarget.reset();
  }
}
