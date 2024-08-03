// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and 
// one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


//*******************solution******************


// • Tests for equality and inequality with strings
const string1: string = "Mango";
const string2: string = "Kiwi";
console.log(string1 === string2); 
console.log(string1 !== string2); 

// • Tests using the lower case function
const mixedCaseString: string = "HelloWorld";
console.log(mixedCaseString.toLocaleLowerCase()==="helloworld");

// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
const num1 : number = 65;
const num2 : number = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// • Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

// • Test whether an item is in a array
// • Test whether an item is not in a array
const Days: string[]= ["Saturday","sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
console.log(Days.includes("Saturday"));
console.log(Days.includes("saturday"));
