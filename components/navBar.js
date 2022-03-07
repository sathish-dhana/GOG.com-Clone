function navbar() {
    return `<div id="nav">
    <div id="navleft">
        <div id="logo_div">
            <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1cbtOlGUTCgZLG6WQxQPmbjsg_2GWzrJwJJ7U_zfgjgZyNRUEw-eYnOouWGOUb3bnQY&usqp=CAU">
        </div>
        <div class="nav1">STORE</div>
        <div class="nav1">ABOUT</div>
        <div class="nav1">COMMUNITY</div>
        <div class="nav1" id="profile">
            <i class="fa-solid fa-user"> </i>
            <div>&nbsp; PROFILE</div> 
        </div>
    </div>
    <div id="navright">
        <i id="cart" style="font-size: large;" class="fa-solid fa-cart-shopping"></i>
        <div id="searchdiv">
            <i id="search" style="font-size: large; margin-right: 15px;" class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search">
        </div>
    </div>
</div>`;
}

export default navbar;