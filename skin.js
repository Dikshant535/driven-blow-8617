

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

let data= [
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2594448-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
      "name": "Glow Recipe",
      "title": "Mini Plum Plump Hyaluronic Acid Moisturizer",
      "price": 14.00,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 3k",
      "desc": "3 colors",
      "value":1,
      "id": 1
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2532505-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "peace Out",
      "title": "Salicylic Acid Acne Healing Dots",
      "price": "19.00",
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 4.2k",
      "desc": "2 colors",
      "value":1,
      "id": 2
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2315935-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Supergoop !",
      "title": "Unseen Sunscreen SPF 40 PA+++",
      "price": "36.00",
      "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 3k ",
      "desc": "2 colors",
      "value":1,
      "id": 3
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2382232-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Tatcha",
      "title": "The Rice Wash Skin-Softening Cleanser",
      "price": "38.00",
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 2.2k",
      "desc": "3 colors",
      "value":1,
      "id": 4
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2348431-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Glow Pecipe",
      "title": "Watermelon Glow PHA + BHA Pore-Tight Toner",
      "price": "30.00",
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 3k",
      "desc": "4 colors",
      "value":1,
      "id": 5
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2181006-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Tetcha",
      "title": "The Dewy Skin Cream Plumping & Hydrating Moisturizer",
      "price": "82.00",
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 2.8k",
      "desc": "4 colors",
      "value":1,
      "id": 6
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2536308-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Summer Fridays",
      "title": "ShadeDrops Broad Spectrum SPF 30 Mineral Milk Sunscreen",
      "price": 36,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 435",
      "desc": "5 colors",
      "value":1,
      "id": 7
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s1863588-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Youth To The People",
      "title": "Superfood Antioxidant Cleanser",
      "price": 64,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 5.4k",
      "desc": "3 colors",
      "value":1,
      "id": 8
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/contentimages/meganav/large/2022-03-31-apr-clinical-skincare-site-desktop-mobile-category-content-tile-US.jpg",
      "name": "",
      "title": "",
      "price": 56,
      "rating": "",
      "desc": "",
      "value":1,
      "id": 9
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2404846-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Glow Recipe",
      "title": "Watermelon Glow Niacinamide Dew Drops",
      "price": 34,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u26065 1.7k",
      "desc": " 7 colors",
      "value":1,
      "id": 10
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2535144-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Glow Recipe",
      "title": "Fruit Babies Bestsellers Kit",
      "price": 32,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 1k",
      "desc": " 1 colors",
      "value":1,
      "id": 11
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2535128-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Glow Recipe",
      "title": "Plum Plump Hyaluronic Acid Moisturizer",
      "price": 23,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 1k",
      "desc": " 2 colors",
      "value":1,
      "id": 12
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2404721-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Drunk Elephant",
      "title": "D-Bronzi™ Anti-Pollution Bronzing Drops with Peptides",
      "price": 36,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 1.8k",
      "desc": " 3 colors",
      "value":1,
      "id": 13
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2535599-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Glow Recipe",
      "title": "Soothe and Glow Skin Set",
      "price": 26,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 5",
      "desc": " 5 colors",
      "value":1,
      "id": 14
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s1932920-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Tatcha",
      "title": "The Water Cream Oil-Free Pore Minimizing Moisturizer",
      "price": 69,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 4k",
      "desc": " 7 colors",
      "value":1,
      "id": 15
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2233245-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "First Aid Beauty",
      "title": "KP Bump Eraser Body Scrub with 10% AHA",
      "price": 30,
      "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 1.3k",
      "desc": "2 colors",
      "value":1,
      "id": 16
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2556744-main-zoom.jpg?pb=2020-03-allure-best-2019&imwidth=164",
      "name": "Touchland",
      "title": "Power Mist Hydrating Hand Sanitizer",
      "price": 9,
      "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 72",
      "desc": " 4 colors",
      "value":1,
      "id": 17
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/contentimages/meganav/large/2021-08-01-mal-evergreen-responsive-category-pages-skincare-for-every-age.jpg",
      "name": "",
      "title": "",
      "price": 45,
      "rating": "",
      "desc": "",
      "value":1,
      "id": 18
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s1899103-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Farmacy",
      "title": "Green Clean Makeup Removing Cleansing Balm",
      "price": 60,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 5.5k",
      "desc": " 5 colors",
      "value":1,
      "id": 19
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2283018-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "SEPHORA COLLECTION",
      "title": "Clean Eye Mask",
      "price": 3.5,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 272",
      "desc": " 2 colors",
      "value":1,
      "id": 20
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2215945-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Skinfix",
      "title": "Barrier+ Triple Lipid-Peptide Face Cream",
      "price": 52,
      "rating": " \u2605 \u2605 \u2605 \u2605 \u26062k",
      "desc": " 3 colors",
      "value":1,
      "id": 21
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2535615-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Glow Recipe",
      "title": "Strawberry Smooth BHA + AHA Salicylic Acid Serum",
      "price": 40,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 863",
      "desc": " 6 colors",
      "value":1,
      "id": 22
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2282069-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "SEPHORA COLLECTION",
      "title": "Clean Face Mask",
      "price": 5.5,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 332",
      "desc": "10 colors",
      "value":1,
      "id": 23
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2527844-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Tower 28 Beauty",
      "title": "SOS Daily Rescue Facial Spray",
      "price": 28,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 471",
      "desc": "9 colors",
      "value":1,
      "id": 24
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2421600-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Supergoop!",
      "title": "(Re)setting 100% Mineral Powder Sunscreen SPF 35 PA+++",
      "price": 30,
      "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 340",
      "desc": "4 colors",
      "value":1,
      "id": 25
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2421584-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Supergoop!",
      "title": "Mini Unseen Sunscreen SPF 40 PA+++",
      "price": 20,
      "rating": " \u2605 \u2606 \u2606 \u2606 \u2606 3k",
      "desc": "12 colors",
      "value":1,
      "id": 26
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2594489-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "fresh",
      "title": "Sugar Lip Balm",
      "price": 24,
      "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 955",
      "desc": "13 colors",
      "value":1,
      "id": 27
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2495547-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "SEPHORA COLLECTION",
      "title": "Vitamin Eye Masks",
      "price": 3.5,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 24",
      "desc": "2 colors",
      "value":1,
      "id": 28
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2535607-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Glow Recipe",
      "title": "Plump and Brighten Skin Set",
      "price": 234,
      "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 4",
      "desc": "3 colors",
      "value":1,
      "id": 29
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s1217744-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "First Aid Beauty",
      "title": "Ultra Repair® Cream Intense Hydration",
      "price": 46,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 7.4k",
      "desc": " 4 colors",
      "value":1,
      "id": 30
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2421519-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Glow Recipe",
      "title": "Mini Watermelon Glow PHA + BHA Pore-Tight Toner",
      "price": 15,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 3k",
      "desc": " 4 colors",
      "value":1,
      "id": 31
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2364115-main-zoom.jpg?pb=2020-03-allure-best-2019&imwidth=164",
      "name": "Nécessaire",
      "title": "The Body Wash - With Niacinamide, Vitamins + Plant Surfactants",
      "price": 25,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 1.2k",
      "desc": "3 colors",
      "value":1,
      "id": 32
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2468916-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "Tatcha",
      "title": "The Deep Cleanse Gentle Exfoliating Cleanser",
      "price": 39,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 2.3k",
      "desc": " 2 colors",
      "value":1,
      "id": 33
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2566453-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "SEPHORA COLLECTION",
      "title": "Holy Sheet!",
      "price": 48,
      "rating": " \u2605 \u2605 \u2606 \u2606 \u260616",
      "desc": "4 colors",
      "value":1,
      "id": 34
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2452050-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "SEPHORA COLLECTION",
      "title": "Brightening Eye Cream with Caffeine and Hyaluronic Acid",
      "price": 18,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 436",
      "desc": " 5 colors",
      "value":1,
      "id": 35
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2100220-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "SEPHORA COLLECTION",
      "title": "Ultra Glow Serum: Glow + Strengthen Vitamin C Serum",
      "price": 20,
      "rating": " \u2605 \u2606 \u2606 \u2606 \u2606 915",
      "desc": "4 colors",
      "value":1,
      "id": 36
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/contentimages/meganav/large/2021-08-01-content-grid-tile-skin-routine-builder.jpg",
      "name": "",
      "title": "",
      "price": 23,
      "rating": "",
      "desc": "",
      "value":1,
      "id": 37
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2549418-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "LAWLESS",
      "title": "Forget The Filler Overnight Lip Plumping Mask",
      "price": 21,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 600",
      "desc": "2 color",
      "value":1,
      "id": 38
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2297547-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Kosas",
      "title": "Wet Lip Oil Plumping Treatment Gloss",
      "price": 22,
      "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 391",
      "desc": "8 colors",
      "value":1,
      "id": 39
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2530756-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
      "name": "The INKEY List",
      "title": "The INKEY List Omega Water Cream Moisturizer",
      "price": 9.99,
      "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 281",
      "desc": " 7 colors",
      "value":1,
      "id": 40
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2534485-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Beauty Elixir Face Mist",
      "title": "Beauty Elixir Face Mist",
      "price": 49,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 456",
      "desc": "2 colors",
      "value":1,
      "id": 41
    },
    {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2315935-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Supergoop !",
        "title": "Unseen Sunscreen SPF 40 PA+++",
        "price": "36.00",
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2605 3k ",
        "desc": "2 colors",
        "value":1,
        "id": 3
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2382232-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Tatcha",
        "title": "The Rice Wash Skin-Softening Cleanser",
        "price": "38.00",
        "rating": " \u2605 \u2605 \u2605 \u2605 \u26062.2k",
        "desc": "3 colors",
        "value":1,
        "id": 4
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2348431-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Pecipe",
        "title": "Watermelon Glow PHA + BHA Pore-Tight Toner",
        "price": "30.00",
        "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 3k",
        "desc": "4 colors",
        "value":1,
        "id": 5
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2181006-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Tetcha",
        "title": "The Dewy Skin Cream Plumping & Hydrating Moisturizer",
        "price": "82.00",
        "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 2.8k",
        "desc": "4 colors",
        "value":1,
        "id": 6
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s1932920-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Tatcha",
        "title": "The Water Cream Oil-Free Pore Minimizing Moisturizer",
        "price": 69,
        "rating": " \u2605 \u2606 \u2606 \u2606 \u2606 4k",
        "desc": " 7 colors",
        "value":1,
        "id": 15
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2233245-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "First Aid Beauty",
        "title": "KP Bump Eraser Body Scrub with 10% AHA",
        "price": 30,
        "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 1.3k",
        "desc": "2 colors",
        "value":1,
        "id": 16
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2556744-main-zoom.jpg?pb=2020-03-allure-best-2019&imwidth=164",
        "name": "Touchland",
        "title": "Power Mist Hydrating Hand Sanitizer",
        "price": 9,
        "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 72",
        "desc": " 4 colors",
        "value":1,
        "id": 17
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/contentimages/meganav/large/2021-08-01-mal-evergreen-responsive-category-pages-skincare-for-every-age.jpg",
        "name": "",
        "title": "",
        "price": 56,
        "rating": "",
        "desc": "",
        "value":1,
        "id": 18
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s1899103-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Farmacy",
        "title": "Green Clean Makeup Removing Cleansing Balm",
        "price": 60,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 5.5k",
        "desc": " 5 colors",
        "value":1,
        "id": 19
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2283018-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "SEPHORA COLLECTION",
        "title": "Clean Eye Mask",
        "price": 3.5,
        "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 272",
        "desc": " 2 colors",
        "value":1,
        "id": 20
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2215945-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Skinfix",
        "title": "Barrier+ Triple Lipid-Peptide Face Cream",
        "price": 52,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2605 2k",
        "desc": " 3 colors",
        "value":1,
        "id": 21
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2535615-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Recipe",
        "title": "Strawberry Smooth BHA + AHA Salicylic Acid Serum",
        "price": 40,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 863",
        "desc": " 6 colors",
        "value":1,
        "id": 22
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2282069-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "SEPHORA COLLECTION",
        "title": "Clean Face Mask",
        "price": 5.5,
        "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 332",
        "desc": "10 colors",
        "value":1,
        "id": 23
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2527844-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Tower 28 Beauty",
        "title": "SOS Daily Rescue Facial Spray",
        "price": 28,
        "rating": " \u2605 \u2606 \u2606 \u2606 \u2606471",
        "desc": "9 colors",
        "value":1,
        "id": 24
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2421600-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Supergoop!",
        "title": "(Re)setting 100% Mineral Powder Sunscreen SPF 35 PA+++",
        "price": 30,
        "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 340",
        "desc": "4 colors",
        "value":1,
        "id": 25
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2421584-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Supergoop!",
        "title": "Mini Unseen Sunscreen SPF 40 PA+++",
        "price": 20,
        "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 3k",
        "desc": "12 colors",
        "value":1,
        "id": 26
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2594489-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "fresh",
        "title": "Sugar Lip Balm",
        "price": 24,
        "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 955",
        "desc": "13 colors",
        "value":1,
        "id": 27
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2495547-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "SEPHORA COLLECTION",
        "title": "Vitamin Eye Masks",
        "price": 3.5,
        "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 24",
        "desc": "2 colors",
        "value":1,
        "id": 28
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2535607-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Recipe",
        "title": "Plump and Brighten Skin Set",
        "price": 234,
        "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 4",
        "desc": "3 colors",
        "value":1,
        "id": 29
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s1217744-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "First Aid Beauty",
        "title": "Ultra Repair® Cream Intense Hydration",
        "price": 46,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2605 7.4k",
        "desc": " 4 colors",
        "value":1,
        "id": 30
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2421519-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Recipe",
        "title": "Mini Watermelon Glow PHA + BHA Pore-Tight Toner",
        "price": 15,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 3k",
        "desc": " 4 colors",
        "value":1,
        "id": 31
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2364115-main-zoom.jpg?pb=2020-03-allure-best-2019&imwidth=164",
        "name": "Nécessaire",
        "title": "The Body Wash - With Niacinamide, Vitamins + Plant Surfactants",
        "price": 25,
        "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 1.2k",
        "desc": "3 colors",
        "value":1,
        "id": 32
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2468916-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Tatcha",
        "title": "The Deep Cleanse Gentle Exfoliating Cleanser",
        "price": 39,
        "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 2.3k",
        "desc": " 2 colors",
        "value":1,
        "id": 33
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2566453-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "SEPHORA COLLECTION",
        "title": "Holy Sheet!",
        "price": 48,
        "rating": " \u2605 \u2606 \u2606 \u2606 \u2606 16",
        "desc": "4 colors",
        "value":1,
        "id": 34
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2452050-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "SEPHORA COLLECTION",
        "title": "Brightening Eye Cream with Caffeine and Hyaluronic Acid",
        "price": 18,
        "rating": " \u2605 \u2605 \u2606 \u2606 \u2606436",
        "desc": " 5 colors",
        "value":1,
        "id": 35
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2100220-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "SEPHORA COLLECTION",
        "title": "Ultra Glow Serum: Glow + Strengthen Vitamin C Serum",
        "price": 20,
        "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 915",
        "desc": "4 colors",
        "value":1,
        "id": 36
      },
      {"img":"\u2661",
        "image": "https://www.sephora.com/contentimages/meganav/large/2021-08-01-content-grid-tile-skin-routine-builder.jpg",
        "name": "",
        "title": "",
        "price": 57,
        "rating": "",
        "desc": "",
        "value":1,
        "id": 37
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2594448-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
        "name": "Glow Recipe",
        "title": "Mini Plum Plump Hyaluronic Acid Moisturizer",
        "price": 14.00,
        "rating":"\u2605 \u2605 \u2605 \u2606 \u2606 6" ,
        "desc": "3 colors",
        "value":1,
        "id": 1
      },
      {"img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2532505-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "peace Out",
        "title": "Salicylic Acid Acne Healing Dots",
        "price": 19.00,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 4.2k",
        "desc": "2 colors",
        "value":1,
        "id": 2
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2315935-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Supergoop !",
        "title": "Unseen Sunscreen SPF 40 PA+++",
        "price": 36.00,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2605 3k ",
        "desc": "2 colors",
        "value":1,
        "id": 3
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2382232-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Tatcha",
        "title": "The Rice Wash Skin-Softening Cleanser",
        "price": 38.00,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 2.2k",
        "desc": "3 colors",
        "value":1,
        "id": 4
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2348431-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Pecipe",
        "title": "Watermelon Glow PHA + BHA Pore-Tight Toner",
        "price": 30.00,
        "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 3k",
        "desc": "4 colors",
        "value":1,
        "id": 5
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2181006-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Tetcha",
        "title": "The Dewy Skin Cream Plumping & Hydrating Moisturizer",
        "price": 82.00,
        "rating": " \u2605 \u2605 \u2606 \u2606 \u26062.8k",
        "desc": "4 colors",
        "value":1,
        "id": 6
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2536308-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Summer Fridays",
        "title": "ShadeDrops Broad Spectrum SPF 30 Mineral Milk Sunscreen",
        "price": 36,
        "rating": " \u2605 \u2606 \u2606 \u2606 \u2606 435",
        "desc": "5 colors",
        "value":1,
        "id": 7
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s1863588-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Youth To The People",
        "title": "Superfood Antioxidant Cleanser",
        "price": 64,
        "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 5.4k",
        "desc": "3 colors",
        "value":1,
        "id": 8
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/contentimages/meganav/large/2022-03-31-apr-clinical-skincare-site-desktop-mobile-category-content-tile-US.jpg",
        "name": "",
        "title": "",
        "price": 42,
        "rating": "",
        "desc": "",
        "value":1,
        "id": 9
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2404846-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Recipe",
        "title": "Watermelon Glow Niacinamide Dew Drops",
        "price": 34,
        "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 1.7k",
        "desc": " 7 colors",
        "value":1,
        "id": 10
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2535144-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Recipe",
        "title": "Fruit Babies Bestsellers Kit",
        "price": 32,
        "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 1k",
        "desc": " 1 colors",
        "value":1,
        "id": 11
      },
      {"img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2535128-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Recipe",
        "title": "Plum Plump Hyaluronic Acid Moisturizer",
        "price": 23,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u2605 1k",
        "desc": " 2 colors",
        "value":1,
        "id": 12
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2404721-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Drunk Elephant",
        "title": "D-Bronzi™ Anti-Pollution Bronzing Drops with Peptides",
        "price": 36,
        "rating": " \u2605 \u2605 \u2605 \u2605 \u26061.8k",
        "desc": " 3 colors",
        "value":1,
        "id": 13
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s2535599-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
        "name": "Glow Recipe",
        "title": "Soothe and Glow Skin Set",
        "price": 26,
        "rating": " \u2605 \u2606 \u2606 \u2606 \u2606 5",
        "desc": " 5 colors",
        "value":1,
        "id": 14
      },
      {
        "img":"\u2661",
        "image": "https://www.sephora.com/productimages/sku/s1932920-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=164",
        "name": "Tatcha",
        "title": "The Water Cream Oil-Free Pore Minimizing Moisturizer",
        "price": 69,
        "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 4k",
        "desc": " 7 colors",
        "value":1,
        "id": 15
      },
      {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2297547-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=164",
      "name": "Kosas",
      "title": "Wet Lip Oil Plumping Treatment Gloss",
      "price": 22,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 391",
      "desc": "8 colors",
      "value":1,
      "id": 39
    },
  ];

  
  
  let itemfevert=JSON.parse(localStorage.getItem("addfav")) || []

  let itemdata=JSON.parse(localStorage.getItem("additem")) || []
    
  function append(data) {
      let cont= document.getElementById("cont");
      cont.innerHTML = "";
      data.forEach((el)=>{
          let img =document.createElement("img")
          img.src=el.image;
          let img1 =document.createElement("h1")
         
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
          span4 = document.createElement("span");
          

          let color=document.createElement("p")
          color.innerText=el.desc;
          let box=document.createElement("div")
          box.addEventListener("click", function(){
              adddata(el, 1)
              console.log(el)

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
      localStorage.setItem("additem", JSON.stringify(itemdata))
      localStorage.setItem("addfav", JSON.stringify(itemfevert))
      
      window.location.href="prodetail.html"
  }
  
  append(data);