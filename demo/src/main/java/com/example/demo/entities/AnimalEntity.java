package com.example.demo.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_animal")

@Data

@AllArgsConstructor
@NoArgsConstructor
public class AnimalEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;
    
    @Column(nullable = true)
    private int idade;
    
    @Column(nullable = false)
    private String cor;
    
    @Column(nullable = true)
    private String descricao;
    
    @Column(nullable = false)
    private String status;
    
    @ManyToOne
    @JoinColumn(name="tipo_animal_id")
    @JsonIgnore
    private TipoAnimalEntity tipoAnimal;
    
    @ManyToOne
    @JoinColumn(name="doador_id")
    // @JsonIgnore
    private DoadorEntity doador;

    public AnimalEntity(String nome, String cor, int idade, String descricao, TipoAnimalEntity tipo, DoadorEntity doador){
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
        this.status = "DISPONIVEL";
        this.descricao = descricao;
        this.tipoAnimal = tipo;
        this.doador = doador;
    }
}

