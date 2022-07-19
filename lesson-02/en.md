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

Write a script that compares the numbers in variables `a` and `b`. If both
values greater than `100`, then print the maximum of them to the console. Otherwise,
the console should show the sum of the value `b` and the number 512.

```js
const a = 120;
const b = 180;
```

## Example 5 - Link Formatting (endsWith)

Write a script that checks if the value of the `link` variable ends
symbol `/`. if not, add this character to the end of the `link` value. Use
`if...else` construction.

```js
let link = 'https://my-site.com/about';
// Write code below this line

// Write code above this line
console.log(link);
```

## Example 6 - Link formatting (includes and logical "AND")

Write a script that checks if the value of the `link` variable ends by
symbol `/`. If not, append this character to the end of the `link` value, but only
if `link` contains the substring `"my-site"`. Use construction
`if...else`.

```js
let link = 'https://somesite.com/about';
// Write code below this line

// Write code above this line
console.log(link);
```

## Example 7 - Link formatting (ternary operator)

Make code  refactoring of the  task number 4 code using ternary operator.

```js
let link = 'https://somesite.com/about';
if (link.includes('my-site') && !link.endsWith('/')) {
  link += '/';
}
console.log(link);
```

## Example 8 - if...else and logical operators 

Write a script that will output a string to the browser console depending on
`hours` variable values.

If the value of the variable `hours`:

- less than `17`, output the string `"Pending"`
- greater than or equal to `17` and less than or equal to 24, output the string `"Expires"`
- greater than `24` , output the string `"Overdue"`

```js
const hours = 10;
```

## Example 9 - Project submission deadline (if...else)

Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй
конструкцию `if...else`.

- If there are 0 days before the deadline - output the string `"Today"`
- If it's 1 day before the deadline - output the string `"Tomorrow"`
- If it's 2 days before the deadline - output the string `"The day after tomorrow"`
- If it's 3+ days before the deadline - print the string `"Date in the future"`

```js
const daysUntilDeadline = 5;
// Write code below this line
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
