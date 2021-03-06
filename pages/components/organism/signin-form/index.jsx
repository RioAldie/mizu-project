import { PhotoCamera } from "@mui/icons-material";
import { AppBar, Box, Button, MenuItem, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';
import { auth } from "../../../firebase/firebase";
import { useRouter } from 'next/router';
import { useContext } from "react";
import { AuthCtx } from "../../../context/AuthContex";

const BoxStyled = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 500,
});
const NavBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
});
export default function SigninForm(){
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ adress, setAdress ] = useState('');
    const {isLogin, setIslogin} = useContext(AuthCtx);
    const router = useRouter();
    const handleLogin = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            //setErr(false)
            const user = userCredential.user;
            const userf= {
                uid: user.uid,
                email: user.email
            }
            console.log(userf)
            console.log('login success')
            setLocalStr(userf);
            setIslogin(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            
            // ..
        });
    }
   
    const setLocalStr = (user) =>{
        return(
            localStorage.setItem("user", JSON.stringify(user))
        )
    }
    return(
        <Box bgcolor={"grey"} flex={0.5}  p={2} justifyContent="center" alignItems="center" alignSelf={'center'} sx={{mt: 10,width:{md: 900}}}>
        <AppBar position="relative" color="primary" sx={{height: 50, display: 'flex', alignItems: 'center',justifyContent:'center'}}>
             <NavBox>
             <Image src={"/image/logo-mizu.svg"} width={30} height={30}/>
                <Typography variant="h5">Mizu</Typography>
              </NavBox>
        </AppBar>
      
        <BoxStyled p={2}>
        <Typography variant="h5" color={"primary"} textAlign={'center'}>
                Ada produk terbaik dari Mizu hanya untukmu
            </Typography>
             
            <TextField 
            fullWidth
            id="email" 
            label="Email" 
            type="email"
            variant="outlined" onChange={(e) => setEmail(e.target.value)} />
            <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            variant="outlined"
            />

             
            
            <Link href={'/store'}><Button fullWidth  onClick={()=> handleLogin()} size="large" variant="contained" color="primary">Masuk</Button></Link>
            <Typography variant="subtitle1">Didnt Have an Account? 
            <Link href="/signup" underline="none">{' Daftar disini'}
            </Link>
            
            </Typography>
           
        </BoxStyled>
       
    </Box>
    )

}
