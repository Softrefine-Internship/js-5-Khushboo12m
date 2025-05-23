// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.branches = [];
  }

  addBranch(branchName) {
    if (!this.branches.includes(branchName)) {
      this.branches.push(branchName);
      console.log(`Branch '${branchName}' added to ${this.bankName}.`);
    } else {
      console.log(`Branch '${branchName}' already exists.`);
    }
  }

  removeBranch(branchName) {
    const index = this.branches.indexOf(branchName);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log(`Branch '${branchName}' removed from ${this.bankName}.`);
    } else {
      console.log(`Branch '${branchName}' not found.`);
    }
  }

  displayBranches() {
    console.log(`Branches of ${this.bankName}:`);
    if (this.branches.length === 0) {
      console.log("No branches available.");
    } else {
      this.branches.forEach((branch, index) => {
        console.log(`${index + 1}. ${branch}`);
      });
    }
  }
}

const myBank = new Bank("HDFC");

myBank.addBranch("HDFC Singapore");
myBank.addBranch("HDFC Dubai");
myBank.addBranch("HDFC India");
myBank.displayBranches();

myBank.removeBranch("HDFC Dubai");
myBank.displayBranches();

myBank.removeBranch("HDFC Singapore"); 