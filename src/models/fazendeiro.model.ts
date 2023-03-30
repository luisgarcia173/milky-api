import mongoose from 'mongoose';

export interface FazendeiroDocument extends mongoose.Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const fazendeiroSchema = new mongoose.Schema({
  name: {type: String, required: true},
},
{
  timestamps: true
});

const FazendeiroModel = mongoose.model<FazendeiroDocument>('Fazendeiro', fazendeiroSchema);

export { FazendeiroModel };