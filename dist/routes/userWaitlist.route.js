"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userWaitlistRouter = void 0;
const express_1 = require("express");
const userWaitlist_controller_1 = require("../controller/userWaitlist.controller");
const userWaitlistRouter = (0, express_1.Router)();
exports.userWaitlistRouter = userWaitlistRouter;
// POST request for waitlist signup
userWaitlistRouter.post("/waitlist", userWaitlist_controller_1.createUserWaitlist);
