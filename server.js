const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql");
const express = require("express");

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
//   connection.end();
});

inquirer
  .prompt([
    {
      type: "list",
      name: "firstQuestions",
      message: "What do you want to do?",
      choices: [
        "Add departments",
        "Add roles",
        "Add employees",
        "View departments",
        "View roles",
        "View employees",
        "Update employee roles",
      ],
    },
  ])
  .then((answers) => {
    switch (answers.firstQuestions) {
      case "Add departments":
        departmentQuestions();
        break;
      case "Add roles":
        addRoles();
        console.log("Add roles?");
        break;
      case "Add employees":
        addEmployees();
        console.log("Add employees?");
        break;
      case "View departments":
        viewDepartments();
        console.log("View departments?");
        break;
      case "View roles":
        viewRoles();
        console.log("View roles?");
        break;
      case "View employees":
        viewEmployees();
        console.log("View employees?");
        break;
      case "Update employee roles":
        updateEmployee();
        console.log("Update employee roles?");
        break;
      default:
        console.log("something went wrong");
    }
  });

function departmentQuestions() {
  inquirer
    .prompt([
      {
        name: "departmentAddition",
        type: "input",
        message: "What department would you like to add?",
      },
    ])
    .then((answers) => {
        var sqlQuery = `INSERT INTO department (departmentName) VALUES ('${answers.departmentAddition}')`
        connection.query(sqlQuery, function (err, result) {
            if (err) throw err;
            console.log("success")
        })
    });
}
//add role questions
function roleQuestions() {
    inquirer
      .prompt([
        {
          name: "roleAddition",
          type: "input",
          message: "What is your role at the company??",
        },
      ])
      .then((answers) => {
          var sqlQuery = `INSERT INTO department (role) VALUES ('${answers.roleAddition}')`
          connection.query(sqlQuery, function (err, result) {
              if (err) throw err;
              console.log("success")
          })
      });
  }
  function roleQuestions() {
    inquirer
      .prompt([
        {
          name: "roleAddition",
          type: "input",
          message: "What department would you like to add?",
        },
      ])
      .then((answers) => {
          var sqlQuery = `INSERT INTO department (role) VALUES ('${answers.roleAddition}')`
          connection.query(sqlQuery, function (err, result) {
              if (err) throw err;
              console.log("success")
          })
      });
  }


