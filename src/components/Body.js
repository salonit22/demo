import RestaurantCard from "./RestaurantCard";
import  restaurantList  from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [restaurantList1, setRestaurantList] = useState(restaurantList)
    const [searchedVal, setSearchedVal] = useState("")
    return (
        <div className="body">
            <div className="search">
                <input className="search-input" type="text" placeholder="Search" value = {searchedVal} onChange={(e) => setSearchedVal(e.target.value)} />
                <button className="search-btn" onClick={() => {
                    let searchedFilteredList = restaurantList1.filter((x) => x.info.name.toLocaleLowerCase().includes(searchedVal.toLocaleLowerCase()))
                    setRestaurantList(searchedFilteredList)
                }}>Search</button>
                <button className="filter-btn" onClick={() => {
                    let filteredList = restaurantList1.filter((x) => x.info.avgRating > 4.2)
                    setRestaurantList(filteredList)
                }}>Filter</button>
            </div>
            <div className="restaurant-list">
                {restaurantList1.map((restaurant) => {
                    return <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                })}
            </div>
        </div>
    )
}

export default Body;