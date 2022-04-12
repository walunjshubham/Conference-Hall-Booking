import { color } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from "react-router-dom";

const data = [
    {
        image: require('./Images/MeetPpl.jpg'),
        caption: "CREATIVE MEETINGS",
        description: "When it comes to a great meeting of the minds, Le Méridien has everything you need. Discover Creative Meetings and unlock innovation."
    },
    {
        image: require('./Images/RedRoom.jpeg'),
        caption: "Caption",
        description: "Description Here"
    },
    {
        image: require('./Images/Projector.jpeg'),
        caption: "Caption",
        description: "Description Here"
    }
]


function BookingDetails(props) {
    const location = useLocation()
    const [result, setResult] = useState()
    const [index, setIndex] = useState(0);
    //const [id, setId] = useState(0)

    let id = location.state
    //setId(x)

    const [bookDate, setBookDate] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [guest, setGuest] = useState()
    const [bookingTbl, setBookingTbl] = useState()
  
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        
       
            const url = `http://localhost:8080/hotel/fetchHotelById/${id}`

            axios.get(url)
                .then((response) => {
                    //setHid(response.data.hotelId)
                    //setCid(response.data.conferenceRoomTbls[0].confroomId)
                    setResult(response.data)

                })

                .catch((error) => {
                    console.log(error)
                })
        
    }, [])

    const bookConference = (e) => {
        e.preventDefault();
        console.log("Inside Book conference" + result)
        

        let dto = {
            "confroomId": result.conferenceRoomTbls.confroomId,

            "bookingConferenceDate": bookDate,
            "bookingTotalGuests": guest,
            "bookingAmount": 1500,
            "bookingStatus": "Booked"
        }

        const url = `http://localhost:8080/booking/addBooking`
        axios.post(url, dto)
            .then((response) => {
                console.log(response.status)
                if (response.status === 200)
                    alert(response.data)
            })
            .catch((error) => { console.log(error) })

            window.location.href="/showHotels"
    }

    return (
        <div className="row" >

            <div className="col-md-6" style={{ marginTop: 125, marginBottom: 100 }} >
                <Carousel activeIndex={index} onSelect={handleSelect} key={data.index}>
                    {data.map((slide, i) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 h-100"
                                    src={slide.image}
                                    // alt="slider image"
                                    alt={`conference`}
                                />

                            </Carousel.Item>
                        )
                    })}

                </Carousel>
            </div>

            <div className="col-md-6" style={{ marginTop: 125, marginBottom: 100 }} >



                <div id="booking" className="section">
                    <div className="section-center">
                        <div className="container">
                            <div className="row">

                                <div>
                                    <h3 style={{color:'	#004e00'}}> {

                                    }</h3>
                                </div>
                                <div className="col-md-4 col-md-pull-7">
                                    <div className="booking-form">
                                        <form>
                                            <div className="col-sm-16">
                                                <div style={{ marginLeft: -2 }} className="form-group">
                                                    <span className="form-label">Pick a date</span>
                                                    <input className="form-control" name="cdate" onChange={(e) => setBookDate(e.target.value)} type="date" required />
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <span className="form-label">Total Guests</span>
                                                <input className="form-control" type="number" name="guest" onChange={(e) => setGuest(e.target.value)} placeholder="please enter number of guests" />
                                            </div>


                                            <div >
                                                <h4 >Rs.1500
                                                </h4>
                                                <p>Base Rate:1500/Hourly</p>
                                            </div>
                                            <div className="form-btn">
                                                <button onClick={(e) => { bookConference(e) }} className="btn btn-danger">BOOK NOW</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}
export default BookingDetails;