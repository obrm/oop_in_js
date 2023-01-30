/*
  In this example, the Animal and Dog classes are defined using object literals. The Animal object literal has properties for the name and species of the animal, as well as a method for making a sound.

  The Dog object is created using Object.create and inherits properties and methods from the Animal object. Additional properties and methods are added to the Dog object using Object.assign.

  Finally, a new Dog object is created using Object.create, and its properties and methods are set and called to demonstrate how inheritance works.
*/

// Define the Animal object literal
const Animal = {
  // Property for the name of the animal
  name: '',
  // Property for the species of the animal
  species: '',
  // Method for making a sound
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
};

// Define the Dog object literal
const Dog = Object.create(Animal);

// Add additional properties and methods to the Dog object
Object.assign(Dog, {
  breed: '',
  bark() {
    console.log(`${this.name} barks.`);
  }
});

// Create a new Dog object
const myDog = Object.create(Dog);

// Set the properties of the new Dog object
myDog.name = 'Buddy';
myDog.species = 'Dog';
myDog.breed = 'Labrador';

// Call methods on the Dog object
console.log(myDog.name); // Output: Buddy
console.log(myDog.species); // Output: Dog
console.log(myDog.breed); // Output: Labrador
myDog.makeSound(); // Output: Buddy makes a sound.
myDog.bark(); // Output: Buddy barks.
