import { PhotoCamera } from "@mui/icons-material";
import {AppBar, Box, CssBaseline,Grid} from '@mui/material';
import { useEffect, useState } from "react";
import NavBar from './components/organism/navbar';
import Product from './components/organism/product';
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import Banner from './components/organism/banner';
import Category from './components/organism/category';
import SignupForm from "./components/organism/signup-form";

const Signup = () =>{
   return(
       <>
        <CssBaseline/>
        <Box sx={{ flexGrow: 1}} p={4}>
                <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                 
                    <Grid item xs={4} sx={{display:{xs: 'none', md: 'block'}}}>
                       <SignupForm/>
                    </Grid> 
                    <Grid item xs={8} padding={0}>
                        <Box>
                            thumbnail
                        </Box>
                    </Grid>
                   
                </Grid>
        </Box>
       </>
   )

}

export default Signup;