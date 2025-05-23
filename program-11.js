// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
  }

  deposit(amount) {
      if (amount > 0) {
          this.balance += amount;
          console.log(`${amount} deposited to ${this.accountHolderName}. New balance: ${this.balance}`);
      } else {
          console.log("Deposit amount must be positive.");
      }
  }

  withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`${amount} withdrawn from ${this.accountHolderName}. New balance: ${this.balance}`);
      } else {
          console.log("Insufficient balance or invalid amount.");
      }
  }

  transfer(amount, targetAccount) {
      if (amount > 0 && amount <= this.balance) {
          this.withdraw(amount);
          targetAccount.deposit(amount);
          console.log(`${amount} transferred from ${this.accountHolderName} to ${targetAccount.accountHolderName}`);
      } else {
          console.log("Transfer failed due to insufficient balance or invalid amount.");
      }
  }

  displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}, Holder: ${this.accountHolderName}, Balance: ${this.balance}`);
  }
}

const account1 = new BankAccount(101, "Keshvi", 1000);
const account2 = new BankAccount(102, "Shrishti", 500);

account1.deposit(500);        
account2.withdraw(200);      
account1.transfer(300, account2);

account1.displayAccountInfo();
account2.displayAccountInfo();
