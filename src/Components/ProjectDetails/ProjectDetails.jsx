"use client"
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GetFeturedListingsApi } from "@/store/actions/campaign";
import toast from "react-hot-toast";
import Layout from "../Layout/Layout";
import { CiLink, CiLocationOn } from "react-icons/ci";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";
import { Dropdown, Menu } from "antd";
import { FiShare2 } from "react-icons/fi";
import Loader from "../Loader/Loader";
import { settingsData } from "@/store/reducer/settingsSlice";
import LightBox from "../LightBox/LightBox";
import { translate } from "@/utils";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Map from "../GoogleMap/GoogleMap";
import { PiPlayCircleThin } from "react-icons/pi";
import ReactPlayer from "react-player";

import FloorAccordion from "../FloorAccordion/FloorAccordion";
import { ImageToSvg } from "../Cards/ImageToSvg";
import { BiDownload } from "react-icons/bi";
import { BsFiletypeDoc, BsFiletypePdf } from "react-icons/bs";
import OwnerDeatilsCard from "../OwnerDeatilsCard/OwnerDeatilsCard";
import Swal from "sweetalert2";
import SimilerProjectSlider from "../SimilerProjectSlider/SimilerProjectSlider";
const ProjectDetails = () => {
  const router = useRouter();
  const ProjectSlug = router.query;
  const SettingsData = useSelector(settingsData);
  const isPremiumUser = SettingsData && SettingsData.is_premium;
  const isSubscription = SettingsData && SettingsData.subscription;
  const isLoggedIn = useSelector((state) => state.User_signup);
  const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null
  const PlaceHolderImg = SettingsData?.web_placeholder_logo;


  const [isLoading, setIsLoading] = useState(true);
  const [projectData, setProjectData] = useState()
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [manualPause, setManualPause] = useState(false); // State to track manual pause
  const [seekPosition, setSeekPosition] = useState(0);
  const [showThumbnail, setShowThumbnail] = useState(true);

 
  useEffect(() => {
    if (!isSubscription && !isPremiumUser) {
      Swal.fire({
        title: "Opps!",
        text: "You are not premium user sorry!",
        icon: "warning",
        allowOutsideClick: false,
        showCancelButton: false,
        customClass: {
            confirmButton: 'Swal-confirm-buttons',
            cancelButton: "Swal-cancel-buttons"
        },
        confirmButtonText: "Ok",
    }).then((result) => {
        if (result.isConfirmed) {
           router.push("/")
        }
    });
    }
  }, [isSubscription, isPremiumUser])

  useEffect(() => {
    setIsLoading(true);
    if (ProjectSlug.slug && ProjectSlug.slug != "") {
      GetFeturedListingsApi({
        current_user: isLoggedIn ? userCurrentId : "",
        slug_id: ProjectSlug.slug,
        onSuccess: (response) => {
          const ProjectData = response && response.data;
          setIsLoading(false);
          setProjectData(ProjectData[0]);

        },
        onError: (error) => {
          setIsLoading(false);
          console.log(error);
        }
      }
      );
    }
  }, [isLoggedIn, ProjectSlug]);
  const CompanyName = settingsData && settingsData?.company_name
  const currentUrl = `${process.env.NEXT_PUBLIC_WEB_URL}${router.asPath}`;
  const handleCopyUrl = async (e) => {
    e.preventDefault();

    // Get the current URL from the router

    try {
      // Use the Clipboard API to copy the URL to the clipboard
      await navigator.clipboard.writeText(currentUrl);
      toast.success("URL copied to clipboard!");
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      // toast.error("Failed to copy URL to clipboard.");
    }
  };
  const shareMenu = (
    <Menu>
      <Menu.Item key="1">
        <FacebookShareButton url={currentUrl} title={projectData?.title + CompanyName} hashtag={CompanyName}>

          <FacebookIcon size={30} round /> {""} {translate("Facebook")}

        </FacebookShareButton>
      </Menu.Item>
      <Menu.Item key="2">
        <TwitterShareButton url={currentUrl} title={projectData?.title + CompanyName} hashtag={CompanyName}>

          <XIcon size={30} round /> {""} {translate("Twitter")}

        </TwitterShareButton>
      </Menu.Item>
      <Menu.Item key="3">
        <WhatsappShareButton url={currentUrl} title={projectData?.title + "" + " - " + "" + CompanyName} hashtag={CompanyName}>

          <WhatsappIcon size={30} round /> {""} {translate("Whatsapp")}

        </WhatsappShareButton>
      </Menu.Item>
      <Menu.Item key="4">
        <span onClick={handleCopyUrl}>
          <CiLink size={30} /> {""} {translate("Copy Link")}
        </span>
      </Menu.Item>
    </Menu>
  );

  const handleShowMap = (e) => {
    e.preventDefault()
    setShowMap(true);
  }
  useEffect(() => {
    return () => {
      setShowMap(false);
    };
  }, [userCurrentId, ProjectSlug]);



  const galleryPhotos = projectData && projectData.gallery;

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };
  const getVideoType = (videoLink) => {
    if (videoLink && (videoLink.includes("youtube.com") || videoLink.includes("youtu.be"))) {
      return "youtube";
    } else if (videoLink && videoLink.includes("drive.google.com")) {
      return "google_drive";
    } else {
      return "unknown";
    }
  };
  const videoLink = projectData && projectData.video_link;
  const videoType = getVideoType(videoLink);
  const videoId = videoLink ? videoLink.split("/").pop().split("?")[0] : null;
  const backgroundImageUrl = videoId ? `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` : PlaceHolderImg;

  const handleVideoReady = (state) => {
    setPlaying(state);
    setShowThumbnail(!state);
  };

  const handleSeek = (e) => {
    if (e && typeof e.playedSeconds === "number") {
      setSeekPosition(parseFloat(e.playedSeconds));
    }
  };

  const handleSeekEnd = () => {
    setShowThumbnail(false);
  };

  const handlePause = () => {
    setManualPause(true); // Manually pause the video
    setPlaying(false);
    setShowThumbnail(true); // Reset showThumbnail to true
  };


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <Breadcrumb title="Project Details" />
          <section id="project_details">
            <div className="project_main_details">
              <div className="container">
                <div className="project_div">
                  <div className="project_right_details">
                    <span className="prop_types">{projectData?.category?.category}</span>
                    <span className="prop_name">{projectData?.title}</span>
                    <span className="prop_Location">
                      <CiLocationOn size={25} /> {projectData?.address}
                    </span>
                  </div>
                  <div className="project_left_details">
                    {process.env.NEXT_PUBLIC_SEO === "true" ? (
                      <Dropdown overlay={shareMenu} placement="bottomCenter" arrow>
                        <button className="share_project">
                          <FiShare2 size={25} />
                        </button>
                      </Dropdown>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="project_otherDetails">
              <div className="container">
                {galleryPhotos && galleryPhotos.length > 0 ? (
                  <div className="row" id="prop-images">
                    {galleryPhotos.length < 2 ? (
                      <>
                        <div className="col-sm-12 col-md-6" id="prop-main-image">
                          <Image
                            loading="lazy"
                            src={projectData?.title_image || PlaceHolderImg}
                            className="two-img01"
                            alt="Main Image" width={200}
                            height={200}
                            onClick={() => openLightbox(0)} />
                        </div>
                        <div className="col-sm-12 col-md-6" id="prop-main-image">
                          <Image
                            loading="lazy"
                            src={galleryPhotos[0]?.image_url || PlaceHolderImg}
                            className="two-img02"
                            alt="Main Image"
                            width={200}
                            height={200}
                            onClick={() => openLightbox(1)} />
                          <div className="see_all02">
                            <button onClick={() => openLightbox(0)}>{translate("seeAllPhotos")}</button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-lg-4 col-sm-12" id="prop-left-images">
                          <Image
                            loading="lazy"
                            src={galleryPhotos[0]?.image_url || PlaceHolderImg}
                            className="left-imgs01"
                            alt="Image 1"
                            width={200}
                            height={200}
                            onClick={() => openLightbox(1)}
                          />
                          <Image
                            loading="lazy"
                            src={galleryPhotos[1]?.image_url || PlaceHolderImg}
                            className="left-imgs02"
                            alt="Image 2"
                            width={200}
                            height={200}
                            onClick={() => openLightbox(2)}
                          />
                        </div>
                        <div className="col-lg-8 col-sm-12 text-center" id="prop-main-image">
                          <Image
                            loading="lazy"
                            src={projectData?.title_image || PlaceHolderImg}
                            className="middle-img"
                            alt="Main Image"
                            width={200}
                            height={200}
                            onClick={() => openLightbox(0)}
                          />
                          <div className="see_all">
                            <button onClick={() => openLightbox(0)}>{translate("seeAllPhotos")}</button>
                          </div>
                        </div>
                      </>

                    )}
                  </div>
                ) :
                  <div className="row" id="prop-images">
                    <div className="col-12" id="prop-main-image01">
                      <Image
                        loading="lazy"
                        src={projectData?.title_image || PlaceHolderImg}
                        className="one-img"
                        alt="Main Image"
                        width={200}
                        height={200}
                        onClick={() => openLightbox(0)} />
                    </div>
                  </div>
                }


                <LightBox photos={galleryPhotos} viewerIsOpen={viewerIsOpen} currentImage={currentImage} onClose={setViewerIsOpen} title_image={projectData?.title_image} setViewerIsOpen={setViewerIsOpen} setCurrentImage={setCurrentImage} />


                <div className="row" id="prop-all-deatils-cards">
                  <div className="col-12 col-md-12 col-lg-9" id="prop-deatls-card">
                    {projectData && projectData.description ? (
                      <div className="card about-propertie">
                        <div className="card-header">{translate("aboutProject")}</div>
                        <div className="card-body">
                          {projectData && projectData.description && (
                            <>
                              <p>{expanded ? projectData.description : projectData.description.substring(0, 100) + "..."}</p>
                              {projectData.description.length > 100 && (
                                <button onClick={() => setExpanded(!expanded)}>
                                  {expanded ? "Show Less" : "Show More"}
                                  <AiOutlineArrowRight className="mx-2" size={18} />
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ) : null}

                    {projectData && projectData.latitude && projectData.longitude ? (
                      <div className="card" id="propertie_address">
                        <div className="card-header">{translate("address")}</div>
                        <div className="card-body">
                          <div className="row" id="prop-address">
                            <>
                              <div className="adrs">
                                <div>
                                  <span> {translate("address")}</span>
                                </div>
                                <div className="">
                                  <span> {translate("city")}</span>
                                </div>
                                <div className="">
                                  <span> {translate("state")}</span>
                                </div>
                                <div className="">
                                  <span> {translate("country")}</span>
                                </div>
                              </div>
                              <div className="adrs02">
                                <div className="adrs_value">
                                  <span>{projectData && projectData.address}</span>
                                </div>
                                <div className="adrs_value">
                                  <span className="">{projectData && projectData.city}</span>
                                </div>

                                <div className="adrs_value">
                                  <span className="">{projectData && projectData.state}</span>
                                </div>
                                <div className="adrs_value">
                                  <span className="">{projectData && projectData.country}</span>
                                </div>
                              </div>
                            </>

                          </div>
                          {projectData ? (
                            <div className="card google_map">
                              {showMap ? (
                                <Map latitude={projectData.latitude} longitude={projectData.longitude} />
                              ) : (
                                <>
                                  <div className="blur-background" />
                                  <div className="blur-container">
                                    <div className="view-map-button-div">
                                      <button onClick={handleShowMap} id="view-map-button">
                                        {translate("ViewMap")}
                                      </button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ) : null}


                    {projectData && projectData.video_link ? (
                      <div className="card" id="prop-video">
                        <div className="card-header">{translate("video")}</div>
                        <div className="card-body">
                          {!playing ? (
                            <div
                              className="video-background container"
                              style={{
                                backgroundImage: backgroundImageUrl,
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                              }}
                            >
                              <div id="video-play-button">
                                <button onClick={() => setPlaying(true)}>
                                  <PiPlayCircleThin className="button-icon" size={80} />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <ReactPlayer
                                width="100%"
                                height="500px"
                                url={projectData && projectData.video_link}
                                playing={playing}
                                controls={true}
                                onPlay={() => handleVideoReady(true)}
                                onPause={() => {
                                  setManualPause(true); // Manually pause the video
                                  handlePause();
                                }}
                                onEnded={() => setPlaying(false)}
                                onProgress={handleSeek}
                                onSeek={handleSeek}
                                onSeekEnd={handleSeekEnd}
                              />

                            </div>
                          )}
                        </div>
                      </div>
                    ) : null}

                    <div className="card" id="floor_plans">
                      <div className="card-header">{translate("floorPlans")}</div>
                      <div className="card-body">
                        <FloorAccordion />
                      </div>
                    </div>


                    <div className="card" id="download_docs">
                      <div className="card-header">{translate("docs")}</div>
                      <div className="card-body">
                        <div className="row doc_row">
                          <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="docs_main_div">
                              <div className="doc_icon">
                                {/* <FaRegFilePdf size={30} /> */}
                                <BsFiletypePdf size={30} />


                              </div>
                              <div className="doc_title">
                                <span>
                                  Villa-Document-1.pdf
                                </span>
                              </div>
                              <div className="doc_download_button">
                                <button>
                                  <span>
                                    <BiDownload size={20} />
                                  </span>
                                  <span>
                                    Download
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="docs_main_div">
                              <div className="doc_icon">
                                <BsFiletypeDoc size={30} />

                              </div>
                              <div className="doc_title">
                                <span>
                                  Villa-Document-1.pdf
                                </span>
                              </div>
                              <div className="doc_download_button">
                                <button>
                                  <span>
                                    <BiDownload size={20} />
                                  </span>
                                  <span>
                                    Download
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="docs_main_div">
                              <div className="doc_icon">
                                {/* <FaRegFilePdf size={30} /> */}
                                <BsFiletypePdf size={30} />


                              </div>
                              <div className="doc_title">
                                <span>
                                  Villa-Document-1.pdf
                                </span>
                              </div>
                              <div className="doc_download_button">
                                <button>
                                  <span>
                                    <BiDownload size={20} />
                                  </span>
                                  <span>
                                    Download
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="docs_main_div">
                              <div className="doc_icon">
                                {/* <FaRegFilePdf size={30} /> */}
                                <BsFiletypePdf size={30} />


                              </div>
                              <div className="doc_title">
                                <span>
                                  Villa-Document-1.pdf
                                </span>
                              </div>
                              <div className="doc_download_button">
                                <button>
                                  <span>
                                    <BiDownload size={20} />
                                  </span>
                                  <span>
                                    Download
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-12 col-md-12 col-lg-3">
                    <OwnerDeatilsCard
                      getPropData={projectData}
                      userCurrentId={userCurrentId}
                      PlaceHolderImg={PlaceHolderImg}
                    />
                  </div>
                </div>

                <SimilerProjectSlider />
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  )
}

export default ProjectDetails
