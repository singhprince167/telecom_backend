import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Enable CORS for frontend
app.use(cors({
    origin: ["https://web-frontend-lemon-gamma.vercel.app/","http://localhost:5173"],
    methods: ["GET", "POST","PUT","PATCH","DELETE"],
    credentials: true
}));

// Parse JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route imports
import { userContactRouter } from "./routes/userContact.route";
import { userWaitlistRouter } from "./routes/userWaitlist.route";

// Use routes
app.use("/api/v1", userContactRouter);
app.use("/api/v1", userWaitlistRouter);

export { app };
