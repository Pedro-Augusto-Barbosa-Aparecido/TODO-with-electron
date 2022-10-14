import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

export class Connection {
  private static instance: Connection;
  private static isMethod: boolean = false;

  public db;

  constructor () {
    if (!Connection.isMethod) 
      throw new Error("Inicie a instancia pelo método getInstance()");
    
      this.db = mysql.createConnection(process.env.DATABASE_URL!);
  
  }

  public static getInstance () {
    if (Connection.instance)
      return Connection.instance;
    
    Connection.isMethod = true;

    return new Connection();
  }

}
