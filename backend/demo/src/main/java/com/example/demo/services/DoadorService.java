package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.DoadorEntity;
import com.example.demo.repository.DoadorRepository;

@Service
public class DoadorService {
    @Autowired
    private DoadorRepository doadorRepository;

    public Optional<DoadorEntity> findDoadorByCpf(String cpf){
        return this.doadorRepository.findByCpf(cpf);
    }

    public DoadorEntity createNewDoador(DoadorEntity doadorEntity){
        return this.doadorRepository.save(doadorEntity);
    }
}
