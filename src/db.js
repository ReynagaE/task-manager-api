import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = () => {
  return mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};
