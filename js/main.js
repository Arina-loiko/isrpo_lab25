// import mainFunc from './utils.js';
// import { greet, add, multiply, PI } from './utils.js';
// import { add as sumTwo } from './utils.js';
// import * as Utils from './utils.js';
// import { square, cube, E } from './math.js';

// const colors = ['red', 'green', 'blue'];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);
// const [c1, c2, c3, c4 = 'yellow'] = colors;
// console.log(c1, c2, c3, c4);

// const user = { name: 'Анна', age: 20, city: 'Минск' };
// const oldName = user.name;
// const oldAge = user.age;
// console.log(oldName, oldAge);
// const { name, age } = user;
// console.log(name, age);
// const { name: userName, age: userAge, country = 'Беларусь' } = user;
// console.log(userName, userAge, country);
// function displayUser({ name, age }) {
//     console.log(`Имя: ${name}, Возраст: ${age}`);
// }
// displayUser(user);

// const product = { name: 'Ноутбук', price: 1200, category: 'Электроника', inStock: true };
// const { name: productName, price, category, inStock } = product;
// function printProduct({ name, price, category, inStock }) {
//     console.log(`${name} - $${price} (${category}) - ${inStock ? 'В наличии' : 'Нет в наличии'}`);
// }
// printProduct(product);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const merged = [...arr1, ...arr2];
// console.log(merged);
// const copy = [...arr1];
// console.log(copy);
// const withNew = [...arr1, 10, 20];
// console.log(withNew);
// const person = { name: 'Анна', age: 20 };
// const address = { city: 'Минск', country: 'Беларусь' };
// const fullInfo = { ...person, ...address };
// console.log(fullInfo);
// const updatedPerson = { ...person, age: 21 };
// console.log(updatedPerson);
// const withDefault = { role: 'user', ...person };
// console.log(withDefault);
// function sum(...numbers) {
//     return numbers.reduce((total, n) => total + n, 0);
// }
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));
// const [first, ...rest] = arr1;
// console.log(first);
// console.log(rest);
// const nums1 = [10, 20, 30];
// const nums2 = [40, 50, 60];
// const combined = [...nums1, ...nums2];
// console.log(combined);
// function findMax(...numbers) {
//     return Math.max(...numbers);
// }
// console.log(findMax(...combined));

// mainFunc();
// console.log(greet('Анна'));
// console.log(add(3, 4));
// console.log(multiply(3, 4));
// console.log(PI);
// console.log(sumTwo(10, 5));
// console.log(Utils.greet('Мир'));
// console.log(square(4));
// console.log(cube(3));
// console.log(E);

// const myPromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve('Успех!');
//     } else {
//         reject('Ошибка!');
//     }
// });
// myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({ id: userId, name: 'Пользователь ' + userId });
//             } else {
//                 reject('Неверный userId');
//             }
//         }, 1500);
//     });
// }
// fetchUserData(1)
//     .then(user => {
//         console.log(user);
//         return user.name;
//     })
//     .then(name => console.log('Имя:', name))
//     .catch(err => console.log(err));

// function checkInventory(item) {
//     return new Promise((resolve, reject) => {
//         if (item.inStock) {
//             resolve(`${item.name} есть в наличии`);
//         } else {
//             reject(`${item.name} нет в наличии`);
//         }
//     });
// }
// checkInventory({ name: 'Ноутбук', inStock: true })
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));
// checkInventory({ name: 'Телефон', inStock: false })
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));

console.log("Async/Await");

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}

// async function greet() {
//     return "Привет!";
// }
// greet().then((message) => console.log(message));

// function getWeather() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ temp: 22, condition: "Солнечно" });
//         }, 1000);
//     });
// }
// async function showWeather() {
//     console.log("Загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`Температура: ${weather.temp}°С, ${weather.condition}`);
// }
// showWeather();

// async function fetchData(shouldFail) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldFail) {
//                 reject("Ошибка при загрузке данных");
//             } else {
//                 resolve({ data: "Важные данные" });
//             }
//         }, 800);
//     });
// }
// async function getData() {
//     try {
//         const result = await fetchData(false);
//         console.log("Успешно:", result.data);
//         const failedResult = await fetchData(true);
//         console.log("Это не выполнится");
//     } catch (error) {
//         console.log("Поймана ошибка:", error);
//     }
// }
// getData();

// async function cookDinner() {
//     console.log("Начинаем готовить...");
//     const pasta = await delay(1000).then(() => "Паста готова");
//     console.log(pasta);
//     const sauce = await delay(500).then(() => "Соус готов");
//     console.log(sauce);
//     const salad = await delay(700).then(() => "Салат готов");
//     console.log(salad);
//     return "Ужин готов!";
// }
// cookDinner().then((result) => console.log(result));

// async function cookDinnerFast() {
//     console.log("Готовим всё одновременно...");
//     const [pasta, sauce, salad] = await Promise.all([
//         delay(1000).then(() => "Паста готова"),
//         delay(500).then(() => "Соус готов"),
//         delay(700).then(() => "Салат готов"),
//     ]);
//     console.log(pasta, sauce, salad);
//     return "Ужин готов быстрее!";
// }
// cookDinnerFast().then((result) => console.log(result));

async function processOrder() {
    async function checkAvailability() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Товар в наличии"), 500);
        });
    }

    async function calculateCost() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Стоимость: 1500 руб"), 600);
        });
    }

    async function confirmOrder() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Заказ подтверждён"), 400);
        });
    }

    try {
        const availability = await checkAvailability();
        console.log(availability);
        const cost = await calculateCost();
        console.log(cost);
        const confirmation = await confirmOrder();
        console.log(confirmation);
    } catch (error) {
        console.log("Ошибка при обработке заказа:", error);
    }
}

processOrder();
