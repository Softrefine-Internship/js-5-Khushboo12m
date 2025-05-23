// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.
class University {
  constructor(name) {
      this.name = name;
      this.departments = [];
  }

  addDepartment(departmentName) {
      if (!this.departments.includes(departmentName)) {
          this.departments.push(departmentName);
          console.log(`Department '${departmentName}' added to ${this.name}.`);
      } else {
          console.log(`Department '${departmentName}' already exists.`);
      }
  }

  removeDepartment(departmentName) {
      const index = this.departments.indexOf(departmentName);
      if (index !== -1) {
          this.departments.splice(index, 1);
          console.log(`Department '${departmentName}' removed from ${this.name}.`);
      } else {
          console.log(`Department '${departmentName}' not found.`);
      }
  }

  displayDepartments() {
      console.log(`Departments at ${this.name}:`);
      if (this.departments.length === 0) {
          console.log("No departments available.");
      } else {
          this.departments.forEach((dept, index) => {
              console.log(`${index + 1}. ${dept}`);
          });
      }
  }
}

const myUniversity = new University("Ahmedabad University");

myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Mechanical Engineering");
myUniversity.addDepartment("Physics");

myUniversity.displayDepartments();

myUniversity.removeDepartment("Physics");

myUniversity.displayDepartments();

