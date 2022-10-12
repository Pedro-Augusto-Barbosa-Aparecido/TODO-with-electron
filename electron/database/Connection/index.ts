import { Database } from "sqlite3";

export class Connection {
  private static instance: Connection;
  private static isMethod: boolean = false;

  public connection: Database;

  constructor () {
    if (!Connection.isMethod) 
      throw new Error("Inicie a instancia pelo método getInstance()");
    
      this.connection = new Database("./data/db.db", (err) => {
        if (err) 
          console.log(err);
      });
  
  }

  public static getInstance () {
    if (Connection.instance)
      return Connection.instance;
    
    Connection.isMethod = true;

    return new Connection();
  }

}

Connection.getInstance();
