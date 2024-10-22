export interface IAccountSchema {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
}
