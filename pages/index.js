import axios from "axios";

import { GET_SEO_SETTINGS } from "@/utils/api";
import Meta from "@/Components/Seo/Meta.jsx";
import HomePage from "@/Components/HomePage/Home";

// This is seo api
const fetchDataFromSeo = async (page) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}`
    )

    let SEOData = JSON.stringify(response)


    // console.log("SEODATA".Data)
    return SEOData
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}


const Index = ({ seoData, currentURL }) => {


  console.log(seoData)

  return (
    <>
      <Meta
        title={seoData && seoData.data.meta_title}
        description={seoData && seoData.meta_description}
        keywords={seoData && seoData.meta_keywords}
        ogImage={seoData && seoData.meta_image}
        // pathName={currentURL}
      />
      <HomePage />
    </>
  );
};

let serverSidePropsFunction = null
if (process.env.NEXT_PUBLIC_SEO === 'true') {
  serverSidePropsFunction = async context => {
    // Retrieve the slug from the URL query parameters
    const { query, req } = context // Extract query and request object from context

    console.log("find ==========", context)
    // const currentURL = `${req.headers.host}${req.url}`
    const seoData = await fetchDataFromSeo()
    console.log("seoData", seoData?.data)

    // Pass the fetched data as props to the page component
    return {
      props: {
        seoData,
        // currentURL
      }
    }
  }
}

export const getServerSideProps = serverSidePropsFunction

export default Index;