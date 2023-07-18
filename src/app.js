import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import multer from "multer";
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from "url";
import cors from 'cors';

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://taskminder-ockw.onrender.com');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, *');
    next();
  });

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public', 'img', 'uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    }
});
app.use(multer({
    storage: storage
}).single('image'));

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;