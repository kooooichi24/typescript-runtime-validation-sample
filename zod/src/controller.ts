import { definitionsCreateUserRequestSchema } from "./zod-schema";

export const post = (request: Definitions.CreateUserRequest) => {
  console.log(request);
  definitionsCreateUserRequestSchema.parse(request);
};
