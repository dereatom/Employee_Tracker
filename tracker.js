const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; 
    port: 3306,
  
    // Your username
    user: 'root',
  
    // my own MySQL password!
    password: 'Hayu@820056',
    database: 'top_songsDB',
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  // call function
    start();
  });
  function start() {
    console.log("Welcome to the Employee Tracker!\n")

    inquirer.prompt({
      type: "list",
      message: "Choose what you would like to do?",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee role",
        "Quit"
      ],
      name: "option"

    }) .then(function(result) {
      console.log("You entered: " + result.option);

      switch (result.option) {
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDepartment();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          quit();
      }
    });
  }
  // all of the corresponding function
  // function of department to be continue
  