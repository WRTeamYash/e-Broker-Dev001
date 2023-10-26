import React, { useEffect, useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import { GetFeturedListingsApi } from "@/store/actions/campaign";
import Link from "next/link";
import VerticalCard from "@/Components/Cards/VerticleCard";
import VerticalCardSkeleton from "@/Components/Skeleton/VerticalCardSkeleton";
import { useSelector } from "react-redux";
import { translate } from "@/utils";
import { languageData } from "@/store/reducer/languageSlice";
import Pagination from "@/Components/Pagination/ReactPagination";
import Layout from "@/Components/Layout/Layout";
import NoData from "@/Components/NoDataFound/NoData";

const Index = () => {
    const lang = useSelector(languageData);

    useEffect(() => { }, [lang]);
    const [isLoading, setIsLoading] = useState(false);
    const [getFeaturedListing, setGetFeaturedListing] = useState([]);
    const [total, setTotal] = useState(0);
    const [offsetdata, setOffsetdata] = useState(0);
    const [scroll, setScroll] = useState(0);
    const limit = 8;
    const isLoggedIn = useSelector((state) => state.User_signup);
    const userCurrentId = isLoggedIn && isLoggedIn.data ? isLoggedIn.data.data.id : null;

    useEffect(() => {
        setIsLoading(true);
        GetFeturedListingsApi(
            "1",
            "",
            "",
            "",
            "",
            "",
            "",
            offsetdata.toString(),
            limit.toString(),
            isLoggedIn ? userCurrentId : "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            (response) => {
                setTotal(response.total);
                const FeaturedListingData = response.data;
                setIsLoading(false);
                setGetFeaturedListing(FeaturedListingData);
                console.log(getFeaturedListing);
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );
    }, [offsetdata, isLoggedIn]);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    const handlePageChange = (selectedPage) => {
        const newOffset = selectedPage.selected * limit;
        setOffsetdata(newOffset);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Layout>
                <Breadcrumb title={translate("featurdAllProp")} />

                <section id="featured_prop_section">
                    {getFeaturedListing.length > 0 ? (
                        <div className="container">
                            <div id="feature_cards" className="row">
                                {isLoading ? (
                                    Array.from({ length: 8 }).map((_, index) => (
                                        <div className="col-sm-12 col-md-6 col-lg-3 loading_data" key={index}>
                                            <VerticalCardSkeleton />
                                        </div>
                                    ))
                                ) : (
                                    <>
                                        {getFeaturedListing.map((ele, index) => (
                                            <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                                                <Link href="/properties-details/[slug]" as={`/properties-details/${ele.id}`} passHref>
                                                    <VerticalCard ele={ele} />
                                                </Link>
                                            </div>
                                        ))}
                                    </>
                                )}
                                <div className="col-12">
                                    <Pagination pageCount={Math.ceil(total / limit)} onPageChange={handlePageChange} />
                                </div>
                            </div>
                        </div>
                    )
                        : (
                            <div className="noDataFoundDiv">
                                <NoData />
                            </div>
                        )}
                </section>
            </Layout>
        </>
    );
};

export default Index;
