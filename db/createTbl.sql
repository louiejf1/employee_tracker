USE employee_tracker;

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id int,
  manager_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
	REFERENCES employee_role (id)
);

CREATE TABLE employee_role (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary decimal(10,2) NOT NULL,
  department_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
	REFERENCES employee_department (id)
);

CREATE TABLE employee_department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
);