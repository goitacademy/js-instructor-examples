# Module 1. Lesson 2. Branching. Cycles

## Example 1 - User Input and Branching

Using the if..else and prompt constructs, write code that will ask:
`"What is the official name of JavaScript?"`. If the user enters
`ECMAScript`, then show an alert with the string `"Correct!"`, otherwise -
`"Do not know? ECMAScript!"`

## Example 2 - Time display (if...else)

Write a script to display hours and minutes in the browser console as a string
format `"14 hours 26 minutes."`. If the value of the `minutes` variable is `0`, then
output the string `"14 o'clock"`, without minutes.

```js
const hours = 14;
const minutes = 26;
let timestring;

if (minutes > 0) {
  timestring = `${hours} ч. ${minutes} min.`;
} else {
  timestring = `${hours} h.`;
}
console.log(timestring);
```

## Example 3 - Branching

Write a script that prints the string `"This is a positive number"` to the console,
if the user entered a number greater than zero in the prompt. If zero was entered, output
to the console the string `"This is zero"`. If a negative number is passed, in the console
should be the string `"This is a negative number"`.

```js
const userInput = prompt('Enter the number');
```

## Example 4 - Nested branches

Напиши скрипт, который сравнивает числа в переменных `a` и `b`. Если оба
значения больше `100`, то выведи в консоль максимальное из них. В противном
случае в консоли должна быть сумма значения `b` и числа 512.

```js
const a = 120;
const b = 180;
```

## Example 5 - Форматирование ссылки (endsWith)

Напиши скрипт который проверяет заканчивается ли значение переменной `link`
символом `/`. Если нет, добавь в конец значения `link` этот символ. Используй
конструкцию `if...else`.

```js
let link = 'https://my-site.com/about';
// Пиши код ниже этой строки

// Пиши код выше этой строки
console.log(link);
```

## Example 6 - Форматирование ссылки (includes и логическое «И»)

Напиши скрипт который проверяет заканчивается ли значение переменной `link`
символом `/`. Если нет, добавь в конец значения `link` этот символ, но только в
том случае, если в `link` есть подстрока `"my-site"`. Используй конструкцию
`if...else`.

```js
let link = 'https://somesite.com/about';
// Пиши код ниже этой строки

// Пиши код выше этой строки
console.log(link);
```

## Example 7 - Форматирование ссылки (тернарный оператор)

Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

```js
let link = 'https://somesite.com/about';
if (link.includes('my-site') && !link.endsWith('/')) {
  link += '/';
}
console.log(link);
```

## Example 8 - if...else и логические операторы

Напиши скрипт который будет выводить в консоль браузера строку в зависимости от
значения переменной `hours`.

Если значение переменной `hours`:

- меньше `17`, выводи строку `"Pending"`
- больше либо равно `17` и меньше либо равно 24, выводи строку `"Expires"`
- больше `24` , выводи строку `"Overdue"`

```js
const hours = 10;
```

## Example 9 - Дедлайн сдачи проекта (if...else)

Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
конструкцию `if...else`.

- Eсли до дедлайна 0 дней - выведи строку `"Сегодня"`
- Eсли до дедлайна 1 день - выведи строку `"Завтра"`
- Eсли до дедлайна 2 дня - выведи строку `"Послезавтра"`
- Eсли до дедлайна 3+ дней - выведи строку `"Дата в будущем"`

```js
const daysUntilDeadline = 5;
// Пиши код ниже этой строки
```

## Example 10 - Дедлайн сдачи проекта (switch)

Выполни рефакторинг кода задачи номер 5 используя `switch`.

```js
const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log('Сегодня');
} else if (daysUntilDeadline === 1) {
  console.log('Завтра');
} else if (daysUntilDeadline === 2) {
  console.log('Послезавтра');
} else {
  console.log('Дата в будущем');
}
```

## Example 11 - Цикл for

Напиши цикл for который выводит в консоль браузера числа по возрастанию от `min`
до `max`, но только если число кратное `5`.

```js
const max = 100;
const min = 20;
```

## Example 12 - Ввод пользователя и ветвления

Напиши скрипт, который будет спрашивать логин с помощью `prompt` и логировать
результат в консоль браузера.

- Если посетитель вводит `"Админ"`, то `prompt` запрашивает пароль
- Если ничего не введено или нажата клавиша Esc - вывести строку `"Отменено"`
- В противном случае вывести строку `"Я вас не знаю"`

Пароль проверять так:

- Если введён пароль `"Я админ"`, то вывести строку `"Здравствуйте!"`
- Иначе выводить строку `"Неверный пароль"`
