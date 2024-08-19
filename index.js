//Import inquirer
const inquirer = require('inquirer');
//Import Express.js
const express = require('express');
// Import and require Pool (node-postgres)
// Creating a Connection Pool.
const { Pool } = require('pg');
//Define PORT
const PORT = process.env.PORT || 3001;
//Use a instance of express
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
//Setting up mysql connection
const pool = new Pool(
  {
    //PostgreSQL username
    user: 'postgres',
    // PostgreSQL password
    password: 'Leahrose',
    host: 'localhost',
    database: 'employees_db'
  },
  console.log(`Connected to employees_db database.`)
)
pool.connect();

//Function to start inquirer prompt
function startPrompt() {
  inquirer
    .prompt([
      //List of things to do using the application
      {
        name: "start",
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
  ]).then(data => {
    if (data.start === "View all departments") {
      viewDepartments();
    } else if (data.start === "View all roles") {
      viewRoles();
    } else if (data.start === "View all employees") {
      viewEmployees();
    } else if (data.start === "Add a department") {
      addDepartment();
    } else if (data.start === "Add a role") {
      addRole();
    } else if (data.start === "Add an employee") {
      addEmployee();
    } else if (data.start === "Update an employee role") {
      updateEmployeeRole();
    }
  });
}
//Function to view all departments
function viewDepartments() {
  pool.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    startPrompt();
  });
}
//Function to view all roles
function viewRoles() {
  pool.query('SELECT * FROM role', (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    startPrompt();
  });
}
//Function to view all employees
function viewEmployees() {
  pool.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    startPrompt();
  });
}
//Function to add a department
function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What is the name of the department?"
      }
    ]).then(data => {
      pool.query('INSERT INTO department (name) VALUES ($1)', [data.department], (err, res) => {
        if (err) throw err;
        console.log(`Added ${data.department} to departments.`);
        startPrompt();
      });
    });
}
//Function to add a role
function addRole() {
  pool.query("SELECT name, id FROM department", (err, res) => {
      if (err) {
          console.log(err);
          return;
      }

      // gets all the department names and ids from the response and puts it into an array called departments
      const departments = res.map(({ name, id }) => ({ name, id }));
     //Use inquirer prompt to ask questions
      inquirer.prompt([
        //What is the name of the role?
          {
              name: "title",
              type: "input",
              message: "What is the name of the role you would like to add?"
          },
           //What is the salary for the role?
          {
              name: "salary",
              type: "input",
              message: "What is the salary for the role?"
          },
        //What department would you like to add this role to?
          {
              name: "department",
              type: "list",
              message: "What department would you like to add this role to?",
              choices: [...departments.map(({ name, id }) => ({ name, value: id }), { name: "Create a New Department", value: null })]
          }
      ]).then(answers => {
          const { title, salary, department } = answers;
        //If the department doesn't exist, ask the user to create a new department
          if (department === null) {
              inquirer.prompt([
                  {
                      name: "newDepartment",
                      type: "input",
                      message: "What is the name of the department you would like to create?"
                  }
              ]).then(newDepartmentAnswer => {
                  pool.query("INSERT INTO department (name) VALUES ($1)", [newDepartmentAnswer.newDepartment], (err, res) => {
                      if (err) {
                          console.log(err);
                      } else {
                          const newDepartmentName = res.rows[0].id;
                          pool.query("INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)", [title, salary, newDepartmentName], (err, res) => {
                              if (err) {
                                  console.log(err);
                              } else {
                                  console.log("Role added successfully");
                                  //Return to the startPrompt function
                                  startPrompt();
                              }
                          })
                      }
                  })
              })
          } else {
            //If the department does exist, add the role to that department
            //Add the role to the database
              pool.query("INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)", [title, salary, department], (err, res) => {
                  if (err) {
                      console.log(err);
                  } else {
                      console.log("Role added successfully");
                      //Return to the startPrompt function
                      startPrompt();
                  }
              });
          }
      });
  });
}
//Function to add an employee