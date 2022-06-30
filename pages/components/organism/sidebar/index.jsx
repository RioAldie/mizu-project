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
import { useContext } from "react";
import { AuthCtx } from "../../../context/AuthContex";


export default function Sidebar(){
  const {isLogin,setIslogin} = useContext(AuthCtx);
  const handleLogout = ()=>{
    localStorage.removeItem('user');
    localStorage.clear();
    setIslogin(false)
  }
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
                      <Button sx={{color: '#002E74'}}>
                        <ListItemIcon>
                        <EmailIcon sx={{color: '#002E74'}} />
                        </ListItemIcon>
                        <ListItemText
                        primary="Pesan"/> 
                      </Button>
                  </ListItem>
                <ListItem>
                    <Button sx={{color: '#002E74'}}>
                         <ListItemIcon>
                    <LocalShippingIcon sx={{color: '#002E74'}} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Barang Dikirim"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button sx={{color: '#002E74'}}>
                         <ListItemIcon>
                    <WorkHistoryIcon sx={{color: '#002E74'}} />
                    </ListItemIcon>
                    <ListItemText
                        primary="riwayat order"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button sx={{color: '#002E74'}}>
                         <ListItemIcon>
                    <QuizIcon sx={{color: '#002E74'}} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Customer Service"/>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button sx={{color: 'red'}} onClick={()=> handleLogout()}>
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