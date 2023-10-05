import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { translate } from '@/utils';
import { GetCategorieApi, GetFacilitiesApi, PostProperty } from '@/store/actions/campaign';
import GoogleMapBox from '../Location/GoogleMapBox';
import Dropzone, { useDropzone } from 'react-dropzone';
import CloseIcon from '@mui/icons-material/Close';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { settingsData } from '@/store/reducer/settingsSlice';
import { userSignUpData } from '@/store/reducer/authSlice';

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

export default function AddPropertyTabs() {
    const [value, setValue] = useState(0);
    const [getCategories, setGetCategories] = useState([]);
    const [getFacilities, setGetFacilities] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [uploaded3DImages, setUploaded3DImages] = useState([]); // State to store uploaded images
    const [galleryImages, setGalleryImages] = useState([]); // State to store uploaded images
    const [categoryParameters, setCategoryParameters] = useState([]);
    const [selectedLocationAddress, setSelectedLocationAddress] = useState('');
    // Set your initial location here

    // const [formData, setFormData] = useState({
    //     propertyType: '',
    //     category: '',
    //     title: '',
    //     price: 0,
    //     bedrooms: 0,
    //     bathrooms: 0,
    //     kitchen: 0,
    //     garage: 0,
    //     parking: 0,
    //     cctv: 0,
    //     fitness: 0,
    //     wifi: 0,
    //     city: '',
    //     state: '',
    //     country: '',
    //     clientAddress: '',
    //     fullAddress: '',
    //     videoLink: '',
    // });

    const PackageData = useSelector(settingsData)
    const userData = useSelector(userSignUpData)
    const userId = userData?.data?.data?.id
    const packageId = PackageData?.package?.user_purchased_package[0]?.id



    const [tab1, setTab1] = useState({
        propertyType: "",
        category: "",
        title: "",
        price: "",
        propertyDesc: ""
    })
    const [tab2, setTab2] = useState({

    })
    const [tab3, setTab3] = useState({

    })
    // const [tab4, setTab4] = useState({
    //     city: '',
    //     state: '',
    //     country: '',
    //     address: '',
    // })
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
        // console.log(selectedCategory); // Debugging: Check the selected category value.

        // Parse selectedCategory as a number (assuming id is a number in getCategories)
        const selectedCategoryId = parseInt(selectedCategory);

        // Assuming getCategories is an array of objects with a 'category' property
        const selectedCategoryData = getCategories.find(
            (category) => category.id === selectedCategoryId
        );

        if (selectedCategoryData) {
            // Debugging: Log the parameters to ensure they are available.
            // console.log(selectedCategoryData.parameter_types.parameters);

            // Extract and set the parameters for the selected category
            setCategoryParameters(selectedCategoryData.parameter_types.parameters);

            // Update the formData.category with the selected category ID
            setTab1({
                ...tab1,
                category: selectedCategoryId, // Update formData with the ID
            });
        } else {
            // Reset parameters if the category is not found
            setCategoryParameters([]);

            // Clear the formData.category if no category is selected
            setTab1({
                ...tab1,
                category: '', // Clear the selected category
            });
        }
    };
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
        // console.log("set tab 5", tab5)
    }, [tab1, tab2, tab3, selectedLocationAddress, tab5]);




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
        // Log the acceptedFiles to check if they are being received correctly
        // console.log('Accepted Gallery Files:', acceptedFiles);

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
            galleryImages.map((file, index) => (
                <div key={index} className="dropbox_gallary_img_div">
                    <img className="dropbox_img" src={URL.createObjectURL(file)} alt={file.name} />
                    <div className="dropbox_d">
                        <button className="dropbox_remove_img" onClick={() => removeGalleryImage(index)}>
                            <CloseIcon fontSize='25px' />
                        </button>
                        <div className="dropbox_img_deatils">
                            <span>{file.name}</span>
                            <span>{Math.round(file.size / 1024)} KB</span>
                        </div>
                    </div>
                </div>
            )),
        [galleryImages]
    );
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

    const handlePostproperty = (e) => {
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
        } else {
            // Proceed with form submission
            console.log("while I submitted all data", tab1, tab2, tab3, selectedLocationAddress, tab5);


            PostProperty(
                userId,
                packageId,
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
                "",
                tab5.titleImage[0],
                tab5._3DImages[0],
                tab5.galleryImages,
                (response) => {
                    console.log(response)
                    toast.success(response.message)

                },
                (error) => {
                    console.log(error)
                }

            )
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
                                    onSelectLocation={handleLocationSelect} />
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

                    <div className="nextButton">
                        <button type='submit' onClick={handlePostproperty}>Submit</button>
                    </div>
                </form>
            </CustomTabPanel>
        </Box>
    );
}