import { Box } from "@mui/material";
import CardProduct from "../../molekuls/card";


export default function Product(){
    return(
        <>
        <Box sx={{ flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }} display={'flex'} p={1}>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            
        </Box>
        </>
    )
}