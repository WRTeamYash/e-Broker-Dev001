import React from 'react';
import PropertyDetails from '@/Components/PropertyDetails/PropertyDetails';
import axios from 'axios';
import { GET_PROPETRES } from '@/utils/api';
import Meta from '@/Components/Seo/Meta';

// This is seo api
const fetchDataFromSeo = async (slug) => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_PROPETRES}?slug_id=${slug}`;
    console.log('Fetching data from:', apiUrl);

    const response = await axios.get(apiUrl);
    const SEOData = response.data;

    console.log(SEOData);
    return SEOData;
  } catch (error) {
    console.error('Error fetching data:', error);
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
  );
};

let serverSidePropsFunction = null;

if (process.env.NEXT_PUBLIC_SEO === 'true') {
  serverSidePropsFunction = async (context) => {
    const { req } = context; // Extract query and request object from context

    const currentURL = `${req.headers.host}${req.url}`;

    // Extract the slug from the URL
    const slug = req.url
      .replace(/^\/_next\/data\/development\/properties-details\//, '')
      .replace(/\.json\?slug=.+$/, '');
    
    console.log('req.url=======', req.url);
    console.log('req.params.slug=======', slug);

    const seoData = await fetchDataFromSeo(slug);

    console.log('seoData=======', seoData);

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
