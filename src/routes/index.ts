import { Router } from "express";
import movieRouter from "./movieRouter.js";

const router = Router();
router.use(movieRouter);
export default router;
