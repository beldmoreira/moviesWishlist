import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getById,
  updateStatus,
} from "../controllers/movieController.js";

const movieRouter = Router();
movieRouter.post("/movies", createMovie);
movieRouter.get("/movies", getAllMovies);
movieRouter.get("/movies/:id", getById);
movieRouter.delete("/movies/:id", deleteMovie);
movieRouter.post("/movies/:id/update", updateStatus);
export default movieRouter;
