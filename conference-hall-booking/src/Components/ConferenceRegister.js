

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RepeatOneSharp } from '@mui/icons-material';
import { responsiveProperty } from '@mui/material/styles/cssUtils';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';


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

//function started
export default function ConferenceRegister(props) {

    const location=useLocation()
    const [hotelIdd, setHotelIdd] = useState()
    console.log("state arrived in conf"+location.state.hID)
    const x=location.state.hID
    console.log("x value "+x)
    setHotelIdd(x)
    console.log("setid=="+hotelIdd)
    //const search = window.location.search; // returns the URL query String
    //const params = new URLSearchParams(search);
    //const details = params.get('regObj');
    //console.log("get from par" +details)

    //const obj = { "hotelUname": details.hotelUname }

   /*React.useEffect(()=>{
    
     const url = 'http://localhost:8080/hotel/getHotelId';
    console.log(location.state)
    axios.post(url,obj)
    .then((response)=>{
       if(response.data.status==='SUCCESS')
       {
        setHotelId(response.data)
       } 
       else
       {
        alert(" NOT Successfull")
       } 
    })

   })*/

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        /* const notify = ()=>{
     
            toast('Hello Geeks 2',
               {position: toast.POSITION.TOP_CENTER})
        } */
        const url = 'http://localhost:8080/hotel/addConference';

        const regObj = {
            "hotelId":hotelIdd,
            "confroomName": data.get('confroomName'),
            "confroomCapacity": data.get('confroomCapacity'),
            "confroomIsDining": data.get('confroomIsDining'),
            "confroomIsSmoking": data.get('confroomIsSmoking'),
            "confroomIsAc": data.get('confroomIsAc'),
            "confroomIsProjectorFacility": data.get('confroomIsProjectorFacility'),
           
        }

        axios.post(url, regObj)
            .then(result => {

                if (result.data.status !== 'fail') {
                    // {notify}
                    setHotelIdd(result.data)
                    alert(result.data)
                } else {
                    alert("Registration NOT Successfull")
                }
            })
            .catch(error => {
                console.log(error);

            });


        // console.log({
        //   name:data.get('hotelName'),
        //   email: data.get('hotelEmail'),

        // },regObj);
    };


    return (
        <div>


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
                                Register Your Conference
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField

                                            required
                                            fullWidth
                                            id="confroomName"
                                            name="confroomName"
                                            label="Conference Hall Name"
                                            autoFocus
                                        />
                                    </Grid>


                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="confroomCapacity"
                                            label="Conference Hall Capacity"
                                            name="confroomCapacity"

                                        />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField
                                            required
                                            fullWidth
                                            id="confroomIsDining"
                                            label="Is Dining Facility Available? Yes/No"
                                            name="confroomIsDining"

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="confroomIsSmoking"
                                            label="Is Smoking Zone Available? Yes/No"
                                            name="confroomIsSmoking"
                                            //autoComplete='email'
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="confroomIsAc"
                                            label="AC/Non-AC"
                                           // type="password"
                                            id="confroomIsAc"
                                            //autoComplete="new-password"
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="confroomIsProjectorFacility"
                                            label="Is Projector Available? Please enter Yes or No"
                                            name="confroomIsProjectorFacility"
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



        </div>
    )
}
