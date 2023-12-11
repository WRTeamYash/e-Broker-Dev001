import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { languageData } from "@/store/reducer/languageSlice";
import Loader from "../Loader/Loader";
import { settingsData, settingsLoaded } from "@/store/reducer/settingsSlice";
import under_maintain from '../../../public/under_maintain.svg'
import { translate } from "@/utils";
import Image from "next/image";

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;

    const settingData = useSelector(settingsData);

    useEffect(() => {
        settingsLoaded(
            null,
            isLoggedIn ? userCurrentId : "",
            (res) => {
                setIsLoading(false);
            },
            (err) => {
                console.log(err);
            }
        );
    }, [isLoggedIn]);

    const lang = useSelector(languageData);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {settingData?.maintenance_mode === '1' ? (
                        <div className='under_maintance'>
                            <div className="col-12 text-center">
                                <div>
                                    <Image loading="lazy" src={under_maintain.src} alt="underMaintance" width={600} height={600} />
                                </div>
                                <div className='no_page_found_text'>
                                    <h3>
                                        {translate("underMaintance")}
                                    </h3>
                                    <span>
                                        {translate("pleaseTryagain")}

                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Header />
                            {children}
                            <Footer />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Layout;
