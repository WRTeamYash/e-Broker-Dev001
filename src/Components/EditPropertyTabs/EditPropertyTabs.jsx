import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { translate } from '@/utils';
import { GetCategorieApi, GetFacilitiesApi, GetFeturedListingsApi, GetLimitsApi, PostProperty, UpdatePostProperty } from '@/store/actions/campaign';
import GoogleMapBox from '../Location/GoogleMapBox';
import Dropzone, { useDropzone } from 'react-dropzone';
import CloseIcon from '@mui/icons-material/Close';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { settingsData } from '@/store/reducer/settingsSlice';
import { userSignUpData } from '@/store/reducer/authSlice';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function EditPropertyTabs() {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true)
    const [defaultData, setDeafultData] = useState([])

    const propertyId = router.query.id
    // console.log("property id ", propertyId)
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;
    const PackageData = useSelector(settingsData)
    const userData = useSelector(userSignUpData)
    const userId = userData?.data?.data?.id
    const packageId = PackageData?.package?.user_purchased_package[0]?.package_id
    const [value, setValue] = useState(0);
    const [getCategories, setGetCategories] = useState([]);
    const [getFacilities, setGetFacilities] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [uploaded3DImages, setUploaded3DImages] = useState([]); // State to store uploaded images
    const [galleryImages, setGalleryImages] = useState([]); // State to store uploaded images
    const [defaultGallryImages, setDefaultGallryImages] = useState([])
    const [categoryParameters, setCategoryParameters] = useState([]);
    const [selectedLocationAddress, setSelectedLocationAddress] = useState('');
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();



    const [tab1, setTab1] = useState({
        propertyType: "",
        category: "",
        title: "",
        price: "",
        propertyDesc: "",
    });

    const [tab2, setTab2] = useState({});

    const [tab3, setTab3] = useState({

    })

    const [tab5, setTab5] = useState({
        titleImage: [],
        _3DImages: [],
        galleryImages: [],
        videoLink: "",
    })
    useEffect(() => {
        GetCategorieApi(
            (response) => {
                // console.log(response)
                const categoryData = response && response.data;
                setGetCategories(categoryData);

            },
            (error) => {
                console.log(error);
            }
        );
    }, []);
    useEffect(() => {
        GetFacilitiesApi(
            (response) => {
                // console.log(response)
                const facilitiyData = response && response.data;
                // console.log(facilitiyData)
                setGetFacilities(facilitiyData);

            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    useEffect(() => {
        setIsLoading(true);
        GetFeturedListingsApi(
            "",
            "",
            propertyId,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            isLoggedIn ? userCurrentId : "",
            (response) => {
                const propertyData = response?.data[0]; // Assuming data is an array and you want the first item
                console.log(propertyData)
                // console.log(propertyData.latitude)
                // console.log(propertyData.longitude)
                setLat(propertyData?.latitude)
                setLng(propertyData?.longitude)
                setIsLoading(false);

                if (propertyData) {
                    setTab1({
                        propertyType: propertyData.property_type === "Sell" ? "1" : "0" || "",
                        category: propertyData.category.id || "",
                        title: propertyData.title || "",
                        price: propertyData.price || "",
                        propertyDesc: propertyData.description || "",
                    });
                    setSelectedLocationAddress({

                    })
                }
                if (propertyData.parameters) {
                    const defaultTab2Values = {};

                    propertyData.parameters.forEach((param) => {
                        defaultTab2Values[param.id] = param.value;
                    });

                    // Set tab2 directly with the default values
                    setTab2(defaultTab2Values);
                    // console.log(tab2)
                }
                if (propertyData.assign_facilities) {
                    // Initialize tab3 with default values based on propertyData.assign_facilities
                    const defaultTab3Values = {};

                    propertyData.assign_facilities.forEach((facility) => {
                        // Use facility.facility_id as the key to set the value
                        defaultTab3Values[facility.facility_id] = facility.distance.toString();
                    });

                    // Set tab3 with the default values
                    setTab3(defaultTab3Values);
                    // console.log(tab3)
                }
                // console.log(propertyData.title_image)
                // Check if propertyData.title_image exists and set it as the default title image
                if (propertyData.title_image) {
                    // Assuming propertyData.title_image contains the image URL
                    const titleImageURL = propertyData.title_image;

                    // Fetch the image data and convert it to a Blob
                    fetch(titleImageURL)
                        .then((response) => response.blob())
                        .then((blob) => {
                            // Check if the fetched blob is of image type (e.g., image/jpeg, image/png, etc.)
                            if (blob.type.startsWith("image/")) {
                                // Create a File object from the Blob
                                const file = new File([blob], "title_image.jpg", { type: "image/jpeg" });

                                // Set the default title image
                                setUploadedImages([file]);
                                setTab5((prevState) => ({
                                    ...prevState,
                                    titleImage: [file],
                                }));
                            } else {
                                console.error("Fetched file is not an image.");
                                // Handle the case where the fetched file is not an image
                            }
                        })
                        .catch((error) => {
                            console.error("Error fetching image data:", error);
                        });
                }
                // Check if propertyData.threeD_image exists and set it as the default 3D image

                if (propertyData.threeD_image) {
                    // Assuming propertyData.threeD_image contains the 3D image URL
                    const threeDImageURL = propertyData.threeD_image;

                    // Fetch the 3D image data and convert it to a Blob
                    fetch(threeDImageURL)
                        .then((response) => response.blob())
                        .then((blob) => {
                            // Check if the fetched blob is of the correct 3D image MIME type
                            if (blob.type === 'image/jpeg' || blob.type === 'image/png') {
                                // Create a File object from the Blob
                                const file = new File([blob], "3D_image.jpg", { type: blob.type });

                                // Set the default 3D image
                                setUploaded3DImages([file]);
                                setTab5((prevState) => ({
                                    ...prevState,
                                    _3DImages: [file],
                                }));
                            } else {
                                console.error("Fetched file is not a 3D image.");
                                // Handle the case where the fetched file is not a 3D image
                            }
                        })
                        .catch((error) => {
                            console.error("Error fetching 3D image data:", error);
                        });
                }


                // Check if propertyData.gallery exists and set it as the default gallery images
                if (propertyData.gallery && propertyData.gallery.length > 0) {
                    const defaultGalleryImages = propertyData.gallery.map((galleryItem) => {
                        // Assuming galleryItem.image_url contains the image URL
                        const imageUrl = galleryItem.image_url;
                        // Create an object with a URL property for each image
                        return { imageUrl, name: galleryItem.image };
                    });

                    // Set the default gallery images
                    setDefaultGallryImages(defaultGalleryImages)
                    setGalleryImages(defaultGalleryImages);
                    setTab5((prevState) => ({
                        ...prevState,
                        galleryImages: defaultGalleryImages,
                    }));
                }
                if (propertyData.video_link) {
                    setTab5((prevState) => ({
                        ...prevState,
                        videoLink: propertyData.video_link,
                    }));
                }
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );
    }, [isLoggedIn, propertyId]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTab1({
            ...tab1,
            [name]: value,
        })
    };
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        const selectedCategoryId = parseInt(selectedCategory);

        const selectedCategoryData = getCategories.find(
            (category) => category.id === selectedCategoryId
        );

        if (selectedCategoryData) {
            // Extract and set the parameters for the selected category
            setCategoryParameters(selectedCategoryData.parameter_types.parameters);
        } else {
            // Reset parameters if the category is not found
            setCategoryParameters([]);
        }

        // Update the tab1 state with the selected category ID
        setTab1({
            ...tab1,
            category: selectedCategoryId, // Update tab1 with the ID
        });
    };
    useEffect(() => {
        if (tab1.category !== '') {
            const selectedCategoryId = parseInt(tab1.category);

            const selectedCategoryData = getCategories.find(
                (category) => category.id === selectedCategoryId
            );

            if (selectedCategoryData) {
                setCategoryParameters(selectedCategoryData.parameter_types.parameters);
            }
        }
    }, [tab1.category, getCategories]);

    const handlePropertyTypes = (event) => {
        const selectedValue = event.target.value;

        if (selectedValue !== tab1.propertyType) {
            // Only update formData.propertyType if a different option is selected
            setTab1({ ...tab1, propertyType: selectedValue });
        }

    };

    const handleTab2InputChange = (fieldId, value) => {
        setTab2((prevData) => ({
            ...prevData,
            [fieldId]: value,
        }));
    };
    const handleCheckboxChange = (fieldId, isChecked) => {
        setTab2((prevTab2Data) => ({
            ...prevTab2Data,
            [fieldId]: isChecked,
        }));
    };
    const handleRadioChange = (fieldId, selectedOption) => {
        setTab2((prevTab2Data) => ({
            ...prevTab2Data,
            [fieldId]: selectedOption,
        }));
    };




    const handleTab3InputChange = (fieldId, value) => {
        setTab3((prevData) => ({
            ...prevData,
            [fieldId]: value,
        }));
    };

    const handleLocationSelect = (address) => {
        // console.log(address)
        // Update the form field with the selected address
        setSelectedLocationAddress(address);
        // console.log(selectedLocationAddress)
    };


    const handleTab4InputChange = (event) => {
        const { name, value } = event.target;
        // Update the corresponding field in tab4Data using the input's "name" attribute
        setSelectedLocationAddress((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // console.log(selectedLocationAddress)
    };

    useEffect(() => {
        // console.log("set address", selectedLocationAddress)
    }, [tab1, tab2, tab3, selectedLocationAddress, tab5, lat, lng]);




    const updateFileInput = (fieldId) => (e) => {
        const fileInput = e.target;
        const fileLabel = document.getElementById(`file-label_${fieldId}`);
        const selectedFileName = document.getElementById(`selected-file-name_${fieldId}`);

        if (fileInput && fileLabel && selectedFileName) {
            if (fileInput.files.length > 0) {
                // Update the label text with the selected file name
                fileLabel.textContent = fileInput.files[0].name;
                selectedFileName.textContent = `Selected File: ${fileInput.files[0].name}`;

                // Store the selected file in tab2 state (assuming tab2 is an object)
                setTab2((prevTab2Data) => ({
                    ...prevTab2Data,
                    [fieldId]: fileInput.files[0],
                }));
            } else {
                // If no file is selected, revert to the default label text
                fileLabel.textContent = 'Choose a file';
                selectedFileName.textContent = '';

                // Remove the file from tab2 state (if it exists)
                setTab2((prevTab2Data) => {
                    const updatedTab2Data = { ...prevTab2Data };
                    delete updatedTab2Data[fieldId];
                    return updatedTab2Data;
                });
            }
        } else {
            console.error(`One or more elements with IDs not found: file-label_${fieldId}, selected-file-name_${fieldId}`);
        }
    };

    const onDrop = useCallback((acceptedFiles) => {
        // Log the acceptedFiles to check if they are being received correctly
        // console.log('Accepted Files:', acceptedFiles);

        // const imgfile = acceptedFiles[0]
        // console.log(imgfile)
        // Append the uploaded files to the uploadedImages state
        setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
        setTab5((prevState) => ({
            ...prevState,
            titleImage: acceptedFiles,
        }));
    }, [])



    const removeImage = (index) => {
        // Remove an image from the uploadedImages state by index
        setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Accept only image files
    });

    const files = useMemo(
        () =>
            uploadedImages.map((file, index) => (
                <div key={index} className="dropbox_img_div">
                    <img className="dropbox_img" src={URL.createObjectURL(file)} alt={file.name} />
                    <div className="dropbox_d">
                        <button className="dropbox_remove_img" onClick={() => removeImage(index)}>
                            <CloseIcon fontSize='25px' />
                        </button>
                        <div className="dropbox_img_deatils">
                            <span>{file.name}</span>
                            <span>{Math.round(file.size / 1024)} KB</span>
                        </div>
                    </div>
                </div>
            )),
        [uploadedImages]
    );
    const onDrop3D = useCallback((acceptedFiles) => {
        // Log the acceptedFiles to check if they are being received correctly
        console.log('Accepted 3D Files:', acceptedFiles[0]);

        // Append the uploaded 3D files to the uploaded3DImages state
        setUploaded3DImages((prevImages) => [...prevImages, ...acceptedFiles]);
        setTab5((prevState) => ({
            ...prevState,
            _3DImages: acceptedFiles,
        }));
    }, []);

    const remove3DImage = (index) => {
        // Remove a 3D image from the uploaded3DImages state by index
        setUploaded3DImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const { getRootProps: getRootProps3D, getInputProps: getInputProps3D, isDragActive: isDragActive3D } = useDropzone({
        onDrop: onDrop3D,
        accept: 'model/*', // Accept only 3D model files (update the accept type as needed)
    });
    const files3D = useMemo(
        () =>
            uploaded3DImages.map((file, index) => (
                <div key={index} className="dropbox_img_div">
                    <img className="dropbox_img" src={URL.createObjectURL(file)} alt={file.name} />
                    <div className="dropbox_d">
                        <button className="dropbox_remove_img" onClick={() => remove3DImage(index)}>
                            <CloseIcon fontSize='25px' />
                        </button>
                        <div className="dropbox_img_deatils">
                            <span>{file.name}</span>
                            <span>{Math.round(file.size / 1024)} KB</span>
                        </div>
                    </div>
                </div>
            )),
        [uploaded3DImages]
    );
    const onDropGallery = useCallback((acceptedFiles) => {
        // Append the uploaded gallery files to the galleryImages state
        setGalleryImages((prevImages) => [...prevImages, ...acceptedFiles]);
        setTab5((prevState) => ({
            ...prevState,
            galleryImages: [...prevState.galleryImages, ...acceptedFiles],
        }));
    }, []);
    const removeGalleryImage = (index) => {
        // Remove a gallery image from the galleryImages state by index
        setGalleryImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const { getRootProps: getRootPropsGallery, getInputProps: getInputPropsGallery, isDragActive: isDragActiveGallery } = useDropzone({
        onDrop: onDropGallery,
        accept: 'image/*', // Accept only image files for the gallery
        multiple: true, // Allow multiple file selection
    });

    const galleryFiles = useMemo(
        () =>
            galleryImages.map((imageData, index) => (
                <div key={index} className="dropbox_gallary_img_div">
                    {console.log(imageData)}
                    <img className="dropbox_img" src={imageData.imageUrl} alt={imageData.name} />
                    <div className="dropbox_d">
                        <button className="dropbox_remove_img" onClick={() => removeGalleryImage(index)} type="button">
                            <CloseIcon fontSize='25px' />
                        </button>
                        <div className="dropbox_img_deatils">
                            <span>{imageData.name}</span>
                            {/* <span>{Math.round(imageData.size / 1024)} KB</span> */}
                            {/* You can add more details here if needed */}
                        </div>
                    </div>
                </div>
            )),
        [galleryImages]
    );
    // console.log("gallary files ",galleryFiles)
    const handleVideoInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        // Update the tab5 state with the entered video link
        setTab5((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const areFieldsFilled = (tab) => {
        // Check if any of the required fields are empty or undefined
        if (!tab.propertyType || !tab.category || !tab.title || !tab.price || !tab.propertyDesc) {
            // Some required fields are not filled
            return false;
        }

        // All required fields are filled
        return true;
    };

    const areLocationFieldsFilled = (location) => {
        // Check if any of the required fields are empty or undefined
        if (!location.city || !location.state || !location.country || !location.formatted_address) {
            // Some required fields are not filled
            return false;
        }

        // All required fields are filled
        return true;
    };

    const handleNextTab = (e) => {
        e.preventDefault()
        if (!areFieldsFilled(tab1)) {
            // Display a toast message to fill in all required fields
            toast.error('Please fill in all required fields ');
        } else {
            // Proceed to the next tab
            setValue(value + 1);
            // console.log("alll tabs data", tab1, tab2, tab3, selectedLocationAddress)

        }
    }
    const handleNextTab4 = () => {
        // console.log(selectedLocationAddress)
        // Check if the location fields in tab 4 are empty
        if (!areLocationFieldsFilled(selectedLocationAddress)) {
            // Display a toast message to fill in all property address details in tab 4
            toast.error('Please fill in all property address details.');
        } else {
            // Proceed to the next tab
            setValue(value + 1);
            // console.log("Tab 4 data", selectedLocationAddress);
        }
    };

    const handleUpdatePostproperty = (e) => {
        e.preventDefault();
        // console.log(Object.fromEntries(new FormData(e.target)));
        if (!areFieldsFilled(tab1)) {
            // Display a toast message to fill in all required fields for Tab 1
            toast.error('Please fill in all required fields in Property Details');

            // Switch to Tab 1
            setValue(0);
        } else if (!areLocationFieldsFilled(selectedLocationAddress)) {
            // Display a toast message to fill in all required location fields
            toast.error('Please select a location with all required fields (city, state, country, and formatted_address)');
            // Switch to Tab 4
            setValue(3);
        } else if (uploadedImages.length === 0) {
            // Display a toast message if Title Image is not selected
            toast.error('Please select a Title Image');
        } else if (packageId === undefined) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have not subscribed. Please subscribe first',

            }).then((result) => {
                if (result.isConfirmed) {
                    router.push('/subscription-plan'); // Redirect to the subscription page
                }
            });
        } else {
            console.log("while I submitted all data", tab1, tab2, tab3, selectedLocationAddress, tab5);
            const parameters = [];
            const facilities = [];

            // Assuming tab2 contains parameter data
            for (const [key, value] of Object.entries(tab2)) {
                parameters.push({
                    "parameter_id": key,
                    "value": value,
                    // You may need to adjust these fields based on your data structure
                });
            }

            // Assuming tab3 contains facility data
            // Assuming tab2 contains parameter data
            for (const [key, value] of Object.entries(tab3)) {
                facilities.push({
                    "facility_id": key,
                    "distance": value,
                    // You may need to adjust these fields based on your data structure
                });
                console.log("when i push to facility ", facilities)
            }
            // Concatenate parameters and facilities into the allParameters array
            // const allParameters = [...parameters, ...facilities];

            // console.log("allParameters", allParameters);
            // Rest of your code remains the same

            UpdatePostProperty(
                "0",
                propertyId,
                packageId ? packageId : "",
                tab1.title,
                tab1.propertyDesc,
                selectedLocationAddress.city,
                selectedLocationAddress.state,
                selectedLocationAddress.country,
                selectedLocationAddress.lat,
                selectedLocationAddress.lng,
                selectedLocationAddress.formatted_address,
                tab1.price,
                tab1.category,
                tab1.propertyType,
                tab5.videoLink,
                parameters, // Pass the combined parameters as "allParameters"
                facilities,
                tab5.titleImage[0],
                tab5._3DImages[0],
                tab5.galleryImages,
                (response) => {
                    console.log(response);

                    if (response.message === "Package not found") {
                        toast.error(response.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'You have not subscribed. Please subscribe first',

                        }).then((result) => {
                            if (result.isConfirmed) {
                                router.push('/subscription-plan'); // Redirect to the subscription page
                            }
                        });
                    } else if (response.message === "Package Limit is over") {
                        // toast.error(response.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Your Package Limit is Over. Please Purchase Package.',
                            confirmButtonColor: '#087c7c',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                router.push('/subscription-plan'); // Redirect to the subscription page
                            }
                        });
                    } else {
                        toast.success(response.message);
                        router.push('/user/dashboard');
                    }

                },
                (error) => {
                    console.log(error);
                    toast.error(error);
                }
            );
        }
    }




    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Property Details" {...a11yProps(0)} />
                    <Tab label="Facilities" {...a11yProps(1)} />
                    <Tab label="Outdoor Facilities" {...a11yProps(2)} />
                    <Tab label="Location" {...a11yProps(3)} />
                    <Tab label="Images & Video" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        <div className="col-sm-12 col-md-6">
                            <div id='add_prop_form'>
                                <div className="add_prop_fields">
                                    <span>Property Type</span>
                                    <div className="add_prop_types">
                                        <div className="form-check">
                                            <input

                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                                value="0"
                                                onChange={handlePropertyTypes}
                                                checked={tab1.propertyType === '0'}
                                            //    disabled={formData.propertyType === 'sell'} 

                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Sell
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                                value="1"
                                                onChange={handlePropertyTypes}
                                                checked={tab1.propertyType === '1'}
                                            //   disabled={formData.propertyType === 'rent'} 
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Rent
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_prop_fields">
                                    <span>Category</span>
                                    <select
                                        className="form-select"
                                        aria-label="Default select"
                                        name="category"
                                        value={tab1.category}
                                        onChange={handleCategoryChange}
                                    >
                                        <option value="">{translate("selectPropType")}</option>
                                        {/* Map over getCategories and set the 'value' of each option to the 'id' */}
                                        {getCategories &&
                                            getCategories.map((ele, index) => (
                                                <option key={index} value={ele.id}>
                                                    {ele.category}
                                                </option>
                                            ))}
                                    </select>

                                </div>
                                <div className="add_prop_fields">
                                    <span>Title</span>
                                    <input type="text" id='prop_title_input' placeholder='Enter Property Title' name='title' onChange={handleInputChange} value={tab1.title} />
                                </div>
                                <div className="add_prop_fields">
                                    <span>Price</span>
                                    <input type="number" id='prop_title_input' placeholder='Enter Property Price ($)' name='price' onChange={handleInputChange} value={tab1.price} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="add_prop_fields">
                                <span>Property Description</span>
                                <textarea rows={13} id="about_prop" placeholder='Enter About Property' name='propertyDesc' onChange={handleInputChange} value={tab1.propertyDesc} />
                            </div>
                        </div>
                    </div>

                    <div className="nextButton">
                        <button type='button' onClick={handleNextTab}>Next</button>
                    </div>
                </form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        {categoryParameters.length > 0 ? (
                            categoryParameters.map((ele, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                                    <div className="add_prop_fields">
                                        <span>{ele.name}</span>

                                        {ele.type_of_parameter === 'number' ? (
                                            <>
                                                {/* <input type="hidden" name={`parameters[${index}][id]`} value={ele.id}/> */}
                                                <input
                                                    value={tab2[ele.id] || ''}
                                                    type='number'
                                                    // name={`parameters[${index}][value]`}
                                                    className='prop_number_input'
                                                    id={`prop_title_input_${ele.id}`}
                                                    onChange={(e) => handleTab2InputChange(ele.id, e.target.value)}
                                                />
                                            </>
                                        ) : ele.type_of_parameter === 'checkbox' ? (
                                            <>
                                                <div className="row paramters_row">
                                                    {ele.type_values.map((option, optionIndex) => (
                                                        <div className="col-sm-12" key={optionIndex}>
                                                            <div className="custom-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    id={`checkbox_${ele.id}_${optionIndex}`}
                                                                    className="custom-checkbox-input"
                                                                    checked={tab2[`${ele.id}_${optionIndex}`] || false}
                                                                    onChange={(e) =>
                                                                        handleCheckboxChange(
                                                                            `${ele.id}_${optionIndex}`,
                                                                            e.target.checked
                                                                        )
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor={`checkbox_${ele.id}_${optionIndex}`}
                                                                    className="custom-checkbox-label"
                                                                >
                                                                    {option}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : ele.type_of_parameter === 'textbox' ? (
                                            <input
                                                type="text"
                                                className='prop_textbox_input'
                                                id={`textbox_${ele.id}`}
                                                value={tab2[ele.id] || ''}
                                                onChange={(e) => handleTab2InputChange(ele.id, e.target.value)}
                                            />
                                        ) : ele.type_of_parameter === 'textarea' ? (
                                            <textarea
                                                className='prop_textarea_input'
                                                rows={4}
                                                id={`textarea_${ele.id}`}
                                                value={tab2[ele.id] || ''}
                                                onChange={(e) => handleTab2InputChange(ele.id, e.target.value)}
                                            />
                                        ) : ele.type_of_parameter === 'radiobutton' ? (
                                            <>
                                                <div className="row paramters_row">
                                                    {ele.type_values.map((option, optionIndex) => (
                                                        <div className="col-sm-12" key={optionIndex}>
                                                            <div className="custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    id={`radio_${ele.id}_${optionIndex}`}
                                                                    name={`radio_${ele.id}`}
                                                                    className="custom-checkbox-input"
                                                                    checked={tab2[ele.id] === option}
                                                                    onChange={(e) =>
                                                                        handleRadioChange(ele.id, option)
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor={`radio_${ele.id}_${optionIndex}`}
                                                                    className="custom-checkbox-label"
                                                                >
                                                                    {option}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : ele.type_of_parameter === 'dropdown' ? (
                                            <div className="custom-dropdown">
                                                <select
                                                    id={`dropdown_${ele.id}`}
                                                    name={`dropdown_${ele.id}`}
                                                    value={tab2[ele.id] || ''}
                                                    onChange={(e) => handleTab2InputChange(ele.id, e.target.value)}
                                                >
                                                    {ele.type_values.map((option, optionIndex) => (
                                                        <option key={optionIndex} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ) : ele.type_of_parameter === 'file' ? (
                                            <>
                                                <input
                                                    type="file"
                                                    id={`file-input_${ele.id}`}
                                                    className="custom-file-input"
                                                    onChange={updateFileInput(ele.id)}
                                                />
                                                <label htmlFor={`file-input_${ele.id}`} className="custom-file01-label" id={`file-label_${ele.id}`}>
                                                    Choose a file
                                                </label>
                                                {/* <p id={`selected-file-name_${ele.id}`}></p> */}
                                            </>
                                        ) : (
                                            // Handle other input types or provide a default component here
                                            <input type="text" id={`default_${ele.id}`} />
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-sm-12">
                                <span style={{ display: "flex", justifyContent: "center" }}>
                                    Please select a category to view additional fields.
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="nextButton">
                        <button type='button' onClick={handleNextTab}>Next</button>
                    </div>
                </form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        {getFacilities.length > 0 ? (
                            getFacilities.map((ele, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                                    <div className="add_prop_fields">
                                        <span>{ele.name}</span>
                                        <input
                                            value={tab3[ele.id] || ''}
                                            type='number'
                                            placeholder='00 KM'
                                            className='prop_number_input'
                                            id={`prop_title_input_${ele.id}`}
                                            onChange={(e) => handleTab3InputChange(ele.id, e.target.value)}
                                        />
                                    </div>

                                </div>
                            ))
                        ) : (
                            null
                        )}
                    </div>
                    <div className="nextButton">
                        <button type='button' onClick={handleNextTab}>Next</button>
                    </div>
                </form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        <div className="col-sm-12 col-md-6">
                            <div className='row' id='add_prop_form_row'>
                                <div className="col-sm-12 col-md-6">
                                    <div className="add_prop_fields">
                                        <span>City</span>
                                        <input type="text" id='prop_title_input' placeholder='Enter City' name='city' value={selectedLocationAddress.city} onChange={handleTab4InputChange} />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="add_prop_fields">
                                        <span>State</span>
                                        <input type="text" id='prop_title_input' placeholder='Enter State' name='state' value={selectedLocationAddress.state} onChange={handleTab4InputChange} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="add_prop_fields">
                                        <span>Country</span>
                                        <input type="text" id='prop_title_input' placeholder='Enter Country' name='country' value={selectedLocationAddress.country} onChange={handleTab4InputChange} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="add_prop_fields">
                                        <span>Address</span>
                                        <textarea rows={4} id="about_prop" placeholder='Enter Full Address' name='formatted_address' value={selectedLocationAddress.formatted_address} onChange={handleTab4InputChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="map">
                                <GoogleMapBox
                                    apiKey="AIzaSyA0B2eTsnUMMG4SN6Agjz7JD3w_gCDj1lE"
                                    onSelectLocation={handleLocationSelect}
                                    latitude={lat}
                                    longitude={lng} />
                            </div>
                        </div>
                    </div>

                    <div className="nextButton">
                        <button type='button' onClick={handleNextTab4}>Next</button>
                    </div>
                </form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <form>
                    <div className="row" id='add_prop_form_row'>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Title Image</span>
                                <div className="dropbox">
                                    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                                        <input {...getInputProps()} />
                                        {uploadedImages.length === 0 ?
                                            (isDragActive ?
                                                <span>Drop the files here...</span> :
                                                <span>Drag & Drop your files or <span style={{ textDecoration: "underline" }}> Browse</span></span>
                                            )
                                            : null}
                                    </div>
                                    <div>{files}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>3D Image</span>
                                <div className="dropbox">
                                    <div {...getRootProps3D()} className={`dropzone ${isDragActive3D ? 'active' : ''}`}>
                                        <input {...getInputProps3D()} />
                                        {uploaded3DImages.length === 0 ?
                                            (isDragActive3D ?
                                                <span>Drop the 3D files here...</span> :
                                                <span>Drag & Drop your 3D files or <span style={{ textDecoration: "underline" }}> Browse</span></span>
                                            )
                                            : null}
                                    </div>
                                    <div>{files3D}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Gallary Images</span>
                                <div className="dropbox">
                                    <div {...getRootPropsGallery()} className={`dropzone ${isDragActiveGallery ? 'active' : ''}`}>
                                        <input {...getInputPropsGallery()} />

                                        {isDragActiveGallery ?
                                            <span>Drop the gallery files here...</span> :
                                            <span>Drag & Drop your gallery files or <span style={{ textDecoration: "underline" }}> Browse</span></span>
                                        }

                                    </div>
                                    <div>{galleryFiles}</div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>Video Link</span>
                                <input type="input" id='prop_title_input' name='videoLink' placeholder='Eneter Video' value={tab5.videoLink} onChange={handleVideoInputChange} />
                            </div>
                        </div>
                    </div>

                    <div className="updateButton">
                        <button type='submit' onClick={handleUpdatePostproperty}>Submit Property</button>
                    </div>
                </form>
            </CustomTabPanel>
        </Box>
    );
}