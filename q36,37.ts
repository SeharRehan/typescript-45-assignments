// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of
// a message that should be printed on the shirt. The function should print a sentence
// summarizing the size of the shirt and the message printed on it. Call the function.

// function make_shirt(size: string, messaage: string):void{
//     console.log(`Im making a ${size} T.shirt with the message "${messaage}"`);
// }
// make_shirt("Meduim", "I Love Typescript!");



// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt with
// the default message, and a shirt of any size with a different message.

function make_shirt(size = "L", messaage = "I Love TYpescript!"):void{
    console.log(`Im making a ${size} T.shirt with the message "${messaage}"`);
}
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "I am Programmer.");