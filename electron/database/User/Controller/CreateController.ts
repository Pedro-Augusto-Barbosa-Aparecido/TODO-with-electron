import { Connection } from "../../Connection";
import { User } from "..";

export class UserCreateController {
  private connection;
  
  constructor () {
    this.connection = Connection.getInstance();
  }

  public insertUser(user: User) {
    this.connection.connection.exec(`
      INSERT INTO user (name, email, password) VALUES (
        ${user.username},
        ${user.userEmail},
        ${user.userPassword} 
      )
    `, (err) => {
      if (err) 
        console.log(err);
    });
  }
}
