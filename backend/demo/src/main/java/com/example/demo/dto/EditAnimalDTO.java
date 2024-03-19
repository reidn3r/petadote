package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record EditAnimalDTO(
    @NotNull Long id,
    @NotNull @NotBlank String nome,
    @NotNull @NotBlank String raca,
    @NotNull @NotBlank String cor,
    @NotNull @NotBlank String sexo,
    int idade,
    @NotNull @NotBlank String tipo,
    @NotNull @NotBlank String descricao
){

}