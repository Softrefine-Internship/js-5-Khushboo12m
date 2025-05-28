// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    if (typeof radius !== 'number' || radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    if (typeof base !== 'number' || base <= 0 || typeof height !== 'number' || height <= 0) {
      throw new Error('Base and height must be positive numbers');
    }
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }
}

try {
  const circle = new Circle(5);
  console.log(`Area of Circle: ${circle.getArea().toFixed(2)}`);

  const triangle = new Triangle(10, 6);
  console.log(`Area of Triangle: ${triangle.getArea()}`);

  const shape = new Shape();
  console.log(`Area of Shape: ${shape.getArea()}`);
} catch (error) {
  console.error("Error:", error.message);
}
