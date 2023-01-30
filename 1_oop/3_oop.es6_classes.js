/*
  The Shape class uses the constructor to set the type of the shape, while also using a getter to return the type property and keep it private and protected. The draw method is abstract and will be implemented by the subclasses.

  The Circle class extends the Shape class and uses its own constructor to set the radius property and implements a getter for it. The draw method overrides the abstract draw method in the Shape class and provides its own implementation for drawing a Circle.

  The Rectangle class also extends the Shape class and uses its own constructor to set the width and height properties and implements getters for them. The draw method overrides the abstract draw method in the Shape class and provides its own implementation for drawing a Rectangle.
*/

class Shape {
  //Abstraction: The constructor sets the type of the shape, but the implementation of how it's drawn is abstracted away
  constructor(type) {
    this._type = type;
  }

  //Encapsulation: The getter returns the value of the type, while keeping the type property private and protected from modification
  get type() {
    return this._type;
  }

  //Abstraction: The draw method is abstract and should be implemented by the subclasses
  draw() {
    throw new Error("The draw method is abstract and must be implemented by a subclass");
  }
}

class Circle extends Shape {
  //Inheritance: The Circle class inherits the properties and methods from the Shape class
  constructor(radius) {
    super("Circle");
    this._radius = radius;
  }

  //Encapsulation: The getter returns the value of the radius, while keeping the radius property private and protected from modification
  get radius() {
    return this._radius;
  }

  //Polymorphism: The draw method overrides the abstract draw method in the Shape class with its own implementation
  draw() {
    console.log(`Drawing a Circle with radius ${this.radius}`);
  }
}

class Rectangle extends Shape {
  //Inheritance: The Rectangle class inherits the properties and methods from the Shape class
  constructor(width, height) {
    super("Rectangle");
    this._width = width;
    this._height = height;
  }

  //Encapsulation: The getters return the values of the width and height, while keeping the width and height properties private and protected from modification
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  //Polymorphism: The draw method overrides the abstract draw method in the Shape class with its own implementation
  draw() {
    console.log(`Drawing a Rectangle with width ${this.width} and height ${this.height}`);
  }
}

//Example usage:
const circle = new Circle(5);
console.log(`Type: ${circle.type}`);
circle.draw();

const rectangle = new Rectangle(10, 20);
console.log(`Type: ${rectangle.type}`);
rectangle.draw();
