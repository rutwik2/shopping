let cartIcon=document.querySelector('#cart-icon')
let cart=document.querySelector('.cart')
let closeCart=document.querySelector('#close-cart')

cartIcon.onclick=()=>{
    cart.classList.add("active")
}
closeCart.onclick=()=>{
    cart.classList.remove("active")
}

// cart working js
if(document.readyState==="loading"){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}

//making function
function ready(){
    var removeCartButtons=document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(let i=0;i<removeCartButtons.length;i++){
        let button =removeCartButtons[i]
        button.addEventListener('click',removeCartItem)

    }
}

function removeCartItem(event){
    let buttonCkicked=event.target
    buttonCkicked.parentElement.remove()
    updateTotal()
}

let carts=document.querySelectorAll(".add-cart")

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click' ,addCartClicked)
}

function addCartClicked(event){
    let button=event.target;
    let shopProducts=button.parentElement;
    let title=shopProducts.getElementsByClassName("product-title")[0].innerText
    let price=shopProducts.getElementsByClassName("price")[0].innerText
    let productImg=shopProducts.getElementsByClassName("product-img")[0].src
    console.log(title,price,productImg)
    addProductToCart(title,price,productImg)
}
function addProductToCart(title,price,productImg){
    let cartshopBox=document.createElement("div")
    cartshopBox.classList.add('cart-box')
    let cartItems=document.getElementsByClassName('cart-content')[0]
    let cartItemsNames=cartItems.getElementsByClassName('cart-product-title')
    let cardQuantity=document.getElementsByClassName("cart-quantity")[0]
    console.log(cardQuantity)
    // for(var i=0;i<cartItemsNames.length;i++){
    //     alert('you have alrady add this item to cart')
    //     return
    // }


    let cartBoxContent=`
                <img src="${productImg}" alt="" class="cart-img" />
                <div class="detail-box">
                  <div class="cart-product-title">${title}</div>
                  <div class="cart-price">${price}</div>
                  <input type="number" value="1" class="cart-quantity" />
                </div>
                <i class="bx bxs-trash-alt cart-remove"></i>
                <div class="total-title">Total</div>
                <div class="total-price">${price}</div>`;

    cartshopBox.innerHTML=cartBoxContent
    cartItems.append(cartshopBox)
    cartshopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem)
}

//buy button fuction
function buyProduct(){
    alert("Your Ordered Place")
}

