import React, { useEffect, useRef } from 'react';
import './panoramaStyle.css';

const PanoramaViewer = ({ uniqueId }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const krpanoViewerPath = '/app/components/panorama/js/krpano.js';
    const krpanoConfigPath = '/app/components/panorama/js/krpano.xml';

    // Dynamically create a script element for the Krpano viewer
    const script = document.createElement('script');
    script.src = krpanoViewerPath;
    script.async = true;

    // Attach a callback to initialize the viewer once the script is loaded
    script.onload = () => {
      window.embedpano({
        swf: krpanoViewerPath,
        xml: krpanoConfigPath,
        target: viewerRef.current,
        html5: 'auto',
        mobilescale: 1.0,
        passQueryParameters: true,
      });
    };

    // Append the script to the document's head
    document.head.appendChild(script);

    // Clean up: remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={viewerRef} id={uniqueId}></div>;
};

export default PanoramaViewer;
