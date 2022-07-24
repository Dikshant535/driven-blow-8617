
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
    
    let data= [
        {
            "img":"\u2661",
          "image":  "  https://www.sephora.com/productimages/sku/s2407286-main-zoom.jpg?imwidth=230",
          "name": "Charlotte Tilbury",
          "title": "Mini Hollywood Flawless Filter",
          "price": 345,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 1.2k",
          "desc": "4 Colors",
          "id": 5,
          "value":1,
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2473551-main-zoom.jpg?imwidth=230",
          "name": "NARS",
          "title": " Mini Radiant Creamy Concealer",
          "price": 14.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 16k",
          "desc": "30",
          "value":1,
          "id": 6
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2473551-main-zoom.jpg?imwidth=230",
          "name": "Sephora Favorites",
          "title": "Luxe Vibes Mini Luxury Beauty Sampler Set",
          "price": 32.50,
          "rating": "\u2605 \u2605 \u2606 \u2606 \u2606",
          "desc": "colors", 
          "value":1,
          "id": 7
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2490100-main-zoom.jpg?imwidth=230",
          "name": "Sephora Favorites",
          "title": "Hello!—Most-Loved Beauty",
          "price": 8.00,
          "rating":"\u2605 \u2605 \u2605 \u2605 \u2606 46",
          "desc": "2 colors",
          "value":1,
          "id": 8
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2300531-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
          "name": "SEPHORA COLLECTION",
          "title": "Eye Love Eyeshadow Palette",
          "price": 32.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606",
          "desc": "6 colors",
          "value":1,
          "id": 9
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2191880-main-zoom.jpg?imwidth=230",
          "name": "NARS",
          "title": "Mini Voyageur Eyeshadow Palette",
          "price": 21.00 ,
          "rating": "\u2605 \u2605 \u2606 \u2606 \u2606",
          "desc": "3 colors",
          "value":1,
          "id": 10
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2594398-main-zoom.jpg?imwidth=230",
          "name": "Kaja",
          "title": "Beauty Bento Bouncy Eyeshadow Trio",
          "price": 21.00 - 26.00,
          "rating": " \u2605 \u2606 \u2606 \u2606 \u2606 1.7k",
          "desc": "11 colors",
          "value":1,
          "id": 11
        },
        {
            "img":"\u2661",
          "image":"https://www.sephora.com/contentimages/categorybanners/2022-05-complexion-story-site-desktop-mobile-category-content-tile-us.jpg",
          "name":null,
          "title":null,
          "price":34,
          "desc":null,
          "rating":null
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2535607-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
          "name": "Glow Recipe",
          "title": "Plump and Brighten Skin Set",
          "price": 32.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 5k",
          "desc": "3 colors",
          "value":1,
          "id": 12
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2552545-main-zoom.jpg?imwidth=230",
          "name": "Sol de Janeiro",
          "title": "Mini Cream Discovery Set",
          "price": 32.50-65.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 12",
          "desc": "12 colors",
          "value":1,
          "id": 13
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2205417-main-zoom.jpg?imwidth=230",
          "name": "Sol de Janeiro",
          "title": "Bum Bum Jet Set",
          "price": 14.00-20.00,
          "rating": "\u2605 \u2606 \u2606 \u2606 \u2606",
          "desc": "3 colors",
          "value":1,
          "id": 14
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2323202-main-zoom.jpg?imwidth=230",
          "name": "Versace",
          "title": "Mini Bright Crystal and Bright Crystal Absolu Set",
          "price": 14.00,
          "rating":"\u2605 \u2605 \u2606 \u2606 \u2606 4k" ,
          "desc": "5 colors",
          "value":1,
          "id": 15
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2556744-main-zoom.jpg?pb=2020-03-allure-best-2019&imwidth=230",
          "name": "Touchland",
          "title": "Power Mist Hydrating Hand Sanitizer",
          "price": 20.00,
          "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 72",
          "desc": "4 colors",
          "value":1,
          "id": 16
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2368447-main-zoom.jpg?imwidth=230",
          "name": "Charlotte  Tilbury",
          "title": "Mini Airbrush Flawless Setting Spray",
          "price": 30.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 1k",
          "desc": "8 colors",
          "value":1,
          "id": 17
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2550499-main-zoom.jpg?imwidth=230",
          "name": "NARS",
          "title": "Mini Light Reflecting Setting Powder",
          "price": 20.00,
          "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 5",
          "desc": "6 colors",
          "value":1,
          "id": 18
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s1656032-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
          "name": "SEPHORA COLLECTION",
          "title": "Lip Liner To Go",
          "price": 32.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 35",
          "desc": "12 colors",
          "value":1,
          "id": 19
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2504413-main-zoom.jpg?imwidth=230",
          "name": "Rare Beauty by Selena Gomez",
          "title": "Lip Soufflé Matte Lip Cream Duo",
          "price": 26.00,
          "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 7k",
          "desc": "3 colors",
          "value":1,
          "id": 20
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2567550-main-zoom.jpg?imwidth=230",
          "name": "Urban Decay",
          "title": "Mini Naked Eyeshadow Palette",
          "price": 20.00 ,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 1.7k",
          "desc": "3 colors",
          "value":1,
          "id": 21
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s1932920-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
          "name": "Tatcha",
          "title": "The Water Cream Oil-Free Pore Minimizing Moisturizer",
          "price":14.00,
          "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 16k",
          "desc": "11 colors",
          "value":1,
          "id": 22
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s1936202-main-zoom.jpg?imwidth=230",
          "name": "Dr.Jart+",
          "title": "Mini Cicapair™ Tiger Grass Color Correcting Treatment SPF 30",
          "price": 30.00,
          "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 4.6k",
          "desc": "10 colors",
          "value":1,
          "id": 23
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s1985118-main-zoom.jpg?imwidth=230",
          "name": "Sol de  Janeiro",
          "title": "Mini Brazilian Crush Body Fragrance Mist",
          "price": 38.00,
          "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 26",
          "desc": "1 colors",
          "value":1,
          "id": 24
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s1807791-main-zoom.jpg?imwidth=230",
          "name": "NARS",
          "title": "Mini Velvet Matte Lipstick Pencil Duo",
          "price": 29.00,
          "rating":"\u2605 \u2605 \u2605 \u2606 \u2606" ,
          "desc": "3 colors",
          "value":1,
          "id": 25
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2594349-main-zoom.jpg?imwidth=230",
          "name": "Westman Atelier",
          "title": "Mini Petite Lit Up Highlight Stick",
          "price": 321.00 ,
          "rating":"\u2605 \u2605 \u2605 \u2605 \u2606 42",
          "desc": "4 colors",
          "value":1,
          "id": 26
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2535250-main-zoom.jpg?imwidth=230",
          "name": "LANEIGE",
          "title": "Good Night Kit",
          "price": 10.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 42",
          "desc": "5 colors",
          "value":1,
          "id": 27
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2421394-main-zoom.jpg?imwidth=230",
          "name": "Paula's Choice",
          "title": "Mini Skin Perfecting 2% BHA Liquid Exfoliant",
          "price": 65.00,
          "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 432",
          "desc": "6 colors",
          "value":1,
          "id": 28
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2492700-main-zoom.jpg?pb=2020-03-allure-best-2018&imwidth=230",
          "name": "Armani Beauty",
          "title": "Mini Luminous Silk Perfect Glow Flawless Oil-Free Foundation",
          "price": 12.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 245",
          "desc": "7 colors",
          "value":1,
          "id": 29
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2462950-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
          "name": "SEPHORA COLLECTION",
          "title": "Mini Pocket Sun Eyeshadow Palettes",
          "price": 65.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 47",
          "desc": "4 Colors",
          "value":1,
          "id": 30
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2500387-main-zoom.jpg?imwidth=230",
          "name": "PAT McGRATH LABS",
          "title": "Major Mini Lip Trios",
          "price": 29.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 66",
          "desc": "2 Colors",
          "value":1,
          "id": 31
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2561835-main-zoom.jpg?imwidth=230",
          "name": "Yves Saint Laurent",
          "title": "Mini Black Opium & Libre Eau de Parfum Set",
          "price": 20.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 77",
          "desc": "3 Colors",
          "value":1,
          "id": 32
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2311330-main-zoom.jpg?imwidth=230",
          "name": "Anastasia Beverly Hills",
          "title": "Mini Strong Hold Clear Brow Gel",
          "price": "$20.00 - $69.00",
          "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 56",
          "desc": "3 Colors",
          "value":1,
          "id": 33
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2307783-main-zoom.jpg?imwidth=230",
          "name": "Fenty Beauty by Rihanna",
          "title": "Mini Pro Filt’r Instant Retouch Setting Powder",
          "price": 14.00,
          "rating":" \u2605 \u2605 \u2605 \u2605 \u2606 22",
          "desc": " 5 colors",
          "value":1,
          "id": 34
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2421584-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
          "name": "Supergoop!",
          "title": "Mini Unseen Sunscreen SPF 40 PA+++",
          "price": 20.00,
          "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 4.6k",
          "desc": " 3 colors",
          "value":1,
          "id": 35
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2250520-main-zoom.jpg?imwidth=230",
          "name": "Laura Mercier",
          "title": "Mini Translucent Loose Setting Powder",
          "price": 20.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 16k",
          "desc": "6 colors",
          "value":1,
          "id": 36
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2421519-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
          "name": "Glow Recipe",
          "title": "Mini Watermelon Glow PHA + BHA Pore-Tight Toner",
          "price": 12.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 1.7k",
          "desc": "4 colors",
          "value":1,
          "id": 37
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2442200-main-zoom.jpg?imwidth=230",
          "name": "COLOR WOW",
          "title": "Mini Dream Coat Supernatural Spray Anti-Frizz Treatment",
          "price":20.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 23",
          "desc": " 4 colors",
          "value":1,
          "id": 38
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s1899954-main-zoom.jpg?pb=allure-best-2020&imwidth=230",
          "name": "Urban Decay",
          "title": "Mini All Nighter Long-Lasting Makeup Setting Spray",
          "price": 20.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 2k",
          "desc": " 5 colors",
          "value":1,
          "id": 39
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2497188-main-zoom.jpg?imwidth=230",
          "name": "SEPHORA COLLECTION",
          "title": "Mini Cooling Eye Set",
          "price": 65.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 3",
          "desc": "1 colors",
          "value":1,
          "id": 40
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2396257-main-zoom.jpg?imwidth=230",
          "name": "ONE/SIZE by Patrick Starrr",
          "title": "Ultimate Blurring Setting Powder",
          "price": 12.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 16k",
          "desc": "2 colors",
          "value":1,
          "id": 41
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2467561-main-zoom.jpg?imwidth=230",
          "name": "NUDESTIX",
          "title": "Mini NUDIES Roses 'N Honey Nudes 3pc Kit",
          "price": 30.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 356",
          "desc": " 4 colors",
          "value":1,
          "id": 42
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2490704-main-zoom.jpg?imwidth=230",
          "name": "ONE/SIZE by Patrick Starrr",
          "title": "Mini On 'Til Dawn Mattifying Waterproof Setting Spray",
          "price": 29.00,
          "rating":  "\u2605 \u2605 \u2606 \u2606 \u2606 690",
          "desc": "2 colors",
          "value":1,
          "id": 43
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2535599-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
          "name": "Glow Recipe",
          "title": "Soothe and Glow Skin Set",
          "price": 26.00,
          "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 8",
          "desc": "4 colors",
          "value":1,
          "id": 44
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2149417-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
          "name": "SEPHORA COLLECTION",
          "title": "Eyeliner Pencil To Go",
          "price": 20.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 456",
          "desc": "6 colors",
          "value":1,
          "id": 45
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2547255-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
          "name": "K18 Biomimetic Hairscience",
          "title": "Mini Leave-In Molecular Repair Hair Mask",
          "price": 12.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 4.6k",
          "desc": "7 color",
          "value":1,
          "id": 46
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s1850320-main-zoom.jpg?imwidth=230",
          "name": "SK-II",
          "title": "Facial Treatment Essence (Pitera Essence)",
          "price": 10.00,
          "rating": " \u2605 \u2605 \u2605 \u2605 \u2605 1.7k",
          "desc": "4 colors",
          "value":1,
          "id": 47
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2339620-main-zoom.jpg?imwidth=230",
          "name": "Charlotte Tilbury",
          "title": "Mini Pillow Talk Lipstick & Liner Set",
          "price": 12.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 765",
          "desc": "3 colors",
          "value":1,
          "id": 48
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2590248-main-zoom.jpg?imwidth=230",
          "name": "tarte",
          "title": "Mini Clay Play To-Go Cheek Palette",
          "price": 44.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 89",
          "desc": " 9 colors",
          "value":1,
          "id": 49
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s1802420-main-zoom.jpg?imwidth=230",
          "name": "Sol de Janeiro",
          "title": "Mini Brazilian Bum Bum Cream",
          "price": 10,
          "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 4k",
          "desc": "6 colors",
          "value":1,
          "id": 50
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2513851-main-zoom.jpg?imwidth=230",
          "name": "MAKE UP FOR EVER",
          "title": "Mini HD Skin Undetectable Longwear Foundation",
          "price": 20.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 234",
          "desc": "6 colors",
          "id": 51
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2380285-main-zoom.jpg?imwidth=230",
          "name": "Gisou",
          "title": "Mini Honey Infused Hair Oi",
          "price": 29.00,
          "rating": " \u2605 \u2605 \u2605 \u2605 \u26052k",
          "desc": " 2 colors",
          "value":1,
          "id": 52
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2515336-main-zoom.jpg?imwidth=230",
          "name": "Lancôme",
          "title": "Mini Glam Lashes On The Go Mascara Set",
          "price":32.00,
          "rating":"\u2605 \u2605 \u2606 \u2606 \u2606 11",
          "desc": "4 colors",
          "value":1,
          "id": 53
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2390391-main-zoom.jpg?imwidth=230",
          "name": "Charlotte Tilbury",
          "title": "Mini Filmstar Bronze & Glow Contour Duo",
          "price": 20.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 124",
          "desc": " 3 color",
          "value":1,
          "id": 54
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2217933-main-zoom.jpg?pb=2020-03-allure-clean-2019&imwidth=230",
          "name": "ILIA",
          "title": "Mini Limitless Lash Lengthening Mascara",
          "price": 14.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 16k",
          "desc": "6 colors",
          "value":1,
          "id": 55
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2592012-main-zoom.jpg?imwidth=230",
          "name": "Natasha Denona",
          "title": "Mini Bronze Eyeshadow Palette",
          "price": 20.00,
          "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 3k",
          "desc": " 8 colors",
          "value":1,
          "id": 56
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2448579-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
          "name": "SEPHORA COLLECTION",
          "title": "Mini PRO Foundation Brush #56.5",
          "price": 34.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 12",
          "desc": " 12 colors",
          "value":1,
          "id": 57
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2568764-main-zoom.jpg?imwidth=230",
          "name": "NARS",
          "title": "Mini Afterglow Lip Shine Gloss Set",
          "price": 69.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 3k",
          "desc": "5 colors",
          "value":1,
          "id": 58
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2579076-main-zoom.jpg?imwidth=230",
          "name": "Iconic London",
          "title": "Mini Prep Set Glow Hydrating Spray",
          "price": 32.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 65",
          "desc": "15 colors",
          "value":1,
          "id": 59
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2070118-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
          "name": "SEPHORA COLLECTION",
          "title": "Cleansing & Exfoliating Wipes",
          "price": 30.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 4.6k",
          "desc": "8 colors",
          "value":1,
          "id": 60
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2563484-main-zoom.jpg?imwidth=230",
          "name": "Fenty Beauty by Rihanna",
          "title": "Mini O.G. Heat Mini Gloss Bomb + Gloss Bomb Heat Duo",
          "price": 30.00,
          "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 2",
          "desc": "2 colors",
          "value":1,
          "id": 61
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2585214-main-zoom.jpg?imwidth=230",
          "name": "Viktor&Rolf",
          "title": "Flowerbomb Eau de Parfum Duo",
          "price": 57.00,
          "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 4k",
          "desc": "6 colors",
          "value":1,
          "id": 62
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2497253-main-zoom.jpg?imwidth=230",
          "name": "SEPHORA COLLECTION",
          "title": "Daily Brush Cleaner",
          "price": 29.00,
          "rating":"\u2605 \u2605 \u2606 \u2606 \u2606 3.4k",
          "desc": " 1 colors",
          "value":1,
          "id": 63
        },
        {"img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2594448-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
          "name": "Glow Recipe",
          "title": "Mini Plum Plump Hyaluronic Acid Moisturizer",
          "price": 14.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606",
          "desc": "3 colors",
          "value":1,
          "id": 64
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2515336-main-zoom.jpg?imwidth=230",
          "name": "Lancôme",
          "title": "Mini Glam Lashes On The Go Mascara Set",
          "price":32.00,
          "rating":"\u2605 \u2605 \u2606 \u2606 \u2606 11",
          "desc": "4 colors",
          "value":1,
          "id": 53
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2390391-main-zoom.jpg?imwidth=230",
          "name": "Charlotte Tilbury",
          "title": "Mini Filmstar Bronze & Glow Contour Duo",
          "price": 20.00,
          "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 124",
          "desc": " 3 color",
          "value":1,
          "id": 54
        },
        {
            "img":"\u2661",
          "image": "https://www.sephora.com/productimages/sku/s2217933-main-zoom.jpg?pb=2020-03-allure-clean-2019&imwidth=230",
          "name": "ILIA",
          "title": "Mini Limitless Lash Lengthening Mascara",
          "price": 14.00,
          "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 16k",
          "desc": "6 colors",
          "value":1,
          "id": 55
        },
      ];
    
    
         let itemfevert=JSON.parse(localStorage.getItem("addfav")) || [];
 

        
        let itemdata=JSON.parse(localStorage.getItem("additem")) || [];
    
        function append(data) {
            let cont= document.getElementById("cont");
            cont.innerHTML = "";
            data.forEach((el)=>{
                let img =document.createElement("img")
                img.src=el.image;
                let img1 =document.createElement("p")
                img1.innerText=el.img;
                img1.setAttribute("class", "img1")
                let name=document.createElement("h5")
                name.innerText=el.name;
                let title=document.createElement("h4")
                title.innerText=el.title;
                let price=document.createElement("h3")
                price.innerText= "$ "+el.price +" .00"+" - $" + Math.floor(Math.random()*100)+".00";
                let rating=document.createElement("h2")
                rating.setAttribute("class", "ret")
                rating.innerText=   el.rating;
                // let value=document.createElement("p")
                // value.innerText=el.value;
                span4 = document.createElement("span");
                
    
                let color=document.createElement("p")
                color.innerText=el.desc;
                let box=document.createElement("div")
                
                box.addEventListener("click", function(){
                    adddata(el, 1)
                })
                box.append( img1 ,img, name, title, color,rating, price)
    
                cont.append(box)
    
    
            })
        }
    
        
        document.getElementById("low").addEventListener("click", ()=>{
          mySort(data, "l2h")
        })
        document.getElementById("high").addEventListener("click", ()=>{
          mySort(data, "h2l")
        })
    
        function mySort(data, how){
          console.log(data, how)
          console.log("sonu")
    
          if(how=="l2h"){
            data.sort((a, b)=>{
              return a.price - b.price;
            })
            append(data);
          }else if(how == "h2l"){
            data.sort((a, b) =>{
              return b.price - a.price;
            })
            append(data);
          }
        }
    
       
        function adddata(el){

          itemfevert.push( el)
         
         itemdata[0]=el
          console.log(itemdata)
          //console.log(data)
          localStorage.setItem("additem", JSON.stringify(itemdata));
          
          localStorage.setItem("addfav", JSON.stringify(itemfevert));
          
          window.location.href="prodetail.html"
      }
        
        append(data);
    
    