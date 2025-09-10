import { Router } from "express";
import { createUserWaitlist } from "../controller/userWaitlist.controller";

const userWaitlistRouter: Router = Router();

// POST request for waitlist signup
userWaitlistRouter.post("/waitlist", createUserWaitlist);

export { userWaitlistRouter };
