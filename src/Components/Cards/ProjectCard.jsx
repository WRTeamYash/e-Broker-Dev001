import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCrown } from 'react-icons/fa';
import { ImageToSvg } from './ImageToSvg';
import { isThemeEnabled } from '@/utils';
import Image from 'next/image';

// Initialize Swiper core modules
SwiperCore.use([Autoplay, Navigation]);

const ProjectCard = ({ ele }) => {
    const titleImage = ele.title_image;
    const galleryImages = ele.gallery.filter(image => typeof image === 'object').map(image => image.image_url);
    const images = [titleImage, ...galleryImages]?.slice(0, 3);
    const cardRef = useRef();
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [autoplayInterval, setAutoplayInterval] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
  
    useEffect(() => {
      if (swiperInstance) {
        if (isHovered) {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      }
    }, [isHovered]);
  
    const startAutoplay = () => {
      // Start autoplay interval
      setAutoplayInterval(setInterval(() => {
        swiperInstance?.slideNext?.(); // Use optional chaining
      }, 2000)); // Adjust the delay as needed
    };
  
    const stopAutoplay = () => {
      // Clear autoplay interval
      clearInterval(autoplayInterval);
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const handlePrev = () => {
      // Slide to previous item
      swiperInstance?.slidePrev?.(); // Use optional chaining
    };
  
    const handleNext = () => {
      // Slide to next item
      swiperInstance?.slideNext?.(); // Use optional chaining
    };
  
    const themeEnabled = isThemeEnabled();
  
  return (
    <div ref={cardRef} className="project_card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="card project_main_card">
      <div className="card-body">
        <div className="cate_image">
          {themeEnabled ? (
            <ImageToSvg imageUrl={ele.category && ele.category.image} className="custom-svg" />
          ) : (
            <Image loading="lazy" src={ele.category && ele.category.image} alt="no_img" width={20} height={20} />
          )}
          <span className="project_body_title">{ele.category && ele.category.category}</span>
        </div>
        <div className="project_card_middletext">
          <span>{ele.title}</span>
          <p>
            {ele.city} {ele.city ? ',' : null} {ele.state} {ele.state ? ',' : null} {ele.country}
          </p>
        </div>
      </div>
      <div className="cardImg_swiper">
        <Swiper
          onSwiper={setSwiperInstance}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            prevEl: '.project_prev',
            nextEl: '.project_next',
          }}
          className="project-swiper"
        >
          {images &&
            images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="project_img">
                  <Image width={0} height={0} src={image} alt="images" />
                  <div className="project_next" onClick={handleNext}>
                    <span>
                      <FaArrowRight size={20} />
                    </span>
                  </div>
                  <div className="project_prev" onClick={handlePrev}>
                    <span>
                      <FaArrowLeft size={20} />
                    </span>
                  </div>
                  <div className="project_premium_icon">
                    <span>
                      <FaCrown size={20} />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  </div>
);
};

export default ProjectCard;
