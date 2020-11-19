# Модуль 4. Занятие 2. Коллбек функции. Замыкания. this

## Пример 1 - Коллбек функции

Напишите функцию `each(array, callback)`, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

```js
function each(array, callback) {
  const newArr = [];

  for (let i = 0; i < array.length; i += 1) {
    newArr.push(callback(array[i]));
  }

  return newArr;
}

console.log(each([64, 49, 36, 25, 16], element => element * 2));
console.log(each([64, 49, 36, 25, 16], element => element - 10));
console.log(each([64, 49, 36, 25, 16], element => Math.sqrt(element)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], element => Math.ceil(element)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], element => Math.floor(element)));
```

## Пример 2 - Замыкания

Напишите функцию `makeCounter()`, которая возвращает другую функцию, которая считает и логирует количество своих вызовов.

```js
function makeCounter() {
  let i = 0;
  return function counter() {
    i += 1;
    return i;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

## Пример 3 - Замыкания

Напишите функцию `savePassword(password)` которая принимает пароль и возвращает внутреннюю функцию, которая принимает строку и возвращает буль `true`, если строка совпадает с сохраненным паролем и `false` - если не совпадает.


```js
function makePasswordChecker(password) {
  return function checkPassword(input) {
    return input === password;
  };
}
```

## Пример 4 - Замыкания

Напишите функцию для хранения скидки. Функция возвращает другую функцию, которая принимает сумму покупки и возвращает финальную сумму с сохранённой скидкой.

```js
function applyDiscount(discount) {
  return function (value) {
    return value - value * discount;
  };
}

const withBaseDiscount = applyDiscount(0);
const withSilverDiscount = applyDiscount(0.05);
const withGoldDiscount = applyDiscount(0.1);

console.log(withBaseDiscount(100));
console.log(withBaseDiscount(200));
console.log(withSilverDiscount(100));
console.log(withSilverDiscount(200));
console.log(withGoldDiscount(100));
console.log(withGoldDiscount(200));
```
