#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n", chalk.bold.redBright(`\t\t\t\t<========`), chalk.bold.redBright.bgWhite(` CODE WITH AMINA NOOR`), chalk.bold.redBright(`========>\n`));
console.log(chalk.bold.greenBright(`\t\t\t<----------`), chalk.bold.blueBright(`A NAME GUESSING GAME USING TYPESCRIPT`), chalk.bold.greenBright(`---------->\n\n`));
let firstNo = [];
let secondNo = [];
let firstName = [];
let secondName = [];
let finalName = [];
let sample1 = "AEIMQU";
let sample2 = "BFJNRVY";
let sample3 = "CGKOSWZ";
let sample4 = "DHLPTX";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "lettersInName",
        message: chalk.bold.redBright.underline("Let me know how many Letters are you in your Name, Please tell...")
    }
]);
let nums = `        1   2   3   4`;
let alphabets = `      | A | B | C | D |
      | E | F | G | H |
      | I | J | K | L |
      | M | N | O | P |
      | Q | R | S | T |
      | U | V | W | X |
          | Y | Z |`;
console.log("\n", chalk.bold.greenBright(nums), "\n");
console.log(chalk.bold.yellowBright(alphabets), "\n");
for (let i = 1; i <= answers.lettersInName; i++) {
    let ordinal = `${i}`;
    switch (ordinal) {
        case "1" || "21" || "31":
            ordinal = chalk.red(`${i}st`);
            break;
        case "2" || "22" || "32":
            ordinal = chalk.red(`${i}nd`);
            break;
        case "3" || "23" || "33":
            ordinal = chalk.red(`${i}rd`);
        default:
            ordinal = chalk.red(`${i}th`);
            break;
    }
    const firstTurn = await inquirer.prompt([
        {
            type: "number",
            name: "Letter",
            message: chalk.bold.underline.blueBright(`Enter the column number of the ${ordinal} letter of your name..`),
            validate: (nums) => {
                if (nums <= 4) {
                    return true;
                }
                else {
                    return chalk.bold.green.italic('You have selected an invalid number ');
                }
            }
        },
    ]);
    firstNo.push(firstTurn.Letter);
}
;
const first = chalk.bold.yellowBright(`         | A | E | I | M | Q | U |`);
const second = chalk.bold.yellowBright(`        | B | F | J | N | R | V | Y |`);
const third = chalk.bold.yellowBright(`         | C | G | K | O | S | W | Z |`);
const fourth = chalk.bold.yellowBright(`        | D | H | L | P | T | X | `);
firstNo.forEach((val) => {
    switch (val) {
        case 1:
            firstName.push(first);
            secondName.push(sample1);
            break;
        case 2:
            firstName.push(second);
            secondName.push(sample2);
            break;
        case 3:
            firstName.push(third);
            secondName.push(sample3);
            break;
        case 4:
            firstName.push(fourth);
            secondName.push(sample4);
            break;
        default:
            return null;
    }
});
console.log(chalk.bold.italic.bgCyanBright("\nCould You repeat that pattern for the same name...?"));
console.log("\n");
// For repeat pattern
let num = `         1   2   3   4   5   6   7`;
console.log(chalk.bold.greenBright(num), "\n");
firstName.forEach((letters) => console.log(letters));
console.log('\n');
for (let i = 1; i <= answers.lettersInName; i++) {
    let ordinal = `${i}`;
    switch (ordinal) {
        case "1" || "21" || "31":
            ordinal = chalk.red(`${i}st`);
            break;
        case "2" || "22" || "32":
            ordinal = chalk.red(`${i}nd`);
            break;
        case "3" || "23" || "33":
            ordinal = chalk.red(`${i}rd`);
        default:
            ordinal = chalk.red(`${i}th`);
            break;
    }
    ;
    const secondTurn = await inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: chalk.bold.underline.blueBright(`Enter the column number of the ${chalk.bold.redBright(ordinal)} letter of your name...`),
            validate: (val) => {
                if (val <= 7) {
                    return true;
                }
                else {
                    return chalk.bold.italic.green(`You have Selected an unvalid Number...`);
                }
            }
        },
    ]);
    secondNo.push(secondTurn.letter);
}
for (let i = 0; i < secondNo.length; i++) {
    finalName.push(secondName[i].slice(secondNo[i] - 1, secondNo[i]));
}
let NAME = chalk.bold.italic.redBright(finalName.join(""));
console.log(chalk.bold.magentaBright(`\n          THE NAME YOU THOUGHT OF: ${NAME}`));
