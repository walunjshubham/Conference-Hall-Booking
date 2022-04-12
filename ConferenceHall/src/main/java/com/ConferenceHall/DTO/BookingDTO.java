package com.ConferenceHall.DTO;

import java.util.Date;

public class BookingDTO {
	private int confroomId;
	private int userId;
	//private Date bookingDate;
	public Date bookingConferenceDate;
	private int bookingTotalGuests;
	private double bookingAmount;
	private String bookingStatus;
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getConfroomId() {
		return confroomId;
	}
	public void setConfroomId(int confroomId) {
		this.confroomId = confroomId;
	}
	
	public Date getBookingConferenceDate() {
		return bookingConferenceDate;
	}
	public void setBookingConferenceDate(Date bookingConferenceDate) {
		this.bookingConferenceDate = bookingConferenceDate;
	}
	public int getBookingTotalGuests() {
		return bookingTotalGuests;
	}
	public void setBookingTotalGuests(int bookingTotalGuests) {
		this.bookingTotalGuests = bookingTotalGuests;
	}
	public double getBookingAmount() {
		return bookingAmount;
	}
	public void setBookingAmount(double bookingAmount) {
		this.bookingAmount = bookingAmount;
	}
	public String getBookingStatus() {
		return bookingStatus;
	}
	public void setBookingStatus(String bookingStatus) {
		this.bookingStatus = bookingStatus;
	}
	
	
}
