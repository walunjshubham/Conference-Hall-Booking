
import React from 'react'
import { Card } from 'react-bootstrap';


export default function Cards() {
    
    return (
        <>
        <section id="aboutUs">
            <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 75, fontFamily: 'cursive', marginBottom: 0, height: 75 }}>
                <Card border="light" bg='light'>

                    <Card.Text style={{ display: 'flex', justifyContent: 'center' }}>
                        <h3>
                        <b> INSPIRATION IGNITED</b>
                        
                            
                        </h3>
                    </Card.Text>

                </Card>
            </div>
            <div style={{marginLeft: 125, marginRight: 100, marginTop: -20,marginBottom:300, height: 200 }}>
                <div className="row">
                    <div className="col-md-4">
                        <Card style={{ width: "24rem" }}>
                            <Card.Body  >
                                <Card.Img
                                    variant="top"
                                    src={require("./Images/SketchPen.jpeg")}
                                    alt="Card1"
                                    height={"35rem"}
                                />
                                <Card.Text style={{fontFamily: 'cursive'}}>
                                <br></br>
                                <h6><b>IMMERSIVE</b></h6>
                                    <p className="card-text" style={{fontFamily: 'sans-serif'}}>Featuring signature elements and ideal settings, our hotels are designed to spark creativity and innovation, helping you develop new ideas from fresh perspectives.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: "24rem" }}>
                            <Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={require("./Images/immersive.jpg")}
                                    alt="Card1"
                                />
                                <Card.Text style={{fontFamily: 'cursive'}}>
                                <br></br>
                                <h6><b>ILLUMINATING</b></h6>
                                    <p className="card-text" style={{fontFamily: 'sans-serif'}}>
                                    Creative Meetings invites you to unlock the local culture in a collaborative setting. Experience a taste of the destination’s cuisine and beverages, crafted by the culinary experts at Le Méridien.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: "24rem" }}>
                            <Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={require("./Images/BlackTheme.jpeg")}
                                    alt="Card1"
                                />
                                <Card.Text style={{fontFamily: 'cursive'}}>
                                <br></br>
                                <h6><b>INVENTIVE</b></h6>
                                    <p className="card-text" style={{fontFamily: 'sans-serif'}}>
  We’ll make your meeting run seamlessly from start to finish. Attention to detail and inventive planning lay the foundation for an utterly unique experience.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
            </section>
        </>
    )
}
