// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

/* The .includes() method is called on the string "Hello World"
It will determine if the parameter "hello" is in the string
The return value is "true" */
"Hello World".includes("Hello");

/*The .endsWith method is called on the string "Hello World"
It will determine if the string ends with the given parameter "hello"
The return value is false */
"Hello World".endsWith("Hello");

/* The endsWith method is called on the string "Hello World"
It will determin if the string ends with the given parameter "rld"
The return value is true */
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// .italics()
// .trim()
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var favoriteFlowers = " Daisies";
var favoriteMeal = "    Tortilla Soup       ";

/* the .repeat() method is called on the favoriteFlowers variable, which stores the string object " Daisies"
 This method will return the object the amount of times set in the parameter
 In this example, " Daisies" will be repeated 5 times and will read " Daisies Daisies Daisies Daisies Daisies" */
console.log(favoriteFlowers.repeat(5))

/* the .trim() method is called on the favorite Meal variable, which stores the string object
"   Tortilla Soup       ". This method will return the object with any white space removed, creating a
new string. In this example the return will be "Tortilla Soup" */
console.log(favoriteMeal.trim())



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var favoriteDrinks = ["Moscow Mule", "Cabernet", "White Claw", "Margarita"]
var petAges = [7, 6, 5]

/* The .join method is called on the favoriteDrinks array, which stores 4 strings as elements
This method will join the elements with the parameters set. In this example all four elements will
be joined by the parameters " & ". The return will be Moscow Mule & Cabernet & White Claw & Margarita" */
console.log(favoriteDrinks.join(` & `))

/* The .reverse method is called on the petAges array which stores 3 number elements.
This method will reverse the order of the elements. In this example, the return will be
"[5, 6, 7]*/
console.log(petAges.reverse())

