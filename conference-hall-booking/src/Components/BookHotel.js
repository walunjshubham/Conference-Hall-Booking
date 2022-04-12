import axios from 'axios'
import React, { Component } from 'react'


export default class BookHotel extends Component
 {
    
    componentDidMount(){
        const url = 'http://localhost:8080/hotel/fetchHotelById'

        axios.get(url)
          .then((response) => {
    
            
            
          })
    
          .catch((error) => {
            console.log(error)
          })
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
