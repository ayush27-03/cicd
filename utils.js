// This has got random functions which can be used in other files

// The CommonJS way of exporting functions
function generateRandomNumber(){
  return Math.floor(Math.random() * 100)+1;
}
function celsiusToFahrenheit(celsius){
  return (celsius * 9)/5 + 32;
}
// module.exports = generateRandomNumber; 
// The above is how you export a single function

// module.exports = {
//   generateRandomNumber, 
//   celsiusToFahrenheit, 
// };
// For multi function export you can export an object with multiple functions

const config = {
  appName: "MyNodeApp",
  version: "0.0.1",
  port: 3000,
  database: "mongodb://https://localhost:3000/mydatabase",
  apikey: "12345abcdef67890"
};
export default config;