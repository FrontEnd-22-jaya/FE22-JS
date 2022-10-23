//variabel
const form = document.getElementById("form");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("myInput");
let password2 = document.getElementById("myInput1");
let register = document.getElementById("register");

// pop up modal
const modal = document.querySelector(".modal-bg");
const trigger = document.querySelector(".regis-btn");
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

// show hide re-enter password
function hidePassword1() {
  var pw = document.getElementById("myInput1");
  var show = document.getElementById("non1-slash");
  var hide = document.getElementById("eye1-slash");

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
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone cannot be blank");
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phone, "Phone must contains only number!");
  } else {
    setSuccessFor(phone);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Confirm Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match!");
  } else {
    setSuccessFor(password2);
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

function isPhone(phone) {
  return /[0-9]$/.test(phone);
}

// fetch data to API

async function registerAccount(data) {
  try {
    let result = await fetch("https://634f64bddf22c2af7b504acd.mockapi.io/jobsidian/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    console.log("Congratulations! Your account has been successfully created!", result);
  } catch (error) {
    console.log("Failed!");
  }
}

register.addEventListener("click", (event) => {
  event.preventDefault();

  let user_regis = {
    email: email.value,
    phone: phone.value,
    password: password.value,
  };
  registerAccount(user_regis);
});
