// <---this is to test loves list --->
let obj = {
    img: "https://www.sephora.com/productimages/sku/s2296986-main-zoom.jpg?imwidth:612",
    product_name: "AARS", // has to be bold
    useTo: "Blush", // simple p tag
    size: "Size 0.16 oz/ 4.8 g",
    item: "Item 2296986",
    color: "Color: Orgasm X - shimmering deep coral with gold pearl",
    price: "$32.00",

}
let obj2 = {
    img: "https://www.sephora.com/productimages/sku/s2296986-main-zoom.jpg?imwidth:612",
    product_name: "ZARS", // has to be bold
    useTo: "Blush", // simple p tag
    size: "Size 0.16 oz/ 4.8 g",
    item: "Item 2296986",
    color: "Color: Orgasm X - shimmering deep coral with gold pearl",
    price: "$32.00",

}

let arr = [];
arr.push(obj2);
arr.push(obj);

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
        document.querySelector("#lovedOnce").innerHTML = biolerplate();
        return;
    }
    document.querySelector("#lovedOnce").innerHTML = "";
    let topbox = document.createElement("div");
    topbox.setAttribute("class", "topboxloves")

    let sharediv = document.createElement("div");

    let share = document.createElement("p");
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
    sortdiv.append(sorttext,selectsort);
    topbox.append(sharediv, sortdiv)
    document.querySelector("#lovedOnce").append(topbox);



    for (let i = 0; i < data.length; i++) {
        let box = document.createElement("div");
        box.setAttribute("class", "productInsideLoves");
        let img = document.createElement("img");
        img.src = data[i].img;

        let box2 = document.createElement("div");
        box2.setAttribute("class", "alldescription")
        let pn = document.createElement("p");
        pn.innerText = data[i].product_name;
        let useTo = document.createElement("p");
        useTo.innerText = data[i].useTo;
        let size = document.createElement("p");
        size.innerText = data[i].size;
        let itemno = document.createElement("p");
        itemno.innerText = data[i].item;
        let colordes = document.createElement("p");
        colordes.innerText = data[i].color;

        box2.append(pn, useTo, size, itemno, colordes);

        let box3 = document.createElement("div");

        let price = document.createElement("p");
        price.innerText = data[i].price;
        box3.append(price);
        let button = document.createElement("button");
        button.innerText = "Add to Basket";
        button.setAttribute("id", "addtocartbutton")
        let remove = document.createElement("button");
        remove.innerHTML = heart();
        remove.addEventListener("click", () => {
            removepro(data[i]);
        })
        remove.setAttribute("class", "removefromloves")
        box.append(img, box2, box3, button, remove)
        document.querySelector("#lovedOnce").append(box);

    }
}
lovedonce(arr);
// function removepro(x){
//     console.log(x);
// }

// function compare( a, b ) {
//     if ( a.product_name < b.product_name ){
//       return -1;
//     }
//     if ( a.product_name > b.product_name ){
//       return 1;
//     }
//     return 0;
// }
// function comparerev( a, b ) {
//     if ( a.product_name < b.product_name ){
//       return 1;
//     }
//     if ( a.product_name > b.product_name ){
//       return -1;
//     }
//     return 0;
// }
let sortit = () => {
    let x = document.querySelector("#sortingMethod").value;
    if (x == "atoz") {
        arr.sort((a,b) => a.product_name.localeCompare(b.product_name));
        lovedonce(arr);
    }//else if(x == )
}