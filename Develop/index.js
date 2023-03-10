
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')



inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'user',
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your project about?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do I install your project?',
      name: 'install',
    },
    {
        type: 'input',
        message: 'How do I use your project?' ,
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What License does your project have associated with it?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GNU'],
    },
    {
        type: 'input',
        message: 'What contributers do you have to list?',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'what is your email?',
        name: 'questions',
    }
  ])
  .then((response) => {
    console.log(response)

    const answers = generateMarkdown(response)
    
    fs.writeFile('README1.md', answers, function(err) {
        return err ? console.error(err) : console.log('Success!')
    })
});

