import { Router } from "express";
import { createUser } from "../features/user/create-user.controller";

const router: Router = Router();

router.post('/signup', createUser)

export default router