function validateSignup() {
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var gender = document.getElementById("gender").value;
  var termsAndConditions =
    document.getElementById("termsAndConditions").checked;

  var errorContainer = document.getElementById("errorContainer");
  errorContainer.innerHTML = "";

  if (name.trim() == "") {
    alert("Name is required");
    return;
  }

  if (password.trim() == "") {
    alert("Password is required");
    return;
  }

  if (confirmPassword.trim() == "") {
    alert("Confirm Password is required");
    return;
  }

  if (password != confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (dateOfBirth.trim() == "") {
    showError("Date of Birth is required");
    return;
  }

  if (gender == "") {
    alert("Please select a gender");
    return;
  }

  if (!termsAndConditions) {
    alert("Please agree to the terms and conditions");
    return;
  }
  alert("Form submitted successfully");
  window.location.replace("../Movies.html");
}

function showError(errorMessage) {
  var errorContainer = document.getElementById("errorContainer");
  var errorElement = document.createElement("p");
  errorElement.innerText = errorMessage;
  errorContainer.appendChild(errorElement);
}
