-- departments
INSERT INTO
    department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Human Resources');

-- roles
INSERT INTO
    role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4),
    ('HR Manager', 90000, 5),
    ('HR Assistant', 60000, 5);

-- employees
INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Michael', 'Johnson', 3, NULL),
    ('Emily', 'Williams', 4, 3),
    ('David', 'Brown', 5, NULL),
    ('Sarah', 'Davis', 6, NULL),
    ('Robert', 'Miller', 7, 6),
    ('Jessica', 'Wilson', 8, NULL),
    ('Daniel', 'Moore', 9, 8);