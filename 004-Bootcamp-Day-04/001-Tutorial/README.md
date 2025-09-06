# MongoDB Tutorial

## Install
- [Install MongoDB Community Edition on Ubuntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)
- [Download and Install Compass](https://www.mongodb.com/docs/compass/install/?operating-system=linux&package-type=.deb)

## Important Commands

- `sudo systemctl start mongod` - Start MongoDB server
- `sudo systemctl status mongod` - Verify that MongoDB has started successfully
- `sudo systemctl stop mongod` - Stop MongoDB server
- `mongosh` - Start MongoDB shell
- `mongodb-compass` - Start MongoDB Compass (GUI)

## SQL vs NoSQL Databases

|SQL            |NoSQL      |
|---------------|-----------|
|Database       | Database  |
|Table          | Document  |
|Row/ Record    | Collection|
|Column         | Field     |

## Few MongoDB Queries

```
show databases;

use <db_name>;

show collections

db.createCollection("users");

db.users.insertOne({ id: 1, username: 'Alice', age: 25 });

db.users.find({ age: { $gt: 21 } });

db.users.updateOne({ username: 'Alice' }, { $set: { age: 22 }
});

db.users.deleteOne({ id: 1 });

```