"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
// Enable CORS for frontend
app.use((0, cors_1.default)({
    origin: process.env.FRONTENDURL || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));
// Parse JSON and URL-encoded requests
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Route imports
const userContact_route_1 = require("./routes/userContact.route");
const userWaitlist_route_1 = require("./routes/userWaitlist.route");
// Use routes
app.use("/api/v1", userContact_route_1.userContactRouter);
app.use("/api/v1", userWaitlist_route_1.userWaitlistRouter);
