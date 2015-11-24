"use strict";function checkName(e){resetInnerHTML("errName"),document.getElementById("registerName").removeAttribute("class");var r=document.getElementById("registerName").value.trim(),t="";r.length<1&&(t+="* Name required"),r.length>50&&(t+="* Name should be shorter than 50"),t.length>0&&(e&&e.preventDefault(),document.getElementById("errName").innerHTML=t,setAttribute("registerName","class","errorBorder"))}function checkEmail(e){var r="";r=document.getElementById("registerEmail").value.trim(),resetInnerHTML("errEmail"),document.getElementById("registerEmail").removeAttribute("class");var t="";r.match(/^\S+@\S+\.\S+$/)||(t+="* Email must be in valid format <br />"),t.length>0&&(e&&e.preventDefault(),document.getElementById("errEmail").innerHTML=t,setAttribute("registerEmail","class","errorBorder"))}function checkAge(e){var r="";r=document.getElementById("registerAge").value.trim(),resetInnerHTML("errAge"),document.getElementById("registerAge").removeAttribute("class");var t="";(isNaN(r)||0==r.length)&&(t+="* Age input must be number <br />"),(0>r||r>200)&&(t+="* Age must be between 0 - 200 <br />"),t.length>0&&(e&&e.preventDefault(),document.getElementById("errAge").innerHTML=t,setAttribute("registerAge","class","errorBorder"))}function checkPassword(e){var r="";r=document.getElementById("registerPassword").value.trim(),resetInnerHTML("errPass"),document.getElementById("registerPassword").removeAttribute("class");var t="";r.length>30&&(t+="* Must be fewer than 31 chars <br />"),r.length<8&&(t+="* Must be longer than 7 chars <br />"),r.match(/[\!\@\#\$\%\^\&\*]/g)||(t+="* Missing a symbol(! @ # $ % ^ & *)<br />"),r.match(/\d/g)||(t+="* Missing a number <br />"),r.match(/[a-z]/g)||(t+="* Missing a lowercase letter <br />"),r.match(/[A-Z]/g)||(t+="* Missing an uppercase letter"),t.length>0&&(e&&e.preventDefault(),document.getElementById("errPass").innerHTML=t,setAttribute("registerPassword","class","errorBorder"))}function validationFallbackOnRegister(e){resetInnerHTML("errName"),resetInnerHTML("errEmail"),resetInnerHTML("errAge"),resetInnerHTML("errPass"),e.target.checkValidity()||(0===e.target[0].value.length&&(e.preventDefault(),document.getElementById("errName").innerHTML="* Name required"),0===e.target[1].value.length&&(e.preventDefault(),document.getElementById("errEmail").innerHTML="* Email required"),0===e.target[2].value.length&&(e.preventDefault(),document.getElementById("errAge").innerHTML="* Age required"),0===e.target[3].value.length&&(e.preventDefault(),document.getElementById("errPass").innerHTML="* Password required"))}document.getElementById("registerForm").addEventListener("submit",function(e){validationFallbackOnRegister(e),checkName(e),checkEmail(e),checkAge(e),checkPassword(e)},!1);