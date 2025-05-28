// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model,year) {
    if (typeof make !== 'string' || typeof model !== 'string') {
      throw new Error('Make and model must be strings');
    }

    if (typeof year !== 'number' || year <= 0) {
      throw new Error('Year must be a positive number');
    }

    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayVehicle() {
    console.log(`Name: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model,year,numberOfDoor) {
  super(make, model,year);

    if (typeof numberOfDoor !== 'number' || numberOfDoor <= 0 || !Number.isInteger(numberOfDoor)) {
      throw new Error('Number of doors must be a positive integer');
    }

    this.numberOfDoor = numberOfDoor;
  }

  displayVehicle() {
    console.log(`Name: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors:${this.numberOfDoor}`);
  }
}

try {
  const car1 = new Car("Toyota", "Taisor", 2021, 4);
  car1.displayVehicle();
} catch (error) {
  console.error("Error creating car:", error.message);
}
