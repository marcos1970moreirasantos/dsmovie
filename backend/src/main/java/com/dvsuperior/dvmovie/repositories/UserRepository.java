package com.dvsuperior.dvmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dvsuperior.dvmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);

}
