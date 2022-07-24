import navbar from "./components/navbar.js";

import footer from "./components/footer.js";
document.getElementById("header").innerHTML = navbar();

document.getElementById("footer").innerHTML = footer();

document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    alert("<------Order Conformed------>");
    window.location.href="index.html";
});

let  totalsum=JSON.parse(localStorage.getItem("totalvalue"));
document.getElementById("tocheck").innerText = `Total Cart Value :  $ ${totalsum}`;