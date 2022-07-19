# Módulo 5. Clase 10. Prototipos y Clases

## Ejemplo 1 - Blogger

Escribe una clase `Blogger` para crear un objeto blogger con las siguientes propiedades:

- `email` - correo, cadena
- `age` - edad, número
- `numberOfPosts` - cantidad de posts, número
- `topics` - un Array de temas en los que el blogger se especializa

La clase espera un único parámetro: un objeto de configuraciones con propiedades del mismo nombre.

Agrega el método `getInfo()`, que devuelde la cadena:
`User ${correo} is ${edad} years old and has ${cant. de posts} posts`.

Agrega el método `updatePostCount(value)`, que en el parámetro `value` recibe la
cantidad de posts que debe añadir el usuario.

```js
const mango = new User({
  name: 'mango@mail.com',
  age: 24,
  numberOfPosts: 20,
  topics: ['tech', 'cooking'],
});
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
mango.updatePostCount(5);
console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new User({
  name: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
poly.updatePostCount(4);
console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
```

## Ejemplo 2 - Almacén

Escriba una clase `Storage` que crea objetos para gestionar un almacén de productos.
Cuando se llama recibe un argumento, el array inicial de productos, y lo escribe
en la propiedad `items`.

Añade métodos de la clase:

- `getItems()` - devuelve un array de productos.
- `addItem(item)` - recibe un nuevo producto y lo añade a los actuales.
- `removeItem(item)` - recibe el elemento y, si existe, lo elimina de los actuales.

```js
const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
```

## Ejemplo 3 - User

Escribe una clase `User` que cree un objeto con las propiedades `login` y `email`. 
Declare las propiedades privadas `#login` y `#email`, a las que se puede acceder
mediante el getter y setter `login` y `email`.

```js
const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
```

## Ejemplo 4 - Notas

Escribe una clase `Notes` que gestione una colección de notas en la propiedad `items`.
Una nota es un objeto con las propiedades `text` y `priority`. Añade una propiedad 
estática `Prioridad` a la clase, en donde almacenará el objeto con las prioridades.

```js
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}
```

Agregue los métodos `addNote(note)`, `removeNote(text)` y
`updatePriority(text, newPriority)`.

```js
const myNotes = new Notes([]);

myNotes.addNote({ text: 'Mi primera nota', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Mi segunda nota',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Mi primera nota');
console.log(myNotes.items);

myNotes.updateNote('Mi segunda nota', Notes.Priority.HIGH);
console.log(myNotes.items);
```

## Ejemplo 5 - Toggle

Escribe una clase `Toggle` que toma un objeto de configuración `{isOpen: boolean}` y 
declara una propiedad `on` - estado on/off (verdadero/falso). Por defecto el valor
de la propiedad `on` debe ser `false`.

```js
const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
```
