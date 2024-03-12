"use client"
import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { translate } from "@/utils";
import { GetFacilitiesApi, PostProjectApi, PostProperty, getAllprojectsApi } from "@/store/actions/campaign";
import GoogleMapBox from "../Location/GoogleMapBox";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { settingsData } from "@/store/reducer/settingsSlice";
import { userSignUpData } from "@/store/reducer/authSlice";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { categoriesCacheData } from "@/store/reducer/momentSlice";
import { languageData } from "@/store/reducer/languageSlice";
import { IoIosAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
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
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function AddProjectsTabs() {
    const router = useRouter();
    const ProjectSlug = router?.query?.slug

    const [defaultProjectData, setDefaultProjectData] = useState([])


    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;

    const [value, setValue] = useState(0);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]); // State to store uploaded images
    const [uploadedOgImages, setUploadedOgImages] = useState([]); // State to store uploaded images
    const [selectedLocationAddress, setSelectedLocationAddress] = useState("");
    const [floorFields, setFloorFields] = useState([{ id: "", floorTitle: "", floorImgs: [] }]);
    const [currentFloorIndex, setCurrentFloorIndex] = useState(0);
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [uploadedDocuments, setUploadedDocuments] = useState([]);

    const userData = useSelector(userSignUpData);
    const userId = userData?.data?.data?.id;
    const Categorydata = useSelector(categoriesCacheData);
    const lang = useSelector(languageData);

    useEffect(() => { }, [lang]);




    const [tab1, setTab1] = useState({
        projectType: "",
        category: "",
        title: "",
        projectDesc: "",
    });


    const [tab5, setTab5] = useState({
        titleImage: [],
        docs: [],
        galleryImages: [],
        videoLink: "",
    });
    const [tab6, setTab6] = useState({
        MetaTitle: "",
        MetaKeyword: "",
        MetaDesc: "",
        ogImages: []

    });


    const [removeFloorsId, setRemoveFloorsId] = useState([])
    const [removeGalleryImgsId, setRemoveGalleryImgsId] = useState([])
    const [removeDocId, setRemoveDocId] = useState([])

    useEffect(() => {
        if (ProjectSlug) {
            getAllprojectsApi({
                slug_id: ProjectSlug,
                userid: isLoggedIn ? userCurrentId : "",
                onSuccess: (response) => {
                    const ProjectData = response.data;
                    setDefaultProjectData(ProjectData[0])
                },
                onError: (error) => {
                    setIsLoading(false);
                    console.log(error);
                }
            })
        }
    }, [ProjectSlug])
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Update tab1 when defaultProjectData changes
                setTab1(prevTab1 => ({
                    ...prevTab1,
                    projectType: defaultProjectData ? defaultProjectData.type : "",
                    category: defaultProjectData ? defaultProjectData.category_id : "",
                    title: defaultProjectData ? defaultProjectData.title : "",
                    projectDesc: defaultProjectData ? defaultProjectData.description : "",
                }));
                // Update tab6 when defaultProjectData changes
                setTab6(prevTab6 => ({
                    ...prevTab6,
                    MetaTitle: defaultProjectData ? defaultProjectData.meta_title : "",
                    MetaKeyword: defaultProjectData ? defaultProjectData.meta_description : "",
                    MetaDesc: defaultProjectData ? defaultProjectData.meta_keywords : "",

                }))

                setLat(defaultProjectData?.latitude);
                setLng(defaultProjectData?.longitude);
                // Check if defaultProjectData.meta_image exists
                if (defaultProjectData?.meta_image) {

                    fetch(defaultProjectData.meta_image)
                        .then((response) => response.blob())
                        .then((blob) => {
                            const file = new File([blob], "meta_image.jpg", { type: "image/jpeg" });
                            setUploadedOgImages([file]);
                            // Log uploadedOgImages inside a useEffect hook to ensure logging after state update
                            // setTab6((prevState) => ({
                            //     ...prevState,
                            //     ogImages: [file],
                            // }));
                        })
                        .catch((error) => {
                            console.error("Error fetching image data:", error);
                        });

                }
                if (defaultProjectData?.video_link) {
                    setTab5((prevState) => ({
                        ...prevState,
                        videoLink: defaultProjectData?.video_link,
                    }));
                }
                if (defaultProjectData?.plans && defaultProjectData.plans.length > 0) {
                    // Map the plans to create floorFields data structure
                    const newFloorFields = defaultProjectData.plans.map((plan) => ({
                        id: plan.id,
                        floorTitle: plan.title,
                        floorImgs: [{ name: plan.document, url: plan.document }]
                    }));
                    // Set the floorFields state
                    setFloorFields(newFloorFields);
                }
                if (defaultProjectData?.image) {
                    // Assuming propertyData.title_image contains the image URL
                    const titleImageURL = defaultProjectData.image;

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
                // Check if propertyData.gallery exists and set it as the default gallery images
                if (defaultProjectData?.gallary_images && defaultProjectData?.gallary_images.length > 0) {
                    const defaultGalleryImages = defaultProjectData.gallary_images.map((galleryItem) => {
                        // Assuming galleryItem.image_url contains the image URL
                        const imageUrl = galleryItem.name;
                        // Create an object with a URL property for each image
                        return { id: galleryItem.id, imageUrl, name: galleryItem.name };
                    });

                    // Set the default gallery images
                    setGalleryImages(defaultGalleryImages);

                }
                if (defaultProjectData?.documents && defaultProjectData.documents.length > 0) {

                    // Set the converted files in tab5.docs
                    setUploadedDocuments(defaultProjectData?.documents)

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [defaultProjectData])

    // Use useEffect to log uploadedOgImages after it has been updated
    useEffect(() => {
    }, [lat, lng]);



    const GoogleMapApi = process.env.NEXT_PUBLIC_GOOGLE_API;
    const handleChange = (e, newValue) => {
        e.preventDefault()
        setValue(newValue);
    };
    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setTab1({
            ...tab1,
            [name]: value,
        });
        setTab6({
            ...tab6,
            [name]: value,
        });

    };
    const handleCategoryChange = (e) => {
        e.preventDefault()
        const selectedCategory = e.target.value;

        // Parse selectedCategory as a number (assuming id is a number in Categoriesss)
        const selectedCategoryId = parseInt(selectedCategory);


        if (selectedCategoryId) {

            // Update the formData.category with the selected category ID
            setTab1({
                ...tab1,
                category: selectedCategoryId, // Update formData with the ID
            });
        } else {

            // Clear the formData.category if no category is selected
            setTab1({
                ...tab1,
                category: "", // Clear the selected category
            });
        }
    };
    const handlePropertyTypes = (event) => {
        const selectedValue = event.target.value;


        setTab1({ ...tab1, projectType: selectedValue });

    };


    const handleLocationSelect = (address) => {

        // Update the form field with the selected address
        setSelectedLocationAddress(address);
    };

    const handleTab4InputChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        // Update the corresponding field in tab4Data using the input's "name" attribute
        setSelectedLocationAddress((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    // title img 
    const onDrop = useCallback((acceptedFiles) => {
        // Log the acceptedFiles to check if they are being received correctly

        // const imgfile = acceptedFiles[0]

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
    // State to store uploaded documents

    const onDropDocuments = useCallback((acceptedFiles) => {
        // Check if the dropped files are PDF or DOC files
        const invalidFiles = acceptedFiles.filter(file => {
            const fileName = file.name.toLowerCase();
            return !(fileName.endsWith('.pdf') || fileName.endsWith('.doc') || fileName.endsWith('.docx'));
        });

        if (invalidFiles.length > 0) {
            // If any invalid files are found, display an error toast and return
            toast.error("Only PDF and DOC files are allowed.");
            return;
        }

        // Append the uploaded documents to the uploadedDocuments state
        setUploadedDocuments(prevDocuments => [...prevDocuments, ...acceptedFiles]);
        setTab5((prevState) => ({
            ...prevState,
            docs: acceptedFiles,
        }));
    }, []);
    // Function to remove a document by index
    const removeDocument = (index, docId) => {
        setRemoveDocId(prevIds => new Set([...prevIds, docId]));

        setUploadedDocuments((prevDocuments) => prevDocuments.filter((_, i) => i !== index));
    };

    const { getRootProps: getRootPropsDocuments, getInputProps: getInputPropsDocuments, isDragActive: isDragActiveDocuments } = useDropzone({
        onDrop: onDropDocuments,
        accept: 'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        multiple: true // Ensure that the dropzone allows multiple files
    });

    // Render uploaded documents
    const documentFiles = useMemo(
        () =>
            uploadedDocuments && uploadedDocuments.map((file, index) => (
                <div key={index} className="dropbox_docs">
                    <div className="doc_title">
                        <span>{file.name.substring(file.name.lastIndexOf('/') + 1)}</span>
                        {file.size &&
                            <span>{Math.round(file.size / 1024)} KB</span>
                        }
                    </div>
                    <button className="dropbox_remove_img" onClick={() => removeDocument(index, file.id)}>
                        <CloseIcon fontSize='25px' />
                    </button>
                </div>
            )),
        [uploadedDocuments]
    );

    // gallary imgs 
    const onDropGallery = useCallback((acceptedFiles) => {
        // Log the acceptedFiles to check if they are being received correctly


        // Append the uploaded gallery files to the galleryImages state
        setGalleryImages((prevImages) => [...prevImages, ...acceptedFiles]);
        setTab5((prevState) => ({
            ...prevState,
            galleryImages: [...prevState.galleryImages, ...acceptedFiles],
        }));
    }, []);

    const removeGalleryImage = (index, id) => {

        setRemoveGalleryImgsId(prevIds => new Set([...prevIds, id]));
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
                    <img className="dropbox_img"
                        src={file instanceof File ? URL.createObjectURL(file) : file.imageUrl}
                        alt={file.name} />
                    <div className="dropbox_d">
                        <button className="dropbox_remove_img" onClick={() => removeGalleryImage(index, file.id)}>
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


    // Seo OG img
    const onDropOgImage = useCallback((acceptedFiles) => {
        // Log the acceptedFiles to check if they are being received correctly
        // Check if each selected image is less than or equal to 300KB
        const isSizeValid = acceptedFiles.every((file) => file.size <= 300 * 1024);

        if (!isSizeValid) {
            // Display a toast error message
            toast.error('Error: Selected image size should be 300KB or less.');
            return;
        }
        // Append the uploaded ogImage files to the uploadedOgImages state
        setUploadedOgImages((prevImages) => [...prevImages, ...acceptedFiles]);
        setTab6((prevState) => ({
            ...prevState,
            ogImages: acceptedFiles,
        }));
    }, []);

    const removeOgImage = (index) => {
        // Remove an ogImage from the uploadedOgImages state by index
        setUploadedOgImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const { getRootProps: getRootPropsOgImage, getInputProps: getInputPropsOgImage, isDragActive: isDragActiveOgImage } = useDropzone({
        onDrop: onDropOgImage,
        accept: 'image/*', // Accept only image files (update the accept type as needed)
    });

    const ogImageFiles = useMemo(
        () =>
            uploadedOgImages.map((file, index) => (
                <div key={index} className="dropbox_img_div">
                    <img className="dropbox_img" src={URL.createObjectURL(file)} alt={file.name} />
                    <div className="dropbox_d">
                        <button className="dropbox_remove_img" onClick={() => removeOgImage(index)}>
                            <CloseIcon fontSize='25px' />
                        </button>
                        <div className="dropbox_img_deatils">
                            <span>{file.name}</span>
                            <span>{Math.round(file.size / 1024)} KB</span>
                        </div>
                    </div>
                </div>
            )),
        [uploadedOgImages]
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
        if (!tab.projectType || !tab.category || !tab.title || !tab.projectDesc) {
            // Some required fields are not filled
            return false;
        }

        // All required fields are filled
        return true;
    };
    const areFieldsFilled1 = (seodata) => {
        // Check if any of the required fields are empty or undefined
        if (!seodata.MetaTitle || !seodata.MetaKeyword || !seodata.MetaDesc) {
            // Some required fields are not filled
            return false;
        }

        // All required fields are filled
        return true;
    };

    const areLocationFieldsFilled = (location) => {

        // Check if any of the required fields are empty or undefined
        if (!location.city || !location.state || !location.country || !location.formatted_address || !selectedLocationAddress) {
            // Some required fields are not filled
            return false;
        }

        // All required fields are filled
        return true;
    };

    const handleNextTab = (e) => {
        if (!areFieldsFilled(tab1)) {
            // Display a toast message to fill in all required fields
            toast.error("Please fill in all required fields ");
        } else {
            // Proceed to the next tab
            setValue(value + 1);

        }
    };
    const handleNextTab2 = (e) => {

        if (!areFieldsFilled1(tab6)) {
            // Display a toast message to fill in all required fields
            toast.error("Please fill in all required fields");
        } else if (uploadedOgImages.length === 0) {
            // Display a toast message indicating that ogImage is empty
            toast.error("Please provide ogImage");
        } else {
            // Proceed to the next tab
            setValue(value + 1);
        }
    };
    const handleNextTab4 = () => {
        // Check if the location fields in tab 4 are empty

        if (!areLocationFieldsFilled(selectedLocationAddress)) {
            // Display a toast message to fill in all property address details in tab 4
            toast.error("Please fill in all property address details.");
        } else {
            // Proceed to the next tab
            setValue(value + 1);

        }
    };




    const getOrdinal = (index) => {
        if (index + 1 === 11 || index + 1 === 12 || index + 1 === 13) {
            return `${index + 1}th`;
        } else {
            const suffixes = ["st", "nd", "rd"];
            const remainder = (index + 1) % 10;
            const suffix = suffixes[remainder - 1] || "th";
            return `${index + 1}${suffix}`;
        }
    };

    const handleAddFloor = () => {
        const lastFloorIndex = floorFields.length - 1;
        const lastFloor = floorFields[lastFloorIndex];
        if (lastFloor.floorTitle.trim() === "" || lastFloor.floorImgs.length === 0) {
            toast.error("Please fill the current floor details before adding a new one.");
        } else {
            const newFloorIndex = floorFields.length;
            setFloorFields([...floorFields, { floorTitle: "", floorImgs: [] }]);
            setCurrentFloorIndex(newFloorIndex);
        }
    };

    const handleRemoveFloor = (index, floorId) => {
        setRemoveFloorsId(prevIds => new Set([...prevIds, floorId]));
        const updatedFloorFields = [...floorFields];
        updatedFloorFields.splice(index, 1);
        setFloorFields(updatedFloorFields);
        // Update currentFloorIndex if it was removed
        if (index === currentFloorIndex) {
            setCurrentFloorIndex(Math.max(0, index - 1));
        }
    };
    useEffect(() => {



    }, [removeFloorsId, removeGalleryImgsId, removeDocId])
    const handleFloorInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedFloorFields = [...floorFields];
        updatedFloorFields[index][name] = value;
        setFloorFields(updatedFloorFields);
    };

    const onDropFloorImgs = (floorIndex, acceptedFiles) => {

        setFloorFields(prevFloorFields => {
            const updatedFloorFields = [...prevFloorFields];

            updatedFloorFields[floorIndex].floorImgs = [...updatedFloorFields[floorIndex]?.floorImgs, ...acceptedFiles];
            return updatedFloorFields;
        });
    };

    const removeFloorImgs = (floorIndex, imgIndex, imgId) => {
        setFloorFields(prevFloorFields => {
            const updatedFloorFields = [...prevFloorFields];
            updatedFloorFields[floorIndex].floorImgs.splice(imgIndex, 1);
            // Update currentFloorIndex if it was removed from the current floor
            // if (floorIndex === currentFloorIndex) {
            setCurrentFloorIndex(Math.max(0, floorIndex)); // Set it to the current index or to 0 if it's the last floor
            // }
            return updatedFloorFields;
        });
    };

    // const getInputPropsfloor = (floorIndex, imgIndex) => ({
    //     onClick: () => handleUploadClick(floorIndex, imgIndex)
    // });
    const { getRootProps: getRootPropsFloor, getInputProps: getInputPropsFloor, isDragActive: isDragActiveFloor } = useDropzone({
        onDrop: (acceptedFiles) => onDropFloorImgs(currentFloorIndex, acceptedFiles), // Pass the correct floor index directly
        accept: 'image/*',
        multiple: false
    });


    const floorsFiles = useMemo(
        () => floorFields.map((floor, index) => (
            <>
                <div key={index} className="dropbox_gallary_img_div">
                    {floor.floorImgs.map((file, imgIndex) => (
                        <div key={imgIndex}>
                            <img className="dropbox_img"
                                src={file instanceof File ? URL.createObjectURL(file) : file.url}
                                alt={file.name} />
                            <div className="dropbox_d">
                                <button className="dropbox_remove_img" onClick={() => removeFloorImgs(index, imgIndex, file.id)}>
                                    <CloseIcon fontSize='25px' />
                                </button>
                                <div className="dropbox_img_deatils">
                                    <span>{file.name}</span>
                                    {file instanceof File && (
                                        <span>{Math.round(file.size / 1024)} KB</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )),
        [floorFields]
    );

    const floorsContent = floorFields.map((floor, floorIndex) => (
        <div key={floorIndex} className="row floorfields">
            <div className="col-sm-12 col-md-6">
                <div className="add_prop_fields">
                    <span> {getOrdinal(floorIndex)}  Floor Title</span>
                    <input
                        type="text"
                        id="prop_title_input"
                        placeholder="Enter Floor Title"
                        name="floorTitle"
                        value={floor.floorTitle}
                        onChange={(e) => handleFloorInputChange(floorIndex, e)}
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="florimgandremove">
                    <div className="add_prop_fields">
                        <span>{getOrdinal(floorIndex)} Floor Images</span>
                        <div className="dropbox">
                            <div {...getRootPropsFloor(floorIndex)} className={`dropzone ${isDragActiveFloor ? "active" : ""}`}>
                                <input {...getInputPropsFloor(floorIndex)} />
                                {floor.floorImgs.length === 0 ? (
                                    isDragActiveFloor ? (
                                        <span>Drop files here...</span>
                                    ) : (
                                        <span>Drag 'n' drop some files here, or click to select files</span>
                                    )
                                ) : null}
                            </div>
                            <div>{floorsFiles[floorIndex]}</div>
                        </div>
                    </div>
                    {floorFields.length > 1 && (
                        <div className="removeFloor">
                            <button onClick={() => handleRemoveFloor(floorIndex, floor.id)}>
                                <IoMdRemoveCircleOutline />
                            </button>
                        </div>  
                    )}
                </div>
            </div>
        </div>
    ));


    useEffect(() => {
    }, [floorFields]);



    useEffect(() => { }, [tab1, floorFields, selectedLocationAddress, tab5]);

    const handlePostProject = async (e) => {
        e.preventDefault();

        try {
            if (!areFieldsFilled(tab1)) {
                // Display a toast message to fill in all required fields for Tab 1
                toast.error("Please fill in all required fields in Project Details");

                // Switch to Tab 1
                setValue(0);
            } else if (!areLocationFieldsFilled(selectedLocationAddress)) {
                // Display a toast message to fill in all required location fields
                toast.error("Please select a location with all required fields (city, state, country, and formatted_address)");
                // Switch to Tab 4
                setValue(4);
            } else if (!areFieldsFilled1(tab6)) {
                // Display a toast message to fill in all required location fields
                toast.error("Please fill in all required fields in Project Details");
                // Switch to Tab 4
                setValue(1);
            } else if (uploadedImages.length === 0) {
                // Display a toast message if Title Image is not selected
                toast.error("Please select a Title Image");

            } else {
                // Initialize an empty array for plans
                const plans = [];
                // Loop through floorFields and push each entry into plans array
                // Process floorImgs in floorFields
                for (const field of floorFields) {
                    const id = field.id;
                    const title = field.floorTitle;
                    const documents = field.floorImgs;
                    for (const document of documents) {
                       
                        // if (typeof document === 'object') {
                        plans.push({
                            id: id ? id : "",
                            title: title,
                            document: document instanceof File ? document : "",
                        });
                        // }
                    }
                }
                const removeFloorsArray = Array.from(removeFloorsId);
                const removeGalleryArray = Array.from(removeGalleryImgsId);
                const removeDocArray = Array.from(removeDocId);



                PostProjectApi({
                    id: defaultProjectData?.id,
                    title: tab1?.title,
                    description: tab1?.projectDesc,
                    category_id: tab1?.category,
                    type: tab1?.projectType,
                    meta_title: tab6?.MetaTitle,
                    meta_description: tab6?.MetaDesc,
                    meta_keywords: tab6?.MetaKeyword,
                    meta_image: tab6?.ogImages[0],
                    city: selectedLocationAddress.city,
                    state: selectedLocationAddress.state,
                    country: selectedLocationAddress.country,
                    latitude: selectedLocationAddress.lat,
                    longitude: selectedLocationAddress.lng,
                    location: selectedLocationAddress.formatted_address,
                    plans: plans,
                    image: tab5.titleImage[0],
                    documents: tab5.docs && tab5.docs,
                    gallery_images: tab5.galleryImages,
                    video_link: tab5.videoLink,
                    remove_plans: removeFloorsArray,
                    remove_gallery_images: removeGalleryArray,
                    remove_documents: removeDocArray,
                    onSuccess: async (response) => {
                        toast.success(response.message);
                        router.push("/user/projects");
                    },
                    onError: (error) => {
                        toast.error(error.message);
                        console.log(error)
                    }
                });
            }
        } catch (error) {

            console.error("An error occurred:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };



    useEffect(() => {
    }, [floorFields])


    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" id="addProp_tabs" style={{ overflowY: "auto" }}>
                    <Tab label={translate("projectDeatils")} {...a11yProps(0)} />
                    <Tab label={translate("SEOS")} {...a11yProps(1)} />
                    <Tab label={translate("location")} {...a11yProps(2)} />
                    <Tab label={translate("flor")} {...a11yProps(3)} />
                    <Tab label={translate("I&V&D")} {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <form>
                    <div className="row" id="add_prop_form_row">
                        <div className="col-sm-12 col-md-6">
                            <div id="add_prop_form">
                                <div className="add_prop_fields">
                                    <span>{translate("projectTypes")}</span>
                                    <div className="add_prop_types">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="upcomming" onChange={handlePropertyTypes} checked={tab1.projectType === "upcomming"} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                {translate("upcoming")}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="under_construction" onChange={handlePropertyTypes} checked={tab1.projectType === "under_construction"} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                {translate("underconstruction")}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="add_prop_fields">
                                    <span>{translate("category")}</span>
                                    <select className="form-select categories" aria-label="Default select" name="category" value={tab1.category} onChange={handleCategoryChange}>
                                        <option value="">{translate("selectProjectType")}</option>
                                        {/* Map over Categories and set the 'value' of each option to the 'id' */}
                                        {Categorydata &&
                                            Categorydata.map((ele, index) => (
                                                <option key={index} value={ele?.id}>
                                                    {ele?.category}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div className="add_prop_fields">
                                    <span>{translate("title")}</span>
                                    <input type="text" id="prop_title_input" placeholder="Enter Project Title" name="title" onChange={handleInputChange} value={tab1.title} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="add_prop_fields">
                                <span>{translate("projectDesc")}</span>
                                <textarea rows={10} id="about_prop" placeholder="Enter About Project" name="projectDesc" onChange={handleInputChange} value={tab1.projectDesc} />
                            </div>
                        </div>
                    </div>

                    <div className="nextButton">
                        <button type="button" onClick={handleNextTab}>
                            {translate("next")}
                        </button>
                    </div>
                </form>
            </CustomTabPanel>


            <CustomTabPanel value={value} index={1}>
                <form>
                    <div className="row" id="add_prop_form_row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div id="add_prop_form">
                                <div className="add_prop_fields">
                                    <span>{translate("metatitle")}</span>
                                    <input type="text" id="prop_title_input" placeholder="Enter Property Meta Title" name="MetaTitle" onChange={handleInputChange} value={tab6.MetaTitle} />
                                </div>
                                <p style={{ color: "#FF0000", fontSize: "smaller" }}> {translate("Warning: Meta Title")}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div id="add_prop_form">
                                <div className="add_prop_fields">
                                    <span>{translate("ogimage")}</span>
                                    <div className="dropbox">
                                        <div {...getRootPropsOgImage()} className={`dropzone ${isDragActiveOgImage ? "active" : ""}`}>
                                            <input {...getInputPropsOgImage()} />
                                            {uploadedOgImages.length === 0 ? (
                                                isDragActiveOgImage ? (
                                                    <span>{translate("dropFiles")}</span>
                                                ) : (
                                                    <span>
                                                        {translate("dragFiles")} <span style={{ textDecoration: "underline" }}> {translate("browse")}</span>
                                                    </span>
                                                )
                                            ) : null}
                                        </div>
                                        <div>{ogImageFiles}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div id="add_prop_form">
                                <div className="add_prop_fields">
                                    <span>{translate("metakeyword")}</span>
                                    <textarea rows={5} id="about_prop" placeholder="Enter Property Meta Keywords" name="MetaKeyword" onChange={handleInputChange} value={tab6.MetaKeyword} />
                                </div>
                                <p style={{ color: "#FF0000", fontSize: "smaller" }}>{translate("Warning: Meta Keywords")}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="add_prop_fields">
                                <span>{translate("metadescription")}</span>
                                <textarea rows={5} id="about_prop" placeholder="Enter Property Meta Description" name="MetaDesc" onChange={handleInputChange} value={tab6.MetaDesc} />

                            </div>
                            <p style={{ color: "#FF0000", fontSize: "smaller" }}>{translate("Warning: Meta Description")}</p>
                        </div>
                    </div>

                    <div className="nextButton">
                        <button type="button" onClick={handleNextTab2}>
                            {translate("next")}
                        </button>
                    </div>
                </form>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
                <form>
                    <div className="row" id="add_prop_form_row">
                        <div className="col-sm-12 col-md-6">
                            <div className="row" id="add_prop_form_row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="add_prop_fields">
                                        <span>{translate("city")}</span>
                                        <input type="text" id="prop_title_input" placeholder="Enter City" name="city" value={selectedLocationAddress.city} onChange={handleTab4InputChange} />
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="add_prop_fields">
                                        <span>{translate("state")}</span>
                                        <input type="text" id="prop_title_input" placeholder="Enter State" name="state" value={selectedLocationAddress.state} onChange={handleTab4InputChange} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="add_prop_fields">
                                        <span>{translate("country")}</span>
                                        <input type="text" id="prop_title_input" placeholder="Enter Country" name="country" value={selectedLocationAddress.country} onChange={handleTab4InputChange} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="add_prop_fields">
                                        <span>{translate("address")}</span>
                                        <textarea rows={4} id="about_prop" placeholder="Enter Full Address" name="formatted_address" value={selectedLocationAddress.formatted_address} onChange={handleTab4InputChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="map">
                                <GoogleMapBox apiKey={GoogleMapApi} onSelectLocation={handleLocationSelect} latitude={lat} longitude={lng} />
                            </div>
                        </div>
                    </div>

                    <div className="nextButton">
                        <button type="button" onClick={handleNextTab4}>
                            {translate("next")}
                        </button>
                    </div>
                </form>
            </CustomTabPanel>


            <CustomTabPanel value={value} index={3}>
                <div className="add_prop_form">
                    {floorsContent}
                    <button className="add_floor" onClick={handleAddFloor}>{translate("addFloor")}</button>
                </div>
                <div className="nextButton">
                    <button type="button" onClick={handleNextTab4}>
                        {translate("next")}
                    </button>
                </div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={4}>
                {/* <form> */}
                <div className="row" id="add_prop_form_row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="add_prop_fields">
                            <span>{translate("projecttitleImg")}</span>
                            <div className="dropbox">
                                <div {...getRootProps()} className={`dropzone ${isDragActive ? "active" : ""}`}>
                                    <input {...getInputProps()} />
                                    {uploadedImages.length === 0 ? (
                                        isDragActive ? (
                                            <span>{translate("dropFiles")}</span>
                                        ) : (
                                            <span>
                                                {translate("dragFiles")} <span style={{ textDecoration: "underline" }}> {translate("browse")}</span>
                                            </span>
                                        )
                                    ) : null}
                                </div>
                                <div>{files}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="add_prop_fields">
                            <span>{translate("docs")}</span>
                            <div className="dropbox">
                                <div {...getRootPropsDocuments()} className={`dropzone ${isDragActiveDocuments ? "active" : ""}`}>
                                    <input {...getInputPropsDocuments({ multiple: true })} /> {/* Update here */}
                                    {uploadedDocuments.length === 0 ? (
                                        isDragActiveDocuments ? (
                                            <span>{translate("dropFiles")}</span>
                                        ) : (
                                            <span>
                                                {translate("dragFiles")} <span style={{ textDecoration: "underline" }}> {translate("browse")}</span>
                                            </span>
                                        )
                                    ) : null}
                                </div>
                                <div className="docs_files">{documentFiles}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="add_prop_fields">
                            <span>{translate("GallryImg")}</span>
                            <div className="dropbox">
                                <div {...getRootPropsGallery()} className={`dropzone ${isDragActiveGallery ? "active" : ""}`}>
                                    <input {...getInputPropsGallery()} />

                                    {isDragActiveGallery ? (
                                        <span>{translate("dropgallaryFiles")}</span>
                                    ) : (
                                        <span>
                                            {translate("draggallaryFiles")} <span style={{ textDecoration: "underline" }}> {translate("browse")}</span>
                                        </span>
                                    )}
                                </div>
                                <div>{galleryFiles}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <div className="add_prop_fields">
                            <span>{translate("videoLink")}</span>
                            <input type="input" id="prop_title_input" name="videoLink" placeholder="Enter Video Link" value={tab5.videoLink} onChange={handleVideoInputChange} />
                        </div>
                    </div>
                </div>

                <div className="updateButton">
                    <button type="submit" onClick={handlePostProject}>
                        {translate("submitProp")}
                    </button>
                </div>
                {/* </form> */}
            </CustomTabPanel>

        </Box>
    );
}