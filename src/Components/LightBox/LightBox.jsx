import React, { useCallback, useState } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const LightBox = ({ photos, viewerIsOpen, currentImage, onClose }) => {
    // const openLightbox = useCallback((event, { photo, index }) => {
    //     currentImage !== index && onClose(); // Close the lightbox if a different image is clicked
    //     setCurrentImage(index);
    //     setViewerIsOpen(true);
    // }, [currentImage, onClose]);

    // const closeLightbox = () => {
    //     setCurrentImage(0);
    //     setViewerIsOpen(false);
    // };

    // const [currentImage, setCurrentImage] = useState(currentImage || 0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(viewerIsOpen || false);

    if (!photos || photos.length === 0) {
        // Handle the case when photos is undefined or empty.
        return null
    }

    return (
        <div>
            {/* <Gallery photos={photos} onClick={openLightbox} /> */}
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={onClose}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((photo, index) => {
                                // Check if the 'regular' property exists before accessing it
                                const regularSrc = photo.image_url || ''; // Provide a default value if 'regular' doesn't exist
                                return {
                                    ...photo,
                                    src: regularSrc,
                                    srcset: `${regularSrc} ${index + 1}`,
                                    caption: `${photo.caption || ''} ${index + 1}` // Provide a default caption if it doesn't exist
                                };
                            })}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default LightBox;
