# Módulo 4. Clase 8. Métodos de indexación de Arrays

## La colección de objetos para todos los ejemplos que tengan coches

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

## Ejemplo 1 - Método map

Haz que la función `getModels` devuelva un array de modelos (campo model)
de todos los coches.

```js
const getModels = cars => {};

console.table(getModels(cars));
```

## Ejemplo 2 - Método map

Haz que la función `makeCarsWithDiscount` devuelva un nuevo array de objetos
con el valor de la propiedad `price` modificado, en función del descuento introducido.

```js
const makeCarsWithDiscount = (cars, discount) => {};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
```

## Ejemplo 3 - Método filter

Que la función `filterByPrice` devuelva un array de coches cuyo precio 
sea inferior al valor del parámetro `threshold`.

```js
const filterByPrice = (cars, threshold) => {};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
```

## Ejemplo 4 - Método filter

Haz que la función `getCarsWithDiscount` devuelva un array de coches, cuya
propiedad onSale sea true.

```js
const getCarsWithDiscount = cars => {};

console.table(getCarsWithDiscount(cars));
```

## Ejemplo 5 - Método filter

 Haz que la función `getCarsWithType` devuelva un array de coches
 cuyo tipo coincida con el valor del parámetro `type`.

```js
const getCarsWithType = (cars, type) => {};

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
```

## Ejemplo 6 - Método find

```js
const getCarByModel = (cars, model) => {};

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
```

## Ejemplo 7 - Método sort

Haz que la función `sortByAscendingAmount` devuelva un nuevo array de coches
ordenados de forma ascendente según el valor de la propiedad `amount`.

```js
const sortByAscendingAmount = cars => {};

console.table(sortByAscendingAmount(cars));
```

## Ejemplo 8 - Método sort

Haz que la función `sortByDescendingPrice` devuelva un nuevo array de coches
ordenados de forma descendente según el valor de la propiedad `price`.

```js
const sortByDescendingPrice = cars => {};

console.table(sortByDescendingPrice(cars));
```

## Ejemplo 9 - Método sort

Haz que la función `sortByModel` devuelva un nuevo array de coches ordenados por
nombre de modelo en orden alfabético y alfabético invertido, dependiendo
del valor del parámetro `order`.

```js
const sortByModel = (cars, order) => {};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
```

## Ejemplo 10 - Método reduce

Haz que la función `getTotalAmount` devuelva el número total
de coches (valor de propiedades `amount`).

```js
const getTotalAmount = cars => {};

console.log(getTotalAmount(cars));
```

## Ejemplo 11 - Cadenas de métodos

Haz que la función `getAvailableCarNames` devuelva un array de modelos de 
coches, pero sólo los que están rebajados actualmente.

```js
const getModelsOnSale = cars => {};

console.table(getModelsOnSale(cars));
```

## Ejemplo 12 - Cadenas de métodos

Haz que la función `getSortedCarsOnSale` devuelva un array de coches 
en oferta (propiedad onSale) ordenados por precio ascendente.

```js
const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));
```
