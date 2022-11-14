import { Request, Response } from "express";
import { movieSchema } from "../schemas/movieSchema.js";
import { wrongSchemaError } from "../util/errorUtils.js";
import * as movieService from "../services/movieService.js";

export async function createMovie(req: Request, res: Response) {
  const validation = movieSchema.validate(req.body);
  if (validation.error) {
    throw wrongSchemaError();
  }

  await movieService.insert(req.body);

  res.sendStatus(201);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const movie = await movieService.getMovieById(+id);
  res.send(movie);
}

export async function deleteMovie(req: Request, res: Response) {
  const movieId = parseInt(req.params.id);
  if (isNaN(movieId)) {
    res.sendStatus(422);
  }
  await movieService.deleteMovie(movieId);
  res.sendStatus(200);
}

export async function getAllMovies(req: Request, res: Response) {
  const movies = await movieService.findMovies();
  res.send(movies);
}

export async function updateStatus(req: Request, res: Response) {
  const { id } = req.params;

  await movieService.updateStatus(+id);
  res.sendStatus(200);
}
