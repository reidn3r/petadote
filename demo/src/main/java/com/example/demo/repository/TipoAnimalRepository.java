package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.TipoAnimalEntity;

public interface TipoAnimalRepository extends JpaRepository<TipoAnimalEntity, Long>{
    public Optional<TipoAnimalEntity> findByTipo(String tipo);
}
