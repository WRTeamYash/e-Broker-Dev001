import axios from "axios";
import dynamic from 'next/dynamic'
import { GET_SEO_SETTINGS } from "@/utils/api";
const HomePage = dynamic(() => import('../src/Components/HomePage/Home.jsx'), { ssr: false })


// This is seo api
const fetchDataFromSeo = async (page) => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?page=${page}`
        )
        console.log("response", response)
        const data = response.data
        console.log("SEODATA". data.data)
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        return null
    }
}


const Index = ({ seoData, currentURL }) => {


console.log(seoData, currentURL)

    return (
        <>
            <HomePage />
        </>
    );
};

let serverSidePropsFunction = null
if (process.env.NEXT_PUBLIC_SEO === 'true') {
  serverSidePropsFunction = async context => {
    // Retrieve the slug from the URL query parameters
    const { query, req } = context // Extract query and request object from context

    console.log("find ==========" , query)
    const currentURL = `${req.headers.host}${req.url}`
    const seoData = await fetchDataFromSeo(query.slug)
    console.log(seoData)

    // Pass the fetched data as props to the page component
    return {
      props: {
        seoData,
        currentURL
      }
    }
  }
}

export const getServerSideProps = serverSidePropsFunction

export default Index;