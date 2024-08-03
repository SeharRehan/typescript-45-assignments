// 38. Cities: Write a function called describe_city() that accepts the name of a city and its
//  country. The function should print a simple sentence, such as Karachi is in Pakistan.
//   Give the parameter for the country a default value. Call your function for three different
//    cities, at least one of which is not in the default country.

function describe_city(city:string, country = "Pakistan"):void {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo","Japan");


// 39. City Names: Write a function called city_country() that takes in the name of a city and 
// its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s
//  returned.


function city_country(city:string, country:string):void {
    console.log(`"${city}, ${country}"`);
}
city_country("Karachi","Pakistan");
city_country("Dehli","India");
city_country("London","United Kingdom");