//variabel
const form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("myInput");

// pop up modal
const modal = document.querySelector(".modal-bg");
const trigger = document.querySelector(".login-btn");
const closeButton = document.querySelector(".close-btn");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// show hide password
function hidePassword() {
  var pw = document.getElementById("myInput");
  var show = document.getElementById("non-slash");
  var hide = document.getElementById("eye-slash");

  if (pw.type === "password") {
    pw.type = "text";
    show.style.display = "block";
    hide.style.display = "none";
  } else {
    pw.type = "password";
    show.style.display = "none";
    hide.style.display = "block";
  }
}

// validation form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

form.addEventListener("change", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password is required");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-element error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-element success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
