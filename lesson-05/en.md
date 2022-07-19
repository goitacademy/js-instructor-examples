# Модуль 3. Lesson 1. Objects

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

## Example 4 - Комплексные задачи

Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
в котором необходимо реализовать методы для работы с балансом и историей
транзакций.

```js
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {},

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};
```
