/*
  In this example, the Animal and Dog classes are defined using constructor functions. The Animal constructor function takes two arguments, name and species, and sets them as properties on the this object, which refers to the object being constructed. The Animal class also has a prototype method, makeSound, which logs a message to the console.

  The Dog constructor function calls the Animal constructor function using call to set this to the new Dog object, and sets additional properties for the Dog object, such as breed. The prototype of the Dog constructor function is then set to be an object created from the Animal prototype using Object.create. This allows the Dog class to inherit methods and properties from the Animal class.

  Finally, the Dog class has its own prototype method, bark, which logs a message to the console. A new Dog object is created using the new keyword, and its properties and methods are called to demonstrate how inheritance works.
*/

// Define the Animal constructor function
function Animal(name, species) {
  // `this` refers to the object being constructed
  this.name = name;
  this.species = species;
}

// Define a prototype method for the Animal class
Animal.prototype.makeSound = function () {
  console.log(`${this.name} makes a sound.`);
};

// Define the Dog constructor function
function Dog(name, breed) {
  // Call the Animal constructor function using `call` to set `this` to the new Dog object
  Animal.call(this, name, 'Dog');

  // Set additional properties for the Dog object
  this.breed = breed;
}

// Set the prototype of the Dog constructor function to be an object created from the Animal prototype
Dog.prototype = Object.create(Animal.prototype);

// Reset the constructor property of the Dog prototype to the Dog constructor function
Dog.prototype.constructor = Dog;

// Define a prototype method for the Dog class
Dog.prototype.bark = function () {
  console.log(`${this.name} barks.`);
};

// Create a new Dog object
const myDog = new Dog('Buddy', 'Labrador');

// Call methods on the Dog object
console.log(myDog.name); // Output: Buddy
console.log(myDog.species); // Output: Dog
console.log(myDog.breed); // Output: Labrador
myDog.makeSound(); // Output: Buddy makes a sound.
myDog.bark(); // Output: Buddy barks.
