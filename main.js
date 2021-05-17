
//task 2

let catalogIKEA = [
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

let basketIKEA = [
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
if (sum === 0) {
    alert('basket is empty')
} else {
    alert(sum)
}



