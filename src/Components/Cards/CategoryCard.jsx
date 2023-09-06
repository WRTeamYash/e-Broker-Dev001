import { translate } from '@/utils'
import React from 'react'
import { Card } from 'react-bootstrap'

const CategoryCard = ({ ele }) => {
    return (
        <div className='Category_card'>
            <Card id='main_aprt_card'>
                <Card.Body>
                    <div className='apart_card_content'>
                        <div id='apart_icon'>
                            <img src={ele.image} alt="" className='solo_icon' />
                        </div>
                        <div id='apart_name'>
                            {ele.category}
                            <div id='propertie_count'>{ele.properties_count} {translate("properties")}</div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

        </div>
    )
}

export default CategoryCard
