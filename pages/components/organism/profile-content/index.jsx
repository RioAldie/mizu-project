
import { Avatar, Box, Button, IconButton, Input, styled, TextField, Typography } from "@mui/material";
import Message from "./message";

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

   
    
    return(
        <Box flex={3}  height={1000}>
            <BoxStyled sx={{display: 'flex', flexDirection: 'column'}}>
            <Avatar alt="Remy Sharp" src={'/image/avtar-2.png'} 
            sx={{ width: 150, height: 150 }}
            />
                    <Typography variant="h6" fontWeight={"normal"}>
                       Yanto Basna Adikusnamara
                    </Typography>
                    <Typography variant="h6" fontWeight={"light"} color={'gray'}>
                        shendong@gmail.com
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
                    disabled
                    id="outlined-disabled"
                    label="Username"
                    /> </Box>
                   
                </BoxDetail>
                <BoxDetail sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}}}>
                    <Typography variant="h6" fontWeight={"bold"}>
                        E-mail
                    </Typography>
                    <Box sx={{ width: {xs:'100%', md: '50%'}, display: 'flex', justifyContent:'space-between'}}>
                       <TextField
                    fullWidth
                    disabled
                    id="outlined-disabled"
                    label="email"
                   
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
                    defaultValue="se56sgsjsjksk"
                    />
                    </Box>
                    
                </BoxDetail>
                <BoxDetail>
                    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-end'}}>
                        <Button variant="contained" sx={{marginRight: 5}} >Save</Button>
                        <Button variant="outlined">Cancel</Button>
                    </Box>
                    
                </BoxDetail>
                
            </BoxDetails>
            
            
        </Box>
    )
}