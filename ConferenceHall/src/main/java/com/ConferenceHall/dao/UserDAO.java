package com.ConferenceHall.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.ConferenceHall.entity.UserInfoTbl;
import com.ConferenceHall.repository.UserRepository;

@Component
public class UserDAO 
{
	@Autowired
	UserRepository repo;
	
	public void addUser(UserInfoTbl user) 
	{
		repo.save(user);
	}
	
	public List<UserInfoTbl> getUsers() 
	{
		
		return repo.findAll();
	}
	
	public Boolean validUser(UserInfoTbl user)
	{
		System.out.println(user.getUserPassword()+" "+user.getUserEmail());
		UserInfoTbl user1=repo.findByUserEmailAndUserPassword(user.getUserEmail(),user.getUserPassword());
	
		if(user1!=null)
		return true;
		else
			return false;
	
	}

	public Optional<UserInfoTbl> getByID(int i) {
		
		// TODO Auto-generated method stub
		return repo.findById(i);
	}
	
}
