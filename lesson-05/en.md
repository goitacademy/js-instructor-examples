# Module 3. Lesson 1. Objects

<!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

## Example 1 - Object Basics

Write a script that, for the `user` object, successively:

- adds a `mood` field with value `'happy'`
- replaces the value `hobby` to `'skydiving'`
- replaces `premium` to `false`
- prints the contents of the `user` object in `key:value` format using
  `Object.keys()` and `for...of`

### Code

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```

## Example 2 -  Object.values() method

We have an object that stores our team salaries. Write code for
summing all salaries and store the result in the sum variable. Should
get 390. If the `salaries` object is empty, then the result should be 0.

### Code

```js
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
```

## Example 3 - Array of objects

Write a function `calcTotalPrice(stones, stoneName)` that takes an array
of objects and a string with the name of the stone. The function calculates and returns the total cost
of stones with the same name, price and quantity from the object
### Code

```js
const stones = [
  { name: 'Emerald', price: 1300, quantity: 4 },
  { name: 'Diamond', price: 2700, quantity: 3 },
  { name: 'Sapphire', price: 400, quantity: 7 },
  { name: 'Rubble', price: 200, quantity: 2 },
];
```

## Example 4 - Complex tasks

Write a script for managing a personal account of an Internet bank. There is an `account` object
in which it is necessary to implement methods for working with balance and
transaction history.

```js
/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Each transaction is an object with properties: id, type and amount
 */

const account = {
  // Current account balance
  balance: 0,

  // Transaction History
  transactions: [],

  /*
   * Method creates and returns a transaction object.
   * Accepts amount and type of transaction.
   */
  createTransaction(amount, type) {},

  /*
   * The method responsible for adding the amount to the balance..
   * Accepts the amount of the transaction.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
   */
  deposit(amount) {},

  /*
   *The method responsible for withdrawing the amount from the balance.
   * Принимает сумму танзакции.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history.
   *
   * If amount is greater than the current balance, display a message
   * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {},

  /*
   * The method returns the current balance
   */
  getBalance() {},

  /*
   * The method searches and returns the transaction object by id
   */
  getTransactionDetails(id) {},

  /*
   * The method returns the amount of funds
   *a specific type of transaction from the entire history of transactions
   */
  getTransactionTotal(type) {},
};
```
