//Import Express.js
const express = require('express');
// Import and require Pool (node-postgres)
// Creating a Connection Pool.
const { Pool } = require('pg');
//Define PORT
const PORT = process.env.PORT || 3001;
//Use a instance of express
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
//Setting up mysql connection
const pool = new Pool(
  {
    //PostgreSQL username
    user: 'postgres',
    // PostgreSQL password
    password: 'Leahrose',
    host: 'localhost',
    database: 'company_db'
  },
  console.log(`Connected to company_db database.`)
)
pool.connect();