const inquirer = require("inquirer");
const mysql = require("mysql2");

function choose(menu_selection) {
  switch (menu_selection) {
    case "Return to Main Menu":
      mainMenu();
      break;
    case "View":
      viewMenu();
      break;
    case "View all Departments":
      console.log("IMAGINE A REALLY COOL TABLE WITH DEPARTMENTS");
      viewMenu();
      break;
    case "View all Roles":
      console.log("IMAGINE A REALLY COOL TABLE WITH ROLES");
      viewMenu();
      break;
    case "View all Employees":
      console.log("IMAGINE A REALLY COOL TABLE WITH EMPLOYEES");
      viewMenu();
      break;
    case "Add":
      addMenu();
      break;
    case "Add a new Department":
      addDepartment();
      break;
    case "Add a new Role":
      addRole();
      break;
    case "Add a new Employee":
      addEmployee();
      break;
    case "Update":
      updateMenu();
      break;
    case "Update an Employee's Role":
      updateRole();
      break;
    case "Exit":
      console.log("... Closing the Application");
      console.log("Closed!");
      break;
    default:
      console.log("Please make a valid selection");
  }
}

const mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select an action",
        name: "action",
        choices: ["View", "Add", "Update", "Exit"],
      },
    ])
    .then((answer) => {
      choose(answer.action);
    });
};
const viewMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select an action",
        name: "action",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Return to Main Menu",
        ],
      },
    ])
    .then((answer) => {
      console.log(answer.action);
      choose(answer.action);
    });
};
const viewDepartments = () => {};
const viewRoles = () => {};
const viewEmployees = () => {};
const addMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select an action",
        name: "action",
        choices: [
          "Add a new Department",
          "Add a new Role",
          "Add a new Employee",
          "Return to Main Menu",
        ],
      },
    ])
    .then((answer) => {
      choose(answer.action);
    });
};
const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter a name for the Department",
      },
    ])
    .then((answer) => {
      console.log(
        `
        ${answer.name} Department has been added!
        `
      );
      addMenu();
    });
};
const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter a name for the Role",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a short description for the Role",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the desired salary the Role",
      },
    ])
    .then((answer) => {
      console.log(
        `
            Role: ${answer.name}
            Description: ${answer.description}
            Salary: $${answer.salary} Hourly
            
            Has been added!
            `
      );
      addMenu();
    });
};
const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Enter a First Name",
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter a Last Name",
      },
      {
        type: "list",
        name: "role",
        message: "Select the desired Role",
        choices: ["Janitor", "Cook", "Software Engineer"],
      },
      {
        type: "list",
        name: "department",
        message: "Select the desired Department",
        choices: ["Kitchen Department", "Fitness Department", "IT Department"],
      },
      {
        type: "list",
        name: "managed_by",
        message: "Select a Manager",
        choices: ["John Smith", "Jane Doe", "Jeff Norman"],
      },
    ])
    .then((answer) => {
      console.log(
        `   
            First Name: ${answer.first_name}
            Last Name: ${answer.last_name}
            Role: ${answer.role}
            Department: ${answer.department}
            Manager: ${answer.managed_by}
            
            Has been added!
            `
      );
      addMenu();
    });
};
const updateMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select an action",
        name: "action",
        choices: ["Update an Employee's Role", "Return to Main Menu"],
      },
    ])
    .then((answer) => {
      choose(answer.action);
    });
};
const updateRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Employee ID to Update their Role",
        name: "employee_id",
      },
    ])
    .then((answer) => {
      inquirer
        .prompt([
          {
            type: "list",
            message: "Select a Role",
            name: "role",
            choices: ["Janitor", "Cook", "Software Engineer"],
          },
        ])
        .then((answer) => {
          console.log(
            `
        Employee's role has been Updated!
        `
          );
        });
    });
};

mainMenu();
