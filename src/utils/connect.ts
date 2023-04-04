import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config()

async function connect() {
  const dbUri: string = process.env.DB_URI;
  const isDebugMode: boolean = JSON.parse(process.env.DB_DEBUG);

  try {
    await mongoose.connect(dbUri);
    mongoose.set('debug', isDebugMode);
    console.log('Connected to DB');
  } catch(err) {
    console.error(`Could not connect to DB: ${err}`);
    process.exit(1);
  }
}

export { connect };