// index.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
const inquirer = require('inquirer');
const fs = require("fs");
const util = require('util');
const axios = require("axios"); //https://www.npmjs.com/package/axios

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

let promptUser = () => {

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: [
          'Create User',
          'Remove User',
          'Update User',
          'Delete User'
        ]
      }

    ])
    .then(answers => {
      // Use user feedback for... whatever!!

      if (answers === 'Create User') {
        console.log(JSON.stringify(answers));
      }
      if (answers === 'Remove User') {
        console.log(JSON.stringify(answers));
      }
      if (answers === 'Update User') {
        console.log(JSON.stringify(answers));
      }
      else(answers === 'Delete User') {
        console.log(JSON.stringify(answers));
      }

    });
  // .catch(error => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else when wrong
  //   }
  // });

}

promptUser();

//Create User
//Remove User
//Update User
//Delete User

//View All by Department
//View All by Manager


/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  res.status(200).send("Server Running");
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});