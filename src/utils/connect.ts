import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config()

async function connect() {
  const dbUri = process.env.DB_URI;

  try {
    await mongoose.connect(dbUri);
    console.log('Connected to DB');
  } catch(err) {
    console.error(`Could not connect to DB: ${err}`);
    process.exit(1);
  }
}

export { connect };