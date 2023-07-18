import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import https from 'https'

const server = https.createServer(app)
async function main() {
  try {
    await connectDB();
    server.listen(PORT);
    console.log(`Listening on port https://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}



main();