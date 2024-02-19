let productsInCart = localStorage.getItem("productsInCart")
let allproducts = document.querySelector('.product_items')


if (productsInCart) {
    let item = JSON.parse(productsInCart)
    drowProduct(item)
}

function drowProduct(products) {
    let x = products.map((item) => {
        return `      <div class="product_item" onmouseleave="cartStop(this)" onmouseenter="cartMove(this)">
    <img src="${item.product_items_url}" alt="">
    <div class="product_des">
    <span>${item.product_name}</span>
    <h5>${item.product_info}</h5>
    <div class="star">
    <i class="far fa-star "></i>
    <i class="far fa-star "></i>
    <i class="far fa-star "></i>
    <i class="far fa-star "></i>
    <i class="far fa-star "></i>
    </div>
    <h4>$${item.product_prise}</h4>
    </div>
    <a><i onClick="removeFromCart(${item.id})" class="fa-solid fa-x  cart" ></i></a>
</div>`
    })
    allproducts.innerHTML = x.join("");
}
//
function removeFromCart(id) {


    // Step 1: Get the current productsInCart from local storage
    let productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];

    // Step 2: Remove a specific item from the array
    const itemIdToRemove = id; // Replace 'yourItemId' with the actual ID of the item you want to remove
    productsInCart = productsInCart.filter(item => item.id !== itemIdToRemove);

    // Step 3: Update the local storage with the modified array
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));

    // Reload the current page
    location.reload();


    // localStorage.removeItem()

    // console.log(id)
}
///////////////////////////////////////////////
let showPrice = document.getElementById("showPrice")
let price = document.querySelector("#Prices h3")


showPrice.addEventListener("click", () => {
    let Fprice = 0
    JSON.parse(localStorage.getItem("productsInCart")).map((item) => {
        Fprice += +(item.product_prise)
        price.innerHTML = Fprice
    })
    
})


//////////////////////////////////////////////


function cartMove(item) {
    let car = item.lastElementChild.lastElementChild
    let star = item.children[1].children[2]
    for (var i = 0; i < 5; i++) {
        star.children[i].classList.add("fa-beat")
    }
    car.classList.add('fa-bounce')
}
function cartStop(item) {
    let car = item.lastElementChild.lastElementChild
    let star = item.children[1].children[2]
    for (var i = 0; i < 5; i++) {
        star.children[i].classList.remove("fa-beat")
    }
    car.classList.remove('fa-bounce')
}
//
// mobile bar  //
const mobile_bar = document.getElementById("bar")
const close_bar = document.getElementById("close_bar")
const nav = document.getElementById("navbar")

if (mobile_bar) {
    mobile_bar.addEventListener("click", () => {
        nav.classList.add("active-bar")
    })
}
if (close_bar) {
    close_bar.addEventListener("click", () => {
        nav.classList.remove("active-bar")
    })
}
/////////