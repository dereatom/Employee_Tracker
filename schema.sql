DROP DATABASE IF EXISTS  tracker_db;

CREATE DATABASE tracker_db;

USE  tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)

);
CREATE TABLE role (
    id INT(10) NOT NULL AUTO_INCREMENT,
    tite VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT(10) NOT NULL,
    PRIMARY key (id)
);
CREATE TABLE employees (
    id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10),
    PRIMARY KEY (id)
)

