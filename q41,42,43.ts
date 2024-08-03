// 41. Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

// Define a function that takes an array of strings and prints each name

// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }

// const magicianNames: string[] = ['David Copperfield', 'Houdini', 'David Blaine', 'Penn & Teller'];

// showMagicians(magicianNames);


// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function
// called make_great() that modifies the array of magicians by adding the phrase the Great
// to each magician’s name. Call show_magicians() to see that the list has actually been 
// modified.

// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician + " " + "The Great");
//     }
// }

// const magicianNames: string[] = ['David Copperfield', 'Houdini', 'David Blaine', 'Penn & Teller'];

// showMagicians(magicianNames);

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function
// make_great() with a copy of the array of magicians’ names. Because the original array
// will be unchanged, return the new array and store it in a separate array. Call 
// show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);

        console.log(magician + " " + "The Great");
    }
}

const magicianNames: string[] = ['David Copperfield', 'Houdini', 'David Blaine', 'Penn & Teller'];

showMagicians(magicianNames);