// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.
class University {
    constructor(name, departments = []) {
      if (typeof name !== 'string' || name.trim() === '') {
        throw new Error('University name must be a non-empty string.');
      }
      if (!Array.isArray(departments)) {
        throw new Error('Departments must be an array.');
      }
      this.name = name;
      this.departments = [];
  
      departments.forEach(dept => {
        if (typeof dept === 'string' && dept.trim() !== '') {
          if (!this.departments.includes(dept)) {
            this.departments.push(dept);
          }
        } else {
          console.warn(`Invalid department name ignored during initialization: '${dept}'`);
        }
      });
    }
  
    addDepartment(departmentName) {
      if (typeof departmentName !== 'string' || departmentName.trim() === '') {
        console.log('Department name must be a non-empty string.');
        return;
      }
      if (this.departments.includes(departmentName)) {
        console.log(`Department '${departmentName}' already exists.`);
        return;
      }
      this.departments.push(departmentName);
      console.log(`Department '${departmentName}' added to ${this.name}.`);
    }
  
    removeDepartment(departmentName) {
      if (typeof departmentName !== 'string' || departmentName.trim() === '') {
        console.log('Department name must be a non-empty string.');
        return;
      }
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

try {
    let myUniversity = new University("GTU", ["Computer Science", "Civil", "Electric", "Civil"]);
    myUniversity.displayDepartments();
  
    myUniversity.addDepartment("Mechanical Engineering");
    myUniversity.addDepartment("Computer Science"); 
  
    myUniversity.removeDepartment("Electric");
    myUniversity.removeDepartment("Biology"); 
  
    myUniversity.displayDepartments();
  } catch (error) {
    console.error('Error:', error.message);
  }

