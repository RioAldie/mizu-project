import { Box,AppBar,Toolbar,styled,Avatar } from "@mui/material";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from 'next/image';
import MoreIcon from '@mui/icons-material/MoreVert';

export default function NavBar(){
    return(
            <AppBar position="sticky">
                <Toolbar>
                <Image src={"/image/logo-mizu.svg"} width={30} height={30}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                >
                    
                    Mizu
                </Typography>
                
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    </IconButton>
                    <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                    </IconButton>
                </Box>
                <Button variant="contained" sx={{ml: 2, display:{ xs: 'none', md: 'flex'}}}  >
                    <Avatar alt="Remy Sharp" sx={{ width: 34, height: 34 }} src="/image/avatar-2.png" />
                    <Typography sx={{ml: 2}}>
                      Yanto  
                    </Typography>
                </Button>

                <Box sx={{ display:{ xs: 'block', md: 'none'}}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 0, ml: 1 }}
                >
                    <MenuIcon />
                </IconButton>
                </Box>
                </Toolbar>
            </AppBar>
    )
}