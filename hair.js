
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
      "image": "https://www.sephora.com/productimages/sku/s2578037-main-zoom.jpg?imwidth=230",
      "name": "Sol de Janeiro",
      "title": "Brazilian Joia ™ Milky Leave-In Conditioner",
      "price": 28,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 128",
      "desc": "2 colors",
      "value":1,
      "id": 1
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2033264-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "No. 3 Hair Repair Perfector",
      "price": 30,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 3.8k",
      "desc": "4 colors",
      "value":1,
      "id": 2
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2118875-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "No. 5 Bond Maintenance™ Conditioner",
      "price": 30,
      "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 1.2k",
      "desc": "3 colors",
      "value":1,
      "id": 3
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2118867-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "No. 4 Bond Maintenance™ Shampoo",
      "price": 30,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 1.7k",
      "desc": "2 colors",
      "value":1,
      "id": 4
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2569747-main-zoom.jpg?imwidth=230",
      "name": "Sol de Janeiro",
      "title": "Mini Brazilian Crush Cheirosa ’68 Beija Flor™ Hair & Body Fragrance Mist",
      "price": 20,
      "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 109",
      "desc": " 5 colors",
      "value":1,
      "id": 5
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2593895-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
      "name": "Viori",
      "title": "Hair Shampoo & Conditioner Bar with Bamboo Holder Set",
      "price": 35,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 202",
      "desc": " 1 colors",
      "value":1,
      "id": 6
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2589760-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "No. 4C Bond Maintenance™ Clarifying Shampoo",
      "price": 30,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 996",
      "desc": "2 colors",
      "value":1,
      "id": 7
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/contentimages/meganav/large/2021-08-01-mal-evergreen-responsive-category-pages-hair-care-finder.jpg",
      "name": "",
      "title": "",
      "price": 11,
      "rating": "",
      "desc": "",
      "value":1,
      "id": 8
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2539294-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "No. 9 Bond Protector Nourishing Hair Serum",
      "price": 30,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 1.2k",
      "desc": " 7 colors",
      "value":1,
      "id": 9
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2266765-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "No. 6 Bond Smoother Reparative Styling Creme",
      "price": 30,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 1.1k",
      "desc": "4 colors",
      "value":1,
      "id": 10
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2441095-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "Olaplex No. 8 Bond Intense Moisture Hair Mask",
      "price": 30,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 1.2k",
      "desc": "5 colors",
      "value":1,
      "id": 11
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2035046-main-zoom.jpg?imwidth=230",
      "name": "amika",
      "title": "Perk Up Talc-Free Dry Shampoo",
      "price": 26,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 2.1k",
      "desc": "",
      "value":1,
      "id": 12
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2210722-main-zoom.jpg?imwidth=230",
      "name": "The Ordinary",
      "title": "Multi-Peptide Serum for Hair Density",
      "price": 17.9,
      "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 1k",
      "desc": "3 colors",
      "value":1,
      "id": 13
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2437267-main-zoom.jpg?imwidth=230",
      "name": "COLOR WOW",
      "title": "Dream Coat Supernatural Spray Anti-Frizz Treatment",
      "price": 28,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 702",
      "desc": "4 colors",
      "value":1,
      "id": 14
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2547248-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "K18 Biomimetic Hairscience",
      "title": "Leave-In Molecular Repair Hair Mask",
      "price": 75,
      "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 2.8k",
      "desc": "8 colors",
      "value":1,
      "id": 15
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/contentimages/categorybanners/2022-01-22-auto-replenish-site-desktop-mobile-category-content-tile-haircare-release.jpg",
      "name": "",
      "title": "",
      "price": 24,
      "rating": "",
      "desc": "",
      "value":1,
      "id": 16
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2414555-main-zoom.jpg?pb=2020-03-sephora-value-2020&imwidth=230",
      "name": "SEPHORA COLLECTION",
      "title": "Silicone Scalp Massager",
      "price": 12,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 301",
      "desc": "4 colors",
      "value":1,
      "id": 17
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2319820-main-zoom.jpg?imwidth=230",
      "name": "OUAI",
      "title": "Detox Shampoo",
      "price": 60,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 1.2K",
      "desc": "4 Colors",
      "value":1,
      "id": 18
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2030286-main-zoom.jpg?imwidth=230",
      "name": "Moroccanoil",
      "title": "Moroccanoil Treatment",
      "price": 48,
      "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 1.7k",
      "desc": "4 ",
      "value":1,
      "id": 19
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2044691-main-zoom.jpg?imwidth=230",
      "name": "OUAI",
      "title": "Detangling and Frizz Fighting Leave In Conditioner",
      "price": 28,
      "rating": " \u2605 \u2606 \u2606 \u2606 \u2606 1.4K",
      "desc": "8 COLORS",
      "value":1,
      "id": 20
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2527034-main-zoom.jpg?imwidth=230",
      "name": "amika",
      "title": "Dream Routine Overnight Hydrating Hair Mask",
      "price": 28,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 231",
      "desc": " 4 colors",
      "value":1,
      "id": 21
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2537736-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Vegamour",
      "title": "GRO AGELESS Anti-Gray Hair Serum",
      "price": 78,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 56",
      "desc": " 5 colors",
      "value":1,
      "id": 22
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2483881-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "No. 0 Intensive Bond Building Hair Treatment",
      "price": 30,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 1.7k",
      "desc": "5 colors",
      "value":1,
      "id": 23
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2607711-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "BondiBoost",
      "title": "Hair Thickening Therapy Shampoo",
      "price": 29.95,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 626",
      "desc": "5 colors",
      "value":1,
      "id": 24
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2547255-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "K18 Biomimetic Hairscience",
      "title": "Mini Leave-In Molecular Repair Hair Mask",
      "price": 29,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 2.8k",
      "desc": "5 colors",
      "value":1,
      "id": 25
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2501815-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "No.4P Blonde Enhancer™ Toning Purple Shampoo",
      "price": 30,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 369",
      "desc": "7 colors",
      "value":1,
      "id": 26
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2537421-main-zoom.jpg?imwidth=230",
      "name": "OUAI",
      "title": "Hydrating Scalp Serum for Healthy, Fuller Looking Hair",
      "price": 52,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 489",
      "desc": "3 colors",
      "value":1,
      "id": 27
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2212116-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "Mini No. 4 Bond Maintenance™ Shampoo",
      "price": 15,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 236",
      "desc": "3 colors",
      "value":1,
      "id": 28
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2035079-main-zoom.jpg?imwidth=230",
      "name": "amika",
      "title": "Soulfood Nourishing Hair Mask",
      "price": 48,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 1.5k",
      "desc": "4 colors",
      "value":1,
      "id": 29
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2212108-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olaplex",
      "title": "Mini No. 5 Bond Maintenance™ Conditione",
      "price": 15.9,
      "rating": " \u2605 \u2606 \u2606 \u2606 \u2606179",
      "desc": " 4 colors",
      "value":1,
      "id": 30
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2538320-main-zoom.jpg?imwidth=230",
      "name": "Sephora Favorites",
      "title": "Curly Must-Have Kit",
      "price": 29,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 21",
      "desc": "4 colors",
      "value":1,
      "id": 31
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2491322-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "dae",
      "title": "Hibiscus Wave Spray",
      "price": 26,
      "rating": " \u2605 \u2606 \u2606 \u2606 \u2606147",
      "desc": "3 colors",
      "value":1,
      "id": 32
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2556983-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Olapex",
      "title": "Olaplex No. 3 & No. 8 Hair Repair Remedies Set",
      "price": 56,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 22",
      "desc": " 2 colors",
      "value":1,
      "id": 33
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2592210-main-zoom.jpg?imwidth=230",
      "name": "amika",
      "title": "Hydro Rush Intense Moisture Shampoo with Hyaluronic Acid",
      "price": 24,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 34",
      "desc": "3 colors",
      "value":1,
      "id": 34
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2442200-main-zoom.jpg?imwidth=230",
      "name": "COLOR WOW",
      "title": "Mini Dream Coat Supernatural Spray Anti-Frizz Treatment",
      "price": 12,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 127",
      "desc": "4 colors",
      "value":1,
      "id": 35
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2540557-main-zoom.jpg?imwidth=230",
      "name": "Moroccanoil",
      "title": "Moroccanoil Hydration Love Set",
      "price": 52,
      "rating": " \u2605 \u2605 \u2605 \u2605 \u2606 6k",
      "desc": " 3 colors",
      "value":1,
      "id": 36
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2607729-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "BondiBoost Hair ",
      "title": "BondiBoost Hair Thickening Therapy Conditioner",
      "price": 29,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 450",
      "desc": " 4 colors",
      "value":1,
      "id": 37
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2396877-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
      "name": "SEPHORA COLLECTION",
      "title": "Apple Cider Vinegar Cleansing Scalp Scrub",
      "price": 12,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 271",
      "desc": "4 colors",
      "value":1,
      "id": 38
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2592228-main-zoom.jpg?imwidth=230",
      "name": "amika",
      "title": "Hydro Rush Intense Moisture Conditioner with Hyaluronic Acid",
      "price": 24,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u2606 31",
      "desc": "2 colors",
      "value":1,
      "id": 39
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2580835-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
      "name": "JVN",
      "title": "JVN Complete Leave-In Conditioning Mist",
      "price": 18,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 140",
      "desc": "7 colors",
      "value":1,
      "id": 40
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s1802099-main-zoom.jpg?imwidth=230",
      "name": "OUAI",
      "title": "Hair Oil",
      "price": 28,
      "rating": " \u2605 \u2605 \u2605 \u2606 \u26061.6k",
      "desc": "10 colors",
      "value":1,
      "id": 41
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2396885-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
      "name": "SEPHORA COLLECTION",
      "title": "Protective Hair Oil with Moringa Oil",
      "price": 32,
      "rating": " \u2605 \u2605 \u2606 \u2606 \u2606 1k",
      "desc": "1 colors",
      "value":1,
      "id": 42
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2473064-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "Vegamour",
      "title": "Vegamour GRO Hair Serum for Thinning Hair",
      "price": 58,
      "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 286",
      "desc": "6 colors",
      "value":1,
      "id": 43
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2396893-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
      "name": "SEPHORA COLLECTION ",
      "title": "SEPHORA COLLECTION Strengthening Hair Serum with Biotin and Phytoprotiens",
      "price": 18,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 28",
      "desc": "6 colors",
      "value":1,
      "id": 44
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2499036-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "BondiBoost",
      "title": "HG Shampoo for Thinning Hair",
      "price": 29.95,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 626",
      "desc": "6 colors",
      "value":1,
      "id": 45
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2587798-main-zoom.jpg?imwidth=230",
      "name": "Kitsch",
      "title": "Satin Heatless Curling Set",
      "price": 18,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 7k",
      "desc": "2 colors",
      "value":1,
      "id": 46
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2343051-main-zoom.jpg?imwidth=230",
      "name": "Living Proof",
      "title": "Perfect hair Day (PhD) Dry Shampoo",
      "price": 41,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 3.8k",
      "desc": "5 colors",
      "value":1,
      "id": 47
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2538940-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
      "name": "Briogeo",
      "title": "Superfoods™ Avocado + Kiwi Moisture Leave-In Conditioner",
      "price": 25,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 191",
      "desc": "6 colors",
      "value":1,
      "id": 48
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2030336-main-zoom.jpg?imwidth=230",
      "name": "Moroccanoil",
      "title": "Hydrating Shampoo",
      "price": 26,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2605 191",
      "desc": "4 colors",
      "value":1,
      "id": 49
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2283117-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "SEPHORA COLLECTION",
      "title": "Clean Hair Sleeping Mask",
      "price": 5,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u260648",
      "desc": "1 colors",
      "value":1,
      "id": 50
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2380285-main-zoom.jpg?imwidth=230",
      "name": "Gisou",
      "title": "Mini Honey Infused Hair Oil",
      "price": 25,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 1.5k",
      "desc": " 1 colors",
      "value":1,
      "id": 51
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2593978-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=230",
      "name": "Viori",
      "title": "Hair Shampoo Bar",
      "price": 16,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 46",
      "desc": "9 colors",
      "value":1,
      "id": 52
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2383032-main-zoom.jpg?imwidth=230",
      "name": "SEPHORA COLLECTION",
      "title": "Dry Shampoo",
      "price": 12,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 18",
      "desc": " 12 colors",
      "value":1,
      "id": 53
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2499028-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "BondiBoost",
      "title": "HG Conditioner for Thinning Hair",
      "price": 29,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 275",
      "desc": "8 colors",
      "value":1,
      "id": 54
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2538361-main-zoom.jpg?imwidth=230",
      "name": "OUAI",
      "title": "Mini Detox Shampoo",
      "price": 12,
      "rating": "\u2605 \u2606 \u2606 \u2606 \u2606 57",
      "desc": "5 colors",
      "value":1,
      "id": 55
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2462190-main-zoom.jpg?imwidth=230",
      "name": "SEPHORA COLLECTION",
      "title": "Sephora Collection x Wet Brush Luxe Detangler",
      "price": 19,
      "rating": "\u2605 \u2605 \u2606 \u2606 \u2606 12",
      "desc": "12 colors",
      "value":1,
      "id": 56
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2413896-main-zoom.jpg?imwidth=230",
      "name": "OUAI",
      "title": "Treatment Mask for Fine and Medium Hair",
      "price": 39,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 449",
      "desc": "5 colors",
      "value":1,
      "id": 57
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s2499200-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=230",
      "name": "BondiBoost",
      "title": "Intensive Leave-In Scalp Spray Treatment for Thinning Hair",
      "price": 19.95,
      "rating": "\u2605 \u2605 \u2605 \u2605 \u2606 156",
      "desc": "6 colors",
      "value":1,
      "id": 58
    },
    {
        "img":"\u2661",
      "image": "https://www.sephora.com/productimages/sku/s1602960-main-zoom.jpg?imwidth=230",
      "name": "Bumble and bumble",
      "title": "Hairdresser’s Invisible Oil Heat & UV Protective Primer",
      "price": 23,
      "rating": "\u2605 \u2605 \u2605 \u2606 \u2606 2.7k",
      "desc": "6 colors",
      "value":1,
      "id": 59
    }
  ];

  let itemfevert=JSON.parse(localStorage.getItem("addfav")) || [] 

  let itemdata=JSON.parse(localStorage.getItem("additem")) || []
    
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
                box.append( img1 ,img, name, title, color,rating, price, )
    
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



        let categories= document.getElementById("filter_volume").children;
            for(let el of categories){
                el.addEventListener("click", cSearch);
            }
            function cSearch() {
                console.log(this.id)
                searchImages(data).then((data) =>{
                    console.log(data)
                    let container=document.getElementById("cont");
                    container.innerHTML=null;
                   append(data, cont);
            
                    
    });
}

       