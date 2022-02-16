const { MongoClient } = require('mongodb');

require('dotenv').config();

// this define the DB options 

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// this part show where and DB name

const MONGO_DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'todoList';
let db = null;

//create a connection with DB

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db(DB_NAME);
    return db;
    }));

 module.exports = connection;