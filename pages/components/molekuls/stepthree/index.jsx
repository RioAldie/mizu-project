import { Box,TextField, Typography,styled,Button, FormLabel,FormControl,Radio,RadioGroup,FormControlLabel } from "@mui/material";
import Image from "next/image";

export default function StepThree(){
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