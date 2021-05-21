const hl = document.getElementById('hello')
console.dir(hl)
const header = document.querySelector('.header')

setTimeout(() => {
    changStyle(hl, 'Pfff')
}, 1500)
setTimeout(() => {
    changStyle(header, 'Scers')
}, 1500)



function changStyle(nod, text) {
    nod.style.color = 'red'
    nod.textContent = text
    nod.style.backgroundColor = 'yellow'
}




