package utez.edu.mx.movies;

import org.springframework.data.jpa.repository.JpaRepository;
import utez.edu.mx.movies.models.MovieModels;
import java.util.List;

public interface IMoviesRepository extends JpaRepository<MovieModels, Long> {
List<MovieModels> getAll();
}
