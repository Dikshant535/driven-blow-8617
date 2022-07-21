
let signedinUsers = JSON.parse(localStorage.getItem("users")) || [];
console.log(signedinUsers);
function hideshow() {
    var x = document.getElementById("loginpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    let buttontext = document.querySelector(".hidepassword");
    console.log(buttontext);
    if(buttontext.innerText === "Show Password") {
        buttontext.innerText = "hide password";
    }else if(buttontext.innerText === "hide password"){
        buttontext.innerText = "Show Password";
    }
}

//  &#10004; 

function yesorno(){
    let checkboxforsignin = document.querySelector("#checkbox_signin");
    // console.log(checkboxforsignin.innerHTML);
    if(checkboxforsignin.innerHTML == ""){
        let ptrag = document.createElement("p");
        ptrag.innerHTML = "&#10004;"; 
        checkboxforsignin.append(ptrag);
    }else{
        checkboxforsignin.innerHTML = "";
    }
}

function verifymydetails(){
    console.log("inside");
    // signedinUsers --> arr to acknowledge users.
    let loginemail = document.querySelector("#loginemail").value;
    let loginpassword = document.querySelector("#loginpassword").value;
    for(let i=0; i<signedinUsers.length; i++){
        if(signedinUsers[i].email == loginemail && signedinUsers[i].password == loginpassword){
            window.location = "https://www.sephora.com";
            return;
        }
    }
    alert("worng credentials");
}

function redirecttosignuppage(){
    // window.location.href = "Signup.html";
    window.open('Signup.html', '_blank');
}
