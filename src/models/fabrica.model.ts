import mongoose from 'mongoose';

export interface FabricaDocument extends mongoose.Document {
  name: string;
  distancia: number;
  createdAt: Date;
  updatedAt: Date;
}

const fabricaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  distancia: {type: Number, required: true},
},
{
  timestamps: true
});

const FabricaModel = mongoose.model<FabricaDocument>('Fabrica', fabricaSchema);

export { FabricaModel };