// Задание 1: Создание объекта
let person = {
  name: "Alice",
  age: 28,
  city: "Astana",

  // Задание 3: Методы объекта
  greet() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет!`);
  },
};
console.log(person);

// Задание 2: Доступ к свойствам объекта
console.log(person.name);
console.log(person.age);

// Задание 4: Сравнение объектов (Reference Type)
let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
/* потому что в js объекты сравниваются не по значению, а по ссылке. obj1 и obj2 разные ссылки в памяти */

// Задание 5: Поверхностное и глубокое копирование объектов
const book = {
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  details: {
    year: 1967,
    pages: 480,
  },
};
const copiedBook = Object.assign({}, book);

copiedBook.details.year = 2000;

console.log("Исходный объект:", book);
console.log("Копия:", copiedBook);
// изменение во вложенном объекте повлияло на копию, потому что Object.assign() делает поверхностную копию

// Задание 6: Методы объектов
const calculator = {
  a: 10,
  b: 15,
  sum: function () {
    return this.a + this.b;
  },

  multiply: function () {
    return this.a * this.b;
  },
};
console.log("Сумма:", calculator.sum());
console.log("Произведение:", calculator.multiply());

// Задание 7: `const` и изменение содержимого объектов
const car = {
  brand: "Audi",
  model: "A7",
};
car.model = "Q8";
console.log(car);

/* const не запрещает изменение содержимого объектов. 
Только гарантирует, что переменная не может быть переназначена на другой объект, 
но свойства и элементы внутри него могут быть изменены. */
