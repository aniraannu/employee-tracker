# employee-tracker
A command-line application using Node.js, Inquirer, and PostgreSQL that dynamically updates and views a company's employee database. This project was created so that a company (HR management team) can easily keep track of their employees, departments and roles. They will be able to easily interact with the information stored in the databses.

## Description
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). This one is a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. User are able to view and manage the departments, roles, and employees so they can organize and plan their business.

Features include:

* Allows users to build and access a employee database, structured using the schema database file provided
* Provides query functionality to:

  1. View all departments within the employee database
  2. View all roles within the employee database
  3. View all employees within the employee database
  4. Add a new department to the employee database
  5. Add a new role to the employee database
  6. Add a new employee to the employee database
  7. Update an employee's role in the employee database

![Screenshot of the complete command prompt.](./assets/images/Command%20Line%20Interface.png)

* Prompts employ validation to prevent character type and response length errors before query submission

The data from the employee_db is acessed and printed as tables in the commandline interface everytime based on the selection. The following image will show how the data are displayed.
![Screenshot of the departments printed.](./assets/images/All%20departments.png)
![Screenshot of all roles displayed in table.](./assets/images/All%20Roles.png)
![Screenshot of all employees in the databse](./assets/images/All%20Employees.png)

Video walkthrough of the working Employee Tracker command line application (challenge required options):
![Video walkthrough of completed application](./assets/images/complete-demo-app.webm)

## Installation
Prerequisites:
* Download and install Node.js
* Download and install PostgreSQL

1. Clone this repository to your computer using SSH from GitHub:
```
git clone git@github.com:aniraannu/employee-tracker.git
```
2. You'll need to run to install the node required dependencies after you clone the install by running:
```
npm install
```
3. You'll then need to configure your MySQL user/password in the index.js file
4. You will then need to run the following commands in your MySQL server command line to build the database and tables and then seed/populate the tables needed:
```
psql -u root -p
\i db/schema.sql
\i db/seeds.sql
```
5. You will need to make changes in the index.js file to handle the MySQL connection, an example instance of pool has been included with my configuration, you need to change it with your config.The contents of the pool instance include the following:
```
DB_HOST='localhost'
DB_USER=''
DB_PASSWORD=''
DB_DBASE='employee_db'
```
6. Finally to start the Employee Tracker you need the command:
```
node index.js
```

## Usage
For first-time users:

* Initiate a PostgreSQL shell session and run the schema.sql file in the "db" directory. Within the shell session, run the file using the following command: \i schema.sql;

* Optionally: Run the seed.sql file to seed the employee_db database. This file is provided with sample data. Users can provide their own seed file or insert their own values into the datbase.

* In index.js, update the pool variable by inputting your credentials. In particular, your user name and your password for your Postgres session.

* Initiate the application by using the following command: node index.js

* Navigate the interface utilzing your keyboard's arrow keys and using the "enter/return" button to make your selections.

* Follow prompt instructions to submit information that adheres to the database's constraints regarding response type and response length.

* To exit the application, select the "Exit" command and confirm your exit using ctrl + c.

For returning users:

* Initiate the application by using the following command:
node index.js

* Follow steps 4-6 as detailed above.


### Executing program

* The application code can be cloned from the following Github link:
[GitHub-employee-tracker](https://github.com/aniraannu/employee-tracker)

## Help

NA

## Authors

Contributors names and contact info

Anira Raveendran
[@aniraannu](https://github.com/aniraannu)

## Version History

* 0.1
    * Initial Release

## License

None

## Acknowledgments

Inspiration, code snippets, etc.

* [dbader](https://github.com/dbader/readme-template)
