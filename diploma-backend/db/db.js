const sqlite3 = require("sqlite3").verbose();

// Open a database connection (if the database does not exist, it will be created automatically)
const db = new sqlite3.Database("./sqlite.db");

module.exports = db;
