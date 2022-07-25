
let signedinUsers = JSON.parse(localStorage.getItem("users")) || [];
function hideshow() {
    var x = document.getElementById("loginpassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    let buttontext = document.querySelector(".hidepassword");
    console.log(buttontext);
    if (buttontext.innerText === "Show Password") {
        buttontext.innerText = "hide password";
    } else if (buttontext.innerText === "hide password") {
        buttontext.innerText = "Show Password";
    }
}

//  &#10004; 

function yesorno() {
    let checkboxforsignin = document.querySelector("#checkbox_signin");
    // console.log(checkboxforsignin.innerHTML);
    if (checkboxforsignin.innerHTML == "") {
        let ptrag = document.createElement("p");
        ptrag.innerHTML = "&#10004;";
        checkboxforsignin.append(ptrag);
    } else {
        checkboxforsignin.innerHTML = "";
    }
}

function verifymydetails() {
    // signedinUsers --> arr to acknowledge users.
    let loginemail = document.querySelector("#loginemail").value;
    let loginpassword = document.querySelector("#loginpassword").value;
    if (loginpassword.length == 0 && loginemail.length == 0) {
        alert("Please enter your credentials first then login");
        return;
    }
    for (let i = 0; i < signedinUsers.length; i++) {
        if (signedinUsers[i].email == loginemail && signedinUsers[i].password == loginpassword) {
            alert("signed in successfully");
            window.location = "index.html";
            return;
        }
    }
    alert("worng credentials");
}

function redirecttosignuppage() {
    // window.location.href = "Signup.html";
    window.open('Signup.html', '_blank');
}
