import { object, string } from "zod";

// missing typing for controller

export const createFazendaSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    })
  })
});