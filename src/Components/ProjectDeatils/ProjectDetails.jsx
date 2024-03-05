"use client"
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import Image from "next/image";
import { PiPlayCircleThin } from "react-icons/pi";
import ReactPlayer from "react-player";
import SimilerPropertySlider from "@/Components/SimilerPropertySlider/SimilerPropertySlider";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useSelector } from "react-redux";
import Map from "@/Components/GoogleMap/GoogleMap";
import { languageData } from "@/store/reducer/languageSlice";
import { isThemeEnabled, translate } from "@/utils";
import { useRouter } from "next/router";
import { GetFeturedListingsApi, intrestedPropertyApi, setPropertyTotalClicksApi } from "@/store/actions/campaign";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import LightBox from "@/Components/LightBox/LightBox";
import Loader from "@/Components/Loader/Loader";
import toast from "react-hot-toast";
import { isSupported } from "firebase/messaging";
import { ImageToSvg } from "@/Components/Cards/ImageToSvg";
import Swal from "sweetalert2";
import ReportPropertyModal from "@/Components/ReportPropertyModal/ReportPropertyModal";
import { getChatData } from "@/store/reducer/momentSlice";
import OwnerDeatilsCard from "../OwnerDeatilsCard/OwnerDeatilsCard";
import PremiumOwnerDetailsCard from "../OwnerDeatilsCard/PremiumOwnerDetailsCard";
import Layout from "../Layout/Layout";

const ProjectDetails = () => {
    const router = useRouter();
    const propId = router.query;
  return (
    <Layout>
      {/* <Bre */}
    </Layout>
  )
}

export default ProjectDetails
