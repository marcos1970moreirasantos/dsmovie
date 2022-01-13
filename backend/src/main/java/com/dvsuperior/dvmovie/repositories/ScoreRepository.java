package com.dvsuperior.dvmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dvsuperior.dvmovie.entities.Score;
import com.dvsuperior.dvmovie.entities.ScorePk;

public interface ScoreRepository extends JpaRepository<Score, ScorePk> {

}
