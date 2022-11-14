import * as movieRepository from "../repositories/movieRepository.js";
import { TypeMovieData } from "../types/MovieTypes.js";

export async function insert(createMovieData: TypeMovieData) {
  const existingMovie = await movieRepository.findByTitle(
    createMovieData.title
  );
  if (existingMovie) {
    throw { type: "conflict" };
  }

  await movieRepository.createMovie(createMovieData);
}

export async function getMovieById(id: number) {
  const movie = await movieRepository.findById(id);
  if (!movie) {
    throw { type: "not_found" };
  }

  return movie;
}

export async function deleteMovie(id: number) {
  await getMovieById(id);
  await movieRepository.deleteMovie(id);
}

export async function findMovies() {
  return movieRepository.findAll();
}

export async function updateStatus(id: number) {
  const status = await movieRepository.findById(id);
  if (!status) {
    throw { type: "not_found" };
  }

  await movieRepository.updateStatus(id);
}
