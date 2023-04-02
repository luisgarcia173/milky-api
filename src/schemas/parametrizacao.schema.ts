import { date, number, object, string } from "zod";

export const createParametrizacaoSchema = object({
  body: object({
    precoBase: object({
      valor: number({
        required_error: 'Valor is required',
        invalid_type_error: 'Valor must be a number',
      }).positive('Valor must be greater than zero'),
      custoKmPadrao: number({
        required_error: 'custoKmPadrao is required',
        invalid_type_error: 'custoKmPadrao must be a number',
      }).positive('custoKmPadrao must be greater than zero'),
      custoKmAdicional: number({
        required_error: 'custoKmAdicional is required',
        invalid_type_error: 'custoKmAdicional must be a number',
      }).positive('custoKmAdicional must be greater than zero')
    }),
    bonusProducao: object({
      quantidade: number({
        required_error: 'Quantidade is required',
        invalid_type_error: 'Quantidade must be a number',
      }).positive('Quantidade must be greater than zero'),
      valor: number({
        required_error: 'Valor is required',
        invalid_type_error: 'Valor must be a number',
      }).positive('Valor must be greater than zero')
    })
  })
});