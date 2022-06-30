import { Box,Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { DataProductMizu } from "../../../utils/data";
import CardProduct from "../../molekuls/card";


// const setDataProduct = (data) =>{
//     return (
        
//                 data.map((product)=>{
//                     <CardProduct key={product.id} title={product.title} body={product.body} price={product.price}/>
//                 })
//     )
// }
export default function Product(){
    const DataDefault = DataProductMizu();

   
    return(
        <>
        <Typography variant="h4">Product</Typography>
        <Box sx={{ flexGrow: 1, flexWrap: 'wrap', justifyContent: 'space-evenly' }} display={'flex'} p={0}>
            
           {
            DataDefault.map((product)=>{
               return <CardProduct key={product.id} title={product.title} body={product.body} price={product.price} category={product.category} id={product.id}/>
            })
           }
           
        </Box>
        </>
    )
}