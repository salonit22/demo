import {useNavigate} from 'react-router';

const RestaurantCard = (props) => {
    const navigate = useNavigate();
    const restMenu = () => {
        navigate(`/restaurant/${props.restData.info.id}`);
    }
    return (
        <div className="res-card" onClick={restMenu}> 
            <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restData.info.cloudinaryImageId}></img>
            <h2 className="res-Name">{ props.restData.info.name}</h2>
            <div className="res-badge">
            <h2 className="res-rating">{ props.restData.info.avgRating}</h2>
            <img className="star"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2t8YuWf8hIx_AuGsYT6xgfjWL15LRzbaPw&s" alt="star"></img>
            <h2 className="res-rating">{ props.restData.info.costForTwo}</h2>
            </div>
            <h3 className="res-cuisines">{ props.restData.info.cuisines.join(', ')}</h3>
            <h3 className="res-deliveryTime">{ props.restData.info.deliveryTime}</h3>
          

        </div>

    )
}

export default RestaurantCard;