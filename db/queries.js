const queries = {
    allEmployees: `SELECT * e.id, e.first_name, e.last_name, title, department_name AS department, salary, salary, CONTACT(m.first_name, ' ', m.last_name) AS manager
    FROM employees e
    INNER JOIN roles
    ON e.role_id = roles.id
    INNER JOIN departments
    ON roles.dept_id = departments.id
    LEFT JOIN employees m
    ON e.manager_id = m.id`,

    allEmployeesByManager: `SELECT e.id, e.first_name, e.last_name, title, department_name AS department, salary, salary, CONTACT(m.first_name, ' ', m.last_name) AS manager
    `
}