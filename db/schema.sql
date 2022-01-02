DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department
        FOREIGN KEY (department_id) 
            REFERENCES department(id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    CONSTRAINT fk_role
        FOREIGN KEY (role_id)
            REFERENCES role(id),
    manager_id INT,
    CONSTRAINT fk_manager
        FOREIGN KEY (manager_id)
            REFERENCES employee(id)
);