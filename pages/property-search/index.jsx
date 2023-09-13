import React from 'react'
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import Layout from '@/Components/Layout/Layout'
import SearchTab from '../../src/Components/SearchTab/SearchTab.jsx'

const SearchPage = () => {
    return (

        <Layout>
            <Breadcrumb title="" />
            <div className='serach_page_tab'>
                <SearchTab />
            </div>
        </Layout>

    )
}

export default SearchPage
