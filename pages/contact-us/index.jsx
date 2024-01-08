import React from "react";
import Layout from "@/Components/Layout/Layout";
import ContactUS from "@/Components/ContactUs/ContactUS";
import axios from "axios";
import { GET_SEO_SETTINGS } from "@/utils/api";
import Meta from "@/Components/Seo/Meta";

const fetchDataFromSeo = async (page) => {
    const cleaned_url = page.replace(/^\/|\/$/g, '');
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?page=contact-us}`
        );

        const SEOData = response.data;
        return SEOData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error to be caught by getServerSideProps
    }
};

const Index = ({ seoData, currentURL }) => {
    return (
        <>
            <Meta
                title={seoData?.data[0]?.meta_title}
                description={seoData?.data[0]?.meta_description}
                keywords={seoData?.data[0]?.meta_keywords}
                ogImage={seoData?.data[0]?.meta_image}
                pathName={currentURL}
            />
            <Layout>
                <ContactUS />
            </Layout>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const { req } = context;
    const currentURL = `${req.headers.host}${req.url}`;
    
    try {
        const seoData = await fetchDataFromSeo(req.url);

        console.log("context=======", context);
        console.log("seoData=======", seoData);

        return {
            props: {
                seoData,
                currentURL,
            },
        };
    } catch (error) {
        console.error("Error in getServerSideProps:", error);

        return {
            props: {
                seoData: null,
                currentURL: "",
            },
        };
    }
};

export default Index;
