# Модуль 5. Заняття 9. Контекст виклику функції та this

## Example 1 - Майстерня коштовностей

Напишіть метод `calcTotalPrice(stoneName)`, який приймає назву каменю і
розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
кількістю з властивості `stones`.

```js
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {},
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600
```

## Example 2 - Телефонна книга

Виконайте рефакторинг методів об'єкту `phonebook` щоб код запрацював.

```js
const phonebook = {
  contacts: [],
  add(contact) {
    const newContact = {
      list: 'default',
      ...contact,
      id: generateId(),
      createdAt: getDate(),
    };
    contacts.push(newContact);
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);
```

## Example 3 - Калькулятор

Створіть об'єкт `calculator` з трьома методами:

- `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
- `add()` - повертає суму збережених значень.
- `mult()` - перемножує збережені значення та повертає результат.

```js
const calculator = {};
```
