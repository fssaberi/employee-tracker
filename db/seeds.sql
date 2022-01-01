INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('Purchasing'),
    ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Budget Analyst', '80000', 1),
    ('Purchasing Assistant', '60000', 2),
    ('HR Manager', '70000', 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Molly', 'Johnson', 3, NULL),
    ('Rob', 'Markson', 1, NULL),
    ('Jane', 'Carlson', 2, 1),
    ('John', 'Smith', 1, 1),
    ('Krista', 'Sims', 2, 2);