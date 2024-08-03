// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is 
// in your array. If the fruit is in your array, the if block should print a statement, 
// such as You really like bananas!

const favoriteFruits: string[] = ["Banana","cherry","Apple"];
if(favoriteFruits.includes("Banana")){
    console.log("I really like Bananas!");
}
if(favoriteFruits.includes("Cherry")){
    console.log("I really like Cherries!");
}
if(favoriteFruits.includes("Mango")){
    console.log("I really like Mangos!")
}  else{
        console.log("Mangos are not in your favorite fruits list.");  
    }
    
if (favoriteFruits.includes("Apple")){
    console.log("I really like Apples!");
}
if (favoriteFruits.includes("Strawberry")){
    console.log("I really like Strawberries!");
} else{
    console.log("Strawberries are not in your favorite fruits list.");  
}
