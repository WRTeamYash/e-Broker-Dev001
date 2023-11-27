import React, { useEffect, useState } from "react";
import VerticleLayout from "./VerticleLayout.jsx";
import { settingsLoaded } from "@/store/reducer/settingsSlice.js";
import { useSelector } from "react-redux";
import { languageData } from "@/store/reducer/languageSlice.js";
import Loader from "../Loader/Loader.jsx";

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;

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
    useEffect(() => {}, [lang]);
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <VerticleLayout>{children}</VerticleLayout>
                </>
            )}
        </>
    );
};

export default Layout;
