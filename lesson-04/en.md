# Module 2 - Lesson 4 - Functions

## Example 1 - Body mass index
Write a function `calcBMI(weight, height)` that calculates and returns the body mass
index of a person. To do this, divide the weight in kilograms by
square of a person's height in meters.

The weight and height will be specially passed as strings. Non-integer numbers can be
specified as `24.7` or `24.7`, i.e. a comma can be used
as a decimal separator.

Body mass index must be rounded to one decimal place;

```js
const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
```

## Example 2 - Smaller of numbers

Write a function `min(a,b)` that returns the smaller of the numbers `a` and `b`.

```js
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
```

## Example 3 - Area of a rectangle

Write a function `getRectArea(dimensions)` to calculate the area of a rectangle
with sides, the values of which will be passed to the `dimensions` parameter as a string.
Values are guaranteed to be separated by a space.

```js
function getRectArea(dimensions) {}

console.log(getRectArea('8 11'));
```

## Example 4 - Element logging

Write a function `logItems(items)` that takes an array and uses a `for` loop
that for each element of the array will print a message to the console
in the format `<item number> - <item value>`. The numbering
of elements should start with `1`.

For example, for the first element of the array `['Mango', 'Poly', 'Ajax']` with index `0`
will print `1 - Mango` and for index 2 will print `3 - Ajax`.

```js
function logItems(items) {}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
```

## Example 5 - Contact logging

Write a function `printContactsInfo(names, phones)` that prints  to the console the name
and the user's phone number. The `names` and `phones` parameters will be passed
strings of names and phone numbers separated by commas. Sequence number of names and
phone numbers in the rows indicate a match. Number of names and phones
guaranteed to be the same.

```js
function printContactsInfo(names, phones) {}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);
```

## Example 6 - Finding the largest element

Write a function `findLargestNumber(numbers)` that looks for the largest number in
array.

```js
function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
```

## Example 7 - Average value

Write a `calAverage()` function that takes an arbitrary number of arguments
and returns their average. All arguments will be only numbers.

```js
function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
```

## Example 8 - Time Formatting

Write a function `formatTime(minutes)` that will translate the value of `minutes`
(number of minutes) to a string in hour and minute format `HH:MM`.

```js
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
```

## Example 9 -Collection of courses (includes, indexOf, push, etc.)

Write functions to work with the `courses` collection of training courses:

- `addCourse(name)` - adds a course to the end of the collection
- `removeCourse(name)` - removes a course from the collection
- `updateCourse(oldName, newName)` - changes the name to a new one

```js
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // ' You already have this course'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Course with this name was not found'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
```
