"use client"
import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar.jsx";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useSelector } from "react-redux";
import { settingsData } from "@/store/reducer/settingsSlice";
import {  getPackagesApi } from "@/store/actions/campaign";
import { Progress } from "antd";
import { translate } from "@/utils/index.js";
import { languageData } from "@/store/reducer/languageSlice.js";
import dynamic from "next/dynamic.js";
import { useRouter } from "next/router.js";
import toast from "react-hot-toast";
const VerticleLayout = dynamic(() => import('../AdminLayout/VerticleLayout.jsx'), { ssr: false })
const UserSubScription = () => {


    const [getlimitsData, setGetLimitsData] = useState();

    const [packagedata, setPackageData] = useState([]);
    const packageDetails = useSelector(settingsData);
    
    const router = useRouter()
    const CurrencySymbol = packageDetails && packageDetails?.currency_symbol;
    // Add checks to ensure currentUserPackage is defined and has at least one element

    // useEffect(() => {
    //     if (!packagedata && packagedata.length === 0) {
    //         // toast.error("Opps! No Package Found!!!")
    //         router.push('/')

    //     }
    // }, [packagedata])

   
    const lang = useSelector(languageData);

    useEffect(() => { }, [lang]);






    useEffect(() => {
        getPackagesApi(
            (res) => { 
                const filteredData = res.data.filter(item => item?.is_active === 1);
                setPackageData(filteredData);
            },
            (err) => {
                console.log(err);
            }
        );
    }, []);

    useEffect(() => {

    }, [packagedata])


    function formatDate(inputDate) {
        if (inputDate === null) {
            return "Lifetime";
        }

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const date = new Date(inputDate);
        const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${dayOfWeek}, ${day} ${month}, ${year}`;
    }

    return (
        <VerticleLayout>
            <div className="container">
                <div className="dashboard_titles">
                    <h3>{translate("mySub")}</h3>
                </div>
                <div className="row user_packages">

                    {packagedata && packagedata.map((ele, index) => (
                        <div className="col-sm-12 col-md-6" id="subscription_card_col" key={index}>
                            <div className="card" id="subscription_card">

                                <div className="card-header" id="subscription_card_header">
                                    <span className="subscription_current_package"> {ele?.name} {""} {translate("pack")}</span>
                                </div>
                                <div className="card-body">
                                    <div id="subscription_validity">
                                        <div className="package_validity">
                                            <span className="package_details_title">{translate("packVali")}</span>
                                            {ele?.end_date !== null ? (
                                                <span className="package_details_value">
                                                    {ele?.duration}
                                                    {""} {translate("days")}
                                                </span>
                                            ) : (
                                                <span className="package_details_value">{ele?.end_date} </span>
                                            )}
                                        </div>
                                        <div className="package_price">
                                            <span className="package_details_title">{translate("price")}</span>
                                            <span className="package_details_value">
                                                {
                                                    ele?.price !== 0
                                                        ? CurrencySymbol + ele?.price
                                                        : "Free"
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    <hr />
                                    <div id="subscription_details">
                                        <div className="row" id="subscription_card_row">
                                            <div className="col-sm-12 col-md-6 col-lg-4" id="subscription_progress_cards">
                                                <div className="property_count_card">
                                                    <span>{translate("property")}</span>
                                                    <div className="progress_bar_div">
                                                        <ProgressBar usedLimit={ele?.used_limit_for_property} totalLimit={ele?.property_limit} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4" id="subscription_progress_cards">
                                                <div className="advertisement_count_card">
                                                    <span>{translate("advertisement")}</span>
                                                    <div className="progress_bar_div">
                                                        <ProgressBar usedLimit={ele?.used_limit_for_advertisement} totalLimit={ele?.advertisement_limit} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4" id="subscription_progress_cards">
                                                <div className="remaining_count_card">
                                                    <span>{translate("remaining")}</span>
                                                    <div className="progress_bar_div">
                                                        <div style={{ position: "relative", display: "inline-flex" }}>
                                                            <Progress
                                                                id="progress_bar"
                                                                type="circle"
                                                                percent={ele?.remaining_days ? ele?.remaining_days / ele?.duration * 100 : 100}
                                                                format={() => null}
                                                                strokeWidth={10}

                                                            />
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    top: 0,
                                                                    left: 0,
                                                                }}
                                                            >
                                                                {ele?.end_date !== null ? (
                                                                    <span className="progress_bar_count">{`${ele?.remaining_days} Days`}</span>
                                                                ) : (
                                                                    <span className="progress_bar_count">{translate("infinity")}</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="subscription_duration">
                                        <div className="started_on">
                                            <div className="icon_div">
                                                <CalendarMonthOutlinedIcon className="cal_icon" />
                                            </div>
                                            <div className="dates">
                                                <span className="dates_title">{translate("startOn")}</span>
                                                <span className="dates_value">{formatDate(ele?.start_date)}</span>
                                            </div>
                                        </div>
                                        {ele?.end_date !== null ? (
                                            <div className="ends_on">
                                                <div className="dates">
                                                    <span className="dates_title">{translate("endsOn")}</span>
                                                    <span className="dates_value">{formatDate(ele?.end_date)}</span>
                                                </div>
                                                <div className="icon_div">
                                                    <CalendarMonthOutlinedIcon className="cal_icon" />
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </VerticleLayout>
    );
};

export default UserSubScription;
