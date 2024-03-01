import React from "react";
import Layout from "@/Components/Layout/Layout";
import MostViewProperties from "@/Components/MostViewProperties/MostViewProperties";
import Projects from "@/Components/Projects/Projects";


import axios from "axios";
import { GET_SEO_SETTINGS } from "@/utils/api";
import Meta from "@/Components/Seo/Meta";


// This is seo api
const fetchDataFromSeo = async (page) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?page=most-viewed-properties`
        );

        const SEOData = response.data;


        return SEOData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
const Index = ({ seoData, currentURL }) => {

    return (
        <>
            <Meta
                 title={seoData?.data && seoData.data.length > 0 && seoData.data[0].meta_title}
                 description={seoData?.data && seoData.data.length > 0 && seoData.data[0].meta_description}
                 keywords={seoData?.data && seoData.data.length > 0 && seoData.data[0].meta_keywords}
                 ogImage={seoData?.data && seoData.data.length > 0 && seoData.data[0].meta_image}
                pathName={currentURL}
            />
                <Projects />
        </>
    );
};
let serverSidePropsFunction = null;
if (process.env.NEXT_PUBLIC_SEO === "true") {
    serverSidePropsFunction = async (context) => {
        const { req } = context; // Extract query and request object from context

        const currentURL = `${req.headers.host}${req.url}`;
        const seoData = await fetchDataFromSeo(req.url);
        // Pass the fetched data as props to the page component

        return {
            props: {
                seoData,
                currentURL,
            },
        };
    };
}

export const getServerSideProps = serverSidePropsFunction;
export default Index;