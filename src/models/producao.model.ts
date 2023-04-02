import mongoose from 'mongoose';
import { FazendaDocument } from './fazenda.model';

export interface ProducaoDocument extends mongoose.Document {
  fazenda: FazendaDocument['_id'];
  quantidade: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProducaoSchema = new mongoose.Schema({
  fazenda: {type: mongoose.Schema.Types.ObjectId, ref: 'Fazenda'},
  quantidade: {type: Number, required: true},
},
{
  timestamps: true
});

const ProducaoModel = mongoose.model<ProducaoDocument>('Producao', ProducaoSchema);

export { ProducaoModel };