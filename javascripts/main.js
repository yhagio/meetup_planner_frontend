'use strict';

function elementSupportsAttribute(element, attribute) {
  var test = document.createElement(element);
  if (attribute in test) {
    return true;
  } else {
    return false;
  }
};

function checkInput(type) {
  var input = document.createElement("input");
  input.setAttribute("type", type);
  return input.type == type;
}

/**
 * Check the form values to make sure user fills the
 * inputs before submit it, otherwise disable the submit button
 **/

var cansubmit = true;

function checkRegisterForm() {

  var form = document.forms['registrationForm'].elements;

  // validateEmail(form[1].value);
  // validPassword(form[2].value);

  for (var i = 0; i < form.length - 1; i++) {
    if (form[i].value.length == 0) {
      cansubmit = false;
    }
  }

  // if (cansubmit) {
  //   document.getElementById('registerButton').removeAttribute('disabled');
  //   document.getElementById('registerButton').setAttribute('class', 'canSubmit');
  //   document.getElementById('registerButton').innerHTML = 'Register';
  // } else {
  //   document.getElementById('registerButton').setAttribute('disabled', true);
  //   document.getElementById('registerButton').removeAttribute('class');
  //   document.getElementById('registerButton').innerHTML = 'Fill Up Form';
  // }

  // if(!elementSupportsAttribute('input', 'required')){
  //   console.log('no required');
  // };
}

document.getElementById('registerForm').addEventListener('submit', function(e){
  // Check if 'required' attribute is supported
  // If not supported, use this fallback function
  document.getElementById('errName').innerHTML = "";
  document.getElementById('errName').innerHTML = "";
  document.getElementById('errPass').innerHTML = "";
  if (!e.target.checkValidity()) {
    if(e.target[0].value.length === 0){
      e.preventDefault();
      document.getElementById('errName').innerHTML = 'Name required';
    } else if(e.target[1].value.length === 0){
      e.preventDefault();
      document.getElementById('errEmail').innerHTML = 'Email required';
    } else if(e.target[2].value.length === 0){
      e.preventDefault();
      document.getElementById('errPass').innerHTML = 'Password required';
    }
  }


  var form = document.forms['registrationForm'].elements;

  validateEmail(e.target[1].value, e);
  validPassword(e.target[2].value, e);

}, false);

// Validate Email
function validateEmail(email, e){
  document.getElementById('errEmail').innerHTML = "";
  document.getElementById('registerEamil').removeAttribute('class');
  var errorMsg = "";

  cansubmit = true;

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    errorMsg += "* Email must be in valid format <br />";
  }

  if (errorMsg.length > 0) {
    e.preventDefault();
    document.getElementById('errEmail').innerHTML = errorMsg;
    document.getElementById('registerEamil').setAttribute('class', 'errorBorder');
    cansubmit = false;
  }
}

// Validate Password
function validPassword(password, e) {
  document.getElementById('errPass').innerHTML = "";
  document.getElementById('registerPassword').removeAttribute('class');
  var errorMsg = "";

  cansubmit = true;

  if (password.length > 30) {
    errorMsg += "* Must be fewer than 31 characters <br />";
  }

  if (password.length < 8) {
    errorMsg += "* Must be longer than 7 characters <br />";
  }

  if (!password.match(/[\!\@\#\$\%\^\&\*]/g)) {
    errorMsg += "* missing a symbol (!, @, #, $, %, ^, &, *) <br />";
  }

  if (!password.match(/\d/g)) {
    errorMsg += "* missing a number <br />";
  }

  if (!password.match(/[a-z]/g)) {
    errorMsg += "* missing a lowercase letter <br />";
  }

  if (!password.match(/[A-Z]/g)) {
    errorMsg += "* missing an uppercase letter";
  }

  if (errorMsg.length > 0) {
    e.preventDefault();
    document.getElementById('errPass').innerHTML = errorMsg;
    document.getElementById('registerPassword').setAttribute('class', 'errorBorder');
    cansubmit = false;
  }
}


// document.getElementById('registerButton').onclick = function() {
//   document.getElementById('registerName').setCustomValidity('WTF!');
// }
