import React from "react";
import FSLightbox from "fslightbox-react";

const LightBox = ({ photos, viewerIsOpen, currentImage, onClose, title_image }) => {
  if (!photos || photos.length === 0) {
    // Handle the case when photos is undefined or empty.
    return null;
  }

  // Create an array to include title_image at index 0
  const lightboxPhotos = title_image ? [{ image_url: title_image }, ...photos] : photos;

  return (
    <FSLightbox
      toggler={viewerIsOpen}
      sources={lightboxPhotos.map((photo) => photo.image_url || "")}
      sourceIndex={currentImage}
      onClose={onClose}
    />
  );
};

export default LightBox;
