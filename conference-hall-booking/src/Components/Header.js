/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Header() {
  
  return (
    <div>
    
      <nav className="navbar2 navbar-expand-lg navbar-dark bg-dark col" >
        <a className="navbar-brand" href="/"><b>Conference</b></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
          <div className="navbar-nav">
          
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>

            <a className="nav-item nav-link active" href="#">Features<span className="sr-only">(current)</span></a>

            <a className="nav-item nav-link active" href="#hotelSection">Book Conference<span className="sr-only">(current)</span></a>

            <a className="nav-item nav-link active" href="#aboutus">About Us<span className="sr-only">(current)</span></a>

            <a className="nav-item nav-link active" href="#ContactUS">Contact Us<span className="sr-only">(current)</span></a>


          </div>

          <div >

            <a className="btn btn-primary btn-lg login-show" href="/Login">Login</a>
          </div>

          

        </div>
      </nav>
     
    </div>
  )
}
