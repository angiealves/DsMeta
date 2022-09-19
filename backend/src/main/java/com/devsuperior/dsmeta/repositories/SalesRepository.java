package com.devsuperior.dsmeta.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsmeta.entities.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long> {
	/*
	 * Essa interface (repository) será o componente responsável por acessar o BD da
	 * nossa aplicação - salvar uma venda, buscar uma venda por ID, consultar, etc.
	 * Através do extends que eu faço isso.
	 */
	
	@Query("SELECT obj FROM Sales obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.amount DESC")
	Page<Sales> findSales(LocalDate min, LocalDate max, Pageable pageable);
	
}
