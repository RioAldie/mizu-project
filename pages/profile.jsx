import {AppBar, Box, CssBaseline,Grid} from '@mui/material';
import NavBar from './components/organism/navbar';
import Product from './components/organism/product';
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import Banner from './components/organism/banner';
import Head from 'next/head';
import Category from './components/organism/category';
import ProfileContent from './components/organism/profile-content';
import Sidebar from './components/organism/sidebar';


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
export default function Profile(){
    return(
        <>
        <Head>
        <title>Mizu / Yanto</title>
        <link rel="icon" type="image/x-icon" href="/image/logo-mizu.svg"></link>
        </Head>
        <ThemeProvider theme={DarkTheme}>
            <CssBaseline/>
               <NavBar/> 
            <Box sx={{ flexGrow: 1}} p={4}>
                <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                    
                    <Grid item xs={3}  sx={{display:{xs: 'none', md: 'block'}}}>
                        <Box position={'fixed'}>
                           <Sidebar/> 
                        </Box>
                       
                    </Grid> 
                    <Grid item xs={9} padding={0}>
                        <ProfileContent/>
                    </Grid>
                   
                </Grid>
            </Box>
           </ThemeProvider>
           </>
    )
            

}