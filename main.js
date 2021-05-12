//task 1

let userNumb = prompt('Enter a number from 0 to 999 ')

function separateNumb(numb) {
    let result = ['units', 'tens', 'hundreds']
    if (userNumb <= 999 && userNumb >= 0) {
        let number = {}
        for (let i = 0; i < 3; i++) {
            number[result[i]] = numb % 10
            numb = Math.floor(numb / 10)
        }
        return number
    } else {
        console.log('empty obgect')
    }
}
console.log(separateNumb(userNumb))

//task 2

let basketIKEA = [
    {
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
    {
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
    {
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
    {
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
]
let sum = 0
for (let i = 0; i < basketIKEA.length; i++) {
    sum += basketIKEA[i].finPrice() * basketIKEA[i].amount
    console.log(sum)
}
alert(sum)