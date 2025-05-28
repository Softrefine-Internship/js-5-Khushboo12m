// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.
class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
      if (typeof accountNumber !== 'number' || accountNumber <= 0) {
        throw new Error('Account number must be a positive number.');
      }
      if (typeof accountHolderName !== 'string' || accountHolderName.trim() === '') {
        throw new Error('Account holder name must be a non-empty string.');
      }
      if (typeof balance !== 'number' || balance < 0) {
        throw new Error('Initial balance must be a non-negative number.');
      }
  
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        console.log('Deposit amount must be a positive number.');
        return;
      }
      this.balance += amount;
      console.log(`${amount} deposited to ${this.accountHolderName}. New balance: ${this.balance}`);
    }
  
    withdraw(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        console.log('Withdrawal amount must be a positive number.');
        return;
      }
      if (amount > this.balance) {
        console.log('Insufficient balance.');
        return;
      }
      this.balance -= amount;
      console.log(`${amount} withdrawn from ${this.accountHolderName}. New balance: ${this.balance}`);
    }
  
    transfer(amount, targetAccount) {
      if (!(targetAccount instanceof BankAccount)) {
        console.log('Target account must be a valid BankAccount instance.');
        return;
      }
      if (typeof amount !== 'number' || amount <= 0) {
        console.log('Transfer amount must be a positive number.');
        return;
      }
      if (amount > this.balance) {
        console.log('Transfer failed due to insufficient balance.');
        return;
      }
      this.withdraw(amount);
      targetAccount.deposit(amount);
      console.log(`${amount} transferred from ${this.accountHolderName} to ${targetAccount.accountHolderName}`);
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}, Holder: ${this.accountHolderName}, Balance: ${this.balance}`);
    }
  }
  
  try {
    const account1 = new BankAccount(101, "Keshvi", 1000);
    const account2 = new BankAccount(102, "Shrishti", 500);
  
    account1.deposit(500);
    account2.withdraw(200);
    account1.transfer(300, account2);
  
    account1.displayAccountInfo();
    account2.displayAccountInfo();
  } catch (error) {
    console.error('Error:', error.message);
  }
  