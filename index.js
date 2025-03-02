#!/usr/bin/env node
// shebang !# (convention unix pour spécifier intérpreteur)
// on utilise /env pour chercher dans le PATH


import clear from "clear";
import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import open from "open";

clear();

const data = {
    name: chalk.bold.underline.magentaBright("Denis"),
    work: chalk.bold.whiteBright("WEB Developer"),
    github: chalk.bold.gray("GitHub: ") + chalk.white("https://github.com/Denisdcb/"),
    discord: chalk.bold.gray("Discord: ") + chalk.yellowBright("ghosthacker89"),
    npx: chalk.bold.red("npx") + " " + chalk.white("denisdcb")
}

const aboutMe = boxen([
    `${data.name}`,
    ``,
    `${data.work}`,
    ``,
    `${data.github}`,
    `${data.discord}`,
    `${data.npx}`,
    ``,
    `${chalk.italic("Select an option to know more about me !")}`
].join("\n"), {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "greenBright"
    }
);

console.log(aboutMe);

const prompt = inquirer.createPromptModule();

// Retourne une promesse
const questions = [
    {
        // On défini le type du prompt
        type: "list",
        name: "action",
        message: "What is your choice ?",
        choices: [
            {
                name: `${chalk.italic.underline.greenBright("Open my:")} ${chalk.gray.bold("GitHub")}`,
                value: () => {
                    open("https://github.com/Denisdcb/");
                    console.log("\nGitHub is open in your browser !\n");
                }
            },
            {
                name: `${chalk.italic.underline.greenBright("Copy my:")} ${chalk.yellowBright.bold("Discord")}`,
                value: () => {
                    console.log(`\nAdd me on Discord : ${chalk.yellowBright.bold("ghosthacker89")}\n`);
                }
            },
            {
                name: chalk.red("Quit..."),
                value: () => {
                    console.log("\nSee you soon ! 👋\n");
                }
            }
        ]
    }
];

prompt(questions)
    //action contient l'objet correspondant au choix, answer.action() execute l'action du choix
.then(answer => answer.action());