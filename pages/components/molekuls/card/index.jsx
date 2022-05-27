import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled,Rating } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StepOrder from '../../organism/step-order';


const DivStyled = styled('div')({
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    color: '#40BFFF',
    fontWeight: 'bold',
    fontSize: '20px'
})
const ButtonStyled = styled('Button')({
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: '#00003'
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center'
});

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
          fujion
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Natural Water from Fuji Mountain Japan
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <DivStyled size="small">
        <Rating name="half-rating-read" defaultValue={4.6} precision={0.5} readOnly />
        </DivStyled>
        <DivStyled size="small">
            Rp.5000
        </DivStyled>
        </Box>
        
        <Button size="medium" sx={{ml: 3, fontWeight: 'bold'}} onClick={(e)=> setOpen(true)}>
          <ShoppingCartIcon/>
            Buy
        </Button>
      </CardActions>
    </Card>
    <StyledModal
            open={open}
            onClose={(e) => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                
            <Box width={500} height={550} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3} textAlign={"center"} sx={{display: 'flex',flexDirection: 'column', justifyContent:'space-evenly'}}>
                <StepOrder/>
            </Box>
           
        </StyledModal>
    </>
  );
}
