#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("\t============================"))
console.log(chalk.yellowBright.bgMagenta("\tWELLCOME TO SUK WORD COUNTER"))
console.log(chalk.blue("\t============================\n"))

const ans:{
    sentence : string;
} = await inquirer.prompt(
    {
        name:"sentence",
        type:"input",
        message:chalk.blueBright("inter your sentence"),
    }
);

const modify = ans.sentence.trim().split(" ");

let print=chalk.blueBright(`\nyour sentence word is = ${chalk.green(modify.length)}`)
console.log(print)

