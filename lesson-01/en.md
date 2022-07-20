# Module 1. Lesson 1. Variables, types and operators 

## Example 1 - Mathematical operators 

Display the total number of apples and grapes on the screen. The difference between apples and grapes.

```js
const apples = 47;
const grapes = 135;
const total = ;
console.log(total)
const diff = ;
console.log(diff)
```

## Example 2 - Combined operators

Replace the override expression with the combined operator `+=`.

```js
let students = 100;
students = students + 50;
console.log(students);
```

## Example 3 - Operators Priority

Disassemble operators priority in the variable value assignment  instruction
`result`.

```js
const result = 108 + 223 - 2 * 5;
console.log(result);
```

## Example 4 - Math class

Write a script that prints to the console rounded up/down, etc. values
of variable `value`. Use the methods `Math.floor()`, `Math.ceil()` and
`Math.round()`. Check what happens in the console for the values "27.3" and "27.9".

```js
const value = 27.5;
```

## Example 5 - Template lines

Compose a phrase using the template strings `A has B bots in stock`, where A, B -
variables inserted into a line.

```js
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = ``;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
```

## Example 6 - String methods and chaining

Write a script that calculates a person's body mass index. For this
you need to divide the weight in kilograms by the square of the person's height in meters.

Weight and height are stored in the `weight` and `height` variables, but not as numbers, but in
as strings (specially for the task). Non-integer numbers can be given as
`24.7` or `24,7`,that is, as a separator of the fractional part can be
comma.

The body mass index should be rounded to one decimal place;

```js
let weight = '88,3';
let height = '1.75';

const bmi = ;
console.log(bmi); // 28.8
```

## Example 7 - Comparison operators and type casting

What will be the result of the expressions?

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

## Example 8 - Logical operators

What will be the result of the expressions?

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

## Example 9 - Default value and null merge operator 

 Refactor the code so that the value is assigned to the `value` variable
variable `incomingValue` if it is not equal to `undefined` or `null`. Otherwise,
`defaultValue` must be assigned. Check work
script for the following values of the `incomingValue` variable: null, undefined, 0,
false. Use operator `??` (nullish coalescing operator).

```js
const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue || defaultValue;
console.log(value);
```

## Example 10 - The % Operator and String Methods

Write a script that will convert the value of `totalMinutes` (number of minutes) to
string in hour and minute format `HH:MM`.

- 70 will show 01:10
- 450 will show 07:30
- 1441 will show 24:01

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
