function validateForm(event) {
  event.preventDefault();

  // Get the values of the email and password fields
  const emailInput = document.getElementsByName("email")[0];
  console.log(document.getElementsByName("email"));
  const emailValue = emailInput.value;
  const passwordInput = document.getElementsByName("password")[0];
  const passwordValue = passwordInput.value;

  if (emailValue === "" || passwordValue === "") {
    alert("Please enter both email and password.");
  } else {
    const obectForm = { emailValue, passwordValue };
    console.log(obectForm);
  }
}
const form = document.querySelector(".login-form");
form.onsubmit = validateForm;
