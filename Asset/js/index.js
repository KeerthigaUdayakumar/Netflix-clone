var  emailid= document.getElementById("floatingInput")
var  emailerror= document.getElementById("emailerror")
var input2 = document.getElementById("floatingInput1")
var outlineborder1 = document.getElementById("outline-border1")

emailid.addEventListener("focusin", () => {
    var label = document.getElementById("label")
    label.style.fontSize = "13px"
    label.style.marginTop = "-50px"
    emailid.style.border = "2px solid white"
    emailid.style.boxShadow = "none"


    outlineborder1.style.border = "2px solid white"
    outlineborder1.style.padding = "1px"
    outlineborder1.style.borderRadius = "9px"
    emailid.style.borderColor = "white"

})
emailid.addEventListener("focusout", () => {
    var label = document.getElementById("label")
    label.style.fontSize = "16px"
    label.style.marginTop = "-40px"
    emailid.style.border = "1px solid white"

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailid.value == false) {
        emailerror.style.color = "red"
        emailerror.style.display = "block"
        emailid.style.borderColor = "red"
        emailerror.innerHTML = `<p style="font-size:15px;"><i class="bi bi-x-circle"></i> Email is required.</p>`;
        outlineborder1.style.border = "none"

    
    }
    
    else if (emailid.value.match(validRegex)) {
    
        emailerror.style.display = "none"
        emailid.style.borderColor = "white"
    
    } else {
    
        emailerror.style.color = "red"
        emailerror.style.display = "inline"
        emailid.style.borderColor = "red"
        emailerror.innerText = "Enter valid email address"
        outlineborder.style.border = "none"
    
        alert("Invalid email address!");
        console.log("invalid");
    }
})

emailid.addEventListener("input", () => {
    var label = document.getElementById("label")
    label.style.display = "none"

    if (emailid.value != null && emailid.value == "") {
        label.style.display = "inline"

    } else {
        label.style.display = "none";

    }
})

input2.addEventListener("focusin", () => {
    var label2 = document.getElementById("label2")
    label2.style.fontSize = "13px"
    label2.style.marginTop = "-50px"
    input2.style.border = "2px solid white"
    input2.style.boxShadow = "none"

})
input2.addEventListener("focusout", () => {
    var label2 = document.getElementById("label2")
    label2.style.fontSize = "16px"
    label2.style.marginTop = "-40px"
    input2.style.border = "1px solid white"
})

input2.addEventListener("input", () => {
    var label2 = document.getElementById("label2")
    label2.style.display = "none"

    if (input2.value != null && input2.value == "") {
        label2.style.display = "inline"

    } else {
        label2.style.display = "none";

    }
})




var selectbox = document.getElementById("selct")
var outlineborder = document.getElementById("outline-border")


selectbox.addEventListener("focusin", () => {
    outlineborder.style.border = "2px solid white"
    outlineborder.style.padding = "1px"
    outlineborder.style.borderRadius = "9px"
    selectbox.style.borderColor = "white"

})


selectbox.addEventListener("focusout", () => {
    outlineborder.style.border = "none"
    outlineborder.style.padding = "none"
    outlineborder.style.borderRadius = "none"

})

