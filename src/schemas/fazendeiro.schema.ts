import { object, string } from "zod";

export const createFazendeiroSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    })
  })
});