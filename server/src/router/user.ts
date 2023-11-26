import { Router } from "express";
import { createUserValidation, createUser} from "../features/user";

const router: Router = Router();

router.post('/signup', createUserValidation,createUser)

export default router