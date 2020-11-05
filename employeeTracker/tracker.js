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

//this function asks user what they want to do
// function start() {
//     inquirer.prompt([
//         {
//             name: "list",
//             type: "list",
//             message: "What do you want to do?",
//             choices: ["View", "Add", "Update", "Exit"]
//         }
//     ])};
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

