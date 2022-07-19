# Módulo 3. Clase 1. Objetos

<!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

## Ejemplo 1 - Fundamentos de los objetos

Escribe un script que, para el objeto `user`, secuencialmente:

- añade un campo `mood` con el valor `"happy"`.
- sustituye el valor de `hobby` por `'skydiving'`.
- sustituye el valor de `premium` por `false`
- devuelve el contenido del objeto `user` en formato `llave:valor` usando
  `Object.keys()` y `for...of`

### Código

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```

## Ejemplo 2 - Método Object.values()

Tenemos un objeto que almacena los salarios de nuestro equipo. Escribe el código
para sumar todos los salarios y almacenar el resultado en la variable sum.
El resultado debería ser 390. Si el objeto `salaries` está vacío, el resultado debe ser 0.

### Código

```js
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
```

## Ejemplo 3 - Array de objetos

Escribe una función `calcTotalPrice(stones, stoneName)` que tome un array de
objetos y una cadena de nombres de piedras. La función cuenta y devuelve el valor
total de las piedras con ese nombre, precio y cantidad del objeto.

### Código

```js
const stones = [
  { name: 'Esmeralda', price: 1300, quantity: 4 },
  { name: 'Diamante', price: 2700, quantity: 3 },
  { name: 'Zafiro', price: 400, quantity: 7 },
  { name: 'Piedra triturada', price: 200, quantity: 2 },
];
```

## Ejemplo 4 - Tareas complejas

Escribe un script para gestionar una cuenta bancaria online. Existe un 
objeto `cuenta` en el que hay que implementar métodos para trabajar con
el saldo y el historial de transacciones.

```js
/*
 * Sólo hay dos tipos de transacciones.
 * Se puede depositar o retirar dinero de la cuenta.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Cada transacción es un objeto con propiedades: id, type и amount
 */

const account = {
  // Saldo actual de la cuenta
  balance: 0,

  // Historial de transacciones
  transactions: [],

  /*
   * El método crea y retorna el objeto de la transacción.
   * Acepta la suma y el tipo de transacción.
   */
  createTransaction(amount, type) {},

  /*
   * Método responsable de añadir el monto al saldo.
   * Recibe el monto de la transacción.
   * Llama a createTransaction para crear un objeto de transacción
   * y después lo añade al historial de transacciones
   */
  deposit(amount) {},

  /*
   * El método responsable de retirar el monto del saldo.
   * Recibe el monto de la transacción.
   * Llama a createTransaction para crear un objeto de transacción
   * y después lo añade al historial de transacciones
   *
   * Si amount es mayor que el saldo actual, imprime un mensaje diciendo
   * que, no es posible retirar esta cantidad, no hay fondos suficientes.
   */
  withdraw(amount) {},

  /*
   * El método devuelve el saldo actual
   */
  getBalance() {},

  /*
   * El método busca y devuelve el objeto de la transacción según su id
   */
  getTransactionDetails(id) {},

  /*
   * El método devuelve la cantidad de fondos
   * de determinado tipo de transacción de todo el historial de transacciones
   */
  getTransactionTotal(type) {},
};
```
