import { Grid,Box,List,ListItem, ListItemIcon,ListItemText } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DiscountIcon from '@mui/icons-material/Discount';

export default function Category(){
    return(
            <Box sx={{width: 400, height: 600, display: 'flex', flexDirection: 'column',position: 'sticky',bgcolor: 'Background.default'}}>
            <List >
             
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"/>
                </ListItem>
             
            </List>
            </Box>
    )
}