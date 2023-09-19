import React from 'react'
import NoDataFound from '../../assets/no_data_found_illustrator.svg'
import { translate } from '@/utils'


const NoData = () => {
    return (
        <div className="col-12 text-center">
            <div>
                <img src={NoDataFound.src} alt="" />
            </div>
            <div className='no_data_found_text'>
                <h3>
                    {translate("noData")}
                </h3>
                <span>
                    {translate("noDatatext")}

                </span>
            </div>
        </div>
    )
}

export default NoData
