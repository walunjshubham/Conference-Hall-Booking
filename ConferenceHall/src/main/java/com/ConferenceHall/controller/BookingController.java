package com.ConferenceHall.controller;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ConferenceHall.DTO.BookingDTO;
import com.ConferenceHall.dao.BookingDAO;
import com.ConferenceHall.dao.ConferenceDAO;
import com.ConferenceHall.dao.UserDAO;
import com.ConferenceHall.entity.BookingTbl;
import com.ConferenceHall.entity.ConferenceRoomTbl;
import com.ConferenceHall.entity.HotelTbl;
import com.ConferenceHall.entity.UserInfoTbl;

@CrossOrigin(value="*")
@RestController
@RequestMapping("/booking")
public class BookingController {
	@Autowired
	BookingDAO bookDAO;
	@Autowired
	ConferenceDAO confDAO;
	@Autowired
	UserDAO userDAO;
	
	@PostMapping(value="/addBooking",consumes = "application/json")
	public ResponseEntity<?> addBooking(@RequestBody BookingDTO book)
	{
		
		System.out.println("inside addBooking "+book);
		long millis=System.currentTimeMillis();  
        java.sql.Date bookDate=new java.sql.Date(millis);  
        
		int confId=book.getConfroomId();
		ConferenceRoomTbl confTable=confDAO.getById(confId).orElse(null);	//1
		UserInfoTbl uf=userDAO.getByID(1).orElse(null);		//1 is hardcoded
	    
		BookingTbl booking=new BookingTbl();
		booking.setConferenceRoomTbl(confTable);
		booking.setUserInfoTbl(uf);
		booking.setBookingDate(bookDate);
		booking.setBookingConferenceDate( book.getBookingConferenceDate());
		booking.setBookingTotalGuests(book.getBookingTotalGuests());
		booking.setBookingAmount(book.getBookingAmount());
		booking.setBookingStatus(book.getBookingStatus());
		
		
		bookDAO.addBooking(booking);
		System.out.println("All data set in booking table");
		
		return new ResponseEntity<String>("Your Booking has been done",HttpStatus.OK);
	
	}
	
	
	

}
