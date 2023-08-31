import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { GetFeturedListingsApi } from '@/store/actions/campaign';
import Image from 'next/image';
import Link from 'next/link';
import VerticalCard from '@/Components/Cards/VerticleCard';
import VerticalCardSkeleton from '@/Components/Skeleton/VerticalCardSkeleton';
import ReactPaginate from 'react-paginate';
import Loader from '@/Components/Loader/Loader';

const Index = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [getMostViewed, setMostViewed] = useState([]);
    const [total, setTotal] = useState(0);
    const [offsetdata, setOffsetdata] = useState(0);
    // console.log("offset data", offsetdata)
    // console.log(total)
    const limit = 8;



    useEffect(() => {
        setIsLoading(true);
        GetFeturedListingsApi(
            "",
            "",
            "",
            "",
            "1",
            "",
            "",
            offsetdata.toString(),
            limit.toString(),
            "",
            (response) => {
                setTotal(response.total);
                const MostViewedData = response.data;
                setIsLoading(false);
                setMostViewed(MostViewedData);
            },
            (error) => {
                setIsLoading(false);
                console.log(error);
            }
        );
    }, [offsetdata]);

    const handlePageChange = (selectedPage) => {
        console.log("select page================", selectedPage);
        const newOffset = selectedPage.selected * limit;
        setOffsetdata(newOffset);
        console.log("new offset", newOffset)
    };

    return (
        <>
            <Breadcrumb title="Most Favorite Properties" />
            <section id='featured_prop_section'>
                <div className='container'>
                    <div id='feature_cards' className='row'>
                        {isLoading ? (
                            Array.from({ length: 8 }).map((_, index) => (
                                <div className='col-sm-12 col-md-6 col-lg-3 loading_data' key={index}>
                                    <VerticalCardSkeleton />
                                </div>
                            ))
                        ) : (
                            <>

                                {getMostViewed.map((ele, index) => (
                                    <div className='col-sm-12 col-md-6 col-lg-3' key={index}>
                                        <Link href="/properties-deatils/[slug]" as={`/properties-deatils/${ele.id}`} passHref>
                                            <VerticalCard ele={ele} />
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )}
                        <div className="col-12">
                            <ReactPaginate
                                previousLabel={"previous"}
                                nextLabel={"next"}
                                breakLabel="..."
                                breakClassName="break-me"
                                pageCount={Math.ceil(total / limit)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={handlePageChange}
                                containerClassName={"pagination"}
                                previousLinkClassName={"pagination__link"}
                                nextLinkClassName={"pagination__link"}
                                disabledClassName={"pagination__link--disabled"}
                                activeClassName={"pagination__link--active"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
