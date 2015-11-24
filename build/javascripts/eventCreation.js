"use strict";function checkEventName(e){resetInnerHTML("errEventName"),document.getElementById("eventName").removeAttribute("class");var t=document.getElementById("eventName").value.trim(),n="";t.length<1&&(n+="* Event name required"),t.length>50&&(n+="* Event name should be shorter than 50"),n.length>0&&(e&&e.preventDefault(),document.getElementById("errEventName").innerHTML=n,setAttribute("eventName","class","errorBorder"))}function checkEventType(e){resetInnerHTML("errEventType"),document.getElementById("eventType").removeAttribute("class");var t=document.getElementById("eventType").value.trim(),n="",r=["Birthday","Conference","Ceremony","Educational","Leisure","Networking","Party","Social","Sports","Others"];-1===r.indexOf(t)&&(n+="* Select an event type"),n.length>0&&(e&&e.preventDefault(),document.getElementById("errEventType").innerHTML=n,setAttribute("eventType","class","errorBorder"))}function checkEventHost(e){resetInnerHTML("errEventHost"),document.getElementById("eventHost").removeAttribute("class");var t=document.getElementById("eventHost").value.trim(),n="";t.length<1&&(n+="* Event host required"),t.length>50&&(n+="* Event host should be shorter than 50"),n.length>0&&(e&&e.preventDefault(),document.getElementById("errEventHost").innerHTML=n,setAttribute("eventHost","class","errorBorder"))}function checkEventStartDate(e){resetInnerHTML("errEventStartDate"),document.getElementById("startDate").removeAttribute("class");var t=document.getElementById("startDate").value.trim(),n="";t.length<1&&(n+="* Event Start Date required"),n.length>0&&(e&&e.preventDefault(),document.getElementById("errEventStartDate").innerHTML=n,setAttribute("startDate","class","errorBorder"))}function checkEventEndDate(e){resetInnerHTML("errEventEndDate"),document.getElementById("endDate").removeAttribute("class");var t=document.getElementById("endDate").value.trim(),n="";t.length<1&&(n+="* Event End Date required"),n.length>0&&(e&&e.preventDefault(),document.getElementById("errEventEndDate").innerHTML=n,setAttribute("endDate","class","errorBorder"))}function checkEventLocation(e){resetInnerHTML("errEventLocation"),document.getElementById("location").removeAttribute("class");var t=document.getElementById("location").value.trim(),n="";t.length<1&&(n+="* Event location required"),t.length>100&&(n+="* Event location should be shorter than 100"),n.length>0&&(e&&e.preventDefault(),document.getElementById("errEventLocation").innerHTML=n,setAttribute("location","class","errorBorder"))}function checkMessage(e){resetInnerHTML("errMessage"),document.getElementById("message").removeAttribute("class");var t=document.getElementById("message").value.trim(),n="";t.length>1e3&&(n+="* Message should be shorter than 1000 chars"),n.length>0&&(e&&e.preventDefault(),document.getElementById("errMessage").innerHTML=n,setAttribute("message","class","errorBorder"))}function validationFallbackOnCreate(e){resetInnerHTML("errEventName"),resetInnerHTML("errEventType"),resetInnerHTML("errEventHost"),resetInnerHTML("errEventStartDate"),resetInnerHTML("errEventEndDate"),resetInnerHTML("errEventLocation"),e.target.checkValidity()||(0===e.target[0].value.length&&(e.preventDefault(),document.getElementById("errEventName").innerHTML="* Event Name required"),0===e.target[1].value.length&&(e.preventDefault(),document.getElementById("errEventType").innerHTML="* Event Type required"),0===e.target[2].value.length&&(e.preventDefault(),document.getElementById("errEventHost").innerHTML="* Event Host required"),0===e.target[3].value.length&&(e.preventDefault(),document.getElementById("errEventStartDate").innerHTML="* Event Start Date/Time required"),0===e.target[4].value.length&&(e.preventDefault(),document.getElementById("errEventEndDate").innerHTML="* Event End Date/Time required"),0===e.target[5].value.length&&(e.preventDefault(),document.getElementById("errEventLocation").innerHTML="* Event Location required"))}supportThisTypeAttribute("datetime-local")||(setAttribute("startDate","type","text"),setAttribute("startDate","data-date-format","yyyy-mm-dd hh:ii"),$("#startDate").datetimepicker(),setAttribute("endDate","type","text"),setAttribute("endDate","type","text"),$("#endDate").datetimepicker()),document.getElementById("eventCreationForm").addEventListener("submit",function(e){validationFallbackOnCreate(e),checkEventName(e),checkEventType(e),checkEventHost(e),checkEventStartDate(e),checkEventEndDate(e),checkEventLocation(e),checkMessage(e)},!1);