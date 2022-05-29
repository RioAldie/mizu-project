import { PhotoCamera } from "@mui/icons-material";
import { AppBar, Box, Button, Link, MenuItem, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from 'next/image';

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
    return(
        <Box bgcolor={"grey"} flex={0.5}  p={2} justifyContent="center" alignItems="center" sx={{mt: 10}}>
        <AppBar position="relative" color="primary">
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
            variant="outlined" />
            <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            />

             
            
            <Button fullWidth size="large" variant="contained" color="primary">Masuk</Button>
            <Typography variant="subtitle1">Didnt Have an Account? 
            <Link href="/signup" underline="none">
            {' Daftar disini'}
            </Link>
            </Typography>
           
        </BoxStyled>
       
    </Box>
    )

}
