
let p;
let totalsum;
let value;
let mydata = JSON.parse(localStorage.getItem("addtocart"))||[];                      
    let totalvalue=0;
    let totalPro = mydata.length;
    document.getElementById("countCartP").innerText=`Get It Shipped ( ${totalPro} )`;
    let addProbas = document.querySelector('#addDefault')
        let display = (arr) =>{
            console.log(arr.length ==0)
                if(arr.length ==0){
                    let h3 = document.createElement('h3')
                    h3.setAttribute("class","balck")
                    h3.style.color="black"
                    h3.innerText = 'Your basket is currently empty.'
                    h3.setAttribute("id","btndefpro")
                    let btn = document.createElement("button");
                    btn.innerText=`Shop New Arrivals`;
                    btn.setAttribute("id","btnbefore")
                    addProbas.append(h3,btn)
                }else{
                    addProbas.style.display="none";
                    let cont = document.getElementById('addProbas')
                    cont.innerHTML="";

                    arr.forEach((el,index)=>{
                        let divm = document.createElement("div");
                        let div = document.createElement("div");
                        div.setAttribute("id","imgdiv");
                        let img =document.createElement("img");
                        img.src=el.image;
                        div.append(img);

                        let div1 = document.createElement("div");
                        div1.setAttribute("id","imgprobas");
                        let name = document.createElement("h4");
                        name.setAttribute("class","balck")
                        name.innerText = el.name;
                        name.style.marginTop="10px";
                        let title =document.createElement("p");
                        title.setAttribute("class","balck")
                        title.style.color="black"
                        title.innerText=el.title;
                        let rating = document.createElement("p");
                        rating.style.color="black"
                        rating.setAttribute("class","balck")
                        rating.innerText = el.rating;
                        let desc = document.createElement("p");
                        desc.style.color="black"
                        desc.setAttribute("class","balck")
                        desc.innerText = el.desc;
                        let select = document.createElement("select");
                        select.setAttribute('id','selectId')
                        select.innerHTML=`<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>`;
                            select.addEventListener("change",function(event){
                                totalvalue=0;
                                value = event.target.value;
                                el.value=value;
                                p=+el.value*el.price
                                price.innerText= `Price: ${p}`;   
                                mydata[index]=el;
                                localStorage.setItem("basketdata",JSON.stringify(mydata));
                                mydata = JSON.parse(localStorage.getItem("basketdata"));
                                console.log(mydata);
                                mydata.forEach((el)=>{
                                    totalvalue+= (el.price*Number(el.value));
                            })
                            localStorage.setItem("totalvalue",JSON.stringify(totalvalue));
                            totalsum=JSON.parse(localStorage.getItem("totalvalue"));
                            console.log(totalsum);
                            document.getElementById("subtot").innerText=`Merchandise Subtotal        =>(${totalsum})`;
                            document.getElementById("esTot").innerText=`Merchandise Subtotal         =>(${totalsum}) `;
                        });
                        let price = document.createElement("p");
                        price.style.color="black"
                        p=+el.value*el.price;
                        totalvalue+=p;
                        price.innerText= `Price: ${p}`;               
                        let moves = document.createElement("p");
                        moves.style.color="black"
                        moves.setAttribute("class","balck")
                        moves.innerHTML = `<a>Moves to Loves<a/>`;
                        let remove = document.createElement("p");
                        remove.style.color="black"
                        remove.innerText="Remove";
                        remove.setAttribute("class","balck")
                        remove.addEventListener("click",function(){
                            remPro(index);
                        })

                        div1.append(name,title,rating,desc,select,price,moves,remove);
                        divm.append(div,div1);
                        cont.append(divm);
                    })    
                }
        }
        display(mydata);
        localStorage.setItem("totalvalue",JSON.stringify(totalvalue));
        totalsum=JSON.parse(localStorage.getItem("totalvalue"));
        console.log(totalsum);
        document.getElementById("subtot").innerText=`Merchandise Subtotal        =>(${totalsum})`;
        document.getElementById("esTot").innerText=`Estimated Total        =>(${totalsum}) `;
        function remPro(index){
            mydata.splice(index,1);
            localStorage.setItem("addtocart",JSON.stringify(mydata)) ; 
            window.location.reload();
        }

        document.getElementById("checkpage").addEventListener("click",function(){
            window.location.href="checkout.html"
        })
        document.getElementById("paypage").addEventListener("click",function(){
            window.location.href="https://www.paypal.com/agreements/approve?nolegacy=1&ba_token=BA-2UT09665J8325441E";
        })
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