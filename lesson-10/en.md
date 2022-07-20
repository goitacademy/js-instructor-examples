# Module 5 - Lesson 10 - Prototypes and classes

## Example 1 - Blogger

Write a `Blogger` class to create a blogger object with the following properties:

- `email` - mail, line
- `age` - age, number
- `numberOfPosts` - number of posts, number
- `topics` - an array of topics the blogger specializes in

The class expects one parameter - object of settings  with the same name properties.

Add a `getInfo()` method that returns string:
`User ${mail} is ${age} years old and has ${number of posts} posts`.

Add the `updatePostCount(value)` method, which in the `value` parameter takes
number of posts to add to the user.

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

## Example 2 - Storagе

Write a `Storage` class that creates objects for managing a warehouse of goods.
When called, it will receive one argument - the initial array of goods, and write
it to the `items` property.

Add class methods:

- `getItems()` - returns an array of products.
- `addItem(item)` - receives a new product and adds it to the current ones.
- `removeItem(item)` - receives the product and, if it exists, removes it from the current.

```js
const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

const items = storage.getItems();
console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
```

## Example 3 - User

Write a class `User` which creates an object with properties `login` and `email`.
Declare private properties `#login` and `#email`, which can be accessed via
getter and setter of `login` and `email`.

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

## Example 4 - Notes

Write a `Notes` class that manages the collection of notes in the `items` property.
A note is an object with `text` and `priority` properties. Add a static
property `Priority` to the class, which will store the object with priorities.

```js
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}
```

Add methods`addNote(note)`, `removeNote(text)` and
`updatePriority(text, newPriority)`.

```js
const myNotes = new Notes([]);

myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'My second note',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('My first note');
console.log(myNotes.items);

myNotes.updateNote('My second note', Notes.Priority.HIGH);
console.log(myNotes.items);
```

## Example 5 - Toggle

Write a `Toggle` class that takes a settings object `{isOpen: boolean}` and
declares one property `on` - state on/off (true/false). By default
the value of the `on` property should be `false`.

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
