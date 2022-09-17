package com.devsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long> {
	/*
	 * Essa interface (repository) será o componente responsável por acessar o BD da
	 * nossa aplicação - salvar uma venda, buscar uma venda por ID, consultar, etc.
	 * Através do extends que eu faço isso.
	 */
	
}
