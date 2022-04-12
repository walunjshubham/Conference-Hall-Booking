import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('./Images/MeetPpl.jpg'), 
   caption:"CREATIVE MEETINGS",
   description:"When it comes to a great meeting of the minds, Le Méridien has everything you need. Discover Creative Meetings and unlock innovation."
  },
  {
    image:require('./Images/RedRoom.jpeg'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('./Images/Projector.jpeg'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} key={data.index}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
         // alt="slider image"
          alt={`conference`}
        />
        
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default HomeCarousel;