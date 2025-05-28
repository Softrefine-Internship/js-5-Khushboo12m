// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.
class Product {
  constructor(productId, name, price) {
    if (typeof productId !== 'number' || productId <= 0) {
      throw new Error("Product ID must be a positive number.");
    }
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error("Product name must be a non-empty string.");
    }
    if (typeof price !== 'number' || price <= 0) {
      throw new Error("Price must be a positive number.");
    }

    this.productId = productId;
    this.name = name;
    this.price = price;
  }

  calculateTotalPrice(quantity) {
    if (typeof quantity !== 'number' || quantity <= 0) {
      throw new Error("Quantity must be a positive number.");
    }
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, name, price, warrantyPeriod) {
    super(productId, name, price);

    if (typeof warrantyPeriod !== 'number' || warrantyPeriod < 0) {
      throw new Error("Warranty period must be a non-negative number.");
    }

    this.warrantyPeriod = warrantyPeriod;
  }

  calculateTotalPrice(quantity) {
    const baseTotal = super.calculateTotalPrice(quantity);
    const warrantyCharge = this.warrantyPeriod * 2; 
    return baseTotal + warrantyCharge;
  }
}

try {
  const shampoo = new PersonalCareProduct(101, "Herbal Shampoo", 10, 12);
  const quantity = 3;
  const totalPrice = shampoo.calculateTotalPrice(quantity);

  console.log(`Product: ${shampoo.name}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Warranty Period: ${shampoo.warrantyPeriod} months`);
  console.log(`Total Price: $${totalPrice}`);
} catch (error) {
  console.error("Error:", error.message);
}
