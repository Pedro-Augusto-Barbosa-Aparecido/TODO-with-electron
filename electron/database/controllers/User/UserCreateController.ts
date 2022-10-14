import { Connection } from "../../connection";
import { User } from "../../models/User";

export class UserCreateController {
  private connection: Connection;

  constructor () {
    this.connection = Connection.getInstance();
  }

  public insert (user: User) {
    
  }
  
}
