//enables mysql, env, and inquirer
require("dotenv").config();
const mysql = require("mysql");
const inquirer = require("inquirer");

//creates the connection information for sql database
const connection = mysql.createConnection({
 host: "localhost",
 port: 3306,
 user: "root",
 password: process.env.password,
 database: "bamazon"
});

const promptStart = [
    {
      name: "product",
      type: "input",
      message: "What is the ID of the product you would like to buy?"
    },
    {
      name: "units",
      type: "input",
      message: "How many units of the product would you like to buy?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
  ];

  async function start() {
    // connect to the mysql server and sql database
    const connection = await mysql.createConnection(connection);

    //prompt the user for input
    let answer = await inquirer.prompt(promptStart);
    
    //if inventory is greater than 0
    if (stock_quantity >= 0) {
      
      //update the database with the new stock quantity
      await connection.query("INSERT INTO auctions SET ?", {item_name: answers.item, current_bid: answers.startingBid || 0});
      console.log("Your auction was created successfully!");

    //show customer cost of purchase
  
    }

    //if inventory is 0
    else (stock_quantity === 0) {
    
      // query the database for all items being auctioned 
      console.log("Insufficient quantity!");
        
      }
    }
  
    // close the MySQL connection
    connection.end();  
  }
  

  // run the start function after the connection is made
  start();