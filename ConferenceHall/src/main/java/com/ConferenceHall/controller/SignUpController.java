package com.ConferenceHall.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ConferenceHall.dao.UserDAO;
import com.ConferenceHall.entity.UserInfoTbl;

@CrossOrigin(value  = "*")
@RestController

@RequestMapping("/user")
public class SignUpController 
{
	@Autowired
	UserDAO dao;
	
	
	@PostMapping(value = "/signup")
	public void postUserData(@RequestBody UserInfoTbl user)
	{
		System.out.println(user.getUserFirstname()+" im innn ");
		dao.addUser(user);
	}
	
	
	
	@PostMapping(value = "/validateLogin")
	public Boolean validLogin(@RequestBody UserInfoTbl user)
	{
		System.out.println("inside get request from react "+user.getUserEmail());
		return dao.validUser(user);
		/*
		 * UserInfoTbl user1= dao.validUser(user); if(user1!=null) return new
		 * ResponseEntity<UserInfoTbl>(user1,HttpStatus.OK); else return new
		 * ResponseEntity<String>("Invalid username aand password",HttpStatus.ACCEPTED);
		 */
	}
	
}
