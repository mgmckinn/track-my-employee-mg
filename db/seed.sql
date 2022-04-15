 USE employee_db;

INSERT INTO departments (`dept_name`, `id`)
VALUES ("Lending", 1);
INSERT INTO departments (`dept_name`, `id`)
VALUES ("Deposits", 2);
INSERT INTO departments (`dept_name`, `id`)
VALUES ("Merchant Services", 3);
INSERT INTO departments (`dept_name`, `id`)
VALUES ("Treasury Services", 4);

INSERT INTO roles (`title`, `id`, `salary`, `department_id`)
VALUES ("Manager", 100, 150000, 1);
INSERT INTO roles (`title`, `id`, `salary`, `department_id`)
VALUES ("Assistant", 100, 120000, 1);
INSERT INTO roles (`title`, `id`, `salary`, `department_id`)
VALUES ("Merchant Sales", 200, 140000, 2);
INSERT INTO roles (`title`, `id`, `salary`, `department_id`)
VALUES ("Account Champion", 201, 125000, 2);
INSERT INTO roles (`title`, `id`, `salary`, `department_id`)
VALUES ("Merchant Rep", 300, 250000, 3);
INSERT INTO roles (`title`, `id`, `salary`, `department_id`)
VALUES ("Banker", 301, 190000, 3);
INSERT INTO roles (`title`, `id`, `salary`, `department_id`)
VALUES ("Senior Banker", 400, 100000, 4);
INSERT INTO roles (`title`, `id`, `salary`, `department_id`)
VALUES ("CSR", 401, 80000, 4);

INSERT INTO employees (`id`, `first_name`, `last_name`, `role_id`, `manager_id`)
VALUES (1, 'Brewer', 'Julia', 100, 3);
INSERT INTO employees (`id`, `first_name`, `last_name`, `role_id`, `manager_id`)
VALUES (2, 'Matt', 'Rix', 101, 3);
INSERT INTO employees (`id`, `first_name`, `last_name`, `role_id`, `manager_id`)
VALUES (3, 'Crystal', 'Wellington', 301, 1);
INSERT INTO employees (`id`, `first_name`, `last_name`, `role_id`, `manager_id`)
VALUES (4, 'Sam', 'Brickman', 400 ,3);
INSERT INTO employees (`id`, `first_name`, `last_name`, `role_id`, `manager_id`)
VALUES (5, 'Holly', 'Highness', 401, 4);