import React from 'react'
import NoDataFound from '../src/assets/Images/No_data_found.png'
import { translate } from '@/utils'


const PageNotFound = () => {
    return (
        <div className='errorPage'>
            <div className="col-12 text-center">
                <div>
                    <img src={NoDataFound.src} alt="" />
                </div>
                <div className='no_data_found_text'>
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
