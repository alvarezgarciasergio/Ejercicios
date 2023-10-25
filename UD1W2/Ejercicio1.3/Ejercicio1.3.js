function sumNumbers(...args) {
    let suma = 0
    for (let arg of args) {
        if (typeof arg === 'number' && !isNaN(arg)) {
            suma = suma + arg
        }
    }
    return suma
}
console.log(sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 }))


