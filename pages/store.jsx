import {AppBar, Box, CssBaseline,Grid} from '@mui/material';
import NavBar from './components/organism/navbar';
import Product from './components/organism/product';
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";


const DarkTheme = createTheme({
    palette:{
        mode: 'dark',
        primary: {
          main: '#FF5F00'
        }
    }
  })
export default function Store(){
    return(
        <>
            
            <CssBaseline/>
               <NavBar/> 
            <Box sx={{ flexGrow: 1 }} p={5}>
                <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Grid item xs={12}>
                        <Box bgcolor={'red'}>Banner</Box>
                    </Grid>
                    <Grid item xs={3} sx={{display:{xs: 'none', md: 'block'}}}>
                        <Box bgcolor={'black'} >
                            best sell
                        </Box>
                    </Grid> 
                    <Grid item xs={9}>
                        <Product/>
                    </Grid>
                   
                </Grid>
            </Box>
           
        </>
    )
}