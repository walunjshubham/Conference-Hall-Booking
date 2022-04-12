package com.ConferenceHall.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ConferenceHall.entity.ConferenceRoomTbl;
import com.ConferenceHall.repository.ConferenceRepository;

@Component
public class ConferenceDAO
{

	@Autowired
	ConferenceRepository repo;
	public int addConference(ConferenceRoomTbl conference) 
	{
		repo.save(conference);
		System.out.println("conference room id====="+conference.getConfroomId());
		return conference.getConfroomId();
	}
	public Optional<ConferenceRoomTbl> getById(int confId)
	{
		// TODO Auto-generated method stub
		return repo.findById(confId);
	}

}
