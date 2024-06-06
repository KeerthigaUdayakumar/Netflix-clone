"use strict";

// EMAILID FORM VALIDATION WITH FLOATIN INPUT
var emailerror = document.getElementById("emailerror");
var emailid = document.getElementById("floatingInput");
var outlineborder = document.getElementById("outline-border");
emailid.addEventListener("focusin", function () {
  var label = document.getElementById("label");
  label.style.fontSize = "13px";
  label.style.marginTop = "-50px";
  emailid.style.border = "2px solid white";
  emailid.style.boxShadow = "none";
  outlineborder.style.border = "2px solid white";
  outlineborder.style.padding = "1px";
  outlineborder.style.borderRadius = "9px";
  emailid.style.borderColor = "white";
});
emailid.addEventListener("input", function () {
  var label = document.getElementById("label");
  label.style.display = "none";

  if (emailid.value != null && emailid.value == "") {
    label.style.display = "inline";
  } else {
    label.style.display = "none";
  }
});
emailid.addEventListener("focusout", function () {
  var label = document.getElementById("label");
  label.style.fontSize = "16px";
  label.style.marginTop = "-40px";
  emailid.style.border = "1px solid white";
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailid.value == false) {
    emailerror.style.color = "red";
    emailerror.style.display = "block";
    emailid.style.borderColor = "red";
    emailerror.innerHTML = "<i class=\"bi bi-x-circle\"></i> Please enter a valid email address or phone\xA0number.";
    outlineborder.style.border = "none";
  } else if (emailid.value.match(validRegex)) {
    emailerror.style.display = "none";
    emailid.style.borderColor = "white";
  } else {
    emailerror.style.color = "red";
    emailerror.style.display = "inline";
    emailid.style.borderColor = "red";
    emailerror.innerText = "Enter valid email address";
    outlineborder.style.border = "none";
  } //   emailid.style.borderColor = "red";
  //   emailerror.style.display = "block";
  //   emailerror.style.color = "red";
  //   emailerror.innerHTML = `<i class="bi bi-x-circle"></i> Please enter a valid email address or phone number.`;

}); // PASSWORD FORM VALIDATION WITH FLOATIN INPUT

var userpassword = document.getElementById("floatingpassword");
var passworderror = document.getElementById("passworderror");
userpassword.addEventListener("focusin", function () {
  var label2 = document.getElementById("label2");
  label2.style.fontSize = "13px";
  label2.style.marginTop = "-50px";
  userpassword.style.border = "2px solid white";
  userpassword.style.boxShadow = "none";
}); // functionn--

function toCharArray(str) {
  var carray = [];

  for (var i = 0; i < str.length; i++) {
    carray.push(str[i]);
  }

  return carray;
}

userpassword.addEventListener("focusout", function () {
  var label2 = document.getElementById("label2");
  label2.style.fontSize = "16px";
  label2.style.marginTop = "-40px";
  userpassword.style.border = "1px solid white";

  if (userpassword.value == false) {
    passworderror.style.color = "red";
    passworderror.style.display = "inline";
    userpassword.style.borderColor = "red";
    passworderror.innerHTML = "<i class=\"bi bi-x-circle\"></i> Your password must contain between 4 and 60 characters.";
  } else {
    passworderror.style.display = "none";
    userpassword.style.borderColor = "white";
    var ar = toCharArray(String(userpassword.value));
    console.log(ar);

    if (ar.length < 4) {
      passworderror.style.color = "red";
      passworderror.style.display = "inline";
      userpassword.style.borderColor = "red";
      passworderror.innerHTML = "<i class=\"bi bi-x-circle\"></i> Your password must contain between 4 and 60 characters.";
    }

    if (ar.length > 60) {
      passworderror.style.color = "red";
      passworderror.style.display = "inline";
      userpassword.style.borderColor = "red";
      passworderror.innerHTML = "<i class=\"bi bi-x-circle\"></i> Your password must contain between 4 and 60 characters.";
    }
  }
});
userpassword.addEventListener("input", function () {
  var label2 = document.getElementById("label2");
  label2.style.display = "none";

  if (userpassword.value != null && userpassword.value == "") {
    label2.style.display = "inline";
  } else {
    label2.style.display = "none";
  }
});
{
  /* <i class="bi bi-eye"></i>
  
  <i class="bi bi-eye-slash"></i> */
}