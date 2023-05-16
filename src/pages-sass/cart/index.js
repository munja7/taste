import './cart.sass';
import {modal} from "../../blocks-sass/modalCart"
import {alertOpen} from "../../libs-sass/alertToCart"

const menu =
[
    {
        name: "Холодные закуски",
        slides: [
            {
                id: 1,
                name: 'Тарталетки',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'cold-snack1.jpg'
            },
                {
                id: 2,
                name: 'Джонджоли',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'cold-snack2.jpg'
            },
                {
                id: 3,
                name: 'Канапе',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 950,
                img: 'cold-snack3.jpg'
            },
            {
                id: 0,
                name: 'Рыбное ассорти',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 1500,
                img: 'cold-snack4.jpg'
            },
            {
                id: 4,
                name: 'Щербет',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'cold-snack5.jpg'
            },
                {
                id: 5,
                name: 'Лобио холодное',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'cold-snack6.jpg'
            },
        ]
    },
    {
        name: 'Горячие закуски ',
        slides: [
            {
                id: 6,
                name: 'Казбеги',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'hot-snack1.jpg'
            },
                {
                id: 7,
                name: 'Овощное рагу',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'hot-snack2.jpg'
            },
                {
                id: 8,
                name: 'Запеченные соко',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'hot-snack3.jpg'
            },
            {
                id: 9,
                name: 'Сулгуни',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 1900,
                img: 'hot-snack4.jpg'
            },
            {   
                id: 10,
                name: 'Крылышки к пиву',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'hot-snack5.jpg'
            },
        ]
    },
    {
        name: 'Мясные блюда ',
        slides: [
            {
                id: 12,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'dish1.png'
            },
                {
                id: 13,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'dish2.png'
            },
                {
                id: 14,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'meat1.jpg'
            },
            {
                id: 15,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'dish4.png'
            },
            {
                id: 16,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'meat2.jpg'
            },
        ]
    },
    {
        name: "Супы",
        slides: [
            {
                id: 18,
                name: 'Сулгуни',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 1900,
                img: 'hot-snack4.jpg'
            },
                {
                id: 19,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'dish2.png'
            },
                {
                id: 20,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'dish3.png'
            },
            {
                id: 21,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'dish4.png'
            },
            {
                id: 22,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'dish1.png'
            },
                {
                id:23,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'dish2.png'
            },
        ]
    },
    {
        name: 'Рыбные блюда',
        slides: [
            {
                id: 24,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'fish1.jpg'
            },
                {
                id: 25,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'fish2.jpg'
            },
                {
                id: 26,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'dish3.png'
            },
            {
                id: 27,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'fish3.jpg'
            },
            {
                id: 28,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'fish4.jpg'
            },
        ]
    },
    {
        name: 'Гриль меню ',
        slides: [
            {
                id: 30,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'dish1.png'
            },
                {
                id: 31,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'dish2.png'
            },
                {
                id: 32,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'dish3.png'
            },
            {
                id: 33,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'dish4.png'
            },
            {
                id: 34,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'dish1.png'
            },
                {
                id: 35,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'dish2.png'
            },
        ]
    },
        {
        name: "Фирменные блюда ",
        slides: [
            {
                id: 36,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'dish1.png'
            },
                {
                id: 37,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'dish2.png'
            },
                {
                id: 38,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'dish3.png'
            },
            {
                id: 39,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'dish4.png'
            },
            {
                id: 40,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'dish1.png'
            },
                {
                id: 41,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'dish2.png'
            },
        ]
    },
    {
        name: 'Напитки',
        slides: [
            {
                id: 42,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'drink1.jpg'
            },
                {
                id: 43,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'drink2.jpg'
            },
                {
                id: 44,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'drink3.jpg'
            },
            {

                id: 45,
                name: 'Гусь',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 7900,
                img: 'drink4.jpg'
            },
            {
                id: 46,
                name: 'Ягненок',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 620,
                img: 'drink5.jpg'
            },
                {
                id: 47,
                name: 'Индейка',
                descr: 'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                weight: 'Вес: 225 г',
                price: 450 ,
                img: 'drink6.jpg'
            },
        ]
    },
];

const cartBtn = document.querySelector('.cart-js');
const addBtn = document.querySelectorAll('.cart-add-js');
const checkoutBtn = document.querySelector('.cart__total-btn');
const headerCartNum = cartBtn.querySelector('.header__cart-num');
let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
let exists = false;

const headerCartFull = () => {
    cartBtn.querySelector('.header__cart-num').classList.remove('cart-empty');
    cartBtn.querySelector('.header__cart-num').innerHTML = cartProducts.length;
}

if(cartProducts.length > 0){
    headerCartFull();
}

