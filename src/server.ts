import { app } from './app';
import dotenv from "dotenv";
import { connect } from './utils/connect';

dotenv.config()
const PORT = process.env.PORT || 3003;

app.listen(PORT, async () => {
  console.log(`App is running at http://localhost:${PORT}`);
  await connect();
});