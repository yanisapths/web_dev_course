// Objects
let firstName = "Alice";
let lastName = "Doe";

let person = {
  firstName: firstName,
  lastName: lastName,
  age: 30,
};

// Access the object

// 1. Dot Notation
console.log(
  person.firstName +
    " " +
    person.lastName +
    " is " +
    person.age +
    " years old. "
);

// 2. Bracket Notation
console.log(person["firstName"]);
