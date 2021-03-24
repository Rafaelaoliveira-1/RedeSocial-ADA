package com.ada.ADA.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ada.ADA.model.Tema;

@Repository
public interface TemaRepository extends JpaRepository<Tema, Long> {
	public List<Tema> findAllBydescricaoTemaContainingIgnoreCase (String descricaoTema);
	public List<Tema> findAllBytipoTemaContainingIgnoreCase (String tipoTema);
}