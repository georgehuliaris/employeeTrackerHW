const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  // Your port, if not 3306
  port: 3306,
  user: "root",
  password: "BootCamp",
  database: "employydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});

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
      type: "input",
      name: "department_id",
      message: "What department do you work in?",
    },
    {
      type: "input",
      name: "first_name",
      message: "What is your first name?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is your last name?",
    },
    {
      type: "input",
      name: "role_id",
      message: "What is your role id?",
    },
    {
      type: "input",
      name: "manager_id",
      message: "What is your manager's name?",
    },
  ])
  .then((data) => {
    const filename = `${data.toLowerCase().split(" ").join("")}.json`;
    console.log(data);
    //     fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
    //       err ? console.log(err) : console.log("Success!")
    //     );
  });
// function writeToFile(fileName, data) {}

// still need to write answers to file
