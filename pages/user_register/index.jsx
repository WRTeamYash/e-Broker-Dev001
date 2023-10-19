
import React, { useEffect, useRef, useState } from 'react';
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import { BiCurrentLocation } from 'react-icons/bi';
import Location from '@/Components/Location/Location';
import registerimg from '../../src/assets/Images/register.png'
import { useRouter } from 'next/router';
import { loadUpdateData, signupLoaded, userSignUpData } from '../../src/store/reducer/authSlice'; // Update the import path as needed
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { UpdateProfileApi } from '@/store/actions/campaign';
import { AiOutlineCamera } from 'react-icons/ai';
import dummyimg from "../../src/assets/Images/user_profile.png"
import { languageData } from '@/store/reducer/languageSlice';
import { translate } from '@/utils';
import Layout from '@/Components/Layout/Layout';
import LocationSearchBox from '@/Components/Location/LocationSearchBox';
import Image from 'next/image'



const index = () => {
    const navigate = useRouter()
    const signupData = useSelector(userSignUpData)
    // console.log("signup data", signupData)

    const navigateToHome = () => {
        navigate.push("/");
    };
    if (signupData === null) {
        // console.log("test")
        navigateToHome();
    }
    const [showCurrentLoc, setShowCurrentLoc] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null)
    const fileInputRef = useRef(null);

    const [uploadedImage, setUploadedImage] = useState(null);



    const lang = useSelector(languageData)
    // console.log("languageData",lang)
    // useSelector(languageData)  
    useEffect(() => {
        // console.log("render")
    }, [lang]);
    const handleOpenLocModal = () => {
        // onClose()
        setShowCurrentLoc(true)
    }
    const handleCloseLocModal = () => {
        setShowCurrentLoc(false)
    }
    const handleSelectLocation = (location) => {
        console.log('Selected Location:', location);
        setSelectedLocation(location);
    };
    const modalStyle = {
        display: showCurrentLoc ? 'none' : 'block',
    };
    const handleUploadButtonClick = () => {
        fileInputRef.current.click(); // Trigger the file input click event
    };
    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        console.log(file)
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // const imageBlob = new Blob([e.target.result], { type: file.type });
                // console.log(imageBlob);
                setImage(file);
                setUploadedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmitInfo = (e) => {
        e.preventDefault();
        UpdateProfileApi(
            signupData.data.data.id,
            username,
            email,
            signupData.data.data.mobile,
            "3",
            address,
            signupData.data.data.firebase_id,
            "mobile",
            image,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            (res) => {
                // console.log(res)
                // console.log(res.message)
                toast.success(res.message)
                loadUpdateData(res.data)
                navigate.push("/")
            },
            (err) => {
                toast.error(err.message)
                // console.log(err)
            })
    };
    const getImgData = () => {
        const files = document.getElementById("choose-file").files[0];
        const imgPreview = document.getElementById("img-preview");

        if (files) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(files);
            fileReader.addEventListener("load", function () {
                imgPreview.style.display = "block";
                imgPreview.innerHTML = ''; // Clear existing content
                const imgElement = document.createElement("img");
                imgElement.src = this.result;
                imgPreview.appendChild(imgElement);
            });
        }
    };

    return (
        <Layout>
            <Breadcrumb title={translate("basicInfo")} />
            <section id='user_register'>
                <div className="container">
                    <div className="row" id='register_main_card'>
                        {/* <div className="col-sm-12 col-md-4">
                            <div className='register_side_img_div'>
                                <Image loading="lazy" src={registerimg.src} alt="" className='register_img' />
                            </div>
                        </div> */}
                        <div className="col-sm-12 col-md-6" >

                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        {translate("addInfo")}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form action="">
                                        <div className='form_all_fields'>
                                            <div className="row">
                                            <div className="col-sm-12">
                                                <div className="add_profile_div">
                                                    <div className="image_div">
                                                        <Image loading="lazy" src={uploadedImage || dummyimg.src} alt=""  width={200} height={200}/>
                                                    </div>
                                                    <div className="add_profile">
                                                        <input
                                                            type="file"
                                                            accept="image/jpeg, image/png"
                                                            id="add_img"
                                                            ref={fileInputRef}
                                                            style={{ display: 'none' }}
                                                            onChange={handleImageUpload}
                                                        />
                                                        <button type="button" onClick={handleUploadButtonClick}>{translate("uploadImg")}</button>

                                                        <p>{translate("Note:")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                                {/* <div className="col-sm-12 col-md-6">
                                                    <div id="img-preview"></div>
                                                </div> */}
                                                <div className="col-sm-12 col-md-6">
                                                    <div className='user_fields'>
                                                        <span>{translate("userName")}</span>
                                                        <input type="text" name="uname" placeholder='Enter Your Name Please' value={username} onChange={(e) => setUsername(e.target.value)
                                                        }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div className='user_fields'>
                                                        <span>{translate("email")}</span>
                                                        <input type="email" name="email" placeholder='Enter Your Email Please' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-12">
                                                    <div className='user_fields'>
                                                        <span>{translate("location")}</span>
                                                        {/* <div className='current_loc_div' onClick={handleOpenLocModal}>
                                                            <BiCurrentLocation size={30} className='current_loc' />
                                                            <span>{translate("selectYourCurrentLocation")}</span>
                                                        </div>
                                                        {selectedLocation && (
                                                            <input
                                                                type='text'
                                                                value={selectedLocation.formatted_address}
                                                                readOnly
                                                            />
                                                        )} */}

                                                        <LocationSearchBox onLocationSelected={handleSelectLocation} />
                                                    </div>

                                                </div>
                                                <div className="col-sm-12 col-md-12">
                                                    <div className='user_fields'>
                                                        <span>{translate("address")}</span>
                                                        <textarea rows={4} className="current_address"
                                                            placeholder='Enetr address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className='basic_submit'>
                                        <button onClick={handleSubmitInfo}>
                                            {translate("submit")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            {showCurrentLoc &&
                <Location isOpen={true} onClose={handleCloseLocModal} onSelectLocation={handleSelectLocation} />
            }
        </Layout>
    )
}

export default index
