DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;
CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30),
  
);
CREATE TABLE role (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL (10, 2),
  department_id INTEGER NOT NULL,
  
  CONSTRAINT fk_department
  FOREIGN KEY (department_id)
  REFERENCES department(id) ON DELETE SET NULL 
);
CREATE TABLE employee (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER(8),
  manager_id INTEGER(8),
  CONSTRAINT fk_role 
  FOREIGN KEY (role_id) 
  REFERENCES role(id) ON DELETE SET NULL 
);