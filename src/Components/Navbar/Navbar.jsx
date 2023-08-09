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
import {  useSelector } from 'react-redux';
import {  logoutSuccess, userSignUpData } from '@/store/reducer/authSlice';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-hot-toast';


const Nav = () => {
    const signupData = useSelector(userSignUpData);
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
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const [showModal, setShowModal] = useState(false);
    const [areaconverterModal, setAreaConverterModal] = useState(false)
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleOpenAcModal = () => {
        setAreaConverterModal(true);
    };
    const handleCloseAcModal = () => {
        setAreaConverterModal(false);
    };


    const handleLogout = () => {
        confirmAlert({
            title: "Logout!",
            message: "Are You sure !",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        logoutSuccess()
                        toast.success("Logout Successfully") 
                    }
                },
                {
                    label: "No",
                    onClick: () => {
                        // Optionally, you can perform some action here if the user clicks "No"
                        toast.error("Logout Cancelled.");
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
                                        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                    </li>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Properties
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item> <Link href="/all-properties">All Properties</Link></Dropdown.Item>
                                            <Dropdown.Item><Link href="/featured-properties">Featured Properties</Link></Dropdown.Item>
                                            <Dropdown.Item> <Link href="/most-viewed-properties">Most Viewed Properties</Link></Dropdown.Item>
                                            <Dropdown.Item> <Link href="/properties-nearby-city">Nearby Cities Properties</Link></Dropdown.Item>
                                            <Dropdown.Item><Link href="/mostfav-properties">Most Favorites Properties </Link></Dropdown.Item>
                                            <Dropdown.Item><Link href="/listby-agents"></Link>List by Agents</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Pages
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item><Link href="subscription-plan">Subscription Plan</Link></Dropdown.Item>
                                            <Dropdown.Item> <Link href="/articles">Articles</Link></Dropdown.Item>
                                            <Dropdown.Item onClick={handleOpenAcModal}>Area Converter</Dropdown.Item>
                                            <Dropdown.Item href='/terms&condition'>Terms & Condition </Dropdown.Item>
                                            <Dropdown.Item> <Link href="/privacy-policy">Privacy Policy </Link></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Link href="/contact-us" id='a-tags-link'>
                                        <li className="nav-item nav-link">
                                            Contact Us
                                        </li>
                                    </Link>
                                    <li className="nav-item">
                                        <a className="nav-link " to="/">About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Language
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu id='language'>
                                            <Dropdown.Item href="">English</Dropdown.Item>
                                            <Dropdown.Item href="">Arabic</Dropdown.Item>
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
                                        <button className="btn" id="addbutton"><FiPlusCircle size={20} className='mx-2 add-nav-button' /> Add Property</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <MobileNav show={handleShow} onClose={handleClose} /> */}

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
                            {/* <span className='title-icon' onClick={handleClose}><AiOutlineClose size={24} /></span> */}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="mobile_nav">
                            <ul className="navbar-nav" id='mobile-ul'>
                                <li className="nav-item">
                                    {/* <div className='mobile-nav-buttons'>
              <AiOutlineHome size={24} /> */}
                                    <button className="nav-link" aria-current="page"> <Link className="nav-link" href="/" onClick={handleClose}>Home</Link> </button>
                                    {/* </div> */}
                                </li>
                                <Dropdown>
                                    {/* <div className='mobile-nav-dropdown'>
              <FaBuilding size={22} className='' /> */}
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Properties
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item> <Link href="/Pages/AllProperties" onClick={handleClose}>All Properties</Link></Dropdown.Item>
                                        <Dropdown.Item href="">Featured Properties</Dropdown.Item>
                                        <Dropdown.Item href="">Most Viewed Properties</Dropdown.Item>
                                        <Dropdown.Item href="">Nearby Cities Properties</Dropdown.Item>
                                        <Dropdown.Item href="">Most Favorites Properties</Dropdown.Item>
                                        <Dropdown.Item href="">List by Agents Properties</Dropdown.Item>
                                    </Dropdown.Menu>
                                    {/* </div> */}
                                </Dropdown>

                                <Dropdown>
                                    {/* <div className='mobile-nav-dropdown'>
              <RiPagesLine size={22} /> */}
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Pages
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">All Properties</Dropdown.Item>
                                        <Dropdown.Item href="">Featured Properties</Dropdown.Item>
                                        <Dropdown.Item href="">Most Viewed Properties</Dropdown.Item>
                                        <Dropdown.Item href="">Nearby Cities Properties</Dropdown.Item>
                                        <Dropdown.Item href="">Most Favorites Properties</Dropdown.Item>
                                        <Dropdown.Item href="">List by Agents Properties</Dropdown.Item>
                                    </Dropdown.Menu>
                                    {/* </div> */}
                                </Dropdown>
                                <li className="nav-item">
                                    {/* <div className='mobile-nav-buttons'>
              <RiContactsLine size={20} c /> */}
                                    <button className="nav-link active" to="/">  Contact Us</button>
                                    {/* </div> */}
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active" to="/">About Us</button>
                                </li>
                                {/* </ul>
          <ul className="navbar-nav ml-auto"> */}
                                <Dropdown id='mobile-dropdown'>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {/* <MdLanguage size={20} className='icon' /> */}
                                        Language
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu id='language'>
                                        <Dropdown.Item href="">English</Dropdown.Item>
                                        <Dropdown.Item href="">Arebic</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <li className="nav-item">
                                    <a className="nav-link active" to="/">
                                        {/* <RiUserSmileLine size={20} className='icon' /> */}
                                        Login/Register</a>
                                </li>
                                <li className="nav-item">
                                    <button className="" id="addbutton-mobile">
                                        {/* <AiOutlinePlusCircle size={20} className='icon' /> */}
                                        Add Property</button>
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
