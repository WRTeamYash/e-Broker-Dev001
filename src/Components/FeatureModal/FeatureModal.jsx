import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useDropzone } from 'react-dropzone';
import { featurePropertyApi } from '@/store/actions/campaign';
import { settingsData } from '@/store/reducer/settingsSlice';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const FeatureModal = ({ show, onHide, propertyId }) => {
    const [selectedOption, setSelectedOption] = useState('HomeScreen');
    const [uploadedImages, setUploadedImages] = useState([]);


    const packageDetails = useSelector(settingsData);
    const currentUserPackage = packageDetails?.package?.user_purchased_package;
    const packageId = currentUserPackage[0]?.package.id;
    // console.log(packageId)


    const router = useRouter()

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleImageUpload = (acceptedFiles) => {
        // Append the uploaded files to the uploadedImages state
        setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
        console.log(uploadedImages)
    };
    useEffect(() => {

    }, [uploadedImages])
    const handleFeature = () => {

        // console.log('Selected Option:', selectedOption);
        // console.log('Uploaded Images:', uploadedImages);
        featurePropertyApi(
            packageId,
            propertyId,
            selectedOption,
            uploadedImages[0] ? uploadedImages[0] : "",
            (response) => {
                // console.log(response)
                toast.success(response.message)
                onHide();
                router.push('/user/advertisement')
            },
            (error) => {
                console.log(error)
                toast.success(error)

            }
        )
        // Close the modal
    };

    const removeImage = (index) => {
        // Remove an image from the uploadedImages state by index
        setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleImageUpload,
        accept: 'image/*', // Accept only image files
    });

    const files = useMemo(
        () =>
            uploadedImages.map((file, index) => (
                <div key={index} className="dropbox_img_div">
                    <img className="dropbox_img" src={URL.createObjectURL(file)} alt={file.name} />
                    <div className="dropbox_d">
                        <button className="dropbox_remove_img" onClick={() => removeImage(index)}>
                            <RiCloseCircleLine size="25px" />
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

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            className="feature-modal"
            backdrop="static"
        >
            <Modal.Header>
                <Modal.Title>Feature Property</Modal.Title>
                <RiCloseCircleLine
                    className="close-icon"
                    size={40}
                    onClick={onHide}
                />
            </Modal.Header>
            <Modal.Body>
                <div className="feature_div">
                    <span className='feature_form_titles'>Select Type</span>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div
                                className={selectedOption === 'HomeScreen' ? 'selectedOptionStyles' : 'optionStyles'}
                                onClick={() => handleOptionChange('HomeScreen')}
                            >
                                Home
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div
                                className={selectedOption === 'Slider' ? 'selectedOptionStyles' : 'optionStyles'}
                                onClick={() => handleOptionChange('Slider')}
                            >
                                Slider
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div
                                className={selectedOption === 'ProductListing' ? 'selectedOptionStyles' : 'optionStyles'}
                                onClick={() => handleOptionChange('ProductListing')}
                            >
                                List
                            </div>
                        </div>
                    </div>
                </div>
                {selectedOption === 'Slider' && (
                    <div className="slider_img">
                        <span className='feature_form_titles'>Pick Slider Image</span>
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
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="" id='promote_button' onClick={handleFeature}>
                    Promote
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FeatureModal;
