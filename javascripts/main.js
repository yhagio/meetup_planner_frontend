'use strict';

document.getElementById('registerForm').addEventListener('submit', function(e){
  // Check if browser supports validation.
  // i.e. Safari does not support 'required', so use
  // following fallback function
  document.getElementById('errName').innerHTML = "";
  document.getElementById('errEmail').innerHTML = "";
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
      document.getElementById('errPass').innerHTML = '* Password required';
    }
  }

  validateEmail(e.target[1].value, e);
  validPassword(e.target[2].value, e);

}, false);

// Validate Email
function validateEmail(email, e){
  document.getElementById('errEmail').innerHTML = "";
  document.getElementById('registerEamil').removeAttribute('class');
  var errorMsg = "";

  if (!email.match(/^\S+@\S+\.\S+$/)) {
    errorMsg += "* Email must be in valid format <br />";
  }

  if (errorMsg.length > 0) {
    e.preventDefault();
    document.getElementById('errEmail').innerHTML = errorMsg;
    document.getElementById('registerEamil').setAttribute('class', 'errorBorder');
  }
}

// Validate Password
function validPassword(password, e) {
  document.getElementById('errPass').innerHTML = "";
  document.getElementById('registerPassword').removeAttribute('class');
  var errorMsg = "";

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
  }
}


// document.getElementById('registerButton').onclick = function() {
//   document.getElementById('registerName').setCustomValidity('WTF!');
// }
