import { number, object } from "zod";

export const createProducaoSchema = object({
  body: object({
    quantidade: number({
      required_error: 'Quantidade is required',
      invalid_type_error: 'Quantidade must be a number',
    }).positive('Quantidade must be greater than zero')
  })
});