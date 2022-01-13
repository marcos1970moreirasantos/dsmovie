package com.dvsuperior.dvmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dvsuperior.dvmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
