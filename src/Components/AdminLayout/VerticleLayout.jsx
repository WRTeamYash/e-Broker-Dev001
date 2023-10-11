import React, { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AdminHeader from './AdminHeader.jsx'
import AdminFooter from './AdminFooter.jsx'
import ebroker from '../../assets/eBrokerLogo.svg'
import Link from 'next/link';
import TagFacesOutlinedIcon from '@mui/icons-material/TagFacesOutlined';
import { translate } from '@/utils/index.js';
import { logoutSuccess } from '@/store/reducer/authSlice.js';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router.js';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { RiAdvertisementLine } from 'react-icons/ri';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#282F39",
    height: "12vh",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
export default function VerticleLayout(props) {

    const { children } = props

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const router = useRouter();
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#087c7c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'yes! Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logoutSuccess();
                toast.success(translate("logoutSuccess"));
                router.push('/')

            } else {
                toast.error(translate("logoutcancel"));
            }
        });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <AppBar position="fixed" open={open} sx={{
                background: "#fff",
                height: "10vh"
            }}>
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "10vh"
                }}>
                    <IconButton
                        color='inherit'
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            color: "#087c7c",

                            marginRight: 5,

                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="container">
                        <AdminHeader />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}  >
                <DrawerHeader sx={{
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
                        <Link href="/">
                        <img src={ebroker.src} alt="" className='dashboard_logo' />
                        </Link>
                        <IconButton onClick={handleDrawerClose} className='drawer_button' sx={{
                            fontSize: "30",
                            // width:"50px",
                        }}>
                            {theme.direction === 'rtl' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                        </IconButton>
                    </Box>
                </DrawerHeader>
                <Divider />
                <List className='drawer_list'>
                    <ListItem disablePadding sx={{ display: 'block' }} className='drawer_list_item'>
                        <Link href="/user/dashboard">
                            <ListItemButton
                                sx={{
                                    minHeight: 30,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    className='drawer_list_icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',

                                    }}
                                >
                                    <DashboardOutlinedIcon />

                                </ListItemIcon>
                                <ListItemText primary="My Dashboard" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }} className='drawer_list_item'>
                        <Link href="/user/advertisement">
                            <ListItemButton
                                sx={{
                                    minHeight: 30,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    className='drawer_list_icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',

                                    }}
                                >
                                    <RiAdvertisementLine size={23}/>

                                </ListItemIcon>
                                <ListItemText primary="My Advertisement" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Link href="/user/properties">
                        <ListItem disablePadding sx={{ display: 'block' }} className='drawer_list_item'>
                            <ListItemButton
                                sx={{
                                    minHeight: 30,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,

                                }}
                            >
                                <ListItemIcon
                                    className='drawer_list_icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <AddHomeOutlinedIcon />

                                </ListItemIcon>
                                <ListItemText primary="Properties" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/user/favorites-properties">
                        <ListItem disablePadding sx={{ display: 'block' }} className='drawer_list_item'>
                            <ListItemButton
                                sx={{
                                    minHeight: 30,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    className='drawer_list_icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <FavoriteBorderOutlinedIcon />

                                </ListItemIcon>
                                <ListItemText primary="Favorites" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/user/profile">
                        <ListItem disablePadding sx={{ display: 'block' }} className='drawer_list_item'>
                            <ListItemButton
                                sx={{
                                    minHeight: 30,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    className='drawer_list_icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <TagFacesOutlinedIcon />

                                </ListItemIcon>
                                <ListItemText primary="My Profile" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/user/subscription">
                        <ListItem disablePadding sx={{ display: 'block' }} className='drawer_list_item'>
                            <ListItemButton
                                sx={{
                                    minHeight: 30,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    className='drawer_list_icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PaidOutlinedIcon />

                                </ListItemIcon>
                                <ListItemText primary="Subscription" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link href="/user/transaction-history">
                        <ListItem disablePadding sx={{ display: 'block' }} className='drawer_list_item'>
                            <ListItemButton
                                sx={{
                                    minHeight: 30,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    className='drawer_list_icon'
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <ReceiptIcon />

                                </ListItemIcon>
                                <ListItemText primary="Transaction History" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <ListItem disablePadding sx={{ display: 'block' }} className='drawer_list_item'>
                        <ListItemButton
                            onClick={handleLogout}
                            sx={{
                                minHeight: 30,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                className='drawer_list_icon'
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <ExitToAppIcon />

                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>


            <Box component="main" sx={{ flexGrow: 1, overflowX: "hidden", marginBottom:"100px" }}>
                <DrawerHeader sx={{
                    background: "#f5f5f5",
                }} />


                {children}

            </Box>

            <AppBar position="fixed" open={open} sx={{
                background: "#fff",
                top: "auto",
                bottom: "0",
            }}>
                <Toolbar sx={{
                    display: "flex",
                    alignItems: "center",

                }}>

                    <AdminFooter />
                </Toolbar>
            </AppBar>
        </Box>

    );
}
