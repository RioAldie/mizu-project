import { Box } from "@mui/material";
import Image from 'next/image';

export default function Banner (){
    return(
        <Box sx={{ display:{xs: 'none', md: 'block'}}} p={0}>
            <Image src={'/image/banner-2.png'} width={1600} height={700}/>
        </Box>
    )
}