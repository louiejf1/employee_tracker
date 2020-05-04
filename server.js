// index.js

//Required External Modules
const inquirer = require('inquirer');
const mysql = require('mysql');


// Start My SQL connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sqlpassword',
  database: 'employee_tracker'
});
// End My SQL connection

connection.connect();




// Prompt user for first action------------------------------------------------------------------------------------
let promptUser = () => {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: [
          'Add',
          'View',
          'Update'
        ]
      }

    ])
    .then(answers => {
      // Use user feedback for... whatever!!

      if (answers.action === 'Add') {
        addMenu(); // add Menu function being passed here
      }

      if (answers.action === 'View') {
        viewMenu(); // view Menu function being passed here
      }

      if (answers.action === 'Update') {
        updateMenu(); // view Menu function being passed here
      }

    })

    .catch(error => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      }
    });

}


// Prompt user for what to add------------------------------------------------------------------------------------
const addMenu = () => {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to add to?',
        choices: [
          'Employee',
          'Role',
          'Department'
        ]
      }

    ])

    .then(answers => {
      // Use user feedback for... whatever!!

      if (answers.action === 'Employee') {
        addEmployee();
      }
      if (answers.action === 'Role') {
        addRole();
      }
      if (answers.action === 'Department') {
        addDepartment();
      }

    })
}


// Prompt user for what to view------------------------------------------------------------------------------------
const viewMenu = () => {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to view?',
        choices: [
          'Employee',
          'Role',
          'Department'
        ]
      }

    ])

    .then(answers => {
      // Use user feedback for... whatever!!

      if (answers.action === 'Employee') {
        viewEmployee();
      }
      if (answers.action === 'Role') {
        viewRole();
      }
      if (answers.action === 'Department') {
        viewDepartment();
      }

    })
}




// Prompt user for what to add Department ------------------------------------------------------------------------------------
const addDepartment = (

) => {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'department_name',
        message: 'What is the department name?',
      }
    ])

    .then(answers => {
      // Use user feedback for... whatever!!

      connection.query("INSERT INTO employee_department (name) VALUES(?)", [answers.department_name], function (err, data) {
        if (err) throw err;
      })
      console.log(answers.department_name + " Added");
      connection.end();
    })
}

// Prompt user for new employee details------------------------------------------------------------------------------------
const addEmployee = (

) => {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'first_name',
        message: 'What is the employees first name?',
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'What is the employees last name?',
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'What is the employees role_id?',
      }
    ])

    .then(answers => {
      // Use user feedback for... whatever!!

      connection.query("INSERT INTO employee (first_name, last_name, role_id) VALUES(?,?,?)", [answers.first_name, answers.last_name, answers.role_id], function (err, data) {
        if (err) throw err;
      })
      console.log("Employee Added");
      connection.end();
    })
}


// Prompt user for Role Details------------------------------------------------------------------------------------
const addRole = (

) => {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'title',
        message: 'What is the employees title?',
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the employees salary?',
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'What is the employees department_id?',
      }
    ])

    .then(answers => {
      // Use user feedback for... whatever!!

      connection.query("INSERT INTO employee_role (title, salary, department_id) VALUES(?,?,?)", [answers.title, answers.salary, answers.department_id], function (err, data) {
        if (err) throw err;
      })
      console.log("Role Added");
      connection.end();
    })
}




// Prompt user for what to add Department ------------------------------------------------------------------------------------
const viewDepartment = () => {

  connection.query("SELECT * FROM employee_department", function (err, data) {
    if (err) throw err;

    data.forEach(element => {
      console.table(element);
    });
    connection.end();
  })

};

promptUser();