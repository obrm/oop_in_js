# OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT

JavaScript is a multi-paradigm programming language that has support for object-oriented programming (OOP) as one of its paradigms. JavaScript implements OOP using a prototype-based inheritance mechanism, which is different from class-based inheritance as seen in languages like Java and C++.

In JavaScript, objects are the basic building blocks for OOP. An object is a collection of properties and methods that define its behavior. Each object has a prototype, which is another object that it inherits properties and methods from. When an object accesses a property or method that is not found on itself, it looks up the prototype chain to see if it can find the property or method there.

JavaScript supports object-oriented concepts such as inheritance, encapsulation, abstraction, and polymorphism, although the implementation of these concepts may be different from what you would see in a class-based language.

JavaScript is considered a prototype-based language, which is a subset of object-oriented languages. In prototype-based OOP, objects inherit directly from other objects, whereas in class-based OOP, objects inherit from classes, which are templates for creating objects.

Overall, JavaScript provides a flexible and dynamic approach to OOP, allowing developers to create and manipulate objects and handle inheritance in a way that suits their needs.

## JavaScript as a Prototype-Based Language

Inheritance in JavaScript allows objects to inherit properties and methods from other objects. This allows objects to share behavior and characteristics, reducing the amount of code that needs to be written and increasing code reuse. JavaScript implements inheritance using prototypes. Each object has a reference to a prototype object, and if a property or method is not found on the object itself, it is looked up in its prototype and so on up the prototype chain until it is found or until the end of the chain is reached.

Encapsulation in JavaScript refers to the practice of hiding the internal implementation details of an object and exposing only the necessary information to the outside world. This is typically achieved in JavaScript by using closures, which allow functions to access private variables and methods.

Abstraction in JavaScript involves the creation of objects that have the same interface but different implementations. This allows objects to be used interchangeably, even if they have different underlying implementation details.

Polymorphism in JavaScript refers to the ability of objects to take on many forms. This can be achieved by creating objects that share the same interface but have different implementations, allowing them to be used interchangeably.

In class-based object-oriented languages like Java and C++, these concepts are implemented using classes, which are templates for creating objects. However, in JavaScript, prototypes are used instead of classes to define objects and handle inheritance. This difference in implementation is what makes JavaScript a prototype-based language and a subset of object-oriented languages.

Overall, JavaScript supports many of the object-oriented concepts that are found in class-based languages, but the implementation of these concepts may be different and more flexible, allowing developers to handle inheritance and object creation in a way that suits their needs.

## ES6 Classes are just Syntactic Sugar

"Syntactic sugar" is a term used to describe a syntax or feature that makes code easier to read or write, but does not add any new functionality.

In the case of ES6 classes, the class syntax provides a more familiar and intuitive way to define objects and handle inheritance, compared to the prototype-based inheritance mechanism used in previous versions of JavaScript. However, under the hood, ES6 classes are just a syntax for the same prototype-based inheritance mechanism.

In other words, the class syntax is just a sugar coating on top of the existing prototype-based inheritance mechanism, making it easier to use, but not changing the underlying mechanism itself.

For example, the following class definition:

```
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

is equivalent to the following constructor function and prototype definition:

```
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log(`${this.name} makes a sound.`);
};
```

In both cases, the Animal class or constructor function can be used to create objects and handle inheritance in the same way, but the class syntax provides a more readable and familiar way to define objects.

## All Roads lead to Rome

In JavaScript, objects are the basic building blocks for object-oriented programming. Classes, constructor functions, and Object.create are just different syntaxes for creating objects and handling inheritance.

When a class is defined using the class syntax, JavaScript internally uses the prototype-based inheritance mechanism to set up the relationship between the class and its subclasses. The constructor function serves as a blueprint for creating objects, and the class syntax provides a way to define methods and properties on the object's prototype.

When a constructor function is defined using the function syntax, JavaScript sets up the inheritance relationship by linking the object's prototype property to the constructor function's prototype object. The new operator is used to create an object based on the constructor function, and the object inherits properties and methods from the constructor function's prototype object.

With Object.create, an object is created and linked to an existing object using the Object.create method. The created object inherits properties and methods from the object it was linked to. This allows for more direct control over inheritance and the prototype chain.

In essence, all three approaches (class, constructor function, and Object.create) are ways to create objects and handle inheritance in JavaScript. The choice of approach depends on personal preference, project requirements, and the specific use case.

## Encapsulation

Encapsulation is a fundamental principle of object-oriented programming that refers to the practice of encapsulating or hiding the internal state of an object from the outside world. This is achieved by declaring object properties and methods as private or protected, making them only accessible within the class or subclass, and providing public getters and setters or methods to access or modify the internal state in a controlled manner.

The goal of encapsulation is to create self-contained objects that have a well-defined interface, or public API, through which they interact with the rest of the system. This helps to maintain the integrity of the object by preventing unintended access or modification of the internal state and makes it easier to reason about the behavior of the object.

Encapsulation also helps to promote modularity and reuse in software development, as it allows objects to be defined and used independently of the rest of the system. Furthermore, it makes the code easier to maintain and less prone to bugs, as changes to the internal implementation of an object do not affect other parts of the system.

## Protected and Private Properties and Methods

Protected and private properties and methods in object-oriented programming serve different purposes.

Protected properties and methods are accessible within the class and its subclasses, but not outside of the class hierarchy. They are used to restrict direct access to an object's internal state, while still allowing subclass to access and modify the data as necessary. This helps to enforce encapsulation, which is a fundamental principle of object-oriented programming.

Private properties and methods, on the other hand, are only accessible within the class itself and are not accessible from outside the class or from subclasses. This provides a higher level of control over the object's internal state and helps to maintain the integrity of the object.

Using private properties and methods can help make the code more maintainable and reduce the risk of bugs by preventing unintended access to or modification of the object's internal state. Additionally, it can also make the code easier to understand and test, as the implementation details are hidden and only the public interface is exposed.


## JavaScript Language Doesn't Enforce Private and Protected Features

In JavaScript, until ECMAScript 2020, the privacy of class properties and methods were not enforced by the language itself, meaning that there is no direct way to prevent access to private or protected properties and methods. Instead, it is up to the programmer to follow a convention of prefixing the names of private properties and methods with an underscore, or using closures, to indicate that they should not be directly accessed from outside the class.

For example, in the code below, the _privateMethod and _privateProperty are considered to be private, because of the underscore prefix, but they can still be accessed from outside the class if the programmer chooses to do so:

```
class MyClass {
  constructor() {
    this._privateProperty = 'private';
  }

