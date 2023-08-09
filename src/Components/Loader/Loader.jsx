import React from 'react'
// import Lottie from 'react-lottie';
// import  animationData  from "../../lotties/loading.json"

const Loader = () => {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid meet",
    //         progressiveLoad: true,
    //         hideOnTransparent: true,
    //         clearCanvas: true,
    //     }
    // };

    return (
        <>
            <div className="loader-container">
                <div className="loader"></div>
            </div>
            {/* <Lottie
                options={defaultOptions}
                height={100}
                width={100}
            /> */}
        </>
    )
}

export default Loader
