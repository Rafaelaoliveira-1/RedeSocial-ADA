package com.ada.ADA.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ada.ADA.model.Postagem;

@Repository
public interface PostagemRepository extends JpaRepository <Postagem, Long>{
	public List<Postagem> findAllBydescricaoPostagemContainingIgnoreCase (String descricaoPostagem);	
}