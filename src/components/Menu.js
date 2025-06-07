
import { useEffect,useState } from "react"
import {useParams} from "react-router"
import UseApiFetch from "../utils/UseApiFetch";

const Menu = () => {
const {id} = useParams();

const menudatacard = UseApiFetch(id);
   
    return (
        <div>
            {
                menudatacard?.length === 0 ? <p>Loading menu...</p> : menudatacard?.map((item) => {
                    return (
                        <div key={item.card.info.id}>
                            <h3>{item.card.info.name}</h3>
                            <p>{item.card.info.description}</p>
                            <p>Price: ₹{(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
                        </div>
                    )
                })
            }
        </div>
    )


}

export default Menu