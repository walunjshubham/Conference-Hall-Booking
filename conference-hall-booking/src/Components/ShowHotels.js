import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'bootstrap';
import {  useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ShowHotels() {
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = 'http://localhost:8080/hotel/fetchHotels'

    axios.get(url)
      .then((response) => {

        setResult(response.data)
        
      })

      .catch((error) => {
        console.log(error)
      })

  }, []);

  const bookHotel=(id)=>{
       
    navigate("/bookingDetails", { state: id }); 
   

}
   
  return (

    <div>
    <section id="hotelSection">
    {
    result.map((i) => 
      <div key={i.hotelId} style={{ marginLeft: 125, marginRight: 100, marginTop: -20, marginBottom: 300, height: 200 }}>
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "24rem" }}>
              <Card.Body  >
                <Card.Img className="blob-to-image"
                  variant="top"
                
                  alt="Card1"
                  height={"35rem"}
                />
                <Card.Text style={{ fontFamily: 'cursive' }}>
                  <br></br>
                  <b> Hotel {i.hotelName} </b>
                  <p>{i.hotelCity}, {i.hotelDistrict} ,{i.hotelState} ,{i.hotelPincode}  </p>
                   </Card.Text>
                <button  className="btn btn-danger" onClick={()=>bookHotel(i.hotelId)}>BOOK NOW</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    )

    }
    </section>
    </div>
  )
}
