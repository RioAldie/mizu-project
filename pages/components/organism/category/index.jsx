import { Grid,Box,List,ListItem, ListItemIcon,ListItemText, Typography } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export default function Category(){
    return(
            <Box sx={{width: 400, height: 600, display: 'flex', flexDirection: 'column',position: 'sticky',bgcolor: 'Background.default'}}>
            <List >
             
                <ListItem>
                  <ListItemIcon>
                    <WorkspacePremiumIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Premium"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DiscountIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Discount"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalFireDepartmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Produk Lokal"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CardGiftcardIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Voucher"/>
                </ListItem>
            </List>
            </Box>
    )
}