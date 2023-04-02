import { number, object, string } from "zod";

export const createFabricaSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    }),
    distancia: number({
      required_error: 'Distancia is required',
      invalid_type_error: 'Distancia must be a number',
    }).positive('Distancia must be greater than zero')
  })
});