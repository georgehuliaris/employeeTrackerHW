DROP DATABASE IF EXISTS employyDB;
CREATE DATABASE employyDB;

USE employyDB;

CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT
    , name VARCHAR(30) NOT NULL
, PRIMARY KEY(id)
);
CREATE TABLE role(
	id INT NOT NULL
    , title VARCHAR(30) NULL
    , salary DECIMAL (10, 2) default 0
    , department_id INT NULL
, PRIMARY KEY(id)
);

CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT
    , first_name VARCHAR(30) NULL
    , role_id INT NULL
    , manager_id INT NULL
    , department_id INT NULL
, PRIMARY KEY(id)
);