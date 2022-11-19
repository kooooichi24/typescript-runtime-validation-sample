import { ZodError, ZodObject } from "zod";

/**
 * Validate a ZodObject against a given object.
 *
 * @param schema The ZodObject to validate against.
 * @param data The object to validate.
 */
export const validate = (schema: ZodObject<any>, data: unknown) => {
  try {
    schema.parse(data);
  } catch (e: unknown) {
    if (e instanceof ZodError) {
      // handlel validation error
    }
    throw e;
  }
};
