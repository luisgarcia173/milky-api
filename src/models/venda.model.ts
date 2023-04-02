import mongoose from 'mongoose';
import { FabricaDocument } from './fabrica.model';
import { FazendaDocument } from './fazenda.model';
import { ParametrizacaoDocument } from './parametrizacao.model';

export interface VendaDocument extends mongoose.Document {
  fazenda: FazendaDocument['_id'];
  fabrica: FabricaDocument['_id'];
  parametrizacao: ParametrizacaoDocument['_id'];
  quantidade: number;
  valorFinal: number;
  createdAt: Date;
  updatedAt: Date;
}

const vendaSchema = new mongoose.Schema({
  fazenda: {type: mongoose.Schema.Types.ObjectId, ref: 'Fazenda'},
  fabrica: {type: mongoose.Schema.Types.ObjectId, ref: 'Fabrica'},
  parametrizacao: {type: mongoose.Schema.Types.ObjectId, ref: 'Parametrizacao'},
  quantidade: {type: Number, required: true},
  valorFinal: {type: Number, required: true}
},
{
  timestamps: true
});

const VendaModel = mongoose.model<VendaDocument>('Venda', vendaSchema);

export { VendaModel };
