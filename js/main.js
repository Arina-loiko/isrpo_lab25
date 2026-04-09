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

console.log("Fetch API");

// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if (!response.ok) {
//             throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//         }
//         const users = await response.json();
//         console.log("Первые 3 пользователя:");
//         users.slice(0, 3).forEach((user) => {
//             console.log(`- ${user.name} (${user.email})`);
//         });
//     } catch (error) {
//         console.log("Ошибка при загрузке пользователей:", error.message);
//     }
// }
// getUsers();

// async function getUserById(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const user = await response.json();
//         console.log(`Пользователь #${id}:`);
//         console.log(`Имя: ${user.name}`);
//         console.log(`Город: ${user.address.city}`);
//         console.log(`Компания: ${user.company.name}`);
//     } catch (error) {
//         console.log("Ошибка:", error.message);
//     }
// }
// getUserById(1);

// async function createPost() {
//     try {
//         const newPost = {
//             title: "Моя первая запись",
//             body: "Это содержание моей первой записи в блоге",
//             userId: 1,
//         };
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newPost),
//         });
//         const createdPost = await response.json();
//         console.log("Создана новая запись:");
//         console.log("ID:", createdPost.id);
//         console.log("Заголовок:", createdPost.title);
//     } catch (error) {
//         console.log("Ошибка при создании записи:", error.message);
//     }
// }
// createPost();

console.log("Optional Chaining");

// const user1 = {
//     name: "Андрей",
//     address: {
//         city: "Волжский",
//         street: "Пушкина",
//     },
// };
// const user2 = {
//     name: "Дмитрий",
// };
// const city1 = user2.address && user2.address.city;
// console.log("Город (старый способ):", city1);
// const city2 = user2.address?.city;
// console.log("Город (новый способ):", city2);
// const street = user1.address?.street;
// console.log("Улица:", street);

// const admin = {
//     name: "Администратор",
//     permissions: {
//         canDelete: () => true,
//     },
// };
// const guest = {
//     name: "Гость",
// };
// console.log("Админ может удалять?", admin.permissions?.canDelete?.());
// console.log("Гость может удалять?", guest.permissions?.canDelete?.());

// const company = {
//     name: "Tech Corp",
//     employees: [
//         { name: "Надежда", role: "Developer" },
//         { name: "Анна", role: "Designer" },
//     ],
// };
// const startup = {
//     name: "New Startup",
// };
// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);

console.log("Nullish Coalescing");

// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;
// console.log('value1 || "default":', value1 || "default");
// console.log('value2 || "default":', value2 || "default");
// console.log('value3 || "default":', value3 || "default");
// console.log('value1 ?? "default":', value1 ?? "default");
// console.log('value2 ?? "default":', value2 ?? "default");
// console.log('value3 ?? "default":', value3 ?? "default");
// console.log('value4 ?? "default":', value4 ?? "default");
// console.log('value5 ?? "default":', value5 ?? "default");

// function displayUserSettings(settings) {
//     const theme = settings?.theme ?? "light";
//     const fontSize = settings?.fontSize ?? 14;
//     const notifications = settings?.notifications ?? true;
//     console.log("Настройки пользователя:");
//     console.log("Тема:", theme);
//     console.log("Размер шрифта:", fontSize);
//     console.log("Уведомления:", notifications);
// }
// displayUserSettings({ theme: "dark", fontSize: 16 });
// displayUserSettings({ notifications: false });
// displayUserSettings({});

// const apiResponse = {
//     data: {
//         user: {
//             profile: {
//                 settings: {
//                     language: "ru",
//                 },
//             },
//         },
//     },
// };
// const language = apiResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык:", language);
// const emptyResponse = {};
// const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык по умолчанию:", defaultLanguage);

const order = {
    customer: {
        name: "Мария",
        email: "maria@example.com",
    },
    shipping: {
        address: {
            city: "Москва",
            street: "Ленина 10",
        },
        method: "Курьер",
    },
    payment: {
        method: "Карта",
        status: "Оплачено",
    },
};

function displayOrder(o) {
    const customerName = o?.customer?.name ?? "Неизвестный покупатель";
    const customerEmail = o?.customer?.email ?? "Email не указан";
    const city = o?.shipping?.address?.city ?? "Город не указан";
    const street = o?.shipping?.address?.street ?? "Улица не указана";
    const shippingMethod = o?.shipping?.method ?? "Метод доставки не указан";
    const paymentMethod = o?.payment?.method ?? "Метод оплаты не указан";
    const paymentStatus = o?.payment?.status ?? "Статус не известен";

    console.log("Покупатель:", customerName);
    console.log("Email:", customerEmail);
    console.log("Город:", city);
    console.log("Улица:", street);
    console.log("Доставка:", shippingMethod);
    console.log("Оплата:", paymentMethod);
    console.log("Статус оплаты:", paymentStatus);
}

displayOrder(order);
