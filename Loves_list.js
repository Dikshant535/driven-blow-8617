// <---this is to test loves list --->


// let obj = {
//     "image": "https://www.sephora.com/productimages/sku/s2407286-main-zoom.jpg?imwidth=230",
//     "name": "Charlotte Tilbury",
//     "title": "Mini Hollywood Flawless Filter",
//     "price": 345,
//     "rating": "\u2605 \u2605 \u2605 \u2605 \u2606",
//     "desc": "4 Colors",
//     "id": 5
// }

let arr = JSON.parse(localStorage.getItem("addfav")) || [];

let cartsproduct = JSON.parse(localStorage.getItem("addtocart")) || [];

function heart() {
    return `
    <i class="fa fa-heart" style="font-size:28px;color:red"></i>`;
}

function biolerplate() {
    return `
    <div id="temp">
            <img src="https://www.sephora.com/img/ufe/loveless.svg" alt="image_lost">
            <p id="loves_list_details">You haven’t added any product to your Loves list.</p>
            <p id="howToAddIntoLovesList">Collect all your favorite and must-try products by clicking on the <img src="./Munna's_project_images/icons8-heart-50.png" alt="heart_image"> while you shop.</p>
        </div>`;
}

function sorting() {
    return `
    <select name="sort" onchange="sortit()" id="sortingMethod">
        <option value="Recently Added">Recently Added</option>
        <option value="atoz">Brand name A-Z</option>
        <option value="ztoa">Brand name Z-A</option>
        <option value="htl">Price high to low</option>
        <option value="lth">Price low to high</option>
    </select>`
}


function lovedonce(data) {
    if (data.length == 0) {
        console.log("in");
        document.querySelector("#lovedOnce").innerHTML = biolerplate();
        return;
    }
    document.querySelector("#lovedOnce").innerHTML = "";
    let topbox = document.createElement("div");
    topbox.setAttribute("class", "topboxloves")

    let sharediv = document.createElement("div");
    sharediv.addEventListener("click", () => {
        popup();
    });

    let share = document.createElement("p");
    share.setAttribute("id","shareoption");
    let imgshare = document.createElement("img");
    imgshare.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvlvG8FskiqjLSc_bXldiH1gwd58y8isTrYw&usqp=CAU";
    share.innerText = "Share";
    sharediv.append(imgshare, share);
    let sortdiv = document.createElement("div");
    let selectsort = document.createElement("div");
    let sorttext = document.createElement("p");
    sorttext.innerText = "Sort by: ";
    sortdiv.append(sorttext);
    selectsort.innerHTML = sorting();
    sortdiv.append(sorttext, selectsort);
    topbox.append(sharediv, sortdiv)
    document.querySelector("#lovedOnce").append(topbox);

    for (let i = 0; i < data.length; i++) {
        let box = document.createElement("div");
        box.setAttribute("class", "productInsideLoves");
        let img = document.createElement("img");
        img.src = data[i].image;

        let box2 = document.createElement("div");
        box2.setAttribute("class", "alldescription")
        let pn = document.createElement("p");
        pn.innerText = data[i].name;
        let useTo = document.createElement("p");
        useTo.innerText = data[i].title;
        let size = document.createElement("p");
        size.innerText = data[i].rating;
        let colors = document.createElement("p");
        colors.innerText = data[i].desc;

        box2.append(pn, useTo, size,colors);

        let box3 = document.createElement("div");

        let price = document.createElement("p");
        price.setAttribute("id","priceofloves")
        price.innerText = "$ " + data[i].price;
        box3.append(price);
        let button = document.createElement("button");
        button.innerText = "Add to Basket";
        button.addEventListener("click",()=>{
            cartsproduct.push(data[i]);
            alert("your product has been added to the wishlist");
            localStorage.setItem("addtocart",JSON.stringify(cartsproduct));
        })
        button.setAttribute("id", "addtocartbutton")
        let remove = document.createElement("button");
        remove.innerHTML = heart();
        remove.addEventListener("click", () => {
            removepro(i);
        })
        remove.setAttribute("class", "removefromloves")
        box.append(img, box2, box3, button, remove)
        document.querySelector("#lovedOnce").append(box);

    }
}


let temp = [];
for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
}
// temp.push(obj);
function removepro(x){
    temp.splice(x,1);
    localStorage.setItem("addfav",JSON.stringify(temp));
    lovedonce(temp);
    setTimeout(()=>{
        alert("product removed successfully");
    },1000);
    
}
lovedonce(temp);


let sortit = () => {
    let x = document.querySelector("#sortingMethod").value;
    if (x == "atoz") {
        arr.sort((a, b) => a.name.localeCompare(b.name));
        lovedonce(arr);
    } else if (x == "ztoa") {
        arr.sort((a, b) => b.name.localeCompare(a.name));
        lovedonce(arr);
    } else if (x == "htl") {
        arr.sort((a, b) => {
            return b.price - a.price;
        })
        console.log(arr);
        lovedonce(arr);
    } else if (x == "lth") {
        arr.sort((a, b) => {
            return a.price - b.price;  
        });
        lovedonce(arr);
    }
}

function headersharepopup() {
    return `
    <div id="headerofSharepoup">
        <h2>Share your loves</h2>
        <button onclick="remove_share_popup()"><i class="fa fa-close" id="close"></i></button>
    </div>`;
}

function inputshare(){
    return `
    <div id="linktosharebox" >
        <p>Copy the following link and share it with friends:</p>
        <input type="text" id="linktoshare" value="http://127.0.0.1:5500/Loves_list.html">
        <button onclick="copyTokeyboard()">Copy</button>
    </div>`;
}
let popup = () => {
    let div = document.querySelector("#sharepopup");
    div.innerHTML = "";
    let header = document.createElement("div");
    header.innerHTML = headersharepopup();

    let div2 = document.createElement("div");
    div2.innerHTML = inputshare();
    div.append(header,div2);
}

let copyTokeyboard = () => {
    let copyText = document.querySelector("#linktoshare");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("link copied successfully");
    remove_share_popup();
}

let remove_share_popup = () => {
    
    document.querySelector("#sharepopup").innerHTML = "";
}

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
