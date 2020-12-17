# Модуль 1. Занятие 1. Переменные и ветвления

## Пример 1 - Определение типа значения, оператор typeof

С помощью оператора определения типа убедитесь, что переменные принадлежат типам: string, number, boolean.

### Код

```js
const productName = 'Mango';
const pricePerItem = 150;
const isOnSale = false;
const error = null;
let quantity;
```

## Пример 2 - Базовые операторы +,-,*,/

Вывести на экран сумму: количество яблок + количество винограда.

### Код

```js
const apples = 47;
const grapes = 135;
const total = ;
```

## Пример 3 - Приоритет операторов

Создать переменную `result`, присвоить ей выражение `108+223-2*5`, разобрать приоритет и вывести её значение в консоль.

### Код

```js
const result = ;
console.log(result);
```

## Пример 4 - Обьект Math

Определить площадь круга с радиусом 10см (ПR(2)). Math.pow(a, b) - возведение в степень

### Код

```js
const rad = 10;
const area = Math.PI * Math.pow(rad, 2);
console.log(area);
```

## Пример 5 - Шаблонные строки

Написать фразу с помощью шаблонных строк `Здравствуйте, меня зовут А, мне Б лет и мне нравится Ц`, где А, Б, Ц - переменные вставленные в строку.

### Код

```js
const name = 'Манго';
const age = 5;
const hobby = 'плавать';
const message = '';

console.log(message);
```

## Пример 6 - Операторы сравнения и приведение типов

Каким будет результат этих выражений?

### Код

```js
console.log(5 > 4);
console.log(10 >= "7");
console.log("2" > "12");
console.log("2" < "12");
console.log("4" == 4);
console.log("6" === 6);
console.log("false" === false);
console.log(1 == true);
console.log(1 === true);
console.log("0" == false);
console.log("0" === false);
console.log("Ёнанас" < "ёжик");
console.log("Ёнанас" === "ёжик");
console.log(undefined == null);
console.log(undefined === null);
```

## Пример 7 - if...else и prompt

Используя конструкцию if..else, напишите код, который будет спрашивать: «Какое «официальное» название JavaScript?». 
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

### Код

```js
```

## Пример 8 - Тернарный оператор

Перепишите if...else с использованием тернарного оператора.

### Код

```js
const a = 1;
const b = 2;
let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
```


## Пример 9 - Логические операторы

Что выведет код?

### Код

```js
console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && "hello");

console.log(true && 0 && "hello");

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || 2 && 3 || 4);
```

## Пример 10 - Логические операторы и if

Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
«Включительно» означает, что значение переменной age может быть равно 14 или 90.

### Код

```js
const min = 14;
const max = 90;
const age = 30;
```


## Пример 11 - Опертор `%`

Написать программу которая получит от пользователя число (количество минут) и выведёт на экран строку в формате часов и минут.

- 70 покажет 01:10
- 450 покажет 07:30
- 1441 покажет 24:1

### Код

```js
const total = 70;
const hours = Math.floor(total / 60);
const minutes = total % 60;

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);

console.log(hours);
console.log(minutes);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
```
