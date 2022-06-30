import { styled, Typography,Paper, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BlockIcon from '@mui/icons-material/Block';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from "next/image";
import { useState } from "react";

const StatusComponent = (props)=>{
    const {status} = props;
    if(status === 'decline'){
        return(
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',border: '2px solid #cc3300',p:'3px',borderRadius:'5px'}}>
            <BlockIcon sx={{color:"#cc3300"}}/>
            <Typography variant="body2" sx={{fontSize:'16px',fontWeight:'400'}} color="#cc3300">Ditolak</Typography>
            </Box>
        )
    }
    if(status === 'accept'){
        return(
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',border: '2px solid #339900',p:'3px',borderRadius:'5px'}}>
            <AssignmentTurnedInIcon sx={{color:"#339900"}}/>
            <Typography variant="body2" sx={{fontSize:'16px',fontWeight:'400'}} color="#339900">Berhasil</Typography>
            </Box>
        )
    }
    if(status === 'pending'){
        return(
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',border: '2px solid #F2AE00',p:'3px',borderRadius:'5px',bgcolor:'rgba(237, 242, 0, 0.10)'}}>
            <AccessTimeIcon sx={{color:"#F2AE00"}}/>
            <Typography variant="body2" sx={{fontSize:'16px',fontWeight:'400'}} color="#F2AE00">Pending</Typography>
        </Box>
     )
    }
    
}
const PaymentComp = (props) =>{
    const {wallet} = props;
    if(wallet === 'paypal'){
        return <Image src={'/image/paypal-logo.svg'} width={70} height={40}/>;
    }
    if(wallet === 'dana'){
        return <Image src={'/image/dana-logo.svg'} width={70} height={40}/>;
    }
    if(wallet === 'gopay'){
        return  <Image src={'/image/gopay-logo.svg'} width={70} height={40}/>;
    }
}
export default function Order(props){

    const {data,userData,paydata,wallet,status,customer,title,price,category,total,id } = props;
   
    return(
        <>
      
                <Card sx={{ minWidth:{ md:'80%',xs:'100%'}, display:'flex', flexDirection:{xs: 'column', md: 'row'},mt: '15px',alignItems:'center',justifyContent:'center'}}>
                    <CardContent>
                        <Box sx={{width: '200px',height:'40px',display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Typography variant="body2" sx={{fontSize:'16px',fontWeight:'600'}}>Status :</Typography>
                            <StatusComponent status={status}/>
                        </Box>
                    
                        <Box sx={{ width: {xs: '100%', md: 400}, minHeight: 200,display: 'flex', justifyContent: 'space-evenly', flexDirection:{xs: 'column', md: 'row'},mt: '10px'}}>
                            <Image src={'/image/galon-tiga.svg'} width="150" height={"150"}/>
                            <Box sx={{ width: 200, height: 150,display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
                                <Typography variant="body2" sx={{fontSize:'18px',fontWeight:'bold',color:'#002E74'}}>{title}</Typography>
                                <Typography variant="body2" sx={{fontSize:'18px',fontWeight:'bold',color:'#40BFFF'}}>Rp.{price}</Typography>
                                <Typography variant="body2" sx={{fontSize:'18px',fontWeight:'bold',color:'red'}}>{category}</Typography>
                            </Box>
                            
                        </Box>
                        
                    </CardContent>
                    <CardContent>
                    <Box sx={{ width: {xs: '100%', md: 400}, minHeight: 200,display: 'flex', justifyContent: 'space-evenly', flexDirection:'column',mt: '10px'}}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {id}
                        </Typography>
                        <Typography variant="body2" sx={{fontSize:'18px',fontWeight:'bold',color:'#002E74'}}>Costumer : {customer}</Typography>
                        <Box sx={{minWidth:'150px',maxWidth:'200px',height:'40px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Typography variant="body2" sx={{fontSize:'18px',fontWeight:'bold',color:'#002E74'}}>Payment : </Typography>
                            <PaymentComp wallet={wallet}/>
                        </Box>
                        
                        <Typography variant="body2" sx={{fontSize:'18px',fontWeight:'bold',color:'#40BFFF'}}>Nominal Transfer: IDR {total}</Typography>
                    </Box>
                    </CardContent>
                </Card>
             
        </>
    )
}