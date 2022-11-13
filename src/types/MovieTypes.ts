import { Movie } from "@prisma/client";

export type TypeMovieData = Omit<Movie, "id">;
