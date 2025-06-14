import { useEffect, useState } from "react";
import { useParams } from "react-router";
import UseApiFetch from "../utils/UseApiFetch";
import CategoryHead from "./CategoryHead";

const Menu = () => {
    const { id } = useParams();
    const menudatacard = UseApiFetch(id);
    const [category, setCategory] = useState([]);
    const [isActive,setisActive] = useState(null)

    useEffect(() => {
        if (menudatacard) {
            const filterCat = menudatacard.filter(
                (catogry) =>
                    catogry.card?.card?.['@type'] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
            setCategory(filterCat);
        }
    }, [menudatacard]);
    console.log(menudatacard,'card')

    return (
        <div>
            {
                category?.length === 0 ? (
                    <p>Loading menu...</p>
                ) : (
                    category.map((item, index) => (<CategoryHead key={index} data={item} show ={index == isActive ? true :false } passIndex = {() => setisActive((prev => (prev === index ? null : index)))}/>)))
                
            }
        </div>
    );
};

export default Menu;
