--Query to join department_id in the role table with the id of the department table
SELECT *
FROM role
JOIN department ON role.department_id = department.id;
--Query to join role_id of the employee table with the id of the department table
SELECT *
FROM employee
JOIN role ON employee.role_id = role.id;
--Query to join the manager_id and the id of the employee table
SELECT *
FROM employee
JOIN employee ON employee.manager_id = employee.id;

