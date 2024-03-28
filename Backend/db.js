import pg from "pg"; // Importing the pg library for PostgreSQL
import dotenv from 'dotenv'; // Importing dotenv for environment variable configuration

dotenv.config({ path: '../.env' }); // Configuring dotenv to read environment variables from a .env file

// Creating a new PostgreSQL client instance
const db = new pg.Client({
    user: process.env.PG_USER, // Getting the PostgreSQL user from environment variables
    host: process.env.PG_HOST, // Getting the PostgreSQL host from environment variables
    database: process.env.PG_DATABASE, // Getting the PostgreSQL database name from environment variables
    password: process.env.PG_PASSWORD, // Getting the PostgreSQL password from environment variables
    port: process.env.PG_PORT, // Getting the PostgreSQL port from environment variables
});

db.connect(); // Connecting to the PostgreSQL database using the configured parameters

export default db; // Exporting the configured PostgreSQL client for use in other files
