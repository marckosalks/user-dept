package com.devmarcosales.userdept.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devmarcosales.userdept.entities.User;
import com.devmarcosales.userdept.repositirories.UserRepository;

import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping(value = "/users")
public class userController {
	
	//injecao de depencias
	@Autowired
	private UserRepository repository; 	//composição de obj
	
	@GetMapping
	public List<User> findAll() {//	vai no banco de dados acessa todos os usuários
		List<User> result = repository.findAll();
		return result;
	}
	
	//pega usuarios por id
	@GetMapping(value = "/{id}")
	public User findById(@PathVariable Long id) {
		User result = repository.findById(id).get();
		return result;
	}
	
	//salva novos usuários
	@PostMapping
	public User insert(@RequestBody User user) {//passo um objeto
		User result = repository.save(user);
		return result;
	}
}
