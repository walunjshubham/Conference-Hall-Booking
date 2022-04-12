package com.ConferenceHall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ConferenceHall.dao.ConferenceDAO;
import com.ConferenceHall.entity.ConferenceRoomTbl;

@CrossOrigin
@RestController
@RequestMapping("/conference")
public class ConferenceController 
{
	@Autowired
	ConferenceDAO dao;
	
	@PostMapping(value="/addConference")
	public ResponseEntity<?> addConference(@RequestBody ConferenceRoomTbl conference) 
	{
		if(conference!=null)
		{
			int confId=dao.addConference(conference);
			return new ResponseEntity<Integer>(confId,HttpStatus.OK); 
		}
		else
		{
			return new ResponseEntity<String>("Unable To add Conference Hall",HttpStatus.OK); 
		}

	}//end of addConference
}
