import joi from "joi";
import { TypeMovieData } from "../types/MovieTypes.js";

export const movieSchema = joi.object<TypeMovieData>({
  title: joi.string().required(),
  streamingService: joi.string().required(),
  genre: joi.string().required(),
  status: joi.string().required(),
});
