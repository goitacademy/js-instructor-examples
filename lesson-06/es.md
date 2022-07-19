# Módulo 3. Clase 6. Desestructuración y rest/spread

## Ejemplo 1 - Desestructuración

Reescribe la función para que acepte un único objeto de parámetros en lugar
de un conjunto de argumentos independientes.

```js
function calcBMI(weight, height) {
  const numericWeight = Number(weight.replace(',', '.'));
  const numericHeight = Number(height.replace(',', '.'));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// Era
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Se espera
console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  }),
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  }),
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  }),
);
```

## Ejemplo 2 - Desestructuración

Reescribe la función para que acepte un único objeto de parámetros en lugar
de un conjunto de argumentos independientes.

```js
function printContactsInfo(names, phones) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// Era
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Se espera
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
```

## Ejemplo 3 - Desestructuración profunda

Reescribe la función para que acepte un único objeto de parámetros en lugar
de un conjunto de argumentos independientes.

```js
function getBotReport(companyName, repairBots, defenceBots) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Era
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Se espera
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  }),
); // "Cyberdyne Systems has 200 bots in stock"
```

## Example 4 - Desestructuración

Reescriba la función para que acepte un objeto parámetro con las 
propiedades `companyName` y `stock` y produzca un informe sobre 
la cantidad de productos en stock para cualquier empresa.

```js
// Solución
function getStockReport({ companyName, stock }) {
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }
  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  }),
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  }),
); // "Belacci has 35 item in stock"
```

## Ejemplo 5 - Operación spread

Completa la función `createContact(partialContact)` para que devuelva un nuevo
objeto de contacto con las propiedades añadidas `id` y `createdAt` así como `list` con
el valor "default" si `partialContact` no tiene dicha propiedad.

```js
// Solución
function createContact(partialContact) {
  return {
    list: 'default',
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  }),
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  }),
);

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
```

## Ejemplo 6 - Operación rest

Escribe la función `transformUsername(user)` para que devuelva un nuevo objeto
con la propiedad `fullName`, en lugar de `firstName` y `lastName`.

```js
// Solución
function transformUsername({ firstName, lastName, ...otherProps }) {
  return {
    fullName: `${firstName} ${lastName}`,
    ...otherProps,
  };
}

console.log(
  transformId({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  }),
);

console.log(
  transformId({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  }),
);
```
