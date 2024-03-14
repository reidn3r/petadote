package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TipoAnimalEntity;
import com.example.demo.repository.TipoAnimalRepository;

@Service
public class TipoAnimalService {
    
    @Autowired
    private TipoAnimalRepository tipoAnimalRepository;

    public Optional<TipoAnimalEntity> findTipoAnimalByTipo(String tipo){
        return this.tipoAnimalRepository.findByTipo(tipo);
    }

    public TipoAnimalEntity createNewTipo(TipoAnimalEntity tipo){
        return this.tipoAnimalRepository.save(tipo);
    }
}
