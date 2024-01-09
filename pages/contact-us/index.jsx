import React from "react";
import Layout from "@/Components/Layout/Layout";
import ContactUS from "@/Components/ContactUs/ContactUS";
import axios from "axios";
import { GET_SEO_SETTINGS } from "@/utils/api";
import Meta from "@/Components/Seo/Meta";

const fetchDataFromSeo = async (page) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?page=chat`
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


let serverSidePropsFunction = null;
if (process.env.NEXT_PUBLIC_SEO === "true") {
  serverSidePropsFunction = async (context) => {
    const { req } = context; // Extract query and request object from context

    const currentURL = `${req.headers.host}${req.url}`;
    const seoData = await fetchDataFromSeo(req.url);
    // Pass the fetched data as props to the page component


    // console.log("req.url=======", req.url)
    // console.log("seoData=======", seoData)
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
