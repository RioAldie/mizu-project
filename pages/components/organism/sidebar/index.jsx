import { Grid,Box,List,ListItem, ListItemIcon,ListItemText, Typography, Button, styled } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmailIcon from '@mui/icons-material/Email';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LogoutIcon from '@mui/icons-material/Logout';
import QuizIcon from '@mui/icons-material/Quiz';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const ButtonStyled = styled(Button)({
  color: 'secondary'
})
export default function Sidebar(){
    return(
            <Box sx={{width: 400, height: 600, display: 'flex', flexDirection: 'column',position: 'sticky',bgcolor: 'Background.default'}} mt={10}>
            <List >
                    <ListItem>
                      <Button sx={{color: '#002E74'}}>
                        <ListItemIcon>
                        <AccountBoxIcon sx={{color: '#002E74'}}/>
                        </ListItemIcon>
                        <ListItemText
                        primary="Data Profile"/> 
                      </Button>
                  </ListItem>
                  <ListItem>
                      <Button sx={{color: 'gray'}}>
                        <ListItemIcon>
                        <EmailIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary="Pesan"/> 
                      </Button>
                  </ListItem>
                <ListItem>
                    <Button sx={{color: 'gray'}}>
                         <ListItemIcon>
                    <LocalShippingIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Barang Dikirim"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button sx={{color: 'gray'}}>
                         <ListItemIcon>
                    <WorkHistoryIcon />
                    </ListItemIcon>
                    <ListItemText
                        primary="riwayat order"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button sx={{color: 'gray'}}>
                         <ListItemIcon>
                    <QuizIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Customer Service"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button sx={{color: 'red'}}>
                         <ListItemIcon>
                    <LogoutIcon sx={{color: 'red'}}/>
                  </ListItemIcon>
                  <ListItemText
                    primary="keluar"/>
                    </Button>    
                </ListItem>
            </List>
            </Box>
    )
}