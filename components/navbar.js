let navbar = ()=>{
    return `  
    <div id="top_header"><h3>Beauty Insiders: Earn Points Faster*▸ Not a Beauty Insider? Join now▸ Free shipping with code FREESHIP. *Terms apply.</h3></div>
    <div id="search_bar">
        <div id="logo"><img src="https://www.sephora.com/img/ufe/logo.svg"></div>
        <div id="input_box"><input type="text" placeholder="Search..."></div>
        <div id="services">
            <div><img width="25px" height="30px" src="https://www.sephora.com/img/ufe/icons/stores-active.svg" alt=""></div>
            <div><p>Store & Services</p>
                <p>Choose your store</p>
            </div>
        </div>
        <div id="community">
            <img src="https://www.sephora.com/img/ufe/icons/community-active.svg">
            <p>Community</p>
        </div>
        <div id="signin">
            <img width="30px" src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="">
            <a style="text-decoration:none;color:black;" href="login.html">Sign In</a>
        </div>
        
        <div id="bag_div">
        <div class="images">
        <img src="./img/chat.jpg">
        </div>
        <div class ="images">
        <img id="fab" src="./img/heart.svg">
        </div>
        <div class="images">
        <img id="bag" src="./img/bag.jpg">
        </div>
        </div>
    </div>
    <div id="menubar">
        <div id="below_inputbar">
            <p id="new">New</p>
            <p id="brand">Brands</p>
            <p id="makeup">Makeup</p>
            <p id="hair">Hair</p>
            <p id="skincare" >Skincare</p>
            <p id="frag">Fragrance</p>
            <p id="tool">Tools & Brushes</p>
            <p id="size">Mini size</p>
            <p id="bath">Bath & Body</p>
            <p id="gift">Gifts</p>
            <p id="under">Beauty Under $20</p>
            <p id="sale"> Sale & Offers</p>
           </div>
    </div>
        
    `
}


export default navbar