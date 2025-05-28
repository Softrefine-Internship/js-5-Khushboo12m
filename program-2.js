//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    if (typeof width !== 'number' || width <= 0) {
      throw new Error('Width must be a positive number');
    }

    if (typeof height !== 'number' || height <= 0) {
      throw new Error('Height must be a positive number');
    }

    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

try {
  const rectangle1 = new Rectangle(10, 5);

  console.log(`Area: ${rectangle1.getArea()}`);         
  console.log(`Perimeter: ${rectangle1.getPerimeter()}`);
} catch (error) {
  console.error('Error creating rectangle:', error.message);
}
