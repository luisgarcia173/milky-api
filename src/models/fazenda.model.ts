import mongoose from 'mongoose';
import { FazendeiroDocument } from './fazendeiro.model';

export interface FazendaDocument extends mongoose.Document {
  fazendeiro: FazendeiroDocument['_id'];
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const fazendaSchema = new mongoose.Schema({
  fazendeiro: {type: mongoose.Schema.Types.ObjectId, ref: 'Fazendeiro'},
  name: {type: String, required: true},
},
{
  timestamps: true
});

const FazendaModel = mongoose.model<FazendaDocument>('Fazenda', fazendaSchema);

export { FazendaModel };