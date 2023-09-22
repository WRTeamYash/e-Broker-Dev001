import { Badge, Box, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreIcon from '@mui/icons-material/MoreVert';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { store } from '@/store/store';
import { settingsData } from '@/store/reducer/settingsSlice';
import { useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { RiUserSmileLine } from 'react-icons/ri';
import { FiPlusCircle } from 'react-icons/fi';
import { userSignUpData } from '@/store/reducer/authSlice';
import { languageLoaded } from '@/store/reducer/languageSlice';
import { translate } from '@/utils';



const AdminHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const settingData = useSelector(settingsData)
    const signupData = useSelector(userSignUpData);
    const LanguageList = settingData && settingData.languages;
    const [selectedLanguage, setSelectedLanguage] = useState();
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const language = store.getState().Language.languages
    // console.log(language.rtl)
    useEffect(() => {
        if (language && language.rtl === 1) {
            document.documentElement.dir = "rtl";
            // console.log(document.documentElement.dir)
        } else {
            document.documentElement.dir = "ltr";
            // console.log(document.documentElement.dir)

        }
    }, [language]);
    const handleLanguageChange = (languageCode) => {
        // console.log(languageCode); // Log the updated languageCode directly

        languageLoaded(languageCode, "1", (response) => {
            // console.log(response)
            const currentLang = response && response.data.name
            // console.log(currentLang)
            setSelectedLanguage(currentLang)
        },
            (error) => {
                console.log(error)
            })
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">

                    <GTranslateIcon />

                </IconButton>
                <Dropdown id='dropdown'>
                    <Dropdown.Toggle id="dropdown-basic-dashboard">
                        {selectedLanguage ? selectedLanguage : 'Language'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu id='language' >
                        {LanguageList && LanguageList.map((ele, index) => (
                            <Dropdown.Item key={index} onClick={() => handleLanguageChange(ele.code)}>{ele.name}</Dropdown.Item>

                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </MenuItem>
            <MenuItem >
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} slotProps={{
                        root: { className: 'CustomBadge' },
                        badge: { className: 'CustomBadge--badge' },
                    }}>
                        <NotificationsNoneOutlinedIcon />
                    </Badge>
                </IconButton>
                <span style={{ color: "#000" }}>Notifications</span>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AddCircleOutlineIcon />
                </IconButton>
                <span style={{ color: "#000" }}>
                    {translate("addProp")}
                </span>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>

                <Toolbar>
                    <Box sx={{ flexGrow: 1, color: "#000" }} />
                    <Box sx={{ display: {xs:'none',sm: 'none', md: 'none', lg: 'flex' }, alignItems: "center" }}>

                        <Dropdown id='dropdown'>
                            <Dropdown.Toggle id="dropdown-basic-dashboard">
                                {selectedLanguage ? selectedLanguage : 'Language'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu id='language' >
                                {LanguageList && LanguageList.map((ele, index) => (
                                    <Dropdown.Item key={index} onClick={() => handleLanguageChange(ele.code)}>{ele.name}</Dropdown.Item>

                                ))}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Box>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                sx={{
                                    background: "#f5f5f5",
                                    color: "#000",
                                    borderRadius: "12px",
                                    marginRight: "10px"
                                }}
                            >
                                <Badge badgeContent={17} slotProps={{
                                    root: { className: 'CustomBadge' },
                                    badge: { className: 'CustomBadge--badge' },
                                }}>
                                    <NotificationsNoneOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Box>
                            <button className="btn" id="dashboard_add">
                                <FiPlusCircle size={20} className='mx-2 add-nav-button' />
                                {translate("addProp")}
                            </button>

                        </Box>



                    </Box>
                    <Box sx={{ display: { md: 'flex', lg: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="#000"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>

                {renderMobileMenu}

            </Box>
        </>
    )
}

export default AdminHeader
