package com.ConferenceHall.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ConferenceHall.entity.BookingTbl;

@Repository
public interface BookingRepository extends JpaRepository<BookingTbl, Integer>{

}
