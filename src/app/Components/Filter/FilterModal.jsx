import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const FilterModal = ({ isOpen, onClose }) => {
    return (
        <>
            <Modal show={isOpen} onHide={onClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Filter</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                   
                </Modal.Body>
                <Modal.Footer className='filter-footer'>
                    

                </Modal.Footer>
            </Modal >
        </>
    )
}

export default FilterModal