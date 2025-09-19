// First change the "type":"module" in the package.json file to use ES6

export default function greet(name, age, job, salary, role, caste, gender, nationality) {
  return `Hello, I am ${name}
  I am ${age} years old
  I am a ${job}
  My salary is ${salary}
  My role is ${role}
  My caste is ${caste}
  My gender is ${gender}
  My nationality is ${nationality}
  `;
}

export function fun1(id) {
  return `This is fun1: ${id}`;
}
export function fun2(id) {
  return `This is fun2: ${id}`;
}

export function add(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}

export default class Person{
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I am ${this.name}`;
  }
}
export const employee = (name, salary, age) => {
  `hi this is ${name} and my salary is ${salary}`
  `I am ${age} years old `
};