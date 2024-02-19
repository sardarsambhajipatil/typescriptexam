// Create a class called Account with this properties (AccountNumber, balance) and this methods (getBalance)

export class Account {
  accountNumber: number;
  balance: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }
}