import {AppBar, Box, CssBaseline,Grid,createTheme, PaletteMode, ThemeProvider} from '@mui/material';
import Head from 'next/head';
import SignupForm from "./components/organism/signup-form";
import Hero from "./components/organism/hero";
import SigninForm from './components/organism/signin-form';

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
export default function Signin (){
    return(
        <>
            <Head>
        <title>Mizu / Login</title>
        <link rel="icon" type="image/x-icon" href="/image/logo-mizu.svg"></link>
        </Head>
       <ThemeProvider theme={DarkTheme}>
        <CssBaseline/>
            <Box>
                <SigninForm/>
            </Box>
       </ThemeProvider>
        </>
    )
}