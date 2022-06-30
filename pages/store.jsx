import {AppBar, Box, CssBaseline,Grid} from '@mui/material';
import NavBar from './components/organism/navbar';
import Product from './components/organism/product';
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import Banner from './components/organism/banner';
import Category from './components/organism/category';
import Head from 'next/head';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase/firebase';
import { useContext, useEffect, useState } from 'react';
import { AuthCtx } from './context/AuthContex';
import { useRouter } from 'next/router';
import { async } from '@firebase/util';
import Footer from './components/organism/footer';


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
export default function Store(){
    const { isLogin } = useContext(AuthCtx);
    const router = useRouter();
    const [data, setData] = useState({
        username: '',
        password: '',
        email: '',
        adress: '',
        phone: '',
        image: ''
   });
 const handleGetCollection =async() =>{
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const user =JSON.parse(localStorage.getItem('user'));
        const useruid = user.uid;
            querySnapshot.forEach((doc) => {
            const datauser = doc.data();
            const dataUserId = datauser.uid;
                if(dataUserId.toString() === useruid){
                    
                    let newData = {
                        username: datauser.username,
                        password: datauser.password,
                        email: datauser.email,
                        adress: datauser.adress,
                        phone: datauser.phone,
                        image: datauser.image

                    }
                    localStorage.setItem("userdata", JSON.stringify(newData))
                    return setData(newData);
                }
    })
    } catch (error) {
        console.log(error)
    }
    
    
 }
    const handleAuth = () =>{
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(isLogin)
       if(isLogin != true){
        console.log(isLogin);
         if(user === null){
            return router.push('/');
           } 
        }
       
      
       return null;
    }
    useEffect(()=>{
        setTimeout(()=>{
           handleAuth(); 
        },[500])
        
        handleGetCollection();
    },[isLogin]);
    return(
        <><Head>
        <title>Mizu e-commerce</title>
        <link rel="icon" type="image/x-icon" href="/image/logo-mizu.svg"></link>
        </Head>
            <ThemeProvider theme={DarkTheme}>
            <CssBaseline/>
               <NavBar/> 
               <Banner/>
            <Box sx={{ flexGrow: 1}} p={4}>
                <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                 
                    <Grid item xs={3} sx={{display:{xs: 'none', md: 'block'}}}>
                       <Category/>
                    </Grid> 
                    <Grid item xs={9} padding={0}>
                        <Product/>
                    </Grid>
                   
                </Grid>
            </Box>
            <Footer/>
           </ThemeProvider>
        </>
    )
}