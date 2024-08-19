-- departments
INSERT INTO
    department (name)
VALUES
    ("Support"),
    ("Sales"),
    ("Accounting"),
    ("R&D"),
    ("Legal"),
    ("Engineering"),
    ("Marketing"),
    ("Finance"),
    ("Human Resources"),
    ("Production");

-- roles
INSERT INTO
    role (title, salary, department_id)
VALUES
    ("Support Specialist", 50000, 1),
    ("Support Manager", 80000, 1),
    ("Sales Representative", 60000, 2),
    ("Sales Manager", 100000, 2),
    ("Accountant", 80000, 3),
    ("Sales Lead", 100000, 2),
    ("Salesperson", 80000, 2),
    ("Lead Engineer", 150000, 4),
    ("Software Engineer", 120000, 6),
    ("Account Manager", 160000, 3),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 5),
    ("Lawyer", 190000, 5),
    ("HR Manager", 120000, 9),
    ("HR Coordinator", 80000, 9);

-- employees
INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ("John", "Doe", 1, NULL),
    ("Jane", "Smith", 2, 1),
    ("Michael", "Johnson", 3, NULL),
    ("Emily", "Williams", 4, 3),
    ("David", "Brown", 5, NULL),
    ("Sarah", "Davis", 6, 5),
    ("Robert", "Miller", 7, 5),
    ("Jessica", "Wilson", 8, NULL),
    ("Daniel", "Moore", 9, 8);