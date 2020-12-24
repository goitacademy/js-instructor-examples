# Модуль 5. Занятие 10. Классы

## 1 - Пользователь

Напиши класс `User` для создания пользователя со следующим свойствами:

- `username` - имя, строка
- `age` - возраст, число
- `numberOfPosts` - кол-во постов, число

Класс ожидает 1 параметр - объект настроек с одноимёнными свойствами.

Добавь метод `getInfo()`, который, возвращает строку:
`User ${имя} is ${возраст} years old and has ${кол-во постов} posts`.

```js
const mango = new User({
  name: 'Mango',
  age: 24,
  numberOfPosts: 20,
});

console.log(mango.getInfo()); // User Mango is 24 years old and has 20 posts

const poly = new User({
  name: 'Poly',
  age: 19,
  numberOfPosts: 17,
});

console.log(poly.getInfo()); // User Poly is 19 years old and has 17 posts
```

## 2 - Хранилище

Напиши класс `Storage` который создаёт объекты для управления складом товаров. 
При вызове будет получать один аргумент - начальный массив товаров, и
записывать его в свойство `items`.

Добавь методы класса:

- `getItems()` - возвращает массив товаров.
- `addItem(item)` - получает новый товар и добавляет его к текущим.
- `removeItem(item)` - получет товар и, если он есть, удаляет его из текущих.

```js
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
```

## 3 - Клиент

Напиши класс `Client` который создаёт объект со свойствами `login` и `email`. 
Объяви приватные свойства `#login` и `#email`, доступ к которым сделай через геттер и сеттер `login` и `email`.

```js
const mango = new Client({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new Client({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
```

## 4 - Заметки

Напиши класс `Notes` который управляет коллекцией заметок в свойстве `items`. Заметка это объект со свойствами `text` и `priority`. 
Добавь классу статическое свойство `Priority`, в котором будет храниться объект с приоритетами.

```js
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}
```

Добавь методы `addNote(note)`, `removeNote(text)` и `updateNote(oldText, newText)`.

```js
const myNotes = new Notes([]); 

myNotes.addNote({  text: 'Моя первая заметка', priority: Notes.Priority.LOW })
console.log(myNotes.items); 

myNotes.addNote({ text: 'Моя вторая заметка', priority: Notes.Priority.NORMAL })
console.log(myNotes.items); 

myNotes.removeNote(''Моя первая заметка');
console.log(myNotes.items); 

myNotes.updateNote('Моя вторая заметка', 'Моя обновлённая вторая заметка');
console.log(myNotes.items); 
```
