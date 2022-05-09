const hamburgerMenu = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shopMenu = document.querySelector(".shop-menu")
const cartElement = document.querySelector('.cart');
const cartMenu = document.querySelector(".cart-menu")
const clearBtn = document.querySelector(".clear-btn")

let basket = JSON.parse(localStorage.getItem('cart')) || [];

hamburgerMenu.addEventListener("click", mobileMenuClickHandler);

document.addEventListener('DOMContentLoaded', () => {
    cartElement.setAttribute('data-products', basket.length);

    if (basket.length > 0) {
        cartItems()
    } else {
        cartMenu.innerHTML = "<h2 class=message >Sepetinizde Ürün Bulunmamaktadır.</h2>"
    }
})

function mobileMenuClickHandler(e) {
    const menu = e.currentTarget;
    menu.classList.toggle("open");
    mobileMenu.classList.toggle("active");
}

function cartItems() {
    cartMenu.innerHTML = ""
    basket.forEach(item => {
        cartMenu.innerHTML += `
         <div class="shop-menu__item" data-id="${item.id}">
            <img width="75" height="75" src="${item.image}" alt="${item.name}">
            <div class="shop-menu__information">
                <h2 class="shop-menu__text">${item.description}</h2>
                <p class="shop-menu__price">${item.price} ${item.priceUnit}</p>
            </div>
        </div>`
    })
}

clearBtn.addEventListener("click", clearCartItems);

function clearCartItems() {
    basket = []
    localStorage.setItem('cart', JSON.stringify(basket));
    cartMenu.innerHTML = "<h2 class=message >Sepetinizde Ürün Bulunmamaktadır.</h2>"
    cartElement.setAttribute('data-products', basket.length);

}