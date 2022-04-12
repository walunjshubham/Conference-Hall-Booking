import React from 'react'
import { Button, Card } from 'react-bootstrap'



export default function BookConference() {

const Book=()=>{
    window.location.href = "/ShowHotels";

}

    return (

        <>
            <div style={{ marginLeft: 35, marginRight: 25, marginTop: 30, marginBottom: 125 }}>
                <div className="row">
                    <div className="col-md-12">
                        <Card style={{ width: "90rem" }}>
                            <Card.Body  >
                                <Card.Img style={{ height: "25rem" }}
                                    variant="top"
                                    src={require("./Images/CreativeMeet.jpeg")}
                                    alt="Card1"
                                    height={"85rem"}
                                />
                            </Card.Body>
                        </Card>



                        <div className="col-md-3">
                        <Card style={{ width: "22rem" ,marginBottom:20,marginLeft:950,marginRight:50,marginTop:-300,height:"20rem"}}>
                            <Card.Body style={{alignContent:'center',padding:15}} >
                                <Card.Text style={{ fontFamily: 'cursive',marginTop:25 }}>
                                  
                                       <p className="card-text" style={{ fontFamily: 'sans-serif' }}>Spark discovery and illuminate insights
                                        with Creative Meetings by Le Méridien, designed to unlock inspiration and foster
                                         innovation. From locally inspired flavours to cultural experiences, the meetings 
                                         create an immersive atmosphere that brings the destination in.</p>
                                </Card.Text>
                                <br></br>
                                <Button style={{textAlign:'center'}} variant="info" onClick={Book}>BOOK A MEETING SPACE</Button>{' '}
                            </Card.Body>
                        </Card>
                    
                </div>



                    </div>



                    
                   



                </div>

                


            </div>

        </>

    )
}
