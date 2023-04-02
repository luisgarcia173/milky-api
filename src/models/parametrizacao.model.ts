import mongoose from 'mongoose';

export interface PrecoBaseInput {
  valor: number;
  custoKmPadrao: number;
  custoKmAdicional: number;
  vigenciaIni: Date;
  vigenciaFin: Date;
}

export interface BonusProducaoInput {
  quantidade: number;
  valor: number;
}

export interface ParametrizacaoDocument extends mongoose.Document {
  precoBase: PrecoBaseInput;
  bonusProducao: BonusProducaoInput;
  createdAt: Date;
  updatedAt: Date;
}

const precoBaseSchema = new mongoose.Schema({
  valor: {type: Number, required: true},
  custoKmPadrao: {type: Number, required: true},
  custoKmAdicional: {type: Number, required: true},
  vigenciaIni: {type: Date},
  vigenciaFin: {type: Date}
},
{
  _id : false 
});
const PrecoBaseModel = mongoose.model<PrecoBaseInput>('PrecoBase', precoBaseSchema);

const bonusProducaoSchema = new mongoose.Schema({
  quantidade: {type: Number, required: true},
  valor: {type: Number, required: true}
},
{
  _id : false 
});
const BonusProducaoModel = mongoose.model<BonusProducaoInput>('BonusProducao', bonusProducaoSchema);

const parametrizacaoSchema = new mongoose.Schema({
  precoBase: precoBaseSchema,
  bonusProducao: bonusProducaoSchema,
},
{
  timestamps: true
});
const ParametrizacaoModel = mongoose.model<ParametrizacaoDocument>('Parametrizacao', parametrizacaoSchema);

export { PrecoBaseModel, BonusProducaoModel, ParametrizacaoModel };