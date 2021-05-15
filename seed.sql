INSERT INTO department (id, name)
VALUES (1, "Retail");

INSERT INTO department (id, name)
VALUES (2, "Brand Experience");

INSERT INTO department (id, name)
VALUES (3, "Human Resouces");

INSERT INTO department (id, name)
VALUES (4, "IT");

INSERT INTO department (id, name)
VALUES (5, "Finance");

INSERT INTO department (id, name)
VALUES (6, "Utilities");

----- Role Seeds -----

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Stylist", 42000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Assistant Store Manager", 60000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Store Manager", 75000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Brand Manager", 65000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Business Partner", 70000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "HR Director", 100000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "System Adminstrator", 80000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "IT Coordinator", 52000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (9, "IT Manager", 105000, 4);

----- Employees Seeds -----

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Charmbell", "Chaz", 3, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Sofiya", "Hassen", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Jena", "Dant", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Jonathan", "Roberts", 9, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Melissa", "Arm", 2, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Alex", "Scott", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Rosie", "Cole", 1, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Susan", "Chris", 5, 7);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Zach", "Williams", 7, 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Martin", "Cast", 8, 10);