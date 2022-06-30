import {AppBar, Box, CssBaseline,Grid,createTheme, PaletteMode, ThemeProvider} from '@mui/material';
import Head from 'next/head';
import SignupForm from "./components/organism/signup-form";
import Hero from "./components/organism/hero";
import SigninForm from './components/organism/signin-form';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthCtx } from './context/AuthContex';

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
    const {isLogin} = useContext(AuthCtx);
    const router = useRouter();
    const handleAuth =async () =>{
        const user = await JSON.parse(localStorage.getItem('user'))

       if(isLogin == true){
            return router.push('/store');
        }
        if(user != null){
            return router.push('/store');
        } 
       
      
       return null;
    }
    useEffect(()=>{
        setTimeout(()=>{
           handleAuth(); 
        },[500])
        
    },[isLogin]);
    return(
        <>
            <Head>
        <title>Mizu / Login</title>
        <link rel="icon" type="image/x-icon" href="/image/logo-mizu.svg"></link>
        </Head>
       <ThemeProvider theme={DarkTheme}>
        <CssBaseline/>
            <Box sx={{display:{xs:'block',md:'flex'}, justifyContent:'center', alignItems:'center'}}>
                <SigninForm/>
            </Box>
       </ThemeProvider>
        </>
    )
}