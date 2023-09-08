'use client'
import React, { useState, useEffect } from 'react';
import Logo from '@/assets/Logo_Color.png';
import { RiUserSmileLine } from 'react-icons/ri'
import { CloseButton, Dropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import { FiPlusCircle } from 'react-icons/fi';
import LoginModal from '../LoginModal/LoginModal';
import AreaConverter from '../AreaConverter/AreaConverter';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { logoutSuccess, userSignUpData } from '@/store/reducer/authSlice';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-hot-toast';
import { settingsData } from '@/store/reducer/settingsSlice';
import { languageLoaded } from '@/store/reducer/languageSlice';
import { translate } from '@/utils';



const Nav = () => {
    const signupData = useSelector(userSignUpData);
    const settingData = useSelector(settingsData)
    const LanguageList = settingData && settingData.languages;
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [show, setShow] = useState(false);
    const [headerTop, setHeaderTop] = useState(0);
    const [scroll, setScroll] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const header = document.querySelector(".header");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleLanguageChange = (languageCode) => {
        // console.log(languageCode); // Log the updated languageCode directly

        languageLoaded(languageCode, "1", (response) => {
            // console.log(response)
            const currentLang = response && response.data.name
            console.log(currentLang)
            setSelectedLanguage(currentLang)
        },
            (error) => {
                console.log(error)
            })
    };

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const [showModal, setShowModal] = useState(false);
    const [areaconverterModal, setAreaConverterModal] = useState(false)
    const handleOpenModal = () => {
        setShow(false)
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleOpenAcModal = () => {
        setShow(false)
        setAreaConverterModal(true);
    };
    const handleCloseAcModal = () => {
        setAreaConverterModal(false);
    };


    const handleLogout = () => {
        confirmAlert({
            title: translate("logout"),
            message: translate("areYouSure"),
            buttons: [
                {
                    label: translate("yes"),
                    onClick: () => {
                        logoutSuccess()
                        toast.success(translate("logoutSuccess"))
                    }
                },
                {
                    label: translate("no"),
                    onClick: () => {
                        // Optionally, you can perform some action here if the user clicks "No"
                        toast.error(translate("logoutcancel"));
                    }
                }
            ]
        });
    };

    return (
        <>
            <header>
                <nav className={`navbar header navbar-expand-lg navbar-light ${scroll > headerTop ? "is-sticky " : ""}`}>
                    <div className="container">
                        <div className="left-side">
                            <Link className="navbar-brand" href="/">
                                <img src={Logo.src} alt="Logo" className="logo" />
                            </Link>
                            <span onClick={handleShow} id='hamburg'><GiHamburgerMenu size={36} /></span>
                        </div>

                        <div className="center-side">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="/">{translate("home")}</Link>
                                    </li>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                        {translate("properties")}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item ><Link href="/properties/all-properties/">{translate("allProperties")}</Link></Dropdown.Item>
                                            <Dropdown.Item><Link href="/featured-properties">{translate("featuredProp")}</Link></Dropdown.Item>
                                            <Dropdown.Item> <Link href="/most-viewed-properties">{translate("mostViewedProp")}</Link></Dropdown.Item>
                                            <Dropdown.Item> <Link href="/properties-nearby-city">{translate("nearbyCities")}</Link></Dropdown.Item>
                                            <Dropdown.Item><Link href="/mostfav-properties">{translate("mostFavProp")}</Link></Dropdown.Item>
                                            <Dropdown.Item><Link href="/listby-agents"></Link>{translate("listByAgents")}</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            {translate("pages")}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item><Link href="/subscription-plan">{translate("subscriptionPlan")}</Link></Dropdown.Item>
                                            <Dropdown.Item> <Link href="/articles">{translate("articles")}</Link></Dropdown.Item>
                                            <Dropdown.Item onClick={handleOpenAcModal}>{translate("areaConverter")}</Dropdown.Item>
                                            <Dropdown.Item><Link href='/terms&condition'>
                                               {translate("terms&condition")}
                                            </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item> <Link href="/privacy-policy">{translate("privacyPolicy")}</Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Link href="/contact-us" id='a-tags-link'>
                                        <li className="nav-item nav-link">
                                         {translate("contactUs")}
                                        </li>
                                    </Link>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about-us">{translate("aboutUs")}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                        {selectedLanguage ? selectedLanguage : 'Language'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu id='language' >
                                            {LanguageList && LanguageList.map((ele, index) => (
                                                <Dropdown.Item key={index} onClick={() => handleLanguageChange(ele.code)}>{ele.name}</Dropdown.Item>

                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <li className="nav-item">
                                        {
                                            // Check if signupData.data is null
                                            signupData?.data === null ? (
                                                <a className="nav-link" to="/" onClick={handleOpenModal}>
                                                    <RiUserSmileLine size={20} className='icon' />
                                                    {translate("login&Regiser")}
                                                </a>
                                            ) :
                                                // Check if mobile and firebase_id are present
                                                signupData?.data?.data.mobile && signupData?.data?.data.firebase_id && signupData?.data?.data.name === "" ? (
                                                    <span className="nav-link">{translate("welcmGuest")}</span>
                                                ) :
                                                    // If name is present, show "Welcome, {name}"
                                                    signupData?.data?.data.name ? (
                                                        <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-basic01">
                                                                <RiUserSmileLine size={20} className='icon01' />
                                                                {/* <Avatar size={16} src={signupData.data.data.profile}/> */}
                                                                {signupData.data.data.name}
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu id='language'>
                                                                <Dropdown.Item href="">{translate("dashboard")}</Dropdown.Item>
                                                                <Dropdown.Item onClick={handleLogout}>{translate("logout")}</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    ) : null // Handle any other cases or conditions here
                                        }

                                    </li>
                                    {signupData?.data?.data.name && settingData && (
                                        <li className="nav-item">
                                            <button className="btn" id="addbutton">
                                                <FiPlusCircle size={20} className='mx-2 add-nav-button' />
                                                {translate("addProp")}
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div>
                <Offcanvas show={show} onHide={handleClose} placement='end' scroll={false} backdrop={true} style={{
                    width: "90%"
                }}>
                    <Offcanvas.Header >
                        <Offcanvas.Title>
                            <span className='title-name'>eBroker</span>
                        </Offcanvas.Title>
                        <Offcanvas.Title>
                            <CloseButton onClick={handleClose} />

                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="mobile_nav">
                            <ul className="navbar-nav" id='mobile-ul'>
                                <li className="nav-item">

                                    <button className="nav-link" aria-current="page"> <Link className="nav-link" href="/" onClick={handleClose}>Home</Link> </button>
                                </li>
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Properties
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item > <Link href="/properties/all-properties/" onClick={handleClose}>All Properties</Link></Dropdown.Item>
                                        <Dropdown.Item><Link href="/featured-properties" onClick={handleClose}>Featured Properties</Link></Dropdown.Item>
                                        <Dropdown.Item> <Link href="/most-viewed-properties" onClick={handleClose}>Most Viewed Properties</Link></Dropdown.Item>
                                        <Dropdown.Item> <Link href="/properties-nearby-city" onClick={handleClose}>Nearby Cities Properties</Link></Dropdown.Item>
                                        <Dropdown.Item><Link href="/mostfav-properties" onClick={handleClose}>Most Favorites Properties </Link></Dropdown.Item>
                                        <Dropdown.Item><Link href="/listby-agents" onClick={handleClose}></Link>List by Agents</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>

                                    <Dropdown.Toggle id="dropdown-basic">
                                        Pages
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item><Link href="/subscription-plan" onClick={handleClose}>Subscription Plan</Link></Dropdown.Item>
                                        <Dropdown.Item> <Link href="/articles" onClick={handleClose}>Articles</Link></Dropdown.Item>
                                        <Dropdown.Item onClick={handleOpenAcModal}>Area Converter</Dropdown.Item>
                                        <Dropdown.Item><Link href='/terms&condition' onClick={handleClose}>
                                            Terms & Condition
                                        </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item> <Link href="/privacy-policy">Privacy Policy </Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <li className="nav-item">

                                    <button className="nav-link active" to="/" onClick={handleClose}> Contact Us</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" to="/" onClick={handleClose}>About Us</button>
                                </li>

                                <Dropdown id='mobile-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Language
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id='language'>
                                        {LanguageList?.map((ele, index) => (
                                            <Dropdown.Item href="" onClick={handleClose}>{ele.name}</Dropdown.Item>

                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <li className="nav-item">
                                    {
                                        // Check if signupData.data is null
                                        signupData?.data === null ? (
                                            <a className="nav-link" to="/" onClick={handleOpenModal}>
                                                <RiUserSmileLine size={20} className='icon' />
                                                Login/Register
                                            </a>
                                        ) :
                                            // Check if mobile and firebase_id are present
                                            signupData?.data?.data.mobile && signupData?.data?.data.firebase_id && signupData?.data?.data.name === "" ? (
                                                <span className="nav-link">Welcome, Guest</span>
                                            ) :
                                                // If name is present, show "Welcome, {name}"
                                                signupData?.data?.data.name ? (
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-basic01">
                                                            <RiUserSmileLine size={20} className='icon01' />
                                                            {/* <Avatar size={16} src={signupData.data.data.profile}/> */}
                                                            {signupData.data.data.name}
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu id='language'>
                                                            <Dropdown.Item href="">Dashboard</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                ) : null // Handle any other cases or conditions here
                                    }

                                </li>
                                <li className="nav-item">
                                    {signupData?.data?.data.name && ( // Check if the user is properly logged in
                                        <button className="btn" id="addbutton">
                                            <FiPlusCircle size={20} className='mx-2 add-nav-button' /> Add Property
                                        </button>
                                    )}
                                </li>
                            </ul>


                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <LoginModal isOpen={showModal} onClose={handleCloseModal} />

            <AreaConverter isOpen={areaconverterModal} onClose={handleCloseAcModal} />
        </>
    );
};

export default Nav;
