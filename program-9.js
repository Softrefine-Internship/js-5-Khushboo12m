// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
class Bank {
  constructor(bankName, branches = []) {
    if (typeof bankName !== 'string' || bankName.trim() === '') {
      throw new Error('Bank name must be a non-empty string.');
    }
    if (!Array.isArray(branches)) {
      throw new Error('Branches must be an array.');
    }

    this.bankName = bankName;
    this.branches = [];

    branches.forEach(branch => {
      if (typeof branch === 'string' && branch.trim() !== '') {
        if (!this.branches.includes(branch)) {
          this.branches.push(branch);
        }
      } else {
        console.warn(`Invalid branch name ignored during initialization: '${branch}'`);
      }
    });
  }

  addBranch(branchName) {
    if (typeof branchName !== 'string' || branchName.trim() === '') {
      console.log('Branch name must be a non-empty string.');
      return;
    }
    if (this.branches.includes(branchName)) {
      console.log(`Branch '${branchName}' already exists.`);
      return;
    }
    this.branches.push(branchName);
    console.log(`Branch '${branchName}' added to ${this.bankName}.`);
  }

  removeBranch(branchName) {
    if (typeof branchName !== 'string' || branchName.trim() === '') {
      console.log('Branch name must be a non-empty string.');
      return;
    }
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

try {
  const myBank = new Bank("HDFC", ["HDFC Singapore", "HDFC Dubai", "HDFC India","HDFC Dubai"]);
  myBank.displayBranches();

  myBank.addBranch("HDFC UK");
  myBank.addBranch("HDFC Singapore"); 

  myBank.removeBranch("HDFC Dubai");
  myBank.removeBranch("HDFC USA"); 

  myBank.displayBranches();
} catch (error) {
  console.error('Error:', error.message);
}
