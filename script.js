document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pizzaForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    handleFormSubmit();
  });
});

function handleFormSubmit() {
  const name = document.getElementById("name");
  const yearOfBirth = document.getElementById("yearOfBirth");
  const usResident = document.getElementById("usResident");
  const zipcode = document.getElementById("zipcode");
  const password = document.getElementById("password");
  const pizzaType = document.getElementById("pizzaType");

  const nameError = document.getElementById("nameError");
  const yearOfBirthError = document.getElementById("yearOfBirthError");
  const zipcodeError = document.getElementById("zipcodeError");
  const passwordError = document.getElementById("passwordError");
  const pizzaTypeError = document.getElementById("pizzaTypeError");

  clearErrors([
    nameError,
    yearOfBirthError,
    zipcodeError,
    passwordError,
    pizzaTypeError,
  ]);

  let valid = true;

  if (name.value.length < 3) {
    showError(nameError, "Name must be at least 3 characters long.");
    valid = false;
  }

  if (yearOfBirth.value < 1901 || yearOfBirth.value > 2099) {
    showError(yearOfBirthError, "Year of Birth must be between 1901 and 2099.");
    valid = false;
  }

  if (usResident.checked && zipcode.value.length !== 5) {
    showError(zipcodeError, "Zipcode must be 5 digits long.");
    valid = false;
  }

  if (password.value.length < 8) {
    showError(passwordError, "Password must be at least 8 characters long.");
    valid = false;
  }

  if (pizzaType.value === "") {
    showError(pizzaTypeError, "Please select a pizza type.");
    valid = false;
  }

  if (valid) {
    showSuccessMessage();
  } else {
    hideSuccessMessage();
  }
}

function showError(element, message) {
  element.textContent = message;
}

function clearErrors(elements) {
  elements.forEach((element) => {
    element.textContent = "";
  });
}

function showSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.remove("hidden");
}

function hideSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.classList.add("hidden");
}
