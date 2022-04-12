package com.ConferenceHall.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ConferenceHall.entity.ConferenceRoomTbl;

public interface ConferenceRepository extends JpaRepository<ConferenceRoomTbl, Integer> 
{

}
