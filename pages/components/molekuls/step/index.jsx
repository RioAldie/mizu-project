import { Box,TextField, Typography,styled,Button, FormLabel,FormControl,Radio,RadioGroup,FormControlLabel } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";


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


export default function StepDone(){
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