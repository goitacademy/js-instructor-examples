//# Модуль 1. Заняття 1. Змінні, типи та оператори

//## Example 1 - Математичні оператори

//Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

//```js
console.log('task 1');
const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = apples - grapes;
console.log(diff);
console.log('task 1');

//```

//## Example 2 - Комбіновані оператори

//Заміни вираз перевизначення комбінованим оператором `+=`.

//```js
console.log('task 2');
let students = 100;
students += 50;
console.log(students);
console.log('task 2');

//```

//## Example 3 - Пріоритет операторів

//Розбери пріоритет операторів в інструкції привласнення значення змінної
//`result`.

//```js
console.log('task 3');

const result = 108 + 223 - 2 * 5;
console.log(result);
console.log('task 3');

//```

//## Example 4 - Клас Math

//Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
//змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
//`Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

//```js
console.log('task 4');

const value4 = 27.5;
console.log(Math.floor(value4));
console.log(Math.ceil(value4));
console.log(Math.round(value4, 1));
console.log('task 4');

//```

// ## Example 5 - Шаблонні рядки

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// ```js
console.log('task 5');

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `Cyberdyne Systems has ${
  repairBots + defenceBots
} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
console.log('task 5');

// ## Example 6 - Методи рядків та чейнінг

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// ```js
console.log('task 6');

let weight = '88,3';
let height = '1.75';

const numWeight = Number.parseFloat(weight.replace(',', '.'));
const numHeight = Number.parseFloat(height.replace(',', '.'));

const bmi = (numWeight / Math.pow(numHeight, 2)).toFixed(1);
console.log('bmi=' + bmi); // 28.8
console.log('task 6');

// ```

// ## Example 7 - Оператори порівняння та приведення типів

// Яким буде результат виразів?

// ```js
console.log('task 7');

console.log('5 > 4 = true ', 5 > 4);

console.log("10 >= '7' = true ", 10 >= '7');

console.log("'2' > '12' = true ", '2' > '12');

console.log("'2' < '12' = false ", '2' < '12');

console.log("'4' == 4 = true ", '4' == 4);

console.log("'6' === 6 = false ", '6' === 6);

console.log("'false' === false = false ", 'false' === false);

console.log('1 == true = true ', 1 == true);

console.log('1 === true = false ', 1 === true);

console.log("'0' == false = true ", '0' == false);

console.log("'0' === false = false ", '0' === false);

console.log("'Papaya' < 'papaya' = true", 'Papaya' < 'papaya');

console.log("'Papaya' === 'papaya' = false ", 'Papaya' === 'papaya');

console.log('undefined == null = true', undefined == null);

console.log('undefined === null = false', undefined === null);
console.log('task 7');

// ```

// ## Example 8 - Логічні оператори

// Яким буде результат виразів?

// ```js

console.log('task 8');
console.log('true && 3 = 3 ', true && 3);

console.log('false && 3 = false ', false && 3);

console.log("true && 4 && 'kiwi' = kiwi", true && 4 && 'kiwi');

console.log("true && 0 && 'kiwi' = 0", true && 0 && 'kiwi');

console.log('true || 3 = true ', true || 3);

console.log('true || 3 || 4 true =', true || 3 || 4);

console.log('true || false || 7 = true ', true || false || 7);

console.log('null || 2 || undefined) = 2 ', null || 2 || undefined);

console.log('(1 && null && 2) > 0 = false ', (1 && null && 2) > 0);

console.log('null || (2 && 3) || 4 = 3 ', null || (2 && 3) || 4);

console.log('task 8');

// ```

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
// false. Використовуй оператор `??` (nullish coalescing operator).

// ```js
console.log('task 9');

let incomingValue = 5;
const defaultValue = 10;
const checkValue = function (value) {
  return incomingValue != undefined && incomingValue != null
    ? incomingValue
    : defaultValue;
};
let value = checkValue(incomingValue);
console.log(`incomingValue = ${incomingValue} ->`, value);

incomingValue = null;
value = checkValue(incomingValue);
console.log(`incomingValue = ${incomingValue} ->`, value);

incomingValue = undefined;
value = checkValue(incomingValue);
console.log(`incomingValue = ${incomingValue} ->`, value);

incomingValue = 0;
value = checkValue(incomingValue);
console.log(`incomingValue = ${incomingValue} ->`, value);

incomingValue = false;
value = checkValue(incomingValue);
console.log(`incomingValue = ${incomingValue} ->`, value);

console.log('task 9');

// ```

// ## Example 10 - Оператор % та методи рядків

// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
console.log('task 10');

const totalMinutes = 1441;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

console.log('task 10');

//```
