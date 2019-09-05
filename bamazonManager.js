//enable packages
require("dotenv").config(); //hidden password
const mysql = require("mysql"); //sql database
const inquirer = require("inquirer"); //prompts


//not required, but add to user experience
const chalk = require("chalk"); //colors
const Table = require("cli-table"); //nicely formatted table

//create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password, //hidden
    database: "bamazon"
});

//connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    //call main functions
    manager()

});

//main program 
function manager() {
    inquirer.prompt([
        {
            name: "manage",
            type: "list",
            message: "\nWhat would you like to do?",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]

        }
    ]).then(function (input) {
        switch (input.manage) {
            case "View Products for Sale":
                displayInventory();
                break;

            case "View Low Inventory":
                lowInventory();
                break;

            case "Add to Inventory":
                addInventory();
                break;

            case "Add New Product":
                console.log("Add New Product function");
                addProduct()
                break;
        }
    })
};

function displayInventory (){

}

function lowInventory (){
    
}

function addInventory (){
    
}

function addProduct (){
    
}