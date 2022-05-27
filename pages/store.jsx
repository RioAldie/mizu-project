import {AppBar, Box, CssBaseline,Grid} from '@mui/material';
import NavBar from './components/organism/navbar';
import Product from './components/organism/product';
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import Banner from './components/organism/banner';
import Category from './components/organism/category';


const DarkTheme = createTheme({
    palette:{
        mode: 'dark',
        primary: {
          main: '#002E74',
        },
        secondary: {
            main: '#40BFFF'
        }
    }
  })
export default function Store(){
    return(
        <>
            <ThemeProvider theme={DarkTheme}>

            
            <CssBaseline/>
               <NavBar/> 
               <Banner/>
            <Box sx={{ flexGrow: 1}} p={5}>
                <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                 
                    <Grid item xs={3} sx={{display:{xs: 'none', md: 'block'}}}>
                       <Category/>
                    </Grid> 
                    <Grid item xs={9} padding={1}>
                        <Product/>
                    </Grid>
                   
                </Grid>
            </Box>
           </ThemeProvider>
        </>
    )
}