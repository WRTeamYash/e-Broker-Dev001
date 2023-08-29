import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { RiGridFill } from 'react-icons/ri'

const GridCard = (props) => {

    const { total, setGrid } = props;
    return (
        <div className="card">
            <div className="card-body" id='all-prop-headline-card'>
                <div>
                    <span>{total && `${total} Properties Found`}</span>
                </div>
                <div >
                    <button className='mx-3' id='layout-buttons' onClick={() => setGrid(false)}>
                        <AiOutlineUnorderedList size={25} />
                    </button>
                    <button id='layout-buttons' onClick={() => setGrid(true)}>
                        <RiGridFill size={25} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GridCard
