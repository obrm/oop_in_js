
// * ES6 Classes

// Class declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const mazal = new Person('Mazal Levy', 1996);
console.log(mazal);
mazal.calcAge();
console.log(mazal.age);

console.log(mazal.__proto__ === Person.prototype);

// Person.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
mazal.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens?
// 3. Classes are executed in strict mode
Person.hey();

/*
  ? First-Class Citizens ?
  In JavaScript, a class is a special type of code that you can use to create objects with similar properties and methods. And, "first-class citizens" means that classes in JavaScript can be used and manipulated just like any other value, such as a number or a string.

  For example, you can assign a class to a variable, pass it as an argument to a function, or return it as a value from a   function. This makes classes a fundamental and versatile part of the language.

  It means that classes have the same level of importance and treatment as other variables and data types, such as numbers and strings. This means that classes can be assigned to variables, passed as arguments to functions, and used in the same ways as other values in the language.
*/

// * Inheritance and Polymorphism

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2023 - this.birthYear} years old, but as a student I feel more like ${2023 - this.birthYear + 10}`
    );
  }
}

const said = new Student('Said Amar', 2001, 'Computer Science');
said.introduce();
said.calcAge();
