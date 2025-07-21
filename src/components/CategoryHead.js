import React from 'react'
import ItemsList from './ItemsList'
import { useState } from 'react';

const CategoryHead = ({ data, show, passIndex }) => {
    const title = data?.card?.card?.title
    const itemcard = data?.card?.card?.itemCards.map((x) => x.card.info)

    const handelClick = () => {
        passIndex()
    }
    return (
        <div className="align-middle my-4 font-bold text-lg bg-gray-100 w-6/12 m-auto p-3 rounded-lg shadow-md cursor-pointer" >
            <div className='text-left flex justify-between'>
                <h2>{title}</h2>
                <span onClick={handelClick} className={`transition-transform duration-300 ${show ? 'rotate-180' : ''}`}>
                    ⬇️
                </span>

            </div>
            <div>
                {show && itemcard?.map((item, index) => (
                    <ItemsList key={index} card={item} />
                ))}

            </div>
        </div>
    )
}

export default CategoryHead