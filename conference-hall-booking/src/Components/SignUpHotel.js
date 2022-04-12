/* eslint-disable no-undef */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

import ConferenceRegister from './ConferenceRegister';
import { useAccordionButton } from 'react-bootstrap';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();



export default function SignUpHotel() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    /* const notify = ()=>{
 
        toast('Hello Geeks 2',
           {position: toast.POSITION.TOP_CENTER})
    } */
    const url = 'http://localhost:8080/hotel/addHotel';

    const regObj = {
      "hotelName": data.get('hotelName'),
      "hotelUname": data.get('hotelEmail'),
      "hotelPassword": data.get('hotelPassword'),
      "hotelContactNumber": data.get('hotelContactNumber'),
      "hotelContactPerson": data.get('hotelContactPerson'),
      "hotelEmail": data.get('hotelEmail'),
      "hotelIsParking": data.get('hotelIsParking'),
      "hotelCity": data.get('hotelCity'),
      "hotelDistrict": data.get('hotelDistrict'),
      "hotelState": data.get('hotelState'),
      "hotelPincode": data.get('hotelPincode')
    }


    axios.post(url, regObj)
      .then(result => {

        if (result.data.status !== 'fail') {
          console.log("id returnd  "+result.data)
         var x=result.data
         
         navigate("/ConferenceRegister", { state: { id: 1, hID:x} }); 
          
        } else {
          alert("Registration NOT Successfull")
        }
      })
      .catch(error => {
        console.log(error);

      });

    //props.history.push('/second');

  };
  return (

    <>
      <div id="1">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register Your Hotel
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField

                      required
                      fullWidth
                      id="hotelName"
                      name="hotelName"
                      label="Hotel Name"
                      autoFocus
                    />
                  </Grid>


                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="hotelContactNumber"
                      label="Hotel Contact Number"
                      name="hotelContactNumber"

                    />
                  </Grid>
                  <Grid item xs={12} >
                    <TextField
                      required
                      fullWidth
                      id="hotelContactPerson"
                      label="Hotel Contact Person"
                      name="hotelContactPerson"

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="hotelEmail"
                      label="Hotel Email"
                      name="hotelEmail"
                      autoComplete='email'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="hotelPassword"
                      label="Password"
                      type="password"
                      id="hotelPassword"
                      autoComplete="new-password"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="hotelIsParking"
                      label="Is Parking Available? Please enter Yes or No"
                      name="hotelIsParking"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="hotelCity"
                      label="City"
                      name="hotelCity"

                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="hotelDistrict"
                      label="District"
                      name="hotelDistrict"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="hotelState"
                      label="State"
                      name="hotelState"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="hotelPincode"
                      label="PinCode"
                      name="hotelPincode"
                      autoFocus
                    />
                  </Grid>

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"

                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/Login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>

      </div>






    </>

  );
}