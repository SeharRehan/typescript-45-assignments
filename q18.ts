// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original 
// list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its 
// order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list 
// to show that its order has changed.


// Define the array with five places
const places: string[] = [
    "Paris",
    "Tokyo",
    "New York",
    "Cape Town",
    "Sydney"
];

// Print the original array
console.log("Original array:");
console.log(places);

// Print the array in alphabetical order without modifying the actual list
const alphabeticalPlaces = [...places].sort();
console.log("\nAlphabetical order:");
console.log(alphabeticalPlaces);

// Show that the original array is still in its original order
console.log("\nOriginal array (unchanged):");
console.log(places);

// Print the array in reverse alphabetical order without changing the order of the original list
const reverseAlphabeticalPlaces = [...places].sort().reverse();
console.log("\nReverse alphabetical order:");
console.log(reverseAlphabeticalPlaces);

// Show that the original array is still in its original order
console.log("\nOriginal array (unchanged):");
console.log(places);

// Reverse the order of the list
places.reverse();
console.log("\nArray after reversing order:");
console.log(places);

// Reverse the order of the list again to return to the original order
places.reverse();
console.log("\nArray after reversing order again (original order restored):");
console.log(places);

// Sort the array in alphabetical order
places.sort();
console.log("\nArray sorted in alphabetical order:");
console.log(places);

// Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("\nArray sorted in reverse alphabetical order:");
console.log(places);


