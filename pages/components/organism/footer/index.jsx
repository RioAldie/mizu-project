import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';

export default function Footer(){
    return(
        <>
            <Box sx={{width: '100%', height: '100px',bgcolor:'#002E74',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Link href='/store'><a><Box sx={{display:'flex', flexDirection:'row'}}>
                <Image src={"/image/logo-mizu.svg"} width={30} height={30}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    color={'#ffff'}
                >
                    
                    Mizu
                </Typography></Box>
                </a></Link>
                <Typography color={'#ffff'}>
                    @Copyright Project RPL UNP Kediri 2022
                </Typography>
            </Box>
        </>
    )
}