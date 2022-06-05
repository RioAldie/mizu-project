import { Box,AppBar,Toolbar,styled,Avatar, Paper, MenuList } from "@mui/material";
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
import { useState } from "react";
import { Fullscreen } from "@mui/icons-material";
import Link from 'next/link'

export default function NavBar(){
    const [open, setOpen] = useState(false);
    return(
            <AppBar position="sticky">
                <Toolbar>
                <Link href='/store'><a><Box sx={{display:'flex', flexDirection:'row'}}>
                <Image src={"/image/logo-mizu.svg"} width={30} height={30}/>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                >
                    
                    Mizu
                </Typography></Box>
                </a></Link>
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
                <Link href="/profile"><a >
                <Button variant="contained" sx={{ml: 2, display:{ xs: 'none', md: 'flex'}}}  >
                    <Avatar alt="Remy Sharp" sx={{ width: 34, height: 34 }} src="/image/avatar-2.png" />
                    <Typography sx={{ml: 2}}>
                      Yanto  
                    </Typography>
                </Button>
                </a></Link>
                <Box sx={{ display:{ xs: 'block', md: 'none'}}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 0, ml: 1 }}
                    onClick={(e)=> setOpen(true)}
                >
                    <MenuIcon/>
                </IconButton>
                </Box>
                </Toolbar>
                <Paper>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e)=> setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    sx={{width: 300}}
                >
                    <MenuItem >Home</MenuItem>
                    <MenuItem >Katalog</MenuItem>
                    <MenuItem >About</MenuItem>
                    <MenuItem >Contact</MenuItem>
                    </Menu>
      </Paper>
            </AppBar>
    )
}