import React from "react";
import Categories from "@/Components/Properties/Categories";
import { GET_CATEGORES } from "@/utils/api";
import Meta from "@/Components/Seo/Meta";
import axios from "axios";
// This is seo api
const fetchDataFromSeo = async (slug) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_CATEGORES}?slug_id=${slug}`
        );

        const SEOData = response.data;
        console.log(SEOData)

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
                title={seoData && seoData.data[0]?.meta_title}
                description={seoData && seoData.data[0]?.meta_description}
                keywords={seoData && seoData.data[0]?.meta_keywords}
                ogImage={seoData && seoData.data[0]?.meta_image}
                pathName={currentURL}
            />
            <Categories />
        </>
    );
};
let serverSidePropsFunction = null;
if (process.env.NEXT_PUBLIC_SEO === "true") {
    serverSidePropsFunction = async (context) => {
        const { req } = context; // Extract query and request object from context

        const currentURL = `${req.headers.host}${req.url}`;

        // Extract the slug from the URL
        const slug = req.url.replace(/^\/properties\/categories\//, '').replace(/\/$/, '');


        const seoData = await fetchDataFromSeo(slug);

        console.log("req.url=======", req.url);
        console.log("req.params.slug=======", slug);
        console.log("seoData=======", seoData);
        return {
            props: {
                seoData,
                currentURL,
            },
        };
    };
}
export const getServerSideProps = serverSidePropsFunction;

export default Index
