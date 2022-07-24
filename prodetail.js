

 

 
 let proDetails = JSON.parse(localStorage.getItem("additem")) || [];  //additem

    proDetails.map(function (elem){

     let imageda = document.getElementById("imageda");

      let detailda = document.getElementById("detailda");

      let  detailed = document.getElementById("detailed")

      let  shipped = document.getElementById("shipped");
      let  picked = document.getElementById("picked");

      let  basket = document.getElementById("basket");
      basket.innerText=null;
     
     //  ***** 

      let image = document.createElement("img");
      image.setAttribute("src", elem.image); 

     let name = document.createElement("h4");
      name.innerText= elem.name;
     let title=document.createElement("h5");
     title.innerText=elem.title;
     title.style.color="red" ;
       
     let rating=document.createElement("p");
     rating.innerText=elem.rating;
     rating.style.color="red" ;
     let price=document.createElement("h4"); //price in dollars
     price.innerText= "$" + elem.price ;
      let desc=document.createElement("p");
      desc.style.color="black" ;
      desc.innerText= "Colors : " +elem.desc;

     let reward =document.createElement("p");
     reward.innerText= "Rewards : " + elem.reward;
     reward.style.color="green"
     let Data_color=document.createElement("p");
     Data_color.innerText= "Color : "+ elem.color;
     Data_color.style.color="black" ;

      // *************
     let cartbutton=document.createElement("button");
     cartbutton.setAttribute("id", "buttoncart")
    cartbutton.innerText="Add to CART for Shipping";
  
    let wishbutton=document.createElement("button");
     wishbutton.setAttribute("class", "buttonwish")
     wishbutton.innerText="\u2764";
  
     //  let wishbutton=document.querySelector(".open-button"));
   
    
      document.querySelector("#box1").append(imageda,detailda);
      imageda.append(image); //product image

      document.querySelector("#detailda").append(detailed,shipped,picked,basket);
      detailed.append(name,title,rating,price,desc,reward,Data_color);//productdetails
        
       basket.append(cartbutton,wishbutton); //add to cart
   
     cartbutton.addEventListener("click",function(){
        Addtocart(elem)
    
     })

      wishbutton.addEventListener("click",function(){
       Addtowish(elem)
     })

       let cartData = JSON.parse(localStorage.getItem("addtocart")) || [];   
       let wishData = JSON.parse(localStorage.getItem("addfav")) || [];

     function Addtocart(elem){
       
     cartData.push(elem);
     alert("Product added to Cart");
     localStorage.setItem("addtocart",JSON.stringify(cartData)); 
     console.log(cartData);
    }
    
     function Addtowish(elem){
     
     wishData.push(elem);
     alert("Product added to Wishlist");
     localStorage.setItem("addfav",JSON.stringify(wishData));
     console.log(wishData);
    }


})



function myFunction() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("myBtn");

   if (dots.style.display === "none") {
       dots.style.display = "inline";
       btnText.innerHTML = "Read Less";
       moreText.style.display = "none";
   } else {
       dots.style.display = "none";
       btnText.innerHTML = "Read More";
       moreText.style.display = "inline";
   }
}

// document.getElementById("header").innerHTML = navbar();

// document.getElementById("footer").innerHTML = footer();

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
