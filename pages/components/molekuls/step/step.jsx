import { Box,TextField, Typography,styled,Button, FormLabel,FormControl,Radio,RadioGroup,FormControlLabel } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export const StepOne = ()=>{
    return(
        <>
            <Box sx={{ width: 400, height: 400, display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
            <TextField id="outlined-basic" label="Nama Lengkap" variant="outlined" />
            <TextField
            disabled
            id="outlined-disabled"
            label="yantobasna@gmail.com"
            defaultValue="yantobasna@gmail.com"
            />
            <TextField disabled id="outlined-disabled" label="08218287721" variant="outlined" />
            <TextField
            id="standard-multiline-static"
            label="Alamat"
            multiline
            rows={4}
            defaultValue="jalan Jayabaya no 46 kota Kediri"
            variant="standard"
            />
            </Box>
        </>
    )
}
const BoxQuantity = styled(Button)({
    width: 25,
    height: 25,
    display: 'flex',
    backgroundColor: 'primary',
    alignItems: 'center',
    justifyContent: 'center'
    
})
const BoxStyled = styled(Box)({
    borderRadius: '10px',
    border: '#bfbfbf solid 3px'
})
const DivStyled = styled('div')({
    width: 260,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
})
export const StepTwo = ()=>{
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(10000)
    const handlePlus = ()=>{
        setQuantity(quantity + 1);
    }
    const handleMinus = ()=>{
        if(quantity>1){
          setQuantity(quantity - 1);  
        }
    }
    const handleTotal = ()=>{
        const price = 10000;
        setTotal(price * quantity);
    }
    useEffect(()=>{
        handleTotal();
    },[quantity])
    return(
        <>
            <BoxStyled sx={{ width: 400, height: 350, display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
                <Box sx={{ width: 400, height: 200,display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                    <Image src={'/image/galon-tiga.svg'} width="150" height={"150"}/>
                    <Box sx={{ width: 200, height: 150,display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
                        <Typography>fujion</Typography>
                        <Typography>IDR. 10.000</Typography>
                        <Typography>Premium</Typography>
                    </Box>
                    
                </Box>
                <Box sx={{ width: 400, height: 100,display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                 <Typography>Jumlah : </Typography> <DivStyled ><BoxQuantity onClick={(e)=>handleMinus()}>-</BoxQuantity> {quantity} <BoxQuantity  onClick={(e)=>handlePlus()}>+</BoxQuantity></DivStyled>   
                </Box>
                <Box sx={{ width: 400, height: 100,display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                 <Typography variant="h6">Total : </Typography> <DivStyled><Typography variant="h6">IDR {total}</Typography></DivStyled> 
                </Box>
                <Box sx={{width: 400, height: 200}}>
                
                </Box>
            </BoxStyled>
        </>
    )
}
export const StepThree = ()=>{
    return(
        <>
            <Box sx={{width: 400, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Box sx={{width: 400, height: 300, display: 'flex', flexDirection: 'column', border: 'solid 1px black'}}>
                    <Box sx={{width: 400, height: 100}}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Pilih Pembayaran</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <Box sx={{display: 'flex', flexDirection:'row', width: 100,height:50}}>
                                   <FormControlLabel value="dana" control={<Radio />} sx={{mr: 0}}/>
                                <Image src={'/image/dana-logo.svg'} width={50} height={20}/> 
                                </Box>
                                <Box sx={{display: 'flex', flexDirection:'row', width: 100,height:50}}>
                                <FormControlLabel value="gopay" control={<Radio />} sx={{mr: 0}}/>
                                <Image src={'/image/gopay-logo.svg'} width={50} height={20}/> 
                                </Box>
                                <Box sx={{display: 'flex', flexDirection:'row', width: 100,height:50}}>
                                <FormControlLabel value="paypal" control={<Radio />} sx={{mr: 0}}/>
                                <Image src={'/image/paypal-logo.svg'} width={50} height={20}/> 
                                </Box>

                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box sx={{width: 400, height: 200}}>
                     <Image src={'/image/qr-code.svg'} width={100} height={100}/>
                     <Typography variant="body2" sx={{fontSize: 10,}}>*Scan QR untuk melakukan pembayaran</Typography>
                    </Box>
                    <Box sx={{width: 400, height: 120}}>
                        <Button variant="contained">Rp 12.5000</Button>
                        <Typography variant="body2" sx={{fontSize: 8, mt: 2,color:'red'}}>*Pastikan Saldo wallet kamu sesuai</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export const StepDone = ()=>{
    return(
        <>
        <Box sx={{width: 400, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Box sx={{width: 400, height: 300, display: 'flex', flexDirection: 'column', border: 'solid 2px #002E74',borderRadius: 3,justifyContent: 'space-around'}}>
                    <Typography variant="h4">Thank You</Typography>
                    <Image src={'/image/buy-step.svg'} width={150} height={150}/>
                    <Typography variant="h6">Pesananmu Telah Diterima..</Typography>
                </Box>
            </Box>
        </>
    )
}