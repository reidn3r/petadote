package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.CreateAnimalDoadorDTO;import com.example.demo.entities.AnimalEntity;
import com.example.demo.entities.DoadorEntity;
import com.example.demo.entities.TipoAnimalEntity;
import com.example.demo.repository.AnimalRepository;

import jakarta.transaction.Transactional;
import lombok.NonNull;

@Service
public class AnimalService {
    
    @Autowired 
    private AnimalRepository animalRepository;

    @Autowired
    private TipoAnimalService tipoAnimalService;

    @Autowired
    private DoadorService doadorService;

    public AnimalEntity createAnimalOnlyService(CreateAnimalDoadorDTO data, DoadorEntity doador){
        //Busca pelo tipo_animal
        Optional<TipoAnimalEntity> foundTipo = tipoAnimalService.findTipoAnimalByTipo(data.tipo_animal());
        
        //Se o tipo_animal for existente no bd:
        if(foundTipo.isPresent()){
            AnimalEntity newAnimal = new AnimalEntity(data.nome_animal(), data.cor(), data.idade(),
            data.descricao(), foundTipo.get(), doador);

            return this.createNewAnimal(newAnimal);
        }
        
        //Não existe o tipo_animal no bd:
        else{
            return this.createNewAnimalAndTipo(data, doador);
        }
    }


    public AnimalEntity createAnimalDoadorService(CreateAnimalDoadorDTO data){
        //Busca pelo tipo_animal
        Optional<TipoAnimalEntity> foundTipo = tipoAnimalService.findTipoAnimalByTipo(data.tipo_animal());
        
        if(foundTipo.isPresent()){
            //Caso tipo_animal já esteja registrado
            return this.createNewAnimalAndDoador(data, foundTipo.get());
        }
        else{
            //Tipo_animal não está registrado
            return this.createNewAnimalAndDoadorAndTipo(data);
        }
    }

    public AnimalEntity adoptAnimal(AnimalEntity animal){
        //Troca o status do animal p/ adotado
        animal.setStatus("ADOTADO");
        return animalRepository.save(animal);
    }
    
    
    private AnimalEntity createNewAnimal(AnimalEntity animal){
        //Cria novo animal no bd
        return animalRepository.save(animal);
    }

    @Transactional
    public AnimalEntity createNewAnimalAndTipo(CreateAnimalDoadorDTO data, DoadorEntity doador){
        //Cria novo tipo_animal e animal, associando-os
        TipoAnimalEntity tipo = new TipoAnimalEntity(data.raca(), data.tipo_animal());
        TipoAnimalEntity newTipo = tipoAnimalService.createNewTipo(tipo);
        
        AnimalEntity newAnimal = new AnimalEntity(data.nome_animal(), data.cor(), data.idade(),
        data.descricao(), newTipo, doador);

        return this.createNewAnimal(newAnimal);
    }
    
    @Transactional
    public AnimalEntity createNewAnimalAndDoador(CreateAnimalDoadorDTO data, TipoAnimalEntity tipo){
        //tipo_animal já existe, crie somente um doador e um animal
        DoadorEntity newDoador = new DoadorEntity(data.nome_doador(), data.telefone(), data.cpf(), data.email());
        DoadorEntity createdDoador = doadorService.createNewDoador(newDoador);
        
        AnimalEntity newAnimal = new AnimalEntity(data.nome_animal(), data.cor(), data.idade(),
        data.descricao(), tipo, createdDoador);
        
        return this.createNewAnimal(newAnimal);
    }

    @Transactional
    public AnimalEntity createNewAnimalAndDoadorAndTipo(CreateAnimalDoadorDTO data){
        //Cria novo doador, tipo_animal e animal e associa todo mundo
        DoadorEntity newDoador = new DoadorEntity(data.nome_doador(), data.telefone(), data.cpf(), data.email());
        DoadorEntity createdDoador = doadorService.createNewDoador(newDoador);
        
        TipoAnimalEntity tipo = new TipoAnimalEntity(data.raca(), data.tipo_animal());
        TipoAnimalEntity newTipo = tipoAnimalService.createNewTipo(tipo);
        
        AnimalEntity newAnimal = new AnimalEntity(data.nome_animal(), data.cor(), data.idade(),
        data.descricao(), newTipo, createdDoador);
    
        return this.createNewAnimal(newAnimal);
    }

    public List<AnimalEntity> findAllAnimals(){
        //Lista todos os animais
        return this.animalRepository.findAll();
    }
    
    public Optional<AnimalEntity> findAnimalById(Long id){
        //Encontra um unico animal por ID (chave primária da entidade) do banco de dados
        return animalRepository.findById(id);
    }

    public void deleteAnimalById(Optional<AnimalEntity> animal){
        animalRepository.delete(animal.get());
    }
}
