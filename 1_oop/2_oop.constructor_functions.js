/*
  Here's an example of abstraction, encapsulation, inheritance, and polymorphism using constructor functions

  This code demonstrates the use of object-oriented programming concepts such as abstraction, encapsulation, inheritance, and polymorphism in JavaScript. It first shows how to implement these concepts using a constructor function and then using ES6 classes. The example creates two objects: a Car and a Dog. The Car and Dog classes inherit from a parent class Vehicle and Animal, respectively, and have their own unique properties and methods. The Car class encapsulates its manufacturer property and exposes it through getters and setters. The Dog class encapsulates its breed property and exposes it through a getter and setter. The drive and speak methods in the Car and Dog classes demonstrate polymorphism, as they override the methods in the parent classes.

*/


//Abstracting the common properties and methods in a base class
//and extending it to child classes
const Vehicle = function (name) {
  this.name = name;
};

drive = function () {
  return `${this.name} is driving`;
};

//Encapsulation example
//Hiding the implementation details and only exposing the necessary details through methods
const Car = function (name, manufacturer) {

  //Inheritance example
  //Accessing the properties and methods of the parent class
  Vehicle.call(this, name);

  //Encapsulation example
  //Making properties private by only exposing them through getters and setters
  let _manufacturer = manufacturer;

  this.getManufacturer = function () {
    return _manufacturer;
  };

  this.setManufacturer = function (manufacturer) {
    _manufacturer = manufacturer;
  };
};

//Polymorphism example
//Overriding the drive method of the parent class
Car.prototype.drive = function () {
  return `${this.name} made by ${this.getManufacturer()} is driving`;
};

const car = new Car("Honda Civic", "Honda");
console.log(car.drive()); // Honda Civic made by Honda is driving

//Abstracting the common properties and methods in a base class
//and extending it to child classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return `${this.name} is making a sound`;
  }
}

//Encapsulation example
//Hiding the implementation details and only exposing the necessary details through methods
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this._breed = breed;
  }

  get breed() {
    return this._breed;
  }

  set breed(value) {
    this._breed = value;
  }

  makeSound() {
    return `${this.name} of breed ${this.breed} is Barking`;
  }
}

//Polymorphism example
//Overriding the makeSound method in the child class
const dog = new Dog("Fido", "Golden Retriever");
console.log(dog.makeSound()); // Fido of breed Golden Retriever is Barking
