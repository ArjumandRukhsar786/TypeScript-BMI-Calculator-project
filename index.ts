#! /usr/bin/env node

//BMI-CALCULATOR USING INQUIRER PROMPT
import inquirer from "inquirer";
import chalk from "chalk";

//print welcome message
console.log(chalk.bold.magenta(`\n \t\t <<<================================================>>>`));
console.log(chalk.bold.magenta(`<<<==========>>>  ${chalk.yellow.bold("Welcome To \ 'Code with Arjumand\' - BMI-CALCULATOR")}   <<<================>>>`));
console.log(chalk.bold.magenta(`\t\t <<<=================================================>>>\n`));


const questions = [
  { type: 'number', name: 'weight', message: 'weight(kg):'},
  { type: 'number', name: 'height', message: 'height(m):'},
  
];

const calculateBMI = (weight: number, height: number): number => weight/(height*height);

const main = async() => {
    const {weight,height} = await inquirer.prompt(questions);

   console.log(`BMI: ${chalk.green.bold(calculateBMI(weight,height).toFixed(2))}`)
   
};

main();