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
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Pilih Pembayaran</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Dana" />
                        <FormControlLabel value="male" control={<Radio />} label="Gopay" />
                        <FormControlLabel value="other" control={<Radio />} label="Ovo" />
                    </RadioGroup>
                    </FormControl>
                </Box>
            </BoxStyled>
        </>
    )
}