import React from 'react'

const ItemsList = (props) => {
    const name = props.card.card.info.name
    const price = props.card.card.info.price ? props.card.card.info.price / 100 : "N/A";
    const description = props.card.card.info.description || "No description available";
  return (
    <div>
        <div className="flex justify-between items-center p-2 border-b border-gray-200 ">
            <div className="w-9/12">
                <h3 className="text-lg font-semibold">{name}</h3>
                <span className="text-lg  text-gray-800 font-semibold">₹{price}</span>
                <p className="text-xs text-gray-600">{description}</p>
            </div>
            <div  className="w-6/12 w-40 h-auto relative">
                <img className='rounded-2xl max-w-40' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.card.card.info.imageId}></img>
            <div className='bg-white border-1 border-green-500 text-green-500 p-1 w-10 text-center text-xs rounded-sm absolute right-15 -bottom-3 shadow-xl'>+Add</div>
            </div>
        </div>
    </div>
  )
}

export default ItemsList