console.log('JS, block-3');

// task 19 ------------------------------------------------------------

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let propValues = [];

//   for (const product of products) {
//     // console.log(product);
//     // console.log(product[propName]);
//     propValues.push(product[propName]);
//   }
//   return propValues;
// }

// function getAllPropValues(propName) {
//   let propValues = [];

//   for (const product of products) {
//     // console.log(product);

//     const propKeys = Object.keys(product);
//     // console.log(propKeys);

//     for (const key of propKeys) {
//       // console.log(key);

//       if (propName === key) {
//         // console.log(product[propName]);
//         propValues.push(product[propName]);
//       }
//     }
//   }

//   // console.log(propValues);
//   return propValues;
// }

// getAllPropValues('name');
// getAllPropValues('category');

// task 20 ------------------------------------------------------------

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     // console.log(product);

//     const propValues = Object.values(product);
//     // console.log(propValues);

//     for (const value of propValues) {
//       // console.log(value);

//       if (value === productName) {
//         totalPrice = product.price * product.quantity;
//       }
//     }
//   }

//   // console.log(totalPrice);
//   return totalPrice;
// }

// calculateTotalPrice('Radar');
// calculateTotalPrice('Blaster');

// task 21 ------------------------------------------------------------

// const highTemperatures = {
// yesterday: 28,
// today: 26,
// tomorrow: 33,
// };
// Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// task 22 ------------------------------------------------------------

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// task 23 ------------------------------------------------------------

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// task 24 ------------------------------------------------------------

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// Change code below this line

// for (const color of colors) {
//   const { hex, rgb } = color;

//   // hexColors.push(color.hex);
//   // rgbColors.push(color.rgb);

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// task 25 ------------------------------------------------------------

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// task 26 ------------------------------------------------------------

// Change code below this line

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

// const todayLow = forecast.today.low;
// const todayHigh = forecast.today.high;
// const tomorrowLow = forecast.tomorrow.low;
// const tomorrowHigh = forecast.tomorrow.high;

// Change code above this line
// return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// });

// task 27 ------------------------------------------------------------

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// task 28 ------------------------------------------------------------

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// task 29 ------------------------------------------------------------

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };

// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

// task 30 ------------------------------------------------------------

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

//   const newData = { category, priority, completed, ...data };

// console.log(newData);
//   return newData;

// }

// makeTask({});
// makeTask({ category: 'Finance', text: 'Take interest' });

// task 31 ------------------------------------------------------------

// function add(...args) {
//   let total = 0;

//   console.log(args);

//   for (const arg of args) {
//     console.log(arg);

//     total += arg;
//   }

//   console.log(total);
//   return total;
// }

// add(15, 27);
// add(12, 4, 11, 48);

// task 32 ------------------------------------------------------------

// function addOverNum(...args) {
//   let total = 0;
//   console.log(args);

//   for (const arg of args) {
//     console.log(args[0]);

//     if (arg > args[0]) {
//       total += arg;
//     }
//   }

//   console.log(total);
//   return total;
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);

// task 33 ------------------------------------------------------------

// function findMatches(array1, ...array2) {
//   const matches = [];

//   console.log(array1);
//   console.log(array2);

//   for (const array of array2) {
//     console.log(array);

//     if (array1.includes(array)) {
//       matches.push(array);
//     }
//   }

//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);

// task 34 ------------------------------------------------------------

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// bookShelf.updateBook('Sands of dune', 'Dune');

// task 35 ------------------------------------------------------------

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles');

// task 36 ------------------------------------------------------------

// const atTheOldToad = {};
// atTheOldToad.potions = [];

// task 37 ------------------------------------------------------------

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   getPotions() {
//     return this.potions;
//   },
// };

// task 38 ------------------------------------------------------------

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   addPotion(potionName) {
//     return this.potions.push(potionName);
//   },
// };

// task 39 ------------------------------------------------------------
// task 40 ------------------------------------------------------------
// task 41 ------------------------------------------------------------

//
//
// =========================== LESSON 05 =========================== //
//
//

// ## example 1 -------------------------------------------------------

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// 1
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = 'false';
// 2
// const keys = Object.keys(user);
// console.log(keys);
// const value = Object.values(user);
// console.log(value);

// for (const key of keys) {
//   console.log(key);
// }

// ## example 2 -------------------------------------------------------

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// const values = Object.values(salaries);
// console.log(values);

// for (const value of values) {
//   console.log(value);

//   sum += value;
// }

// console.log(sum);

// ## example 3 -------------------------------------------------------

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   let sum = [];

// for (const stone of stones) {
//   console.log(stone);

//   if (stoneName === stone.name) {
//     sum = stone.price * stone.quantity;
//   }
// }

//   for (const stone of stones) {
//     const { name, price, quantity } = stone;
//     console.log(stone);

//     if (stoneName === name) {
//       sum = price * quantity;
//     }
//   }

//   console.log(sum);
// }

// calcTotalPrice(stones, 'Изумруд');

// ## example 4 -------------------------------------------------------

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {},
//   deposit(amount) {},
//   withdraw(amount) {},
//   getBalance() {},
//   getTransactionDetails(id) {},
//   getTransactionTotal(type) {},
// };

//
//
// =========================== LESSON 06 =========================== //
//
//
