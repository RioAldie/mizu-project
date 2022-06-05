import { Box,TextField, Typography,styled,Button, FormLabel,FormControl,Radio,RadioGroup,FormControlLabel } from "@mui/material";

 const StepOne = ()=>{
    return(
        <>
            <Box sx={{ width: 400, height: 400, display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
            <TextField id="outlined-basic" label="Nama Lengkap" variant="outlined" />
            <TextField
            disabled
            id="outlined-disabled"
            label="yantobasna@gmail.com"
            defaultValue="yantobasna@gmail.com"
            />
            <TextField disabled id="outlined-disabled" label="08218287721" variant="outlined" />
            <TextField
            id="standard-multiline-static"
            label="Alamat"
            multiline
            rows={4}
            defaultValue="jalan Jayabaya no 46 kota Kediri"
            variant="standard"
            />
            </Box>
        </>
    )
}

export default StepOne;