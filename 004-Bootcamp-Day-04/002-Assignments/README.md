# Assignment

**Q1. Explain the difference between a MongoDB server and a Node.js server in terms of their roles and functionalities. Provide examples of situations where you would use each server type.**

**A:**

**1. MongoDB Server**
    - It is a database server
    - Its stores and manages data in collections
    - It only handels data - insert, query, update and delete
    - It can be accessed via Mongo Shell, Compass, or driver like Mongoose in Node.js
    - It doesn't server webpages or APIs. It just listens for database queries on port `27017`
    - Exa:

        ```
            db.users.find({ age : {$gt: 18}});
        ```

**2. Node.js Server**
    - It is a runtime + web server framework for running JS outside the browser
    - It handles application logic and requests (HTTP, APIs, etc.)
    - It receives requests from clients (browser, mobile apps), process them, talks to database (if required), and returns a response
    - It listens on port `3000` (HTTP)
    - It can connect to MongoDB or other databases to connect data

---

**Q2.**

**a. Write a MongoDB query to create a new document in a collection named "students" with fields "name", "age" and "grade."**

**b. Write a MongoDB query to update the "age" field of a document in the "employees" collection with the name "John" to 30.**

**c. Write a MongoDB query to delete a document from the "products" collection with the name "Product A."**

**d. Write a MongoDB query to retrieve all documents from the "orders" collection where the total amount is greater than $100.**


**A:**

**a.**
```javascript
db.students.insertOne({
    name: "Tony Stark",
    age: 25,
    grade: "A"
});
```
**b.**
```javascript
db.students.updateOne({
    {name: "John"},
    {$set : {age: 30}}
});
```
**c.**
```javascript
db.products.deleteOne({
    name: "Product A"
});
```

**d.**
```javascript
db.orders.find({
    totalAmount: {$gt: 100}
});
```

---

**Q3. Explain the main differences between SQL databases and MongoDB in terms of data structure, querying language, and use cases. Provide examples of scenarios where you might choose one over the other.**

**A:**

| Aspect            | SQL Databases (Relational)                       | MongoDB (NoSQL, Document-based)             |
|-------------------|--------------------------------------------------|---------------------------------------------|
| **Data Model**    | Tables with rows & columns                       | Collections with JSON-like documents        |
| **Schema**        | Fixed, predefined schema                         | Flexible, dynamic schema                    |
| **Query Language**| SQL (Structured Query Language)                  | MongoDB Query Language (JSON-like syntax)   |
| **Relationships** | Foreign keys, joins                              | Embedding documents or `$lookup` (joins)    |
| **Transactions**  | Strong ACID support (multi-row, multi-table)     | ACID since v4.0, but less central           |
| **Scalability**   | Vertical (scale-up: bigger servers)              | Horizontal (scale-out: sharding, clusters)  |
| **Best For**      | Structured, relational data                      | Semi-structured, flexible, fast-evolving data |
| **Example Use**   | Banking, ERP, e-commerce checkout                | Social media, content management, IoT logs  |

---

**Q4. Compare and contrast the following MongoDB and SQL queries for retrieving data:**

**a.**

- MongoDB:
    ```javascropt
    db.products.find({ category: "Electronics" });
    ```
- SQL:
    ```sql
    SELECT * FROM products WHERE category = "Electronics"
    ```

**b.**

- MongoDB:
    ```javascropt
    db.users.findOne({ username: "Alice" });
    ```
- SQL:
    ```sql
    SELECT * FROM users WHERE username = "Alice" LIMIT 1;
    ```

**c.**
- MongoDB:
    ```javascropt
    db.orders.aggregate([{ $group: { _id: "$status", total: { $sum: "$amount" } } }]);
    ```
- SQL:
    ```sql
    SELECT status, SUM(amount) as total FROM orders GROUP BY status
    ```

**A:**

a. Both queries retrive all products with category "Electronics" from the table "products"

b. Both qureries retrive one user with name "Alice" from the table "users"

c. Both queries calculate the total amount of orders grouped by "status" from the table "orders"