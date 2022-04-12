package com.ConferenceHall.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ConferenceHall.dao.HotelDAO;
import com.ConferenceHall.entity.HotelTbl;

@CrossOrigin(value = "*")
@RestController
@RequestMapping(value="/hotel")
public class HotelController 
{
	@Autowired
	HotelDAO dao;

	@PostMapping(value="addHotel")
	public ResponseEntity<?> addHotel(@RequestBody HotelTbl hotel)
	{
		System.out.println("Inside hotel adding controller"+hotel.getHotelIsParking());
		if(hotel!=null)
		{
			int id=dao.addHotel(hotel);
			return new ResponseEntity<Integer>(id,HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("Hotel has not been added successfully",HttpStatus.OK);
		}

	}//end of addHotel


	@GetMapping(value="/fetchHotels")
	public ResponseEntity<?> fetchHotels()
	{
		System.out.println("Inside fetch hotels");
		ArrayList<HotelTbl> al=dao.fetchHotels();
		if(al!=null)
			return 	new ResponseEntity<ArrayList<HotelTbl>>(al,HttpStatus.OK);
		else
			return 	new ResponseEntity<String>("Empty Hotel List",HttpStatus.OK);

	}//end of fetch hotel 

	@GetMapping(value="/fetchHotelById/{id}")
	public ResponseEntity<?> fetchHotelsById(@PathVariable int id)
	{
		System.out.println("Inside fetch hotels by id"+id);
		Optional<HotelTbl> hotel=dao.fetchHotelById(id);
		if(hotel!=null)
		
			return 	new ResponseEntity<Optional<HotelTbl>>(hotel,HttpStatus.OK);
		else
			return 	new ResponseEntity<String>("Empty Hotel List",HttpStatus.OK);

	}

}
