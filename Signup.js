

let arr = JSON.parse(localStorage.getItem("users")) || [];
console.log(arr);
function storeuserdata(){
    event.preventDefault();
    let obj = {
        firstname : document.getElementById("firstname").value,
        lastname : document.getElementById("lastname").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        phonenumber : document.getElementById("phonenumber").value,
        month : document.getElementById("month").value,
        day : document.getElementById("day").value,
        zipcode : document.getElementById("zipcode").value
    };
    let validation = false;
    for(let i = 0; i<arr.length; i++) {
        if(arr[i].email === obj.email){
            validation = true;
            break;
        }
    }
    if(validation == true) {
        alert("with this credentials user already exits please check your credentials");
    }else{
        alert("signed up successfully");
        window.location = "index.html";
        arr.push(obj);
        localStorage.setItem("users",JSON.stringify(arr));
    }
}



function yesorno(){
    event.preventDefault();
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