class Account {
  // Real private fields (Of the instances, to of the prototype)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;

    // Protected property
    // this._movements = [];

    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  // getter
  get movements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved. Your Balance now is ${this.balance}.`);
      return this;
    }
    console.log(`Loan amount too high. Loan rejected.`);
    return this;
  }

  static helper() {
    console.log('Helper');
  }

  get balance() {
    return this.#movements.reduce((acc, curr) => acc + curr, 0);
  }

  // 4) Private methods
  #approveLoan(val) {
    if (val <= this.balance * 15) {
      return true;
    }
    return false;
  }
}

const acc = new Account('Jonas', 'EUR', 1111);

// acc1.#movements.push(1000000);
// acc1.#approveLoan(1000);

acc.deposit(250);
acc.withdraw(140);
acc.requestLoan(10000);
console.log(acc.movements);
console.log(acc);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc.deposit(300).deposit(500).withdraw(35).requestLoan(10000).withdraw(4000);
console.log(acc.movements);
console.log(acc.balance);
