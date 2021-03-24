package com.ada.ADA.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_tema")
public class Tema {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY) //É usado para avisar o JPA realizar a conversão de uma classe. 
	private long id;
		
	@NotNull
	@Size(min = 2 , max = 50)
	private String descricaoTema; //Tema usado para descrever a postagem e pesquisa. Terá no máximo 50 caracteres. 
		
	@NotNull
	@Size(min = 1, max = 50)
	private String tipoTema; // vaga, duvida
	
	@OneToMany(mappedBy = "tema", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("tema")
	private List<Postagem> postagem;
	
	//Início Getters and Setters
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescricaoTema() {
		return descricaoTema;
	}

	public void setDescricaoTema(String descricaoTema) {
		this.descricaoTema = descricaoTema;
	}

	public String getTipoTema() {
		return tipoTema;
	}

	public void setTipoTema(String tipoTema) {
		this.tipoTema = tipoTema;
	}
	
	public List<Postagem> getPostagem() {
		return postagem;
	}

	public void setPostagem(List<Postagem> postagem) {
		this.postagem = postagem;
	}
		
//Fim Getters and Setters
	
}