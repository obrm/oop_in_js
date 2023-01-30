/*
  In this code example, we define an Animal class with a constructor that sets a protected _name property. The _name property is accessed through a getter and setter name. The Animal class also includes a static method create, public method makeSound that implements method chaining and a private method #eat that can only be accessed within the class.

  We then define a Dog class that extends the Animal class and overrides the makeSound method.

  We create instances of Animal and Dog and demonstrate accessing their properties and methods, including the method chaining in the Animal class.
*/

class Animal {
  // Constructor with protected property
  constructor(name) {
    // Protected property
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

  // Public method with method chaining
  makeSound() {
    console.log(`${this.name} makes a sound`);
    return this;
  }
  
  // Private method
  #eat() {
    console.log(`${this.name} is eating`);
  }

  // Method that calls the private method
  performAction() {
    this.#eat();
    return this;
  }
}

class Dog extends Animal {
  // Override the makeSound method from the parent class
  makeSound() {
    console.log(`${this.name} barks`);
    return this;
  }
}

const myAnimal = Animal.create("My Animal");
console.log(myAnimal.name); // "My Animal"
myAnimal.name = "My Updated Animal";
console.log(myAnimal.name); // "My Updated Animal"
myAnimal.makeSound().performAction();
// Output: 
// "My Updated Animal makes a sound"
// "My Updated Animal is eating"

const myDog = new Dog("My Dog");
myDog.makeSound(); // "My Dog barks"
