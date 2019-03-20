const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

console.log(integers.sort((a,b) => a - b).reverse().filter(element => element < 19).map(item => (item * 1.5) - 1).reduce((total,next) => total += next))


let line = integers.sort(function(a, b){return a-b});
line = integers.reverse()

console.log(line)

const filter = integers.filter(number => {
   let condition = false
    if (number < 19){
        condition = true
    }
    return condition
})

console.log(filter)
111.5

let multiply = filter.map(number => {
    return number * 1.5 -1
})

console.log(multiply)

let reduce = multiply.reduce((x,y)=> {
   return x + y
})

console.log(reduce)