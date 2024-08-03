// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life.
//  Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the
//  person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the 
// person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the 
// person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the
//  person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

import inquirer from "inquirer";
let age = await inquirer.prompt({
    name: "personAge",
    message: "what is your age?",
    type: "number"
})

if (age.personAge < 2){
    console.log("the pereson is a baby");
    
}
else if (age.personAge >= 2 && age.personAge < 4){
    console.log("the person is a toddler");
    
}
else if (age.personAge >= 4 && age.personAge < 13){
    console.log("the person is a kid");
    
}
else if (age.personAge >= 13 && age.personAge < 20){
    console.log("the person is a teenager");
    
}
else if (age.personAge >= 20 && age.personAge < 65){
    console.log("the person is a adult");
    
}
else if (age.personAge > 65){
    console.log("the person is a elder");
    
}