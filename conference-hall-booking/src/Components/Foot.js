/* eslint-disable react/style-prop-object */
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css' 

const Foot = () => {
  return (
    <section id="ContactUS">
    <div>
    <div className=" row mt-3 text-light bg-black" style={{ height: "30vh" }}>
      <div className="col-3 mt-2 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        pariatur consectetur amet tempora asperiores aliquam quam magnam ab
        aperiam porro ut, sed quia totam, excepturi soluta culpa id quos
        eaque.
      </div>
      <div className="col-3 mt-2">
        <div>For Customer</div>
        <div className="mt-2">
          <></>
          Order
        </div>
        <div className="mt-2">
          <></>
          Products
        </div>
        <div className="mt-2">
          <></>
          Payment
        </div>
      </div>
      <div className="col-3 mt-2">
        <div>Quick Links</div>
        <div className="mt-2">
          <></>
          Home
        </div>
        <div className="mt-2">
          <></>
          About Us
        </div>
        <div className="mt-2">
          <></>
          Contact
        </div>
      </div>
      <div className="col-3 mt-2">
        <div>Contact Info</div>
        <div className=" mt-2">
          <></>
          Address
        </div>
        <div className=" mt-2 ">
          <></>
          Phone
        </div>
        <div
          className="
          mt-2"
        >
          <></>
          Email
        </div>
      </div>
    </div>
  </div>
  </section>
  );
}

export default Foot;