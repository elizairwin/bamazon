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