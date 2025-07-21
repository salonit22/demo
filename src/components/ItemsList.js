import React, { use } from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../utils/cartSlice';

const ItemsList = (props) => {
    const name = props.card.name 
    const price = props.card.price ? props.card.price / 100 : "N/A";
    const description = props.card.description || "No description available";
    
    const dispatch = useDispatch();

    const handleAddClick = () => {
        dispatch(addItems(props.card));   
    }
  return (
    <div>
        <div className="flex justify-between items-center p-2 border-b border-gray-200 ">
            <div className="w-9/12">
                <h3 className="text-lg font-semibold">{name}</h3>
                <span className="text-lg  text-gray-800 font-semibold">₹{price}</span>
                <p className="text-xs text-gray-600">{description}</p>
            </div>
            <div  className="w-6/12 w-40 h-auto relative">
                <img className='rounded-2xl max-w-40' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.card.imageId}></img>
           {props.from != 'cart' && <div className='bg-white border-1 border-green-500 text-green-500 p-1 w-10 text-center text-xs rounded-sm absolute right-15 -bottom-3 shadow-xl' onClick={handleAddClick}>+Add</div>}
            </div>
        </div>
    </div>
  )
}

export default ItemsList