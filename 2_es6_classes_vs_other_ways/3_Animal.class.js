// Define the Animal class
class Animal {
  // Constructor with protected property
  constructor(name) {
    this._name = name;
  }

  // Getter for protected property 'name'
  get name() {
    return this._name;
  }

  // Setter for protected property 'name'
  set name(value) {
    this._name = value;
  }


  // Static method
  static create(name) {
    return new Animal(name);
  }

  // Public method
  makeSound() {
    return `${this.name} makes a sound`;
  }

  // Private method
  #eat() {
    console.log(`${this.name} is eating`);
  }

  // Method that calls the private method with method chaining
  performAction() {
    this.#eat();
    return this;
  }
}

// Define the Dog class and inherit from Animal
class Dog extends Animal {
  // constructor to set the breed property
  constructor(name, breed) {
    // calling the parent constructor to set the name property
    super(name);
    this._breed = breed;
  }

  // getter for the breed property
  get breed() {
    return this._breed;
  }

  // setter for the breed property
  set breed(value) {
    this._breed = value;
  }

  // overriding the makeSound method to return the specific sound made by a dog
  makeSound() {
    // calling the parent makeSound method
    return `${super.makeSound()} (But a dog barks)`;
  }
}

const myAnimal = Animal.create("My Animal");
console.log(myAnimal.name); // "My Animal"
myAnimal.name = "My Updated Animal";
console.log(myAnimal.name); // "My Updated Animal"
console.log(myAnimal.performAction().makeSound());
// Output:
// "My Updated Animal is eating"
// "My Updated Animal makes a sound"


// creating a new Dog object
const myDog = new Dog("Max", "Labrador");

// accessing the properties and methods of the Dog object
console.log(myDog.name); // Output: Max
console.log(myDog.breed); // Output: Labrador
console.log(myDog.makeSound()); // Output: Some generic animal sound (But a dog barks)
