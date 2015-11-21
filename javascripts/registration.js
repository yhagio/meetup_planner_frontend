'use strict';

// Check Name
function checkName(){

  document.getElementById('errName').innerHTML = "";
  document.getElementById('registerName').removeAttribute('class');
  var name = document.getElementById('registerName').value.trim();
  var errorMsg = "";

  if(name.length < 1) {
    errorMsg += '* Name required';
  }

  if(name.length > 50){
    errorMsg += '* Name should be shorter than 50';
  }

  if(errorMsg.length > 0){
    document.getElementById('errName').innerHTML = errorMsg;
    document.getElementById('registerName').setAttribute('class', 'errorBorder');
  }
}

// Validate Email
function checkEmail(emailInput, e){
  var email = "";

  if(emailInput) {
    email = emailInput;
  } else {
    email = document.getElementById('registerEmail').value.trim();
  }

  document.getElementById('errEmail').innerHTML = "";
  document.getElementById('registerEmail').removeAttribute('class');
  var errorMsg = "";

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    errorMsg += "* Email must be in valid format <br />";
  }

  if (errorMsg.length > 0) {
    if(e){
      e.preventDefault();
    }
    document.getElementById('errEmail').innerHTML = errorMsg;
    document.getElementById('registerEmail').setAttribute('class', 'errorBorder');
  }
}

// Validate Age
function checkAge(ageInput, e){
  var age = "";

  if(ageInput) {
    age = ageInput;
  } else {
    age = document.getElementById('registerAge').value.trim();
  }

  document.getElementById('errAge').innerHTML = "";
  document.getElementById('registerAge').removeAttribute('class');
  var errorMsg = "";

  if ((isNaN(age)) || (age.length == 0)){
    errorMsg += '* Age input must be number <br />';
  }

  if((age < 0)||(age > 200)){
    errorMsg += '* Age must be between 0 - 200 <br />';
  }

  if (errorMsg.length > 0) {
    if(e){
      e.preventDefault();
    }
    document.getElementById('errAge').innerHTML = errorMsg;
    document.getElementById('registerAge').setAttribute('class', 'errorBorder');
  }

}

// Check Password
function checkPassword(passwordInput, e) {
  var password = "";

  if(passwordInput) {
    password = passwordInput;
  } else {
    password = document.getElementById('registerPassword').value.trim();
  }

  document.getElementById('errPass').innerHTML = "";
  document.getElementById('registerPassword').removeAttribute('class');
  var errorMsg = "";

  if (password.length > 30) {
    errorMsg += "* Must be fewer than 31 chars <br />";
  }

  if (password.length < 8) {
    errorMsg += "* Must be longer than 7 chars <br />";
  }

  if (!password.match(/[\!\@\#\$\%\^\&\*]/g)) {
    errorMsg += "* Missing a symbol(! @ # $ % ^ & *)<br />";
  }

  if (!password.match(/\d/g)) {
    errorMsg += "* Missing a number <br />";
  }

  if (!password.match(/[a-z]/g)) {
    errorMsg += "* Missing a lowercase letter <br />";
  }

  if (!password.match(/[A-Z]/g)) {
    errorMsg += "* Missing an uppercase letter";
  }

  if (errorMsg.length > 0) {
    if(e){
      e.preventDefault();
    }
    document.getElementById('errPass').innerHTML = errorMsg;
    document.getElementById('registerPassword').setAttribute('class', 'errorBorder');
  }
}


document.getElementById('registerForm').addEventListener('submit', function(e){
  // Check if browser supports validation.
  // i.e. Safari does not support 'required', so use
  // following fallback function
  document.getElementById('errName').innerHTML = "";
  document.getElementById('errEmail').innerHTML = "";
  document.getElementById('errAge').innerHTML = "";
  document.getElementById('errPass').innerHTML = "";
  if (!e.target.checkValidity()) {
    if(e.target[0].value.length === 0){
      e.preventDefault();
      document.getElementById('errName').innerHTML = '* Name required';
    } else if(e.target[1].value.length === 0){
      e.preventDefault();
      document.getElementById('errEmail').innerHTML = '* Email required';
    } else if(e.target[2].value.length === 0){
      e.preventDefault();
      document.getElementById('errAge').innerHTML = '* Age required';
    } else if(e.target[3].value.length === 0){
      e.preventDefault();
      document.getElementById('errPass').innerHTML = '* Password required';
    }
  }

  checkEmail(e.target[1].value, e);
  checkAge(e.target[2].value, e);
  checkPassword(e.target[3].value, e);

}, false);
