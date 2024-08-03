// 3. Name Cases: Store a person’s name in a variable, and then print that person’s
// name in lowercase, uppercase, and titlecase.

let firstName: string = "John Doe";
console.log("Lowercase:", firstName.toLowerCase());
console.log("Uppercase:", firstName.toUpperCase());
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  
  console.log("Titlecase: ", toTitleCase(firstName));


