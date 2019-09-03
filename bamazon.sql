DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon; 

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Running Sneakers", "Women's Shoes", 100, 25), ("Jersey Swing Dress", "Women's Clothing", 25, 100),  ("Rose Gold Watch", "Women's Jewelry", 300, 25),  ("Shoulder Bag", "Women's Handbags", 150, 10),  ("Aviator Sunglasses", "Women's Accessories", 130, 75),  ("Penny Loafer", "Men's Shoes", 200, 50),  ("Wool Sweater", "Men's Clothing", 35, 20),  ("Leather Belt", "Men's Accessories", 20, 50),  ("Carry-On Luggage", "Luggage", 50, 100),  ("Attaché Case", "Gear", 40, 100);