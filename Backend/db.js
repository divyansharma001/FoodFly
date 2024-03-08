import pg from "pg";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "foodApp",
    password: "l73SHWZH", //env
    port: 5432,
  });
  
  db.connect();

  export default db;