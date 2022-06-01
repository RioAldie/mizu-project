import { styled, Typography,Paper } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const PaperStyled = styled(Paper)({
    width: '90%',
    height: 80,
    marginTop: 5
})
export default function Mess(){
    return(
        <>
        <PaperStyled elevation={1} >
                <Card sx={{ minWidth: '100%' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                         Selamat Datang di Mizu
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Promo Khusus Pengguna Baru Diskon 10%
                        </Typography>
                        <Typography variant="body2">
                        Kami memiliki produk menarik untukmu khusus Promo hari ini
                        
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                </PaperStyled>
        </>
    )
}