INSERT INTO department (name)
VALUES
    ('Accounting'),
    ('Purchasing'),
    ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Budget Analyst', '80000', 1),
    ('Purchasing Assistant', '60000', 2),
    ('Manager', '70000', 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Molly', 'Johnson', 3, 0),
    ('Rob', 'Markson', 1, 0),
    ('Jane', 'Carlson', 2, 0),
    ('John', 'Smith', 1, 0),
    ('Krista', 'Sims', 2, 0);
