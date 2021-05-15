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
    database: 'tracker_db',
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
  // call function
    startPrompt();
  });
  function startPrompt() {
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
          "Update employee roles",
          "Delete an employee",
          "quit"
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
          case "Update employee roles":
            updateEmployeeRoles();
            break;
          case "Delete an employee":
            deleteEmployee();
            break;
          default:
            quitPromt();
        }
      });
  }
  // all of the corresponding function
  // Adding new department to the database
  function addDepartment() {
    inquirer.prompt ({
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
        }).then(function(answer) {
            connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName],  function(err, res) {
                if (err) throw err;
                console.table(res)
                startPrompt();
        });
    });
  }
  //Adding new roles to the database
  function addRole() {
    inquirer.prompt([
        {
          type: "input",
          message: "What's the name of the role?",
          name: "roleName"
        },
        {
          type: "input",
          message: "What is the salary for this role?",
          name: "salaryTotal"
        },
        {
          type: "input",
          message: "What is the department id number?",
          name: "departmentId"
        }
      ]).then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?,?)" , [answer.roleName, answer.salaryTotal, answer.departmentId], function (err, res) {
          if (err) throw err;
          console.table(res);
          startPrompt();
        }); 
      });

    }
    // adding new employee
    function addEmployee() {
      inquirer.prompt([
        {
          type: "input",
          message: "What's the first name of the employee?",
          name: "employeeFirstName"
        },
        {
          type: "input",
          message: "What's the last name of the employee?",
          name: "employeeLastName"
        },
        {
          type: "input",
          message: "What is the employee's role id number?",
          name: "roleId"
        },
        {
          type: "input",
          message: "What is the manager id number?",
          name: "managerId"
        }

      ]).then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.employeeFirstName, answer.employeeLastName, answer.roleId, answer.managerId], 
        function(err, res) {
          if(err) throw err;
          console.table(res);

          startPrompt();

        });

      });
    }
  // view all departiments in the databse by table
function viewDepartment() {
  // select from the db
  let query = "SELECT * FROM department";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
  
}
// view all employee in the databse by table.
function viewEmployees() {
  // select from the db
  let query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
  
}
// view all employee roles in the databse by table
function viewRoles() {
  // select from the db
  let query = "SELECT * FROM role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startPrompt();
  });
}
// Updating Employee roles in the databse.
function updateEmployeeRoles() {
  inquirer.prompt([
    {
      type: "input",
      message: "Enter the employee's ID you want to be updated",
      name: "updateEmployeeRole"
    },
    {
      type: "input",
      message: "Enter the new role ID for that employee",
      name: "newRole"
    }
  ]).then(function (res) {
      const updateEmploy = res.updateEmploy;
      const newRole = res.newRole;
      const queryUpdate = `UPDATE employee SET role_id = "${newRole}" WHERE id = "${updateEmploy}"`;
      connection.query(queryUpdate, function (err, res) {
        if (err) {
          throw err;
        }
        console.table(res);
        startPrompt();
      })
    });
  }
// Bonus questions start here to be continue
//Delete Employee from Database
function deleteEmployee() {

  inquirer.prompt([
      {
          name: "firstName",
          type: "input",
          message: "What is your Employee's First Name?"
      },
      {
          name: "lastName",
          type: "input",
          message: "What is your Employee's Last Name?"
      }
  ]).then(function (answer) {

      connection.query("DELETE FROM employee WHERE first_name = ? and last_name = ?", [answer.firstName, answer.lastName], function (err, res) {
          if (err) {
            throw err;
          }

          console.table(res);
          startPrompt();
      })


  });

}
function quitPromt() {
  connection.end();
  console.log(`You Succefully Exit the app`);
}