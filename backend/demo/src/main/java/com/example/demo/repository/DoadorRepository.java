package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.DoadorEntity;

public interface DoadorRepository extends JpaRepository<DoadorEntity, Long> {
    public Optional<DoadorEntity> findByCpf(String cpf);
}
