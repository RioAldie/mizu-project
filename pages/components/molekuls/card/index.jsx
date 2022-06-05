import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Rating } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StepOrder from '../../organism/step-order';
import { styled } from '@mui/system';

const ModalStyled = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})


export default function CardProduct(){
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <Card sx={{ maxWidth: 305, marginTop: 5 }} color="secondary">
      <CardMedia
        component="img"
        height="220"
        image="/image/galon-tiga.png"
        alt="green iguana"
        sx={{ mt: 5}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          fujion nomu
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Natural Water from Fuji Mountain Japan
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Box size="small">
        <Rating name="half-rating-read" defaultValue={4.6} precision={0.5} readOnly />
        </Box>
        <Box size="small">
            Rp.5000
        </Box>
        </Box>
        
        <Button size="medium" sx={{ml: 3, fontWeight: 'bold'}} onClick={(e)=> setOpen(true)}>
          <ShoppingCartIcon/>
            Buy
        </Button>
      </CardActions>
    </Card>
    <ModalStyled
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                
            <Box width={500} minHeight={550} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3} textAlign={"center"} sx={{display: 'flex',flexDirection: 'column', justifyContent:'space-evenly'}}>
                <StepOrder/>
            </Box>
           
        </ModalStyled>
    </>
  );
}