if(addBtn.length > 0){
    addBtn.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            let id;
            if(e.currentTarget.id){
                id = e.currentTarget.id;
            }
            else{
                id = e.currentTarget.parentNode.parentNode.parentNode.parentNode.id;
            }
            menu.forEach(item => {
                item.slides.forEach(slide => {
                    if(slide.id === Number(id)){
                        cartProducts.forEach(product => {
                            if(product.id === Number(id)){
                                exists = true;
                                alertOpen('Товар уже в корзине!');
                            }
                        })
                        if(!exists){
                            slide.cartAmount = 1;
                            cartProducts.push(slide);
                            alertOpen('Товар добавлен в корзину!');
                        }
                    }
                })
            })
            if(!exists){
                localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                headerCartFull();
            }
            exists = false;
            console.log('products', cartProducts);
        })
    })
}

//header cartBtn click
cartBtn.addEventListener('click', ()=>{
    if(!cartProducts.length){
        modal();
    }
    else if(window.location.href != 'index.html'){
        window.location.replace('cart.html')
    }
})

function loadCart(products) {
    if (products.length > 0) {
        console.log('products', products);
        let amount = document.querySelector('.cart__suptitle');
        amount.innerHTML = `(в корзине ${products.length} товара)`;
        let prodContainer = document.querySelector('.cart__products-js');
        headerCartFull();
        
        prodContainer.innerHTML = '';
        products.forEach(product => {
            let productLayout = `<div class="cart__card-wrap">
                    <div class="cart__card" id=${product.id}>
                        <div class="cart__card-col">
                            <div class="cart__card-pic">
                                <img class="cart__card-img" src=${require('../../assets/images/'+`${product.img}`)} alt="alt">
                            </div>
                            <div class="cart__card-descr">
                                <div class="cart__card-title">${product.name}</div>
                                <p class="cart__card-text">${product.descr}</p>
                            </div>
                        </div>
                        <div class="cart__card-col">
                            <div class="cart__card-amount" > 
                                <div class="cart__card-btn minusBtn amountBtn-js"></div>
                                <div class="cart__card-num">${product.cartAmount}</div>
                                <div class="cart__card-btn plusBtn amountBtn-js"></div>
                            </div>
                            <div class="cart__card-price">${product.price * product.cartAmount} ₽</div>
                            <div>
                                <div class="cart__card-btn amountBtn-js deleteBtn"></div>
                            </div>
                        </div>
                    </div>
                </div>`;
            prodContainer.innerHTML += productLayout;
        })
            const amountBtn = document.querySelectorAll('.amountBtn-js');
            changeAmount(amountBtn);
            total();
    }

    console.log('cartProducts', cartProducts);
};

function total(){
    const prices = document.querySelectorAll('.cart__card-price');
    const total = document.querySelector('.cart__total-price span');
    let minText = document.querySelector('.cart__min-js');
    let totalPrice = 0;
    prices.forEach(price => {
        totalPrice += parseInt(price.innerHTML);
    });
    total.innerHTML = totalPrice + ' ₽'; 
    checkoutBtn.disabled = false;
    if(minText){
            minText.remove();
    }
    if(totalPrice < 1500){
        minText = `<div class="cart__total-text cart__min-js">До бесплатной доставки не хватет: <span>${1500 - totalPrice} ₽</span></div>`;
        total.parentNode.insertAdjacentHTML('afterend', minText);
        checkoutBtn.disabled = true;
    }
}

function changeAmount(amountBtn){
    amountBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            cartProducts.forEach((product, index) => {
                const cartCard = button.parentNode.parentNode.parentNode;
                const num = cartCard.querySelector('.cart__card-num');
                const price = cartCard.querySelector('.cart__card-price');
                if(product.id === Number(cartCard.id)){
                    if(button.classList.contains('minusBtn')){
                        if(num.innerHTML > 1){
                            product.cartAmount -= 1;
                        }
                    }
                    else if(button.classList.contains('plusBtn')){
                        product.cartAmount += 1;
                    }     
                    else if(button.classList.contains('deleteBtn')){
                        cartProducts.splice(index, 1);
                        cartCard.remove();
                        let amount = document.querySelector('.cart__suptitle');
                        amount.innerHTML = `(в корзине ${cartProducts.length} товара)`;
                        
                        
                    }     
                    num.innerHTML = product.cartAmount;
                    price.innerHTML = product.cartAmount * product.price + ' ₽';
                    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
                    if(cartProducts.length > 0){
                        cartBtn.querySelector('.header__cart-num').innerHTML = cartProducts.length;
                    }
                    else{
                        cartBtn.querySelector('.header__cart-num').innerHTML = '';
                        cartBtn.querySelector('.header__cart-num').classList.add('cart-empty');
                    }
                    total();
                }
            })
        });
    })
} 
const url = window.location.href;
const path = url.split("/").pop();
console.log(url.split("/").pop());
console.log(window.location);
if(path === 'cart.html'){
    console.log('cart');
    loadCart(cartProducts);
}
