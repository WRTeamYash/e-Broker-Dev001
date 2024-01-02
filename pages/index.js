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

    const settingData = useSelector(settingsData);

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', "#087c7c");
        if (settingData?.system_color && settingData?.category_background && settingData?.sell_background) {
            document.documentElement.style.setProperty('--primary-color', settingData?.system_color);
            document.documentElement.style.setProperty('--primary-category-background', settingData?.category_background);
            document.documentElement.style.setProperty('--primary-sell', settingData?.sell_background);
        } else {
            document.documentElement.style.setProperty('--primary-color', "#087c7c");
            document.documentElement.style.setProperty('--primary-category-background', "#087c7c14");
            document.documentElement.style.setProperty('--primary-sell', "#e8aa42");
        }
    }, [settingData?.svg_clr])
    useEffect(() => { }, [lang]);

    const router = useRouter();

    useEffect(() => {
        loadSlider();
        loadCategories();
    }, []);


    return (
        <>
            <Toaster toastOptions={{ duration: 3000 }} position="top-center" />

            <HomePage />
        </>
    );
};

export default Home;