import { object, string } from "zod";

export const createFazendaSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    })
  })
});