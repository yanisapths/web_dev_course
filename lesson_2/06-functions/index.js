// functions
function goodbye() {
  console.log("Bye bye");
}

goodbye();
//----------------------------------------------------------------//

// functions with arguments
function goodbyeWithName(firstName, lastName) {
  console.log("Bye bye " + firstName + " " + lastName);
}

goodbyeWithName("Tina", "Doe");
let firstName = "Mary";
let lastName = "Smith";
goodbyeWithName(firstName, lastName);
//----------------------------------------------------------------//

// Calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));
//----------------------------------------------------------------//
