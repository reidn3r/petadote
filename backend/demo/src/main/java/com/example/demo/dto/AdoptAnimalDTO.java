package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record AdoptAnimalDTO(
    @NotNull @Positive Long id
) {
}
