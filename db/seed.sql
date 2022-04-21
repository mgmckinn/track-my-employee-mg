 USE employee_db;

INSERT INTO departments (dept_name, id)
VALUES 
('Lending', 1),
 ('Deposits', 2),
 ('Merchant Services', 3),
 ('Treasury Services', 4);

INSERT INTO role (title, id, salary, department_id)
VALUES 
('Manager', 100, 150000, 1),
 ('Assistant', 100, 120000, 1),
 ('Merchant Sales', 200, 140000, 2),
 ('Account Champion', 201, 125000, 2),
 ('Merchant Rep', 300, 250000, 3),
 ('Banker', 301, 190000, 3),
 ('Senior Banker', 400, 100000, 4),
 ('CSR', 401, 80000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
(1, 'Brewer', 'Julia', 100, 3),
 (2, 'Matt', 'Rix', 101, 3),
 (3, 'Crystal', 'Wellington', 301, 1),
 (4, 'Sam', 'Brickman', 400 ,3),
 (5, 'Holly', 'Highness', 401, 4);