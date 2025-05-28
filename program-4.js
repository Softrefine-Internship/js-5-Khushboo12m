// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accountNumber, balance = 0) {
    if (typeof accountNumber !== 'string' || accountNumber.trim() === '') {
      throw new Error('Account number must be a non-empty string');
    }

    if (typeof balance !== 'number' || balance < 0) {
      throw new Error('Initial balance must be a non-negative number');
    }

    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.log("Deposit amount must be a positive number.");
      return;
    }
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      console.log("Withdrawal amount must be a positive number.");
    } else if (amount > this.balance) {
      console.log("Insufficient balance.");
    } else {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  }

  displayAccount() {
    console.log(`Account Number: ${this.accountNumber}, Balance: $${this.balance}`);
  }
}

try {
  const account1 = new BankAccount("123456789");
  const account2 = new BankAccount("987654321", 100);

  account1.deposit(500);
  account1.withdraw(150);
  account1.displayAccount();

  account2.deposit(200);
  account2.withdraw(50);
  account2.displayAccount();
} catch (error) {
  console.error("Error:", error.message);
}
