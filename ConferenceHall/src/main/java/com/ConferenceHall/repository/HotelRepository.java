package com.ConferenceHall.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ConferenceHall.entity.HotelTbl;

public interface HotelRepository extends JpaRepository<HotelTbl, Integer>
{
	//HotelTbl findByHotelUnameAndHotelPassword(String userName,String password);

	

	HotelTbl findByHotelUname(String hotelUname);

	Optional<HotelTbl> findByHotelId(int id);
}
