package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AdoptAnimalDTO;
import com.example.demo.dto.CreateAnimalDoadorDTO;
import com.example.demo.dto.EditAnimalDTO;
import com.example.demo.entities.AnimalEntity;
import com.example.demo.entities.DoadorEntity;
import com.example.demo.services.AnimalService;
import com.example.demo.services.DoadorService;

import jakarta.validation.Valid;

@CrossOrigin(origins = {"http://localhost:5173/", "http://localhost:5173/cadastro", "http://localhost:5173/lista"})
@RestController
@RequestMapping("/api")
public class PetAdoteController {

    @Autowired
    private DoadorService doadorService;

    @Autowired
    private AnimalService animalService;

    @GetMapping("/get/all")
    public ResponseEntity<List<AnimalEntity>> getAllAnimals(){
        return ResponseEntity.status(HttpStatus.OK).body(this.animalService.findAllAnimals());
    }

    @PostMapping("/new/animal")
    public ResponseEntity<AnimalEntity> createAnimal(@RequestBody @Valid CreateAnimalDoadorDTO data){
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

    @PutMapping("/adopt")
    public ResponseEntity<AnimalEntity> adoptAnimal(@RequestBody @Valid AdoptAnimalDTO data) throws Exception{
        Optional<AnimalEntity> foundAnimal = animalService.findAnimalById(data.id());
        
        if(foundAnimal.isEmpty()){
            throw new Exception("Animal nao encontrado");
        }
        else if(foundAnimal.get().getStatus().equals("ADOTADO")){
            throw new Exception("Animal já adotado.");
        }
        else{
            AnimalEntity adoptedAnimal = animalService.adoptAnimal(foundAnimal.get());
            return ResponseEntity.status(HttpStatus.OK).body(adoptedAnimal);
        }
    }

    @PutMapping("/update/animal")
    public ResponseEntity<Object> updateAnimal(@RequestBody @Valid EditAnimalDTO data) throws Exception{
        Optional<AnimalEntity> updatedAnimal = this.animalService.updateAnimal(data);
        return ResponseEntity.status(HttpStatus.OK).body(updatedAnimal);

    }
    
    @DeleteMapping("/delete/animal")
    public ResponseEntity<Object> deleteAnimal(@RequestBody @Valid AdoptAnimalDTO data) throws Exception{
        Optional<AnimalEntity> foundAnimal = animalService.findAnimalById(data.id());
        if(foundAnimal.isEmpty()){
            throw new Exception("Animal nao encontrado");
        }
        else{
            animalService.deleteAnimalById(foundAnimal);
            return ResponseEntity.ok().body(foundAnimal);
        }
    }
}