// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
      console.log("Insufficient balance.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  displayAccount() {
    console.log(`Account Number: ${this.accountNumber}, Balance: $${this.balance}`);
  }
}

const account1 = new BankAccount("123456789");
const account2 = new BankAccount("987654321", 100);

account1.deposit(500);
account1.withdraw(150);
account1.displayAccount();

account2.deposit(200);
account2.withdraw(50);
account2.displayAccount();
