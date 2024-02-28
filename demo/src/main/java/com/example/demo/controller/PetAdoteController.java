package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CreateAnimalDoadorDTO;
import com.example.demo.entities.AnimalEntity;
import com.example.demo.entities.DoadorEntity;
import com.example.demo.services.AnimalService;
import com.example.demo.services.DoadorService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/api/new")
public class PetAdoteController {

    @Autowired
    private DoadorService doadorService;

    @Autowired
    private AnimalService animalService;

    @PostMapping("/animal")
    public ResponseEntity<Object> createAnimal(@RequestBody @Valid CreateAnimalDoadorDTO data){
        Optional<DoadorEntity> foundDoador = this.doadorService.findDoadorByCpf(data.cpf());
        if(foundDoador.isPresent()){
            //cria animal sem criar novo doador
            AnimalEntity newAnimal = this.animalService.createAnimalOnlyService(data, foundDoador.get());
            return ResponseEntity.status(HttpStatus.CREATED).body(newAnimal);
        }
        else{
            //cria novo animal e novo doador
            AnimalEntity newAnimal = this.animalService.createAnimalDoadorService(data);
            return ResponseEntity.status(HttpStatus.CREATED).body(newAnimal);
        }
    }
    
}