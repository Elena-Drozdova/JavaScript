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