import { prisma } from "../config/database.js";
import { TypeMovieData } from "../types/MovieTypes.js";

export async function createMovie(createRecommendationData: TypeMovieData) {
  await prisma.movie.create({
    data: createRecommendationData,
  });
}

export async function findByTitle(title: string) {
  return prisma.movie.findFirst({ where: { title } });
}

export async function findById(id: number) {
  return prisma.movie.findUnique({
    where: { id },
  });
}

export async function deleteMovie(id: number) {
  return prisma.movie.delete({ where: { id } });
}

export async function findAll() {
  return prisma.movie.findMany({
    orderBy: { id: "asc" },
  });
}

export async function updateStatus(id: number) {
  return prisma.movie.update({
    where: { id },
    data: {
      status: "assistido",
    },
  });
}
