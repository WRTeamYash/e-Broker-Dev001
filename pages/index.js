import HomePage from "@/Components/HomePage/Home";
import { languageData } from "@/store/reducer/languageSlice";
import { loadCategories, loadSlider } from "@/store/reducer/momentSlice";
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