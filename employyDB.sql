CREATE DATABASE employyDB;

USE employyDB;

CREATE TABLE department(
	id INT NOT NULL
    , name VARCHAR(30) NULL
    , song VARCHAR(100) NULL
, PRIMARY KEY(id)
);
CREATE TABLE role(
	id INT NOT NULL
    , title VARCHAR(30) NULL
    , salary DECIMAL NOT NULL
    , department_id INT NULL
, PRIMARY KEY(id)
);

CREATE TABLE employee(
	id INT NOT NULL
    , first_name VARCHAR(30) NULL
    , role_id INT NULL
    , manager_id INT NULL
    , department_id INT NULL
, PRIMARY KEY(id)
);