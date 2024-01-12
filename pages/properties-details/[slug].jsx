import React from 'react'
import PropertyDetails from '@/Components/PropertyDetails/PropertyDetails'
import axios from "axios";
import { GET_PROPETRES } from "@/utils/api";
import Meta from "@/Components/Seo/Meta";


// This is seo api
const fetchDataFromSeo = async (slug) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_PROPETRES}?slug_id=${slug}`
        );

        const SEOData = response.data;
        console.log(typeof(SEOData))

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
            <PropertyDetails />
        </>
    )
}
let serverSidePropsFunction = null;
if (process.env.NEXT_PUBLIC_SEO === "true") {
    serverSidePropsFunction = async (context) => {
        const { req } = context; // Extract query and request object from context
        const { params } = req[Symbol.for('NextInternalRequestMeta')]._nextMatch;
        // Accessing the slug property
        const currentURL = req[Symbol.for('NextInternalRequestMeta')].initURL;
        // console.log(slugValue, "slugValue");
        const slugValue = params.slug;

        const seoData = await fetchDataFromSeo(slugValue);
        console.log("req=======", req);
        // console.log("seoData=======", seoData);
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
