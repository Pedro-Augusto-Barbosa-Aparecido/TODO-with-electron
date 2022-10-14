import { Table } from "../@types/table";
import { Connection } from "./connection";

const connection = Connection.getInstance();

const createTable = (table: Table) => {
  connection.db.query(`
    CREATE TABLE IF NOT EXISTS ${table.name} (
      ${table.body}
    );
  `, (err) => {
    if (err)
      console.log(err);
    else
      console.log(`Table '${table.name}' success created!`)
  });
}

const TABLES: Table[] = [
  {
    name: "users",
    body: `
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255),
      email VARCHAR(255),
      password VARCHAR(255)
    `
  }
]

// create tables
TABLES.forEach(table => {
  console.log(`Creating table '${table.name}'`);
  createTable(table);
});

connection.db.end();
