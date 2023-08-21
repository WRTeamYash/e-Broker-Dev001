import React from 'react';
import Skeleton from 'react-loading-skeleton';


const CustomSkeleton = () => {
  return (

    <div className='card' id='main_card'>
      {/* Card Image */}
      <div>
        <Skeleton width="100%" height="26vh" className="skeleton_img" />
      </div>
      <div className='card-img-overlay'>
        { /* Feature tag */}
        <Skeleton width="80px" height="20px" />
        {/* Like tag */}
        {/* <Skeleton width="35px" height="35px" /> */}
      </div>
      <div className='card-body'>
        {/* Property Type */}
        {/* <Skeleton width="65px" height="20px" /> */}
        {/* Price */}
        {/* <Skeleton width="60px" height="20px" /> */}
        <div id='feature_card_mainbody'>
          <div className="cate_image">
            {/* Category Image */}
            <Skeleton width="20px" height="20px" />
          </div>
          {/* Category */}
          <Skeleton width="100px" height="20px" />
        </div>
        <div id='feature_card_middletext'>
          {/* Title */}
          <Skeleton width="100%" height="20px" />
          {/* Location */}
          <Skeleton width="100%" height="16px" />
        </div>
      </div>
      <div className='card-footer' id='skeleton_card_footer'>
        <div className="row">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="col-sm-12 col-md-6 " key={index}>
              <div id='skeleton_footer_content' key={index}>
                {/* Parameter Image */}
                <Skeleton width="20px" height="16px" />
                {/* Parameter Name */}
                <Skeleton width="80px" height="16px" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default CustomSkeleton;
