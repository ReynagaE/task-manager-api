import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import app from "./app.js";

const server = async () => {
  try {
    await connectDB();
    
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan("dev"));
    
    app.use("/api", authRoutes);
    app.use("/api", taskRoutes);
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error(error);
  }
};

server();

