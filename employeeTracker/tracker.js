const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Ourg15L6",
    database: "employee_tracker_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

function start() {
    inquirer
        .prompt({
            name: "list",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View",
                "Add",
                "Update",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View":
                    view();
                    break;

                case "Add":
                    add();
                    break;

                case "Update":
                    update();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}

function view() {
    inquirer
        .prompt({
            name: "list",
            type: "list",
            message: "What would you like to view?",
            choices: ["Department", "Roles", "Employees"]
        })
        .then(function (answer) {
            if (answer.list === "Department") {
                console.table("Department");
            } else if (answer.list === "Roles") {
                console.table("Roles");
            } else if (answer.list === "Employess") {
                console.table("Employees");
            }
        }); 
}

function add() {
    inquirer
        .prompt({
            name: "list",
            type: "list",
            message: "What would you like to add?",
            choices: ["Department", "Roles", "Employees"]
        })
        .then(function (answer) {
            if (answer.list === "Department") {
                console.table("Department");
            } else if (answer.list === "Roles") {
                console.table("Roles");
            } else if (answer.list === "Employess") {
                console.table("Employees");
            }
        }); 
}

