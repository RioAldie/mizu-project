import { Box,Typography } from "@mui/material";
import CardProduct from "../../molekuls/card";



export default function Product(){
    return(
        <>
        <Typography variant="h4">Product</Typography>
        <Box sx={{ flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }} display={'flex'} p={0}>
           <CardProduct/>
        </Box>
        </>
    )
}