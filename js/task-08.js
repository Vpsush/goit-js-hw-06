// const form = document.querySelector(".login-form");
// form.addEventListener("submit", writeIntoForm);

// function writeIntoForm(event) {
//   if ((form.hasAttribute(email) && form.hasAttribute(password)) === "") {
//     alert("All fields must be fill");

//   }
// }

// const form = document.querySelector(".login-form");
// Define the validateForm function to handle form validation
function validateForm(event) {
  // Prevent the form from being submitted to the server
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
