import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { RiCloseCircleLine } from 'react-icons/ri';
import ReactPlayer from 'react-player';

const VideoPlayerModal = ({ isOpen, onClose, data }) => {
    const stripHtmlTags = (htmlString) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        return tempDiv.textContent || tempDiv.innerText || '';
    };
    const videoData = data
    console.log(videoData)
    return (
        <>
            <Modal show={isOpen} onHide={onClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='videoPlayer-modal'
                backdrop="static"
            >
                {/* property_title */}
                <Modal.Header>
                    <Modal.Title>{stripHtmlTags(videoData.property_title).substring(0, 100) + '...'}</Modal.Title>
                    <RiCloseCircleLine className='close-icon' size={40} onClick={onClose} />
                </Modal.Header>
                <Modal.Body>
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        url={videoData && videoData.video_link}
                        // playing={play}
                        controls={true}
                    />
                </Modal.Body>
            </Modal >
        </>
    )
}

export default VideoPlayerModal
