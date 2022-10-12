interface UserParams {
  name: string;
  email: string;
  password: string;
}

export class User {
  private name;
  private email;
  private password;

  constructor(user: UserParams) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }

  get username(): string {
    return this.name;
  }

  get userEmail(): string {
    return this.email;
  }

  get userPassword(): string {
    return this.password;
  }

  public comparePassword(password: string): boolean {
    return this.password === password;
  }
}
