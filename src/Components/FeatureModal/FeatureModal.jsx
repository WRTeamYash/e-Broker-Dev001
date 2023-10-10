import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { RiCloseCircleLine } from 'react-icons/ri';

const FeatureModal = ({ show, onHide, propertyId }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        console.log('Selected Option:', option); // Add this line
    };
    const handleFeature = () => {
        // Pass the selectedOption to your API or handle it as needed
        // For demonstration, we'll just log the selected option
        console.log('Selected Option:', selectedOption);

        // Close the modal
        onHide();
    };

    const optionStyles = {
        background: '',
        borderRadius: '8px',
        opacity: 1,
        cursor: 'pointer',
        transition: 'background 0.3s',
        padding: '10px',
        margin: '5px',
        textAlign: 'left',
        border: '1px solid #E1E1E1',
    };

    const selectedOptionStyles = {
        background: '#087c7c',
        color: '#FFFFFF',
        borderRadius: '8px',
        opacity: 1,
        cursor: 'pointer',
        transition: 'background 0.3s',
        padding: '10px',
        margin: '5px',
        textAlign: 'left',
    };

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
                {/* <RiCloseCircleLine
                    className="close-icon"
                    size={40}
                    onClick={onHide}
                /> */}
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div
                                // style={
                                //     selectedOption === 'HomeScreen'
                                //         ? selectedOptionStyles
                                //         : optionStyles
                                // }
                                className={selectedOption === 'HomeScreen' ? "selectedOptionStyles" : "optionStyles"}

                                onClick={() => handleOptionChange('HomeScreen')}
                            >
                                Home
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div
                                className={selectedOption === 'Slider' ? "selectedOptionStyles" : "optionStyles"}

                                onClick={() => handleOptionChange('Slider')}
                            >
                                Slider
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div
                                className={selectedOption === 'ProductListing' ? "selectedOptionStyles" : "optionStyles"}

                                onClick={() => handleOptionChange('ProductListing')}
                            >
                                List
                            </div>

                        </div>
                    </div>
                    {/* {selectedOption === 'Slider' && (
                        <div>
                                                      <Form.File
                                id="custom-file"
                                label="Upload Slider Image"
                                custom
                            />
                        </div>
                    )} */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleFeature}>
                    Feature
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
export default FeatureModal; // Make sure to use 'export default'
