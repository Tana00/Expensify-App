// OBJECT DESTRUCTURING

// const person = {
//   name: "Happiness",
//   age: 27,
//   location: {
//     city: "Lagos",
//     temp: 24,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`it's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//  ARRAY DESTRUCTURING

// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19147",
// ];

// const [, city, state] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$3.00", "$3.50", "$3.75"];

const [itemName, , mediumPrice, ,] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
