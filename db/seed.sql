
INSERT INTO department (name)
VALUES 
('Lending'),
('Deposits'),
('Merchant Services'),
('Treasury Services');

INSERT INTO role (title, salary, department_id)
VALUES 
('Manager', 150000, 1),
('Assistant', 120000, 1),
('Merchant Sales', 140000, 2),
('Account Champion',125000, 2),
('Merchant Rep', 250000, 3),
('Banker', 190000, 3),
('Senior Banker',100000, 4),
('CSR',80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Brewer', 'Julia', 3, null),
('Matt', 'Rix', 1, 1),
('Crystal', 'Wellington', 3, 1),
('Sam', 'Brickman', 2 ,1),
('Holly', 'Highness', 4, 1),
('Carpenter', 'Kayla', 3, 2),
('Cindy', 'Carpenter', 2, 2),
('Kevin', 'Ronald', 4, 1);
