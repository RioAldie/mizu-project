import { Grid,Box,List,ListItem, ListItemIcon,ListItemText, Typography, Button, styled } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const ButtonStyled = styled(Button)({
  color: 'secondary'
})
export default function Category(){
    return(
            <Box sx={{width: 400, height: 600, display: 'flex', flexDirection: 'column',position: 'sticky',bgcolor: 'Background.default'}} mt={10}>
            <List >
                  <ListItem>
                      <Button sx={{color: 'gray'}}>
                        <ListItemIcon>
                        <WorkspacePremiumIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary="Premium"/> 
                      </Button>
                  </ListItem>
                <ListItem>
                    <Button sx={{color: 'gray'}}>
                         <ListItemIcon>
                    <DiscountIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Discount"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button sx={{color: 'gray'}}>
                         <ListItemIcon>
                    <LocalFireDepartmentIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="Hot Terlaris"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button sx={{color: 'gray'}}>
                         <ListItemIcon>
                    <CardGiftcardIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Voucher"/>
                    </Button>
                 
                </ListItem>
            </List>
            </Box>
    )
}