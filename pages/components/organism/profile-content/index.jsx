
import { Avatar, Box, Button, IconButton, Input, styled, TextField, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";
import { db } from "../../../firebase/firebase";
import { useEffect } from "react";
import { useState } from "react";

const BoxStyled = styled(Box)({
    width: "100%",
    height: 450,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
const BoxDetails = styled(Box)({
    width: '100%',
    height: 800,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: 'center'
});
const BoxDetail = styled(Box)({
    display: "flex",
    flexDirection: "row",
    width: "90%",
    height: "50px",
    justifyContent: "space-between",
    alignItems: "center"
    
})
const BoxName = styled("div")(({theme}) =>({
    display: "flex",
    height: '130px',
    flexDirection: 'column',
    [theme.breakpoints.up("md")]:{
        flexDirection: 'row',
        height: '100px'
    }
}))

export default function ProfileContent(){
   const [userid,setUserid] = useState('');
   const [data, setData] = useState({
        username: '',
        password: '',
        email: '',
        adress: '',
        phone: '',
        image: '',
        customer: ''
   });
  
useEffect(()=>{
    handleGetCollection();
    getDatauser();
   },[]);
   const getDatauser = () =>{
        const datauser = JSON.parse(localStorage.getItem('userdata'));
        let newData = {
            username: datauser.username,
            password: datauser.password,
            email: datauser.email,
            adress: datauser.adress,
            phone: datauser.phone,
            image: datauser.image,
            customer: datauser.customer
        }
        return setData(newData);
   }
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
                        image: datauser.image,
                        customer: datauser.customer
                    }
                
                    return setData(newData);
                }
    })
    } catch (error) {
        console.log(error)
    }
    
    
 }

    return(
        <Box flex={3}  height={1000}>
            <BoxStyled sx={{display: 'flex', flexDirection: 'column'}}>
            <Avatar alt="Remy Sharp" src={`/image/${data.image}`} 
            sx={{ width: 150, height: 150 }}
            />
                    <Typography variant="h6" fontWeight={"normal"}>
                       {data.username}
                    </Typography>
                    <Typography variant="h6" fontWeight={"light"} color={'gray'}>
                        {data.email}
                    </Typography>
            </BoxStyled>
            <Typography variant="h5" fontWeight={"bold"}>
                        Profile
                    </Typography>
            <BoxDetails p={0} >
                <BoxDetail sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                    <Typography variant="h6" fontWeight={"bold"}>
                        Username
                    </Typography>
                    <Box sx={{ width: {xs:'100%', md: '50%'}, display: 'flex', justifyContent:'space-between'}}>
                    <TextField
                    fullWidth
                    type={'text'}
                    id="outlined-disabled"
                    label="username"
                    value={data.username}
                    />
                     </Box>
                   
                </BoxDetail>
                <BoxDetail sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                    <Typography variant="h6" fontWeight={"bold"}>
                        E-mail
                    </Typography>
                    <Box sx={{ width: {xs:'100%', md: '50%'}, display: 'flex', justifyContent:'space-between'}}>
                       <TextField
                    fullWidth
                    
                    type={'text'}
                    id="outlined-disabled"
                    label="email"
                    value={data.email}
                    /> 
                    </Box>
                    
                </BoxDetail>
                <BoxDetail sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                    <Typography variant="h6" fontWeight={"bold"}>
                        Password
                    </Typography>
                    <Box sx={{ width:  {xs:'100%', md: '50%'}, display: 'flex', justifyContent:'space-between'}}>
                        <TextField
                    fullWidth
                    type={'password'}
                    disabled
                    id="outlined-disabled"
                    label="password"
                    value={data.password}
                    />
                    </Box>
                    
                </BoxDetail>
                <BoxDetail sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                    <Typography variant="h6" fontWeight={"bold"}>
                        Phone
                    </Typography>
                    <Box sx={{ width:  {xs:'100%', md: '50%'}, display: 'flex', justifyContent:'space-between'}}>
                        <TextField
                    fullWidth
                    type={'text'}
                    id="outlined-disabled"
                    label="Nomor Telepon"
                    value={data.phone}
                    />
                    </Box>
                    
                </BoxDetail>
                <BoxDetail sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                    <Typography variant="h6" fontWeight={"bold"}>
                        Alamat
                    </Typography>
                    <Box sx={{ width:  {xs:'100%', md: '50%'}, display: 'flex', justifyContent:'space-between'}}>
                    <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    label="Alamat"
                    multiline
                    rows={4}
                    value={data.adress}
                    />

                    </Box>
                    
                </BoxDetail>
                <BoxDetail>
                    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-end',mt: 20}}>
                        <Button variant="contained" sx={{marginRight: 5}} >Save</Button>
                        <Button variant="outlined">Cancel</Button>
                    </Box>
                    
                </BoxDetail>
                
            </BoxDetails>
            
            
        </Box>
    )
}