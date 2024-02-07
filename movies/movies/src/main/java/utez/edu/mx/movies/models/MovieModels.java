package utez.edu.mx.movies.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "movies")
@Data
public class MovieModels {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 200)
    private String name;
    @Column(nullable = false, length = 200)
    private String description;
    @Column(nullable = false, length = 200)
    private String gender;

}
