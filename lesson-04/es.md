# Módulo 2. Clase 4. Funciones

## Ejemplo 1 - Índice de masa corporal

Escribe una función `calcBMI(weight, height)` que calcule y retorne el índice de masa
corporal de una persona. Para ello, divide el peso en kilogramos por
el cuadrado de la altura de la persona en metros.

El peso y la altura se podrán seran dados específicamente como cadenas. Las fracciones
se pueden dar de estas maneras `24.7` o `24,7`, es decir, el separador de fracciones
puede ser una coma.

El índice de masa corporal debe redondearse a un decimal;

```js
const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
```

## Ejemplo 2 - El menor de los números

Escribe una función `min(a,b)` que devuelva el menor de los números `a` y `b`.

```js
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
```

## Ejemplo 3 - Área del rectángulo

Escribe una función `getRectArea(dimensions)` para calcular el área de un rectángulo 
con los lados cuyos valores estaran en el parámetro `dimensiones` en forma de cadena. 
Asegurate de que los valores estén separados por un espacio.

```js
function getRectArea(dimensions) {}

console.log(getRectArea('8 11'));
```

## Ejemplo 4 - Registro (log) de elementos

Escriba una función `logItems(items)` que reciba un Array y utilice un bucle `for` que
para cada elemento del Array, envíe un mensaje a la consola con el formato 
`<número de elemento> - <valor del elemento>`. La numeración de los elementos debe empezar por `1`.

Por ejemplo, para el primer elemento del array `['Mango', 'Poly', 'Ajax']` con 
índice `0` imprimirá `1 - Mango`, y para el índice 2 imprimirá `3 - Ajax`.

```js
function logItems(items) {}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
```

## Ejemplo 5 - Registro (log) de contactos

Escriba una función `printContactsInfo(names, phones)` que envíe a la consola el nombre
y el número de teléfono del usuario. A los parámetros `names` y `phones` se les pasará 
cadenas de nombres y números de teléfono, separadas por comas. El índice de los nombres
y números de teléfono en las cadenas indican una coincidencia. Asegúrate de que el número
de nombres y teléfonos sea el mismo.

```js
function printContactsInfo(names, phones) {}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
);
```

## Ejemplo 6 - Encontrar el elemento más grande

Escribe una función `findLargestNumber(numbers)` que busque el número
más grande del Array.

```js
function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
```

## Ejemplo 7 - Valor promedio

Escriba una función `calAverage()` que tome un número arbitrario de argumentos
y vuelva su valor promedio. Todos los argumentos serán sólo números.

```js
function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
```

## Ejemplo 8 - Formato de tiempo

Escriba una función `formatTime(minutes)` que convierta el valor de 
`minutes` (número de minutos) en una cadena con el formato `HH:MM`.

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

## Ejemplo 9 - Colección de cursos (includes, indexOf, push, etc.)

Escriba funciones para manejar una colección de cursos de capacitación `courses`:

- `addCourse(name)` - añade un curso al final de la colección
- `removeCourse(name)` - elimina un curso de la colección
- `updateCourse(oldName, newName)` - cambia el nombre por uno nuevo

```js
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Usted ya tiene un curso como este'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'No se ha encontrado ningún curso con este nombre'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
```
