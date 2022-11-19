declare namespace Definitions {
  export interface CreateUserRequest {
    name: string;
    age: number;
    sex: "male" | "female";
  }
}
