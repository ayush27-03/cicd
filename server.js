/**
 * This is the main entry point executable file which nodejs runs.
 * It can also be named index.js or app.js
 * The name server.js is used to avoid confusion with other files named index.js or app.js
 * which may be present in the project.
 * And you start writing javaScript directly from here, that's why it is so easy to remember.
 * You can also use TypeScript and name it server.ts
 * When dealing with TypeScript, you need to compile it to JavaScript before running it with nodejs.
 */

// console.log("Hello, World! This is my first Node.js application.");

//@ Some briefs about objects in Node.js environment
// console.log(window); 
//? This will throw an error because 'window' is not defined in Node.js environment.

//? Instead you can use 'global' which is the global object in Node.js
// console.log(global); 
//? This will print the global object in Node.js environment.

//? Similarly as there is no DOM in Node.js, there is no 'document' object.
// console.log(document); 
//? This will throw an error because 'document' is not defined in Node.js environment.

//? Instead you can use 'process' which is an object that provides information about the current Node.js process.
// console.log(process); 
//? This will print the process object in Node.js environment.

//@ Node.js Event Loop in working
// console.log("First log statement");
// setTimeout(() => {
//   console.log("This is the second statement");
// }, 1000);
// console.log("Third log statement");

//@ Importing Modules and using them the CommonJS way

//? Creating a Utility Module 
// const generateRandomNumber = require('./utils');
//.js is not needed. The above is the commonJS way of importing sinlge function module in Node.js

// const {generateRandomNumber, celsiusToFahrenheit} = require('./utils');
// The above is how you import multiple function module in Node.js
// console.log(`
//   random number: ${generateRandomNumber()}
//   celsius to fahrenheit: ${celsiusToFahrenheit(0)}
//   `);

//? Building a Configuration File
// import config from './utils.js';
// console.log(config);

//@ Importing Modules and using them the ES6 way

//? Default Export and Import
// import greet from './usingES6.js';
// console.log(greet(
//   "Ayush", 20, "Developer", 2000, "Full Stack Developer", "General", "Male", "Indian"
// ));

//? Named Export with Aliases
// import {fun1 as f1, fun2 as f2} from './usingES6.js';
// console.log(f1("I am f1."));
// console.log(f2("I am f2."));

//? Dynamic Imports
// async function loadMathModule(){
//   const math = await import('./usingES6.js');
//   console.log(`Addition: ${math.add(5, 10)}`);
//   console.log(`Multiplication: ${math.multiply(5, 10)}`);
// }
// loadMathModule();

// Combining default and named imports/exports
// import Person, {employee} from './usingES6.js';

// const person1 = new Person("Ayush");
// console.log(person1.sayHello());
// console.log(employee("Ayush", 2000, 20));

//? Importing from postController.js not default export from there 
// import {getPost} from './postController.js';
// Here you have to use .js extension in ES6 module import
// console.log(getPost());

//? Importing default export from postController.js
import getPost, {getPostsLength} from './postController.js';
console.log(getPost()); 
console.log(getPostsLength());