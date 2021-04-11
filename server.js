const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "departmentName",
      message: "What is your department name?",
    },
    {
      type: "input",
      name: "role",
      message: "What is your role at this company?",
    },
    {
      type: "input",
      name: "salary",
      message: "What is your current annual salary?",
    },
    {
        type: 'input',
        name: 'department_id',
        message: 'What department do you work in?',
      },
      {
        type: 'input',
        name: 'first_name',
        message: 'What is your first name?',
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'What is your last name?',
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'What is your role id?',
      },
      {
        type: 'input',
        name: 'manager_id',
        message: "What is your manager's name?",
      },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
function writeToFile(fileName, data) {}

// still need to write answers to file
