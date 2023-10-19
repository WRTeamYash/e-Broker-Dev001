import React, { useState } from 'react'
import { Box, Divider, Drawer, IconButton, List } from '@mui/material'
import TheatersIcon from '@mui/icons-material/Theaters';
import AddHomeIcon from '@mui/icons-material/AddHome';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ebroker from '../../assets/eBrokerLogo.svg'
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const AdminDrawer = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
  return (
    <>
               <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#282F39",
                    height: "10vh"
                }}>
                    <Box sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",

                    }}>
                        {/* <Box component={Link}
                        to="/"> */}
                        <Image loading="lazy" src={ebroker.src} alt="" className='dashboard_logo'  width={200} height={200}/>
                        {/* </Box> */}
                        <IconButton onClick={handleDrawerClose} sx={{
                            position: 'absolute',
                            color: "#fff",
                            // background:"#fff",
                            right: "0",
                            fontSize: "30",
                            // width:"50px",
                        }}>
                            {theme.direction === 'rtl' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 30,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <DashboardIcon />

                            </ListItemIcon>
                            <ListItemText primary="My Advertisement" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
             
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 30,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <TheatersIcon />

                            </ListItemIcon>
                            <ListItemText primary="Properties" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 30,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <AddHomeIcon />

                            </ListItemIcon>
                            <ListItemText primary="Favorites" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
                
                <List>
                    <ListItem disablePadding sx={{ display: 'block', }}>
                        <ListItemButton
                            sx={{
                                minHeight: 30,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <FavoriteIcon />

                            </ListItemIcon>
                            <ListItemText primary="My Dashboard" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
    </>
  )
}

export default AdminDrawer
