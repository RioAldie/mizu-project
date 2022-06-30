import { Box,TextField} from "@mui/material";
import { useState } from "react";


 const StepOne = (props)=>{
    
    const {setCustomer,userdata,email,phone,adress} = props;
    
    return(
        <>
            <Box sx={{ width: 400, height: 400, display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column'}}>
            <TextField id="outlined-basic" label="Nama Lengkap" variant="outlined" onChange={(e) => setCustomer(e.target.value)} />
            <TextField
            disabled
            id="outlined-disabled"
            label= 'email'
            value={email}
            />
            <TextField disabled id="outlined-disabled" label="phone" value={phone} variant="outlined" />
            <TextField
            id="standard-multiline-static"
            label="Alamat"
            multiline
            rows={4}
            defaultValue={adress}
            variant="standard"
            />
            </Box>
        </>
    )
}

export default StepOne;