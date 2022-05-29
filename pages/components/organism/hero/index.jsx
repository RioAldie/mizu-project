import { Box,styled, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import Image from 'next/image';

const DivStyled = styled('div')({
    maxWidth: '265px',
    minWidth: '200px',
    height: '43px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '0px 4px 4px 0px #00000040',
    position: 'absolute',
    zIndex: '1000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
})
const SpanStyled = styled(Typography)({
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '18.75px',
    fontWeight: '400'
});
const ThumbBox = styled('div')({
    display: 'flex',
    position: 'absolute'
})
export default function Hero(){
    return (
        <>
            <Box sx={{display:'flex',alignItems:'center', justifyContent:'space-evenly',flexDirection: 'column', height:'100vh'}}>
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    <Typography variant="h2" color={'#002E74'}>Mizu Save Your  '</Typography><Typography variant="h2" color={'#0167FF'}> Smile :)</Typography>
                </Box>
                <Box sx={{ height:500}}>
                    <Image src={"/image/thum-1.png"} width={400} height={400}/>
                </Box>
                <DivStyled sx={{top: '371px',left:'695px'}}>
                    <SpanStyled sx={{color: '#7B7676'}}>100.000 +</SpanStyled>
                    <SpanStyled sx={{color: '#0167ff'}}>Pelanggan</SpanStyled>
                </DivStyled>
                <DivStyled sx={{top: '201px',left:'1095px'}}>
                    <SpanStyled sx={{color: '#7B7676'}}>100 +</SpanStyled>
                    <SpanStyled sx={{color: '#FF1B0D'}}>Produk Unggulan</SpanStyled>
                </DivStyled>
                <DivStyled sx={{top: '471px',left:'1055px'}}>
                    <SpanStyled sx={{color: '#7B7676'}}>40+</SpanStyled>
                    <SpanStyled sx={{color: '#5DE10B'}}>Depot Resmi</SpanStyled>
                </DivStyled>
                <ThumbBox sx={{top: '180px', left: '800px'}}>
                <Image src={'/image/thum-2.png'} width={100} height={100}/>
                </ThumbBox>
                <ThumbBox sx={{top: '170px', left: '1000px'}}>
                <Image src={'/image/thumb-3.png'} width={60} height={60}/>
                </ThumbBox>
                <ThumbBox sx={{top: '500px', left: '900px'}}>
                <Image src={'/image/thumb-4.png'} width={65} height={65}/>
                </ThumbBox>
            </Box>
        </>
    )
}