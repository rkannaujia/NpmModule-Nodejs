const chalk = require('chalk');
const validator = require('validator')

console.log(chalk.red.inverse("rahul"));
const res = validator.isEmail("Rahul@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));