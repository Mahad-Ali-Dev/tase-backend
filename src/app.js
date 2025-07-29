import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

// Enable ES module path compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'https://www.tasedev.com'|| "*",
    credentials: true 
}));

// Common middleware
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

// Routes
import healthCheckRoute from './routes/healthcheck.routes.js';
app.use('/health', healthCheckRoute);
import InquiryRouter from "./routes/inquiry.routes.js";
app.use("/api/v1/inquiry", InquiryRouter);

export { app };
