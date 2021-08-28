# Модуль 1. Занятие 1. Переменные, типы и операторы

## Задача 1 - Базовые математические операторы

Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

```js
const apples = 47;
const grapes = 135;
const total = ;
console.log(total)
const diff = ;
console.log(diff)
```

## Задача 2 - Комбинированные операторы

Замени выражение переопределения комбинированным оператором `+=`.

```js
let students = 100;
students = students + 50;
console.log(students);
```

## Задача 3 - Приоритет операторов

Разбери приоритет операторов в инструкции присвоения значения переменной
`result`.

```js
const result = 108 + 223 - 2 * 5;
console.log(result);
```

## Задача 4 - Класс Math

Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения
переменной `value`. Используй методы `Math.floor()`, `Math.ceil()` и
`Math.round()`. Проверь что будет в консоли при значениях `27.3` и `27.9`.

```js
const value = 27.5;
```

## Задача 5 - Шаблонные строки

Составь фразу с помощью шаблонных строк `A has B bots in stock`, где A, B -
переменные вставленные в строку.

```js
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = ``;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
```

## Задача 6 - Операторы сравнения и приведение типов

Каким будет результат выражений?

```js
console.log(5 > 4);

console.log(10 >= '7');

console.log('2' > '12');

console.log('2' < '12');

console.log('4' == 4);

console.log('6' === 6);

console.log('false' === false);

console.log(1 == true);

console.log(1 === true);

console.log('0' == false);

console.log('0' === false);

console.log('Papaya' < 'papaya');

console.log('Papaya' === 'papaya');

console.log(undefined == null);

console.log(undefined === null);
```

## Задача 7 - Логические операторы

Каким будет результат выражений?

```js
console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && 'kiwi');

console.log(true && 0 && 'kiwi');

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);
```

## Задача 8 - Значение по умолчанию и оператор нулевого слияния

Отрефактори код так, чтобы в переменную `value` присваивалось значение
переменной `incomingValue`, если оно не равно `undefined` или `null`. В
противном случае должно присваиваться значение `defaultValue`. Проверь работу
скрипта для слепдующих значений переменной `incomingValue`: null, undefined, 0,
false. Используй оператор `??` (nullish coalescing operator).

```js
const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue || defaultValue;
console.log(value);
```

## Задача 9 - Опертор % и методы строк

Напиши скрипт который переведёт значение `totalMinutes` (количество минут) в
строку в формате часов и минут `HH:MM`.

- 70 покажет 01:10
- 450 покажет 07:30
- 1441 покажет 24:01

```js
const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
```
