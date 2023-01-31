/*
  In this example, Animal is a base object that defines properties and methods that are common to all animals. The _type property is encapsulated by making it private, and the makeSound method is abstracted by making it an empty method that can be overridden by child objects.

  The Dog object is then created using the Object.create() method, which allows it to inherit properties and methods from the Animal object. The Dog object overrides the makeSound method to implement its own bark.

  Finally, the example demonstrates polymorphism by using a Dog object in place of an Animal object, as a Dog is also an Animal.
*/

// Create a base object that defines properties and methods common to all animals
const Animal = {
  name: 'Animal',

  // Encapsulate the property by making it private
  _type: 'Mammal',

  getType: function () {
    return this._type;
  },

  // Abstract the method by making it to be overriden by child objects
  makeSound: function () { },
};

// Create a dog object that inherits from the Animal object
const Dog = Object.create(Animal, {
  name: {
    value: 'Dog',
  },

  // This is a way of defining object properties using the Object.defineProperties method (behind the scenes). The 'value' property specifies the value for the property being defined, which in this case is a function.
  // The syntax with Object.defineProperties is being used here because it allows for more fine-grained control over property definitions, such as setting a property to be read-only, enumerable or configurable, etc.
  _bark: {
    value: function () {
      console.log('Woof!');
    },
  },

  makeSound: {
    value: function () {
      this._bark();
    },
  },
});

// Polymorphism in action: a dog object is also an Animal object
// We create an instance of the Dog object
const myDog = Object.create(Dog);
console.log(myDog.getType()); // 'Mammal'
console.log(myDog.name); // "Dog"
myDog.makeSound(); // "Woof!"

