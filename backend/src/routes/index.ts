import { Router } from "express";
import loginRouter from "./loginRouter";

const router = Router();

router.use('/auth', loginRouter);

export default router