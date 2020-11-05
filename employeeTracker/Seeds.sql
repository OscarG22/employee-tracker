DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30),
salary DECIMAL (10,2) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);

INSERT INTO departments (name)
VALUES("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES("Sales_Lead", 100000, 1), ("Lead_Engineer", 150000, 2), ("Accountant", 125000, 3), ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES("John", "Doe", 1), ("Ashley", "Rodriguez", 2), ("Malia", "Brown", 3), ("Tom", "Allen", 4);