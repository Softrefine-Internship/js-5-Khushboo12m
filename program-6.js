// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error("Name must be a non-empty string");
    }

    if (typeof salary !== 'number' || salary <= 0) {
      throw new Error("Salary must be a positive number");
    }

    this.name = name;
    this.salary = salary; 
  }

  getAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department, bonus) {
    super(name, salary); 

    if (typeof department !== 'string' || department.trim() === '') {
      throw new Error("Department must be a non-empty string");
    }

    if (typeof bonus !== 'number' || bonus < 0) {
      throw new Error("Bonus must be a non-negative number");
    }

    this.department = department;
    this.bonus = bonus; 
  }

  getAnnualSalary() {
    return super.getAnnualSalary() + this.bonus;
  }

  displayDetails() {
    console.log(`Name: ${this.name}, Department: ${this.department}, Annual Salary: $${this.getAnnualSalary()}`);
  }
}

try {
  const manager1 = new Manager("", 5000, "HR", 10000);
  manager1.displayDetails();
} catch (error) {
  console.error("Error creating manager1:", error.message);
}

try {
  const manager2 = new Manager("Bob", 7000, "IT", 15000);
  manager2.displayDetails();
} catch (error) {
  console.error("Error creating manager2:", error.message);
}
