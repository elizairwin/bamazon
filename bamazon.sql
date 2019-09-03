DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon; 

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price DECIMAL (10, 2) NOT NULL,
  stock_quantity INT (10) NOT NULL,
  PRIMARY KEY (id)
);

--add products in--
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("Running Sneakers", "Women's Shoes", 99.99, 25), ("Jersey Swing Dress", "Women's Clothing", 24.99, 100),  ("Rose Gold Watch", "Women's Jewelry", 299.99, 25),  ("Shoulder Bag", "Women's Handbags", 159.99, 10),  ("Aviator Sunglasses", "Women's Accessories", 139.99, 75),  ("Penny Loafer", "Men's Shoes", 199.99, 50),  ("Wool Sweater", "Men's Clothing", 34.99, 20),  ("Leather Belt", "Men's Accessories", 19.99, 50),  ("Carry-On Luggage", "Luggage", 49.99, 100),  ("Attaché Case", "Gear", 39.99, 100);

SELECT * FROM products