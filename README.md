# Employee Tracker
  
  # Table of Content
  1. [Title](#Title)
  2. [Criteria](#Criteria)
  3. [Description](#Description)
  4. [Installation](#Installation)
  5. [Usage](#Usage)
  6. [Links](#Links)
  7. [License](#License)
  8. [Contribution](#Contribution)
  9. [Tests](#Tests)
  10. [Github](#Github)
  11. [E-mail](#Email)  
  
  ## Acceptance Criteria
  All given acceptance criteria were fully meet as follow:
  Design the following database schema containing three tables:
 
 * **department**:

* **id** - INT PRIMARY KEY
* **name** - VARCHAR(30) to hold department name

* **role**:

* **id** - INT PRIMARY KEY
* **title** - VARCHAR(30) to hold role title
* **salary** - DECIMAL to hold role salary
* **department_id** - INT to hold reference to department role belongs to

* **employee**:

* **id** - INT PRIMARY KEY
* **first_name** - VARCHAR(30) to hold employee first name
* **last_name** - VARCHAR(30) to hold employee last name
* **role_id** - INT to hold reference to role employee has
* **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
Build a command-line application that at a minimum allows the user to:

* Add departments, roles, employees

* View departments, roles, employees

* Update employee roles
From **Bonus**
* Delete  was includede 
 **seed.sql** file was included to pre-populate  database. This will make development of individual features much easier.


  ## Description
  This app is able to view and manage the departments,roles, and employees in my companySo that I can organize and plan my business.It also add and delete employeerole and department of the comany.
  
  ## Installation and Technology used
  `MySQL NPM` package, `Inquirer NPM` and `console.table` are used techinology in this app.
  
  ## Usage
  Help the Employeers to track their Employee. 

  ## Links of Screenshot and Walkthrough Vidio
  [Walkthrough_Vidio](https://drive.google.com/file/d/1EqJfh-mCYDpJdTRUtYIEqGTN5gPTwkyr/view?usp=sharing) [Screenshot1](https://drive.google.com/file/d/1MCC2trd08J2cCxeV7HSsxhzz0-DVIJPA/view?usp=sharing) [Screenshot2](https://drive.google.com/file/d/1ryrPiSOVn8LhFsXlfwtTIIagdHucEFOC/view?usp=sharing) [Screenshot3](https://drive.google.com/file/d/1ijqglBde21aId0g-sFRNgCsEXXX0mUhu/view?usp=sharing)
  
  ## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Contribution
  For now no one contiribute for this app, I accept in the future.
  
  ## Tests
  No test required
  
  ## Github
  https://github.com/dereatom
  
  ## E-mail
  derejeatomsa2@gmail.com
