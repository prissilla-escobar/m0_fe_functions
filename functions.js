// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting() {
    return "Nice to meet you!";
}

var hi = greeting()
var hola = greeting()

console.log(hi)
console.log(hola)

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
        return `Nice to meet you, ${name}!`;
}

var message = customGreeting("Pri")
var salute = customGreeting("Ragnar")

console.log(message)
console.log(salute)


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last) {
    return `What it do, ${first} ${middle} ${last}?!`
}

var greet = greetPerson("Lex", "Greyson", "Escobar")
var sayHi = greetPerson("Frank", "Arthur", "Escobar")

console.log(greet)
console.log(sayHi)

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num1) {
    return num1*num1
}

var lex = square(5)
var rag = square(98)

console.log(`5 squared is ${lex}`)
console.log(`98 sqared is ${rag}`)


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(num, item) {
    if (num >= 4) {
        console.log(`${item} is stocked!`)
    } else if (num > 0) {
        console.log(`${item} - running LOW!`)
    } else {
        console.log(`${item} - OUT OF STOCK!`)
    }
}



checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"