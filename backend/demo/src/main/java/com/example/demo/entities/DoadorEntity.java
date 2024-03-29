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
@Table(name="tb_doador")

@Data

@NoArgsConstructor
@AllArgsConstructor
public class DoadorEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;
    
    @Column(nullable = false, unique = true)
    private String telefone;
    
    @Column(nullable = false, unique = true)
    private String cpf;

    @Column(nullable = true)
    private String email;

    @OneToMany(mappedBy = "doador")
    @JsonIgnore
    private List<AnimalEntity> animal;

    public DoadorEntity(String nome, String telefone, String cpf, String email){
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.email = email;
    }
}
