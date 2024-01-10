import React from "react";
import axios from "axios";
import { GET_SEO_SETTINGS } from "@/utils/api";
import Meta from "@/Components/Seo/Meta";
import City from "@/Components/Properties/City";

const fetchDataFromSeo = async (slug) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?page=properties-nearby-city`
        );

        const SEOData = response.data;
        console.log(response.data);

        return SEOData;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

const Index = ({ seoData, currentURL, citySlug }) => {
    return (
        <>
            <Meta
                title={seoData && seoData.data[0]?.meta_title.replace("[Your City]", citySlug)}
                description={seoData && seoData.data[0]?.meta_description.replace("[Your City]", citySlug)}
                keywords={seoData && seoData.data[0]?.meta_keywords.replace("[Your City]", citySlug)}
                ogImage={seoData && seoData.data[0]?.meta_image}
                pathName={currentURL}
            />
            <City />
        </>
    );
};

let serverSidePropsFunction = null;
if (process.env.NEXT_PUBLIC_SEO === "true") {
    serverSidePropsFunction = async (context) => {
        const { req } = context;
        const currentURL = `${req.headers.host}${req.url}`;
        const slug = req.url.replace(/^\/properties\/city\//, '').replace(/\/$/, '');

        const seoData = await fetchDataFromSeo(slug);

        console.log("req.url=======", req.url);
        console.log("req.params.slug=======", slug);
        console.log("seoData=======", seoData);

        return {
            props: {
                seoData,
                currentURL,
                citySlug: slug, // Pass the city slug to the component
            },
        };
    };
}

export const getServerSideProps = serverSidePropsFunction;

export default Index;
