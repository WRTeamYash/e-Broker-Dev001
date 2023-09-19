import React from 'react'
import NoPageFound from '../src/assets/Images/404.png'
import { translate } from '@/utils'


const PageNotFound = () => {
    return (
        <div className='errorPage'>
            <div className="col-12 text-center">
                <div>
                    <img src={NoPageFound.src} alt="" />
                </div>
                <div className='no_page_found_text'>
                    <h3>
                        {translate("404")}
                    </h3>
                    <span>
                        {translate("PagenotFound")}

                    </span>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
