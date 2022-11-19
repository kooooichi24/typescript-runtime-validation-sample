import { validate } from "./validate";
import { definitionsCreateUserRequestSchema } from "./zod-schema";

export const post = (request: Definitions.CreateUserRequest) => {
  console.log("request:", request);
  validate(definitionsCreateUserRequestSchema, request);
};
