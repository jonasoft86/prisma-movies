import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    // verificar si existe la pelicula
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movieExists) {
      throw new AppError("Movie does not exists!");
    }

    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });

    // verificar si el filme ya esta rentado
    if (movieAlreadyRented) {
      throw new AppError("Movie already rented!");
    }

    // verificar si existe usuarios
    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User does not exists!");
    }
    
    // crear relacion
    await prisma.movieRent.create({
      data: {
        movieId,
        userId
      },
    });
  }
}