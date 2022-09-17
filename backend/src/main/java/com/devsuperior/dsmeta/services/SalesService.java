package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sales;
import com.devsuperior.dsmeta.repositories.SalesRepository;

@Service
public class SalesService {
	/*
	 * Essa classe funciona como componente (service) responsável por fazer
	 * operações de negócios com vendas
	 */
	
	@Autowired
	private SalesRepository repository;
	
	public List<Sales> findSales() {
		return repository.findAll(); // Buscando todas as minhas vendas
	}

}
