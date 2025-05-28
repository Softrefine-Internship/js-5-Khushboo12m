// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author,publicationYear) {
    if (typeof title !== 'string' || title.trim() === '') {
      throw new Error("Title must be a non-empty string");
    }
    if (typeof author !== 'string' || author.trim() === '') {
      throw new Error("Author must be a non-empty string");
    }
    if (typeof publicationYear !== 'number' || publicationYear <= 0) {
      throw new Error("Publication year must be a positive number");
    }

    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
}
 
}

class Ebook extends Book {
  constructor(title, author,publicationYear,price) {
    super(title, author,publicationYear);

    if (typeof price !== 'number' || price < 0) {
      throw new Error("Price must be a non-negative number");
    }

    this.price = price;
  }

  displayDetails() {
    super.displayDetails(); 
    console.log(`Price: Rs.${this.price}`);
}
}

try {
  const myEbook = new Ebook("The JavaScript Course", "John Do", 2025, 250);
  myEbook.displayDetails();
} catch (error) {
  console.error("Error:", error.message);
}
