
//catalog
/* let catalogIKEA = {
    BEDDA: {
        vendorCode: 300 - 290 - 48,
        group: 'furniture',
        name: 'bed',
        size: 'queen',
        color: 'bleack',
        price: 399,
        amount: 1,
        finPrice: function (discount) {
            return this.price * (1 - (discount || 0))
        }
    },
    CHERAT: {
        vendorCode: 300 - 598 - 90,
        group: 'furniture',
        name: 'chear',
        size: '-',
        color: 'yellow',
        price: 37,
        amount: 6,
        finPrice: function (discount) {
            return this.price * (1 - (discount || 0))
        }
    },
    LAMPDI: {
        vendorCode: 540 - 790 - 148,
        group: 'lamp',
        name: 'diode',
        size: '100 watt',
        color: 'warm',
        price: 8,
        amount: 2,
        finPrice: function (discount) {
            return this.price * (1 - (discount || 0))
        }
    },
    COOOKIE: {
        vendorCode: 985 - 680 - 548,
        group: 'cookie',
        name: 'ginger',
        size: '500 gram',
        color: 'cristmas',
        price: 5,
        amount: 3,
        finPrice: function (discount) {
            return this.price * (1 - (discount || 0))
        }
    }
} */
window.addEventListener('DOMContentLoaded', function () {

    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        sum = document.querySelectorAll('span')
    openBtn = document.querySelector('.open');

    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            header = document.createElement('h2'),
            price = document.createElement('button'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart'),
            field.classList.add('cart-field'),
            price.classList.add('price'),
            closeBtn.classList.add('close');

        header.textContent = 'В корзине';
        /* price.textContent = 'Сумма: '; */
        closeBtn.textContent = 'Закрыть';

        document.body.appendChild(cart);
        cart.appendChild(header);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
        field.appendChild(price);
    }
    createCart();

    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        price = document.querySelector('.price'),
        close = document.querySelector('.close');

    function openCart() {
        cart.style.display = 'block';
    }
    function closeCart() {
        cart.style.display = 'none';
    }
    openBtn.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            let item = products[i].cloneNode(true),
                btn = item.querySelector('button');

            field.appendChild(item);
            products[i].remove();
            btn.remove();
            price.appendChild(sum[i]);
        })

    };

})















/* let basketIKEA = [
    catalogIKEA.BEDDA,
    catalogIKEA.LAMPDI
]


const index = basketIKEA.findIndex(function (chek) {
    return chek.price
})
console.log(basketIKEA[index])

let sum = 0
for (let i = 0; i < basketIKEA.length; i++) {
    sum += basketIKEA[i].finPrice() * basketIKEA[i].amount
    console.log(sum)
}
if (sum === 0) {
    alert('basket is empty')
} else {
    alert(sum)
}
 */

