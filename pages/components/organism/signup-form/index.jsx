import { PhotoCamera } from "@mui/icons-material";
import { AppBar, Box, Button, Link, MenuItem, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { addDoc, collection,setDoc,doc } from "firebase/firestore";
import { auth,db } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from "@firebase/util";
import { useRouter } from "next/router";

const BoxStyled = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: 700,
});
const NavBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
});
export default function SignupForm(){
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone] = useState('');
    const [ adress, setAdress ] = useState('');
    const [ data,setData ] = useState({});
    const router = useRouter()
  
    const handleSignup = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            
            const user = userCredential.user;
            // ...
            const userid = user.uid;
            console.log(userid, 'signup success');
            handleSetData(userid);
            router.push('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    const handleSetData =(uid)=>{
       const getData = {
        username: username,
        password: password,
        email: email,
        phone: phone,
        adress: adress,
        uid: uid 
       }
       setTimeout(()=>{
        handlePostData(uid,getData);
    },[500]);
       
    }
    useEffect(()=>{
        console.log(data);
    },[setData,data])
    const handlePostData = async (uid,data) =>{
        console.log('datas: ' ,data)
        try {
            const res =  await setDoc(doc(db, "users",uid), {
                ...data
            })
            console.log("berhasil menambahkan collection");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    return(
        <Box bgcolor={"grey"} flex={0.5}  p={2} justifyContent="center" alignItems="center">
        <AppBar position="relative" color="primary">
             <NavBox>
             <Image src={"/image/logo-mizu.svg"} width={30} height={30}/>
                <Typography variant="h5">Mizu</Typography>
              </NavBox>
        </AppBar>
      
        <BoxStyled p={2}>
        <Typography variant="h5" color={"primary"}>
                Register
            </Typography>
           
            <TextField 
            fullWidth
            id="username" 
            label="Username" 
            type="username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)} />
            <TextField 
            fullWidth
            id="email" 
            label="Email" 
            type="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
            fullWidth
            id="outlined-basic"
            label="Nomor Telepon"
            type="phone"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => setPhone(e.target.value)}
            />
              <TextField
              fullWidth
          id="standard-multiline-static"
          label="Alamat"
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => setAdress(e.target.value)}
        />
          
            <Button fullWidth size="large" variant="contained" color="primary" onClick={() => handleSignup()}>Sign Up</Button>
            <Typography variant="subtitle1">Have an Account? 
            <Link href="/signin" underline="none">{'Signin here'}
            </Link>
            </Typography>
           
        </BoxStyled>
       
    </Box>
    )

}
