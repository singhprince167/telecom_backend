import express, { Router } from "express";

import { createUserContact } from "../controller/userContact.controller";

const userContactRouter: Router = express.Router();

userContactRouter.post("/userContact", createUserContact);

export { userContactRouter };