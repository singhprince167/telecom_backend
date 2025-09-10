"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userContactRouter = void 0;
const express_1 = __importDefault(require("express"));
const userContact_controller_1 = require("../controller/userContact.controller");
const userContactRouter = express_1.default.Router();
exports.userContactRouter = userContactRouter;
userContactRouter.post("/userContact", userContact_controller_1.createUserContact);
