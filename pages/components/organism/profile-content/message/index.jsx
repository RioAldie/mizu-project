import { Box, styled, Typography,Paper } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Mess from "../../../molekuls/mess";

const BoxStyled = styled(Box)({
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
});
const PaperStyled = styled(Paper)({
    width: '90%',
    height: 80,

})
export default function Message(){
    return(
        <> 
             
            <BoxStyled sx={{display: 'flex', flexDirection: 'column',mt: 20,height:{xs: 1100, md: 900}}}>
            <Box sx={{height: 0}}>
                    <Typography variant="h5" fontWeight={"bold"}>
                        Pesan
                    </Typography>
                </Box>
                <Mess/>
                <Mess/>
                <Mess/>
                <Button size="small" sx={{mt: 5}}>
                    More
                </Button>
                
            </BoxStyled>
        </>
    )
}