// 16. More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of 
// your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages,
//   one for each person in your list.


let guestArr : string[] = ["Farha", "Azhan", "Abdullah", "Hashim"]
// let canNotAttend: string = "Azhan";
// let newGuest: string = "Amna"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
// guestArr.map((item) => (
//    console.log(`Dear ${item}, I found a bigger Dinner Table`)
   
// ));

// let guestBegin: string = "Aimaa";
// guestArr.unshift(guestBegin);
// console.log(guestArr);

// let middleGuest: string = "Maryam";
// let middleIndex = guestArr.length/2
// guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr);

// guestArr.push("fatima")
// console.log(guestArr);

// guestArr.map((item) => (
//     console.log(`Dear ${item}, You are cordinally Invited to a Dinner`)
// ));



// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them
//  know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know 
// they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list
//  to make sure you actually have an empty list at the end of your program.

console.log("I can inivite only two people for Dinner");

while (guestArr.length>2) {
    let removeGuest = guestArr.pop()
    console.log(`Dear ${removeGuest} you are not invited to the Dinner`);
    }

guestArr.map((item) =>
    console.log(`Dear ${item}, You are still invited to the Dinner`)
);

guestArr.pop()
console.log(guestArr);


