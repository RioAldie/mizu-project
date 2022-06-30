import { Box,TextField, Typography,styled,Button, FormLabel,FormControl,Radio,RadioGroup,FormControlLabel } from "@mui/material";
import Image from "next/image";
import { useState,useEffect } from "react";
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
const BoxQuantity = styled(Button)({
    width: 25,
    height: 25,
    display: 'flex',
    backgroundColor: 'primary',
    alignItems: 'center',
    justifyContent: 'center'
    
})
const StepTwo = (props)=>{
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(1);
    const {title,price,category,setTotalPrice} = props;
    const handlePlus = ()=>{
        setQuantity(quantity + 1);
    }
    const handleMinus = ()=>{
        if(quantity>1){
          setQuantity(quantity - 1);  
        }
    }
    const handleTotal = ()=>{
        const totalPrice = price * quantity
        setTotal(price * quantity);
        setTotalPrice(totalPrice)
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
                        <Typography sx={{fontWeight:'bold'}}>{title}</Typography>
                        <Typography>Rp.{price}</Typography>
                        <Typography sx={{color:'red'}}>{category}</Typography>
                    </Box>
                    
                </Box>
                <Box sx={{ width: 400, height: 100,display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                 <Typography>Jumlah : </Typography> <DivStyled ><BoxQuantity onClick={(e)=>handleMinus()}>-</BoxQuantity> {quantity} <BoxQuantity  onClick={(e)=>handlePlus()}>+</BoxQuantity></DivStyled>   
                </Box>
                <Box sx={{ width: 400, height: 100,display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row',color:'#40BFFF'}}>
                 <Typography variant="h6">Total : </Typography> <DivStyled><Typography variant="h6">IDR {total}</Typography></DivStyled> 
                </Box>
                <Box sx={{width: 400, height: 200}}>
                
                </Box>
            </BoxStyled>
        </>
    )
}

export default StepTwo;