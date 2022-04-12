
import './App.css'
import Foot from './Components/Foot'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header'
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import ShowHotels from './Components/ShowHotels';
import SignUpHotel from './Components/SignUpHotel';
import ConferenceRegister from './Components/ConferenceRegister';
import BookingDetails from './Components/BookingDetails';


function App() {
  return (
    
    <div>
    
    <Header></Header>
    <BrowserRouter>
   
    <Routes>
    
    <Route  path="/" element={<Home/>}></Route>
    <Route  path="/Login" element={<LogIn/>}></Route>
    <Route  path="/Signup" element={<SignUp/>}></Route>
    <Route  path="/ShowHotels" element={<ShowHotels/>}></Route>
    <Route  path="/SignUpHotel" element={<SignUpHotel/>}></Route>
    <Route  path="/ConferenceRegister" element={<ConferenceRegister/>}></Route>
    <Route  path="/bookingDetails" element={<BookingDetails/>}></Route>
    
    </Routes>
    </BrowserRouter>
    <Foot></Foot>
 
    </div>



    
  );
}

export default App;
