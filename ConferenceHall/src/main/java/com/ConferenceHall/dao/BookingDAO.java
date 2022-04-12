package com.ConferenceHall.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ConferenceHall.entity.BookingTbl;
import com.ConferenceHall.repository.BookingRepository;

@Component
public class BookingDAO {
	@Autowired
	BookingRepository repo;

	public void addBooking(BookingTbl booking) 
	{
		repo.save(booking);
		
	}
	

}
