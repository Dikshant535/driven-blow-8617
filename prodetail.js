

  
  var proDetails=[
    {
        "image": "https://www.sephora.com/productimages/sku/s2462950-av-04-zoom.jpg?imwidth=612",
        "name":"PAT McGRATH LABS",
        "title": "Mini Hollywood Flawless Filter",
        "price": 345,
        "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 12k",
        "desc": "4 Colors available",
        "id": 5,
         reward:"*4 payments of $7.50 with Klarna or afterpay",
         color:" Gloss™ Wicked Gloss™ Faux Real - coral pearlescent sheen",
      }
 ]

    proDetails.map(function (elem){



      let imageda = document.getElementById("imageda");
      let detailda = document.getElementById("detailda");

      let  detailed = document.getElementById("detailed")

      let  shipped = document.getElementById("shipped");
      let  picked = document.getElementById("picked");

      let  basket = document.getElementById("basket");
     
     //  ***** 

      let image = document.createElement("img");
      image.setAttribute("src", elem.image); 

     let name = document.createElement("h4");
      name.innerText= elem.name;
     let title=document.createElement("h5");
     title.innerText=elem.title;
     let rating=document.createElement("p");
     rating.innerText=elem.rating;
     let price=document.createElement("h4"); //price in dollars
     price.innerText= "$" + elem.price ;
      let desc=document.createElement("p");
      desc.innerText= "Colors : " +elem.desc;

     let reward =document.createElement("p");
     reward.innerText= "Rewards : " + elem.reward;
     let Data_color=document.createElement("p");
     Data_color.innerText= "Color : "+ elem.color;

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

       let cartData = JSON.parse(localStorage.getItem("cartsephora")) || [];   
       let wishData = JSON.parse(localStorage.getItem("wishsephora")) || [];

     function Addtocart(elem){
       
     cartData.push(elem);
     alert("Product added to Cart");
     localStorage.setItem("cartsephora",JSON.stringify(cartData));
     console.log(cartData);
    }
    
     function Addtowish(elem){
     
     wishData.push(elem);
     alert("Product added to Wishlist");
     localStorage.setItem("wishsephora",JSON.stringify(wishData));
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
