// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {name: 'license',
    message: 'Select kind of license for this application:',
    type: 'list',
    choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', "BSD 3-clause Clear license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]},
    {name: 'title',
    message: 'What is the title of this application?',
    type: 'input'},
    {name: 'description',
    message: 'What does this application do?',
    type: 'input'},
    {name: 'install',
    message: 'How do I install this application?',
    type: 'input'},
    {name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},
    {name: 'contributing',
    message: 'How do I contribute to this application?',
    type: 'input'},
    {name: 'testing',
    message: 'How do I test this application?',
    type: 'input'},
    {name: 'username',
    message: 'What is your Github username?',
    type: 'input'},
    {name: 'email',
    message: 'What is your e-mail?',
    type: 'input'},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, JSON.stringify(data), (err) =>
    err ? console.error(err) : console.log('README has been generated.'))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = []
    await inquirer
        .prompt(questions[0])
        .then(answer => {answers.push(answer)})
    await inquirer
        .prompt(questions[1])
        .then(answer => {answers.push(answer)})
    await inquirer
        .prompt(questions[2])
        .then(answer => {answers.push(answer)})
    await inquirer
        .prompt(questions[3])
        .then(answer => {answers.push(answer)})
    await inquirer
        .prompt(questions[4])
        .then(answer => {answers.push(answer)})
    await inquirer
        .prompt(questions[5])
        .then(answer => {answers.push(answer)})
    await inquirer
        .prompt(questions[6])
        .then(answer => {answers.push(answer)})
    await inquirer
        .prompt(questions[7])
        .then(answer => {answers.push(answer)})
    await inquirer
        .prompt(questions[8])
        .then(answer => {answers.push(answer)})
    const markdownText = await generateMarkdown({...answers});

}

// Function call to initialize app
init();
