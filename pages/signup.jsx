import { PhotoCamera } from "@mui/icons-material";
import {AppBar, Box, CssBaseline,Grid} from '@mui/material';
import { useEffect, useState } from "react";
import NavBar from './components/organism/navbar';
import Product from './components/organism/product';
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import Banner from './components/organism/banner';
import Category from './components/organism/category';
import Head from 'next/head';
import SignupForm from "./components/organism/signup-form";
import Hero from "./components/organism/hero";
 
const DarkTheme = createTheme({
        palette:{
            mode: 'light',
            primary: {
              main: '#002E74',
            },
            secondary: {
                main: '#40BFFF'
            }
        }
      })
const Signup = () =>{
   
   return(
       <> 
       <Head>
        <title>Mizu / Daftar</title>
        <link rel="icon" type="image/x-icon" href="/image/logo-mizu.svg"></link>
        </Head>
       <ThemeProvider theme={DarkTheme}>
        <CssBaseline/>
        <Box sx={{ flexGrow: 1}} p={0}>
                <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                 
                    <Grid item xs={4} p={0} sx={{xs :{xs: 12, md: 4}}}>
                       <SignupForm/>
                    </Grid> 
                    <Grid item xs={8} padding={0} sx={{display:{xs: 'none', md: 'block'}}}>
                        <Box>
                            <Hero/>
                        </Box>
                    </Grid>
                   
                </Grid>
        </Box>
       </ThemeProvider>
       </>
   )

}

export default Signup;