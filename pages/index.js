import HomePage from "@/Components/HomePage/Home";
import { languageData } from "@/store/reducer/languageSlice";
import { loadCategories, loadSlider } from "@/store/reducer/momentSlice";
import { settingsData } from "@/store/reducer/settingsSlice";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Home = () => {
    const lang = useSelector(languageData);

    useEffect(() => { }, [lang]);

    const router = useRouter();
    useEffect(() => {
        // Check if the slug is present in the URL
        if (router.pathname) {
            router.replace(window.location.pathname + window.location.search);
        }
    }, []);
    useEffect(() => {
        loadSlider();
        loadCategories();
    }, []);
    const settingData = useSelector(settingsData);


    return (
        <>
            <Toaster toastOptions={{ duration: 3000 }} position="top-center" />

            <HomePage />
        </>
    );
};

export default Home;