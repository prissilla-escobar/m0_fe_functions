// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


/* EX 1: I moved the console log to line 11, entered the curly brackets with where they belong on
on lines 11 and 15, indented the console log. Semi colons on lines 13 & 17 */
function askForName() {
  console.log("Hello, what is your name?");
}

askForName();


/* EX 2: I indented lines 22, created an extra line between line 22 and the return,
removed the indentations from line 26 in front of the curly brackets, print code */
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));


/* EX 3: add a space between parenthesis and curly bracket, move close curly bracket down
and remove indent, spell out function */
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();


/*  EX 4: move open curly bracket to line 44, indent line 45, remove one indent from line 46,
move return to line 48 and indent, closing curly bracket on line 49, semi colon on line 48, wrote
the print for fun   */
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  return avg;
}

console.log(average(10,12))