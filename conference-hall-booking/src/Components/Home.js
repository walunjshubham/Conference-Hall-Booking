/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Carousal from './Carousal'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import HomeDiv1 from './HomeDiv1';
import Cards from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookConference from './BookConference';

export default function Home() {


  return (
    <>


      <div >
        <Carousal />
      </div>
      <div>
        <HomeDiv1 />
      </div>
      <div>
        <Cards></Cards>
      </div>
      <div>
      <BookConference></BookConference>
      </div>
    



      </>

      )
}
