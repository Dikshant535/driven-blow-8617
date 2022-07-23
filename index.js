import navbar from "./components/navbar.js";

import footer from "./components/footer.js";
document.getElementById("header").innerHTML = navbar();

document.getElementById("footer").innerHTML = footer();

document.getElementById("logo").addEventListener("click",function(){
    window.location.href = "index.html"
})

document.getElementById("bag").addEventListener("click",function(){
    window.location.href = "mybasket.html"
})

document.getElementById("fab").addEventListener("click",function(){
    window.location.href = "Loves_list.html"
})




document.getElementById("new").addEventListener("click",function(){
    window.location.href = "pro.html"
})

document.getElementById("brand").addEventListener("click",function(){
    window.location.href = "hair.html"
})

document.getElementById("makeup").addEventListener("click",function(){
    window.location.href = "pro.html"
})
document.getElementById("skincare").addEventListener("click",function(){
    window.location.href = "skin.html"
})

document.getElementById("hair").addEventListener("click",function(){
    window.location.href = "hair.html"
})

document.getElementById("frag").addEventListener("click",function(){
    window.location.href = "pro.html"
})

document.getElementById("tool").addEventListener("click",function(){
    window.location.href = "skin.html"
})

document.getElementById("size").addEventListener("click",function(){
    window.location.href = "hair.html"
})

document.getElementById("bath").addEventListener("click",function(){
    window.location.href = "pro.html"
})

document.getElementById("gift").addEventListener("click",function(){
    window.location.href = "skin.html"
})

document.getElementById("under").addEventListener("click",function(){
    window.location.href = "hair.html"
})

document.getElementById("sale").addEventListener("click",function(){
    window.location.href = "pro.html"
})