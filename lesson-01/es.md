# Módulo 1. Clase 1. Variables, tipos y operadores

## Ejemplo 1 - Operadores matemáticos

Muestra el número total de manzanas y uvas. La diferencia entre las manzanas y las uvas.

```js
const apples = 47;
const grapes = 135;
const total = ;
console.log(total)
const diff = ;
console.log(diff)
```

## Ejemplo 2 - Operadores combinados

Sustituye la expresión de redefinición por el operador combinado `+=`.

```js
let students = 100;
students = students + 50;
console.log(students);
```

## Example 3 - Prioridad de los operadores

Analiza la prioridad de los operadores, en la instrucción para asignar un valor a la variable `result`.

```js
const result = 108 + 223 - 2 * 5;
console.log(result);
```

## Ejemplo 4 - Clase Math

Escriba un script que muestre en la consola los valores redondeados hacia abajo/arriba, etc. 
de la variable `value`. Use los métodos `Math.floor()`, `Math.ceil()` y `Math.round()`.
Comprueba lo que aparece en la consola con los valores `27.3` y `27.9`.

```js
const value = 27.5;
```

## Ejemplo 5 - Plantilla de cadena

Escriba una frase utilizando una plantilla de cadena `A has B bots in stock`, donde A, B 
son variables insertadas en la cadena.

```js
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = ``;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"
```

## Ejemplo 6 - Métodos de cadenas y encadenamiento

Escriba un script que calcule el índice de masa corporal de una persona. Para ello
divide el peso en kilogramos por el cuadrado de la altura de la persona en metros.

El peso y la altura se almacenan en las variables `weight` y `height`, pero no como
números, sino como cadenas (específicamente para esta tarea). Los números no enteros se 
pueden dar en forma de `24.7` o `24,7`, es decir, la parte de la fracción puede estar 
separada por una coma.

El índice de masa corporal debe redondearse para que tenga solo una cifra después de la coma;

```js
let weight = '88,3';
let height = '1.75';

const bmi = ;
console.log(bmi); // 28.8
```

## Ejemplo 7 - Operadores de comparación y conversión de tipos

¿Cuál sería el resultado de las expresiones?

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

## Ejemplo 8 - Operadores lógicos

¿Cuál sería el resultado de las expresiones?

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

## Ejemplo 9 - Valor por defecto y Nullish coalescing operator

Refactoriza el código para que a la variable `value` se le asigne el valor de
la variable `incomingValue` , en caso de que el valor no sea `undefined` o `null`. 
En caso contrario, se debe asignar el valor `defaultValue`. Comprueba que el script
funciona para los siguientes valores de la variable `incomingValue`: null, undefined,
0, false. Utilice el operador `??` (nullish coalescing operator).

```js
const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue || defaultValue;
console.log(value);
```

## Ejemplo 10 - Operador % y métodos de cadena

Escribe un script que traduzca el valor de `totalMinutes` ( cantidad de minutos) en
una cadena en formato de horas y minutos `HH:MM`.

- 70 muestra 01:10
- 450 muestra 07:30
- 1441 muestra 24:01

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
