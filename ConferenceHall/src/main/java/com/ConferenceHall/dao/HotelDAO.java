package com.ConferenceHall.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ConferenceHall.entity.HotelTbl;
import com.ConferenceHall.repository.HotelRepository;

@Component
public class HotelDAO {
	@Autowired
	HotelRepository repo;

	public int addHotel(HotelTbl hotel) {
		repo.save(hotel);

		HotelTbl h=repo.findByHotelUname(hotel.getHotelUname());
		System.out.println(" hotel id is ========"+h.getHotelId());
		return h.getHotelId();

	}

	public ArrayList<HotelTbl> fetchHotels() 
	{
		System.out.println("Inside of hotel dao fetch hotelsss..");
		return (ArrayList<HotelTbl>) repo.findAll();
		
	}

	public Optional<HotelTbl> fetchHotelById(int id) 
	{
		//System.out.println(repo.findById(id));
		
		return  repo.findByHotelId(id);
		
	}

	/*
	 * public int getHotelId(HotelTbl hotel) {
	 * System.out.println("hotel details insode dao"+hotel.getHotelUname()
	 * +" hotel password"+hotel.getHotelPassword());
	 * 
	 * HotelTbl validatedHotel=repo.findByHotelUname(hotel.getHotelUname());
	 * System.out.println("hotel id we want for conference registration"
	 * +validatedHotel.getHotelId()); return validatedHotel.getHotelId();
	 * 
	 * }
	 */
	  
	 
}
