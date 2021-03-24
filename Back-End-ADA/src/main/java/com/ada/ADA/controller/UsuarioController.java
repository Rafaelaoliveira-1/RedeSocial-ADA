package com.ada.ADA.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ada.ADA.model.UserLogin;
import com.ada.ADA.model.Usuario;
import com.ada.ADA.repository.UsuarioRepository;
import com.ada.ADA.service.UsuarioService;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> getAll() {
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}") 
	public ResponseEntity<Usuario> getById(@PathVariable long id) {
		return repository.findById(id)
			.map(resp -> ResponseEntity.ok(resp))
			.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/cargo/{cargo}")
	public ResponseEntity<List<Usuario>> getByCargo (@PathVariable String cargo) {
		return ResponseEntity.ok(repository.findAllBycargoContainingIgnoreCase(cargo));
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Usuario>> getByNome (@PathVariable String nome) {
		return ResponseEntity.ok(repository.findAllBynomeCompletoContainingIgnoreCase(nome));
	}
	
	@PostMapping
	public ResponseEntity<Usuario> post (@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(usuario));
	}

	@PutMapping
	public ResponseEntity<Usuario> put (@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(usuario));
	}
	
	@DeleteMapping("/{id}")
	public void delete (@PathVariable long id) {
		repository.deleteById(id);
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> Post (@RequestBody Usuario usuario) {
		Optional<Usuario> user = usuarioService.CadastrarUsuario(usuario);
		try {
			return ResponseEntity.ok(user.get());
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}

	}

	@PostMapping("/entrar")
	public ResponseEntity<UserLogin> Autentication (@RequestBody Optional<UserLogin> user) {
		return usuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}	
}
