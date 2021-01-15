# Модуль 6. Занятие 2. Перебирающие методы массива

## Пример 1 - Сортировка примитивов

Выполнить сортировку массива цен по убыванию и возрастанию.

- Объяснить как сортирует по умолчанию.
- Рассмотреть callback для метода sort.

```js
const prices = [2, 14, 1, 37, 26, 8];
const pricesInAscendingOrder = prices;
const pricesInDescendingOrder = prices;
```


## Пример 2 - Сортировка строк

Выполнить сортировку массива названий мониторов в алфавитном и обратном алфавитном порядке.

```js
const items = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ'];
const itemsInAlphabeticalOrder = items;
const itemsInDescAlphabeticalOrder = items;
```

## Пример 3 - Сортировка сложных типов

Выполнить сортировку массива объектов:

- по возрастанию и убыванию значения свойства `price`.
- по имени в алфавитном и обратном алфавитном порядке.

```js
const items = [
  {name: 'SAMSUNG', price: 15000},
  {name: 'LG', price: 9000},
  {name: 'ASUS', price: 27000},
  {name: 'DELL', price: 12000},
  {name: 'BENQ', price: 7000}
];
// По свойству price
const itemsByAscendingPrice = items;
const itemsByDescendingPrice = items;

// По свойству name
const itemsInAlphabeticalOrder = items;
const itemsInDescAlpahbeticalOrder = items;
```


## Пример 4 - Метод Array.prototype.flatMap

- Собрать в `allTopics` массив всех предметов всех курсов используя flatMap.
- Используя Array.prototype.filter выполнить фильтрацию, оставив в `uniqueTopics` только уникальные элементы.

```js
const courses = [
  {name: 'Basic HTML+CSS', topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub']},
  {name: 'Intermediate HTML+CSS', topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS']}
  {name: 'Basic JavaScript', topics: ['VSCode', 'Type system', 'Loops', 'Functions', 'Conditions', 'Classes', 'DOM', 'Git', 'GitHub',]},
  {name: 'Intermediate JavaScript', topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Promises', 'AJAX', 'Git', 'GitHub',]}
]
const allTopics = courses;
const uniqueTopics = allTopics;
```

## Пример 5 - Чейнинг методов

Выполнить рефакторинг используя цепочку методов flatMap и filter.

```js
const courses = [
  {name: 'Basic HTML+CSS', topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub']},
  {name: 'Intermediate HTML+CSS', topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS']}
  {name: 'Basic JavaScript', topics: ['VSCode', 'Type system', 'Loops', 'Functions', 'Conditions', 'Classes', 'DOM', 'Git', 'GitHub',]},
  {name: 'Intermediate JavaScript', topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Promises', 'AJAX', 'Git', 'GitHub',]}
]

const uniqueTopics = courses;
```
