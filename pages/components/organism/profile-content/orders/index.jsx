import { Box, styled, Typography,Paper, Grid, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import Mess from "../../../molekuls/mess";
import Order from "../../../molekuls/order";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { useEffect } from "react";
import { useState } from "react";

const BoxStyled = styled(Box)({
    width: "100%",
    display: 'flex',
    maxHeight: '300vh',
    minHeight: '100vh',
    alignItems: 'center',
    padding: '10px',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    overflow: 'hidden',
});

export default function Orders(){
    const [dataOrders,setDataOrders] = useState([]);
    
    const handleGetCollection =async() =>{
        try {
            const querySnapshot = await getDocs(collection(db, "orders"));
            const user =JSON.parse(localStorage.getItem('user'));
            const useruid = user.uid;
            const newobj = [];
                querySnapshot.forEach((doc) => {
                const dataorder = doc.data();
                if(dataorder.uid === useruid){
                    newobj.push(dataorder);
                    
                    //setDataOrders(data);
                }
                       
        })
        setDataOrders(newobj);
        } catch (error) {
            console.log(error)
        }
     }
     const handleEmptyData = ()=>{
        if(dataOrders.length < 1){
            return(
                <Box sx={{width:'100%',textAlign:'center'}}>
                    <Typography variant="body2" sx={{fontSize:'18px'}}>Kamu Belum Pernah Melakukan Pembelian:)</Typography>
                    
                </Box>
            )
        }
     }
     useEffect(()=>{
        handleGetCollection();
        console.log(dataOrders)
     },[])
    return(
        <BoxStyled >
                {
                    dataOrders.map((order)=>{
                        const paydata = order.paydata;
                        const userdata = order.userData;
                      return  <Order key={order.id_order} customer={userdata.customer} data={order} title={order.title} price={order.price}
                      category={order.category} id={order.id_order} total={order.total} userdata={order.userData} paydata={order.paydata} wallet={paydata.wallet} status={paydata.status}/>
                    })
                }
                {
                    handleEmptyData()
                }
        </BoxStyled>
    )
}