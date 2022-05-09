const hamburgerMenu = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shopMenu = document.querySelector(".shop-menu")
const cartElement = document.querySelector('.cart');
const cartMenu = document.querySelector(".cart-menu")

const products = [{
        id: 1,
        name: "Phone",
        description: "Reeder P13 Blue Max L 2021 64 GB ",
        image: "./assets/phone.jpeg",
        price: 1799,
        priceUnit: 'TL'
    },
    {
        id: 2,
        name: "Laptop",
        description: "Lenovo V15 G2 Intel Core i5 ",
        image: "./assets/laptop.jpeg",
        price: 8799,
        priceUnit: 'TL'
    },
    {
        id: 3,
        name: "Chair",
        description: "Joystar Lüks Katlanır Sandalyesi)",
        image: "./assets/chair.jpeg",
        price: 256,
        priceUnit: 'TL'

    },
    {
        id: 4,
        name: "Television",
        description: "Nordmende NM32150 32 LED TV",
        image: "./assets/television.jpeg",
        price: 2356,
        priceUnit: 'TL'

    },
    {
        id: 5,
        name: "Armchair",
        description: "Koltuk Takımı Özel Renk",
        image: "./assets/armchair.jpeg",
        price: 4356,
        priceUnit: 'TL'
    },
    {
        id: 6,
        name: "Shoes",
        description: "Spor Ayakkabı",
        image: "./assets/shoes.jpeg",
        price: 1356,
        priceUnit: 'TL'
    },
    {
        id: 7,
        name: "Lamb",
        description: "Masaüstü Led Lamba",
        image: "./assets/lamb.jpeg",
        price: 356,
        priceUnit: 'TL'
    },
    {
        id: 8,
        name: "Bike",
        description: "Kron XC75 Bisiklet",
        image: "./assets/bike.jpeg",
        price: 3370,
        priceUnit: 'TL'
    }
];

let basket = JSON.parse(localStorage.getItem('cart')) || [];

hamburgerMenu.addEventListener("click", mobileMenuClickHandler);

document.addEventListener('DOMContentLoaded', () => {
    cartElement.setAttribute('data-products', basket.length);
})

function mobileMenuClickHandler(e) {
    const menu = e.currentTarget;
    menu.classList.toggle("open");
    mobileMenu.classList.toggle("active");
}

function shopItems() {
    shopMenu.innerHTML = ""
    products.forEach(item => {
        shopMenu.innerHTML += `
         <div class="shop-menu__item" data-id="${item.id}">
            <img width="75" height="75" src="${item.image}" alt="${item.name}">
            <div class="shop-menu__information">
                <h2 class="shop-menu__text">${item.description}</h2>
                <p class="shop-menu__price">${item.price} ${item.priceUnit}</p>
                <button class="shop-menu__button">Add To Basket</button>
            </div>
        </div>`
    })

    const addToBasketButtons = document.querySelectorAll('.shop-menu__button');

    addToBasketButtons.forEach((btn) => {
        btn.addEventListener('click', addToBasketClickHandler)

    })
}

shopItems()

function addToBasketClickHandler(event) {
    const target = event.target.parentElement.parentElement;
    const productID = Number(target.getAttribute('data-id'));
    const product = products.find((product) => product.id === productID);
    basket.push(product);
    localStorage.setItem('cart', JSON.stringify(basket));
    cartElement.setAttribute('data-products', basket.length);
}