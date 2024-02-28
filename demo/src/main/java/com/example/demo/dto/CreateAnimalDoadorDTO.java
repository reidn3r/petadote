package com.example.demo.dto;

import org.hibernate.validator.constraints.br.CPF;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreateAnimalDoadorDTO(
    @NotBlank String raca,
    @NotBlank String tipo_animal,

    @NotBlank String nome_animal,
    @NotBlank String cor,
    int idade,
    String descricao,

    @NotNull String nome_doador,
    @NotNull String telefone,
    @CPF @NotNull String cpf,
    @Email @NotNull String email
) {
    
}
