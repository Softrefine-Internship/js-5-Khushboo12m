//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
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

const Rectangle1 = new Rectangle(10, 5);

console.log(`Area: ${Rectangle1.getArea()}`);         
console.log(`Perimeter: ${Rectangle1.getPerimeter()}`); 
