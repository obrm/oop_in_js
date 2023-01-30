## Encapsulation 

Encapsulation is a fundamental principle of object-oriented programming that refers to the practice of encapsulating or hiding the internal state of an object from the outside world. This is achieved by declaring object properties and methods as private or protected, making them only accessible within the class or subclass, and providing public getters and setters or methods to access or modify the internal state in a controlled manner.

The goal of encapsulation is to create self-contained objects that have a well-defined interface, or public API, through which they interact with the rest of the system. This helps to maintain the integrity of the object by preventing unintended access or modification of the internal state and makes it easier to reason about the behavior of the object.

Encapsulation also helps to promote modularity and reuse in software development, as it allows objects to be defined and used independently of the rest of the system. Furthermore, it makes the code easier to maintain and less prone to bugs, as changes to the internal implementation of an object do not affect other parts of the system.


## Protected and Private Properties and Methods

Protected and private properties and methods in object-oriented programming serve different purposes.

Protected properties and methods are accessible within the class and its subclasses, but not outside of the class hierarchy. They are used to restrict direct access to an object's internal state, while still allowing subclass to access and modify the data as necessary. This helps to enforce encapsulation, which is a fundamental principle of object-oriented programming.

Private properties and methods, on the other hand, are only accessible within the class itself and are not accessible from outside the class or from subclasses. This provides a higher level of control over the object's internal state and helps to maintain the integrity of the object.

Using private properties and methods can help make the code more maintainable and reduce the risk of bugs by preventing unintended access to or modification of the object's internal state. Additionally, it can also make the code easier to understand and test, as the implementation details are hidden and only the public interface is exposed.