  _privateMethod() {
    console.log('This is a private method');
  }
}

const myInstance = new MyClass();
console.log(myInstance._privateProperty); // Output: 'private'
myInstance._privateMethod(); // Output: 'This is a private method'
```

The same applies to protected properties and methods, which are indicated using the protected keyword. The protected keyword is used in some object-oriented languages, such as Java and C#, to indicate that a property or method can be accessed from within the class and its subclasses, but not from outside the class hierarchy. However, in JavaScript, the protected keyword is not recognized by the language and has no special meaning.

In summary, the privacy of class properties and methods in JavaScript is a convention, rather than a strict enforcement by the language. It is up to the programmer to follow best practices and avoid accessing private or protected properties and methods from outside the class.

### The hash # prefix

The use of the hash symbol (#) is part of the ECMAScript 2020 specification and does provide privacy for class members when used in this manner. The privacy of these class members is enforced by the JavaScript engine and they cannot be accessed directly from outside the class.

The use of the hash symbol as a private class member notation is a **relatively new addition to the language**, and its behavior may be subject to change in future versions of ECMAScript. However, it is considered a reliable and concise way to define private class members in JavaScript.

## Getters & Setters

Getters and setters are special methods in object-oriented programming that provide controlled access to an object's properties. They are used to define the logic for retrieving or setting the value of a property, allowing you to add additional behavior when reading or writing a property.

Getters are used to retrieve the value of a property. A getter is defined using the get keyword, followed by a function that returns the value of the property. When the property is accessed, the getter function is executed and the returned value is used. For example:

```
class MyClass {
  constructor(private _property) {}

  get property() {
    console.log(`Getting property: ${this._property}`);
    return this._property;
  }
}

const myInstance = new MyClass('Value');
console.log(myInstance.property); // NOTE: we are not invoking the method with brackets!
```

Setters are used to set the value of a property. A setter is defined using the set keyword, followed by a function that takes the new value of the property as an argument. When the property is assigned a new value, the setter function is executed and the value of the property is set. For example:

```
class MyClass {
  private _property;

  set property(value) {
    console.log(`Setting property: ${value}`);
    this._property = value;
  }
}

const myInstance = new MyClass();
myInstance.property = 'Value'; // NOTE: we are not invoking the method with brackets, we are doing an assignment!
```

Getters and setters are useful in situations where you want to add additional behavior when reading or writing a property. For example, you can use a getter to add validation or formatting when retrieving the value of a property, or you can use a setter to add additional behavior when setting the value of a property, such as triggering an event or updating another property. They also provide a way to enforce encapsulation, as they allow you to control the access and modification of an object's properties.

## Static Methods and Properties

In JavaScript ES6 classes, a static method or property is a method or property that belongs to the class itself, rather than an instance of the class.

Static methods can be called directly on the class, without creating an instance of the class, using the class name followed by the method name. For example:

```
class MyClass {
  static staticMethod() {
    console.log('This is a static method');
  }
}

MyClass.staticMethod(); // Output: 'This is a static method'
```

Static properties are properties that belong to the class and can be accessed directly on the class, without creating an instance of the class, using the class name followed by the property name. For example:

```
class MyClass {
  static staticProperty = 'This is a static property';
}

console.log(MyClass.staticProperty); // Output: 'This is a static property'
```

Static methods and properties are useful in situations where you want to create utility methods or properties that are associated with a class, but do not depend on the state of an instance of the class. They can also be used to create shared resources that can be used by multiple instances of the class. Additionally, they can be used to create singleton objects, as they can only have one instance in the entire application.


