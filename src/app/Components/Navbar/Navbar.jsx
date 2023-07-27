import React, { useState, useEffect } from 'react';
import Logo from '@/assets/Logo_Color.png';
import Image from 'next/image';
import { RiUserSmileLine, RiPagesLine, RiContactsLine } from 'react-icons/ri'
import { CloseButton, Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineHome, AiOutlinePlusCircle, AiOutlineClose } from 'react-icons/ai';
import { FaBuilding } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md'
import Link from 'next/link';
import { FiPlusCircle } from 'react-icons/fi';
import Head from 'next/head';
import LoginModal from '../LoginModal/LoginModal';
import AreaConverter from '../AreaConverter/AreaConverter';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
    // console.log(Logo)
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
    const handleOpenAcModal = () =>{ 
        setAreaConverterModal(true);
    };
    const handleCloseAcModal = () =>{ 
        setAreaConverterModal(false);
    };

    return (
        <>
            <header>
                <nav className={`navbar header navbar-expand-lg navbar-dark ${scroll > headerTop ? "is-sticky " : ""}`}>
                    <div className="container-fluid">
                        <div className="left-side">
                            <a className="navbar-brand" to="/">
                                <img src={Logo.src} alt="Logo" className="logo" />
                            </a>
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
                                            <Dropdown.Item> <Link href="/Pages/AllProperties">All Properties</Link></Dropdown.Item>
                                            <Dropdown.Item href="">Featured Properties</Dropdown.Item>
                                            <Dropdown.Item href="">Most Viewed Properties</Dropdown.Item>
                                            <Dropdown.Item href="">Nearby Cities Properties</Dropdown.Item>
                                            <Dropdown.Item href="">Most Favorites Properties</Dropdown.Item>
                                            <Dropdown.Item href="">List by Agents Properties</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Pages
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="">Subscription Plan</Dropdown.Item>
                                            <Dropdown.Item> <Link href="/Pages/Articles">Articles</Link></Dropdown.Item>
                                            <Dropdown.Item onClick={handleOpenAcModal}>Area Converter</Dropdown.Item>
                                            <Dropdown.Item href="">Terms & Condition</Dropdown.Item>
                                            <Dropdown.Item href="">Privacy Policy</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <li className="nav-item nav-link">
                                        Contact Us
                                    </li>
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
                                        <a className="nav-link" to="/" onClick={handleOpenModal}> <RiUserSmileLine size={20} className='icon' />
                                            Login/Register</a>
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

            <AreaConverter isOpen={areaconverterModal} onClose={handleCloseAcModal}/>
        </>
    );
};

export default Nav;
