package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;

public record AdoptAnimalDTO(
    @NotNull Long id
) {
}
