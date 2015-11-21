'use strict';

// function checkInput(type) {
//   var input = document.createElement("input");
//   input.setAttribute("type", type);
//   return input.type == type;
// }
// 

document.getElementById('eventCreationForm').addEventListener('submit', function(e){
  // Check if browser supports validation.
  // i.e. Safari does not support 'required', so use
  // following fallback function
  document.getElementById('errEventName').innerHTML = "";
  document.getElementById('errEventType').innerHTML = "";
  document.getElementById('errEventHost').innerHTML = "";
  document.getElementById('errEventStartDate').innerHTML = "";
  document.getElementById('errEventEndDate').innerHTML = "";

  if (!e.target.checkValidity()) {
    if(e.target[0].value.length === 0){
      e.preventDefault();
      document.getElementById('errEventName').innerHTML = '* Event Name required';
    } else if(e.target[1].value.length === 0){
      e.preventDefault();
      document.getElementById('errEventType').innerHTML = '* Event Type required';
    } else if(e.target[2].value.length === 0){
      e.preventDefault();
      document.getElementById('errEventHost').innerHTML = '* Event Host required';
    } else if (e.target[3].value.length === 0){
      e.preventDefault();
      document.getElementById('errEventStartDate').innerHTML = '* Event Start Date/Time required';
    } else if (e.target[4].value.length === 0){
      e.preventDefault();
      document.getElementById('errEventEndDate').innerHTML = '* Event End Date/Time required';
    }
  }

}, false);
