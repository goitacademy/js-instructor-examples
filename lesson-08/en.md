# Module 4 - Lesson 8 - Iterating Array Methods

## Collection of objects for all examples with cars

```js
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];
```

## Example 1 - Map method

Let the `getModels` function return an array of models (model field) of all
cars.

```js
const getModels = cars => {};

console.table(getModels(cars));
```

## Example 2 - Map method

Let the `makeCarsWithDiscount` function return a new array of objects with a changed
value of the `price` property depending on the discount passed.

```js
const makeCarsWithDiscount = (cars, discount) => {};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
```

## Example 3 -Filter method

Let the `filterByPrice` function return an array of cars whose price is less
than the value of the `threshold` parameter.

```js
const filterByPrice = (cars, threshold) => {};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
```

## Example 4 - Filter method

Let the `getCarsWithDiscount` function return an array of cars whose
onSale property is true.

```js
const getCarsWithDiscount = cars => {};

console.table(getCarsWithDiscount(cars));
```

## Example 5 - Filter method

Let the `getCarsWithType` function return an array of cars whose type
coincide with the value of the `type` parameter.

```js
const getCarsWithType = (cars, type) => {};

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
```

## Example 6 - The find method

```js
const getCarByModel = (cars, model) => {};

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
```

## Example 7 - Sort method

Let the `sortByAscendingAmount` function return a new array of cars
sorted in ascending order by the value of the `amount` property.

```js
const sortByAscendingAmount = cars => {};

console.table(sortByAscendingAmount(cars));
```

## Example 8 - Sort method

Let the `sortByDescendingPrice` function return a new array of cars
sorted in descending order by the value of the `price` property.

```js
const sortByDescendingPrice = cars => {};

console.table(sortByDescendingPrice(cars));
```

## Example 9 - Sort method

Let the `sortByModel` function return a new array of cars sorted
by model name in alphabetical and reverse alphabetical order, depending on
the value of the `order` parameter.

```js
const sortByModel = (cars, order) => {};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
```

## Example 10 - Reduce method

Let the `getTotalAmount` function return the total number of cars (the value
of the `amount` properties).

```js
const getTotalAmount = cars => {};

console.log(getTotalAmount(cars));
```

## Example 11 - Method chains

Let the `getAvailableCarNames` function return an array of car models, but 
only those that are currently for sale.

```js
const getModelsOnSale = cars => {};

console.table(getModelsOnSale(cars));
```

## Example 12 - Method chains


Let the `getSortedCarsOnSale` function return an array of cars for sale 
(onSale property), sorted by price ascending.

```js
const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));
```
