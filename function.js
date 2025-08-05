// Задание 1: Простая функция
function greet() {
  console.log("Привет, мир!");
}
greet();

// Задание 2: Функция с параметрами
function sayHello(name) {
  console.log("Привет," + name + "!");
}

sayHello("Карина");
sayHello("Анна");
sayHello("Евгений");
sayHello("Марк");

// Задание 3: Функция с возвращаемым значением
function sum(a, b) {
  return a + b;
}

console.log(sum(4, 8));

// Задание 4: Функция с проверкой на чётность
function isEven(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(8));
console.log(isEven(41));
console.log(isEven(108));
console.log(isEven(3));

// Задание 5: Функция с несколькими параметрами и условием
let a = 5;
let b = 10;

function max(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "Числа равны";
  }
}

// Задание 6: Функция для работы со строками
function getInitials(nameNew, surname) {
  return nameNew[0] + "." + surname[0] + ".";
}
console.log(getInitials("Ирина", "Смирнова"));
console.log(getInitials("Дмитрий", "Иванов"));
console.log(getInitials("Мария", "Петрова"));

// Задание 7: Функция с вложенными вызовами
function square(a) {
  return a * a;
}

function cube(a) {
  return square(a) * a;
}

// Задание 8: Стрелочная функция
const sum2 = (a, b) => a + b;

console.log(sum2(a, b));

// Дополнительное задание:
function getFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
console.log(getFactorial(4));
console.log(getFactorial(8));
console.log(getFactorial(19));
