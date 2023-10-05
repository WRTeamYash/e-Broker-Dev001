import React, { useState } from 'react';
import VerticleLayout from '@/Components/AdminLayout/VerticleLayout';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { settingsData } from '@/store/reducer/settingsSlice'
import LocationSearchBox from '@/Components/Location/LocationSearchBox';
import { UpdateProfileApi } from '@/store/actions/campaign';
import { loadUpdateData, loadUpdateUserData } from '@/store/reducer/authSlice';
import { useRouter } from 'next/router';


const Index = () => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const [updateUserProfileData, setUpdateUserProfileData] = useState (null)
    const userData =  useSelector((state) => state.User_signup);
    const userProfileData = userData.data.data
    const navigate = useRouter()
    const [formData, setFormData] = useState({
        fullName: userProfileData.name,
        email: userProfileData.email,
        phoneNumber: userProfileData.mobile,
        address: userProfileData.address,
        aboutMe: userProfileData.about_me,
        facebook: userProfileData.facebook_id,
        instagram: userProfileData.instagram_id,
        pintrest: userProfileData.pintrest_id,
        twiiter: userProfileData.twiiter_id,
        profileImage: userProfileData.profile,
    });
    const fileInputRef = useRef(null);
    
    
    const DummyImgData = useSelector(settingsData)
    const PlaceHolderImg = DummyImgData?.img_placeholder
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result);
                const imageBlob = new Blob([e.target.result], { type: file.type });
                setFormData({
                    ...formData,
                    profileImage: imageBlob  // Set profileImage property
                });
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleUploadButtonClick = () => {
        fileInputRef.current.click(); // Trigger the file input click event
    };
    
    const handleLocationSelected = (locationData) => {
        setFormData({
            ...formData,
            selectedLocation: locationData,
        });
        console.log(locationData)
    };
    
    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setFormData({ ...formData, phoneNumber: value });
        }
    };
    
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    // console.log(formData.selectedLocation.lat)
    const handleUpdateProfile = (e) => {
        e.preventDefault()


        UpdateProfileApi(
            userCurrentId,
            formData.fullName,
            formData.email,
            formData.phoneNumber,
            "",
            formData.address,
            "",
            "",
            formData.profileImage,
            formData.selectedLocation?.lat,
            formData.selectedLocation?.lng,
            formData.aboutMe,
            formData.facebook,
            formData.twiiter,
            formData.instagram,
            formData.pintrest,
            (response) => {
                console.log(response)
                loadUpdateData(response.data)
                navigate.push("/")
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                    aboutMe: '',
                    facebook: '',
                    instagram: '',
                    pintrest: '',
                    twiiter: '',
                })
            },
            (error) => {
                console.log(error)
            })
    }
    return (
        <VerticleLayout>
            <div className="container">
                <div className="dashboard_titles">
                    <h3>My Profile</h3>
                </div>
                <div className="profile_card">
                    <form>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="card" id='personal_info_card'>
                                    <div className="card-header">
                                        <h4>Personal Info</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="add_profile_div">
                                                    <div className="image_div">
                                                        <img src={uploadedImage || PlaceHolderImg} alt="" />
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
                                                        <button type="button" onClick={handleUploadButtonClick}>Upload Image</button>

                                                        <p>Note: Photos must be JPEG or PNG format and at least 120x120</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="add_user_fields_div">
                                                    <span>Full Name</span>
                                                    <input
                                                        type="text"
                                                        className='add_user_fields'
                                                        name="fullName"
                                                        placeholder='Enter Full Name'
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="add_user_fields_div">
                                                    <span>Email</span>
                                                    <input
                                                        type="text"
                                                        className='add_user_fields'
                                                        name="email"
                                                        placeholder='Enter Email'
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="add_user_fields_div">
                                                    <span>Phone Number</span>
                                                    <input
                                                    readOnly
                                                        type="text"
                                                        className='add_user_fields'
                                                        name="phoneNumber"
                                                        placeholder='Enter Phone Number'
                                                        value={formData.phoneNumber}
                                                        onChange={handlePhoneNumberChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="add_user_fields_div">
                                                    <span>Location</span>
                                                    {/* <input
                                                        type="text"
                                                        className='add_user_fields'
                                                        name="location"
                                                        placeholder='Enter Location'
                                                        value={formData.location}
                                                        onChange={handleInputChange}
                                                    /> */}
                                                    {/* <LocationSearchBox onLocationSelected={handleLocationSelected} /> */}
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="add_user_fields_div">
                                                    <span>Address</span>
                                                    <textarea
                                                        rows={4}
                                                        className='add_user_fields'
                                                        name="address"
                                                        placeholder='Enter Address'
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="card" id='about_me_card'>
                                    <div className="card-header">
                                        <h4>About Me</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="add_user_fields_div">
                                            <span>About Me</span>
                                            <textarea
                                                rows={17}
                                                className='add_user_fields'
                                                name="aboutMe"
                                                placeholder='Tell us about yourself...'
                                                value={formData.aboutMe}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card" id='social_media_card'>
                                    <div className="card-header">
                                        <h4>Social Media</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="add_user_fields_div">
                                                    <span>Facebook</span>
                                                    <input
                                                        type="text"
                                                        className='add_user_fields'
                                                        name="facebook"
                                                        placeholder='Enter Facebook URL'
                                                        value={formData.facebook}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="add_user_fields_div">
                                                    <span>Instagram</span>
                                                    <input
                                                        type="text"
                                                        className='add_user_fields'
                                                        name="instagram"
                                                        placeholder='Enter Instagram URL'
                                                        value={formData.instagram}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="add_user_fields_div">
                                                    <span>Pinterest</span>
                                                    <input
                                                        type="text"
                                                        className='add_user_fields'
                                                        name="pintrest"
                                                        placeholder='Enter Pinterest URL'
                                                        value={formData.pintrest}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="add_user_fields_div">
                                                    <span>Twitter</span>
                                                    <input
                                                        type="text"
                                                        className='add_user_fields'
                                                        name="twiiter"
                                                        placeholder='Enter LinkedIn URL'
                                                        value={formData.twiiter}
                                                        onChange={handleInputChange}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="submit_div">
                                        <button onClick={handleUpdateProfile}>Update Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </VerticleLayout>
    );
}

export default Index;