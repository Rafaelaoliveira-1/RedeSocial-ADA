package com.ada.ADA.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_postagem")
public class Postagem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long postagem_id; // Identificador único da postagem
	
	@NotNull
	@Size(min = 2 , max = 2000)
	private String descricaoPostagem; 		// Local para escrita das informações das usuárias na rede social. Terá no máximo 2000 caracteres. 
	
	@Temporal(TemporalType.TIMESTAMP) 		// Anotation utilizado para adição de uma data. TIMESTAMP = data e hora
	private Date dataHora = new java.sql.Date(System.currentTimeMillis()); // Informará a data/hora das postagens.
	
	@Size(min = 5, max = 2000)

	private String link;

	@ManyToOne
	@JsonIgnoreProperties("postagem")
	private Usuario usuario; 				// Chave estrangeira com o numero do usuário
	
	@ManyToOne
	@JsonIgnoreProperties("postagem")
	private Tema tema; 						// Chave estrangeira com o numero do tema

	//Início dos getters e setters
	
	public long getPostagem_id() {
		return postagem_id;
	}

	public void setPostagem_id(long postagem_id) {
		this.postagem_id = postagem_id;
	}

	public String getDescricaoPostagem() {
		return descricaoPostagem;
	}

	public void setDescricaoPostagem(String descricaoPostagem) {
		this.descricaoPostagem = descricaoPostagem;
	}

	public Date getDataHora() {
		return dataHora;
	}

	public void setDataHora(Date dataHora) {
		this.dataHora = dataHora;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}
	
	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	public Tema getTema() {
		return tema;
	}

	public void setTema(Tema tema) {
		this.tema = tema;
	}

	//Fim dos getters e setters
}
