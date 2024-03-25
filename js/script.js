//children[]
//lastElementChild
let shopping_cart_icon = document.querySelector('#Shopping_cart')
let carts_products = document.querySelector(".carts_products")
let carts_product_div = document.querySelector(".carts_products div")
//product-items
let product_items_1 = document.querySelector('.product_items_1')
let product_items_2 = document.querySelector('.product_items_2')
let product_items_info = [
    {
        id: 1,
        product_items_url: '../img/png/h1.jpg',
        product_name: 'als-2',
        product_info: 'anime hoody',
        product_prise: '45',
    }, {
        id: 2,
        product_items_url: '../img/png/3.jpg',
        product_name: 'agd-8',
        product_info: 'anime hoody',
        product_prise: '130',
    }, {
        id: 3,
        product_items_url: '../img/png/5.jpg',
        product_name: 'shj',
        product_info: 'anime hoody',
        product_prise: '94',
    }, {
        id: 4,
        product_items_url: '../img/png/7.jpg',
        product_name: 'nid-5',
        product_info: 'anime hoody',
        product_prise: '35',
    }, {
        id: 5,
        product_items_url: '../img/png/7.jpg',
        product_name: 'cnl',
        product_info: 'anime hoody',
        product_prise: '87',
    }, {
        id: 6,
        product_items_url: '../img/png/5.jpg',
        product_name: 'ski-6',
        product_info: 'anime hoody',
        product_prise: '95',
    }, {
        id: 7,
        product_items_url: '../img/png/3.jpg',
        product_name: 'vcdh',
        product_info: 'anime hoody',
        product_prise: '66',
    }, {
        id: 8,
        product_items_url: '../img/png/1.jpg',
        product_name: 'doie',
        product_info: 'anime hoody',
        product_prise: '50',
    }, {
        id: 9,
        product_items_url: '../img/png/2.jpg',
        product_name: 'nck-1',
        product_info: 'anime hoody',
        product_prise: '40',
    }, {
        id: 10,
        product_items_url: '../img/png/p4.jpg',
        product_name: 'mld',
        product_info: 'anime hoody',
        product_prise: '84',
    }, {
        id: 11,
        product_items_url: '../img/png/6.jpg',
        product_name: 'mcd',
        product_info: 'anime hoody',
        product_prise: '90',
    }, {
        id: 12,
        product_items_url: '../img/png/8.jpg',
        product_name: 'skd',
        product_info: 'anime hoody',
        product_prise: '130',
    }, {
        id: 13,
        product_items_url: '../img/png/2.jpg',
        product_name: 'biw',
        product_info: 'anime hoody',
        product_prise: '120',
    }, {
        id: 14,
        product_items_url: '../img/png/4.jpg',
        product_name: 'niea',
        product_info: 'anime hoody',
        product_prise: '90',
    }, {
        id: 15,
        product_items_url: '../img/png/6.jpg',
        product_name: 'lpo',
        product_info: 'anime hoody',
        product_prise: '70',
    }, {
        id: 16,
        product_items_url: '../img/png/8.jpg',
        product_name: 'nihd-6',
        product_info: 'anime hoody',
        product_prise: '150',
    }
]
//
function drowProduct() {
    let x = product_items_info.map((item) => {
        return `      <div class="product_item" onmouseleave="cartStop(this)" onmouseenter="cartMove(this)">
    <img src={item.product_items_url} alt="">
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
    <a><i onClick="addToCart(${item.id})" class="fa-solid fa-cart-shopping  cart" ></i></a>
</div>`
    })

    product_items_1.innerHTML = x.splice(0, 8).join("")

    product_items_2.innerHTML = x.join("")
}
drowProduct()
/////////////////add products
let badge = document.querySelector(".badge")

let addeditem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

if (addeditem) {
    addeditem.map(item => {
        carts_product_div.innerHTML += `<div class="div-cart"><P class="p-cart">${item.product_name}</p><img src="${item.product_items_url}" class="img-cart"></div>`;
    })
    badge.style.display = "block"
    badge.innerHTML = addeditem.length
}

function addToCart(item_id) {
    let chosin_item = product_items_info.find((item) => item.id === item_id)
    carts_product_div.innerHTML += `<div class="div-cart"><P class="p-cart">${chosin_item.product_name}</p> <img src="${chosin_item.product_items_url}" class="img-cart"></div>`

    let carts_products_length = document.querySelectorAll('.carts_products div p')
    badge.style.display = 'block'
    badge.innerHTML = carts_products_length.length


    addeditem = [...addeditem, chosin_item]
    localStorage.setItem("productsInCart", JSON.stringify(addeditem))
}

/////////display cart products
shopping_cart_icon.addEventListener("click", () => {
    if (carts_product_div.innerHTML != '') {
        if (carts_products.style.display == 'block') {
            carts_products.style.display = 'none'
        } else { carts_products.style.display = 'block' }
    }
})

/////////
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
