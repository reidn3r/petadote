package com.example.demo.entities;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_tipo_animal")

@Data

@AllArgsConstructor
@NoArgsConstructor
public class TipoAnimalEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String raca;
    
    @Column(nullable = false)
    private String tipo;

    @OneToMany(mappedBy = "tipoAnimal")
    @JsonIgnore
    private List<AnimalEntity> animal;

    public TipoAnimalEntity(String raca, String tipo){
        this.raca = raca;
        this.tipo = tipo;
    }
}
