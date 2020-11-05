# Модуль 2. Занятие 2. Массивы и функции

## Пример 1 - Поиска самого длинного слова

Напиши фукцнию `findLongestWord(string)` которая принимает произвольную строку
состоящую только из слов разделённых пробелом (параметр `string`) и возвращает
самое длинное слово в этой строке.

### Код
```js
function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i += 1) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'
findLongestWord('Google do a roll')`; // 'Google'
findLongestWord('May the force be with you'); // 'force'
```

## Пример 2 - Дефолтные значения параметров функции

Напишите функцию `greet(name)`, которая при вызове будет получать имя (например, «Василий») и логировать строку «Привет, <имя>».  В случае отсутствующего аргумента выводить «Привет, гость»

### Код

```js
const greet = function (name) {
}

greet('Манго');
greet();
```

## Пример 3 - Псевдомассив arguments

Напишите функцию `calculateAverage()` которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

### Код

```js
function calculateAverage() {}

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
```

## Пример 4 - Стрелочные функции (explicit return)

Выполните рефакторинг заменив объявление функции на стрелочную функцию.

```js
function checkNumbers(a, b) {
  if (a > b) {
    return `число ${a} больше ${b}`;
  }

  return `число ${b} больше ${a}`;
}
```

## Пример 5 - Стрелочные функции (implicit return)

Выполните рефакторинг заменив объявление функции на стрелочную функцию.

```js
function mult(x, y, z) {
  return x * y * z;
}
```

## Пример 6 - Коллекция курсов (includes, indexOf, push и т. д.)

Напишите функции для работы с коллекцией обучающих курсов `courses`:

- `addCourse(name)` - добавляет курс в конец коллекции
- `removeCourse(name)` - удаляет курс из коллекции
- `updateCourse(oldName, newName)`- изменяет имя на новое

```js
cost courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'У вас уже есть такое курс'
removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс с таким имененем не найден'
updateCourse('Express', 'NestJS'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
```
