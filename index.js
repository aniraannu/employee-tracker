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
//Function to add an employee