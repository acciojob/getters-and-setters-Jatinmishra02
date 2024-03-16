// Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

// Student subclass extending Person
class Student extends Person {
  // Method for studying
  study() {
    console.log(`${this._name} is studying`);
  }
}

// Teacher subclass extending Person
class Teacher extends Person {
  // Method for teaching
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Export the classes
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
