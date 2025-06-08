import RestaurantCard, {withPromotion} from "./RestaurantCard";
import  restaurantList  from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";


const Body = () => {
    useEffect(() => {
        fetchData()
    }, [])

    
    const [restaurantList1, setRestaurantList] = useState([])
    const [searchedVal, setSearchedVal] = useState("")
    const [filterRestaurantList1, setfilterRestaurantList1] = useState([])
    const RestaurantCardWithPromotion = withPromotion(RestaurantCard);
    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0282063&lng=76.981068&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants);
        setfilterRestaurantList1(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants);
      
    }
    if (restaurantList1.length == 0) {
        return <Shimmer/>
    }
    return (
        <div className="body">
            
            <div className="search">
                <div className="search-input-wrap">
                    <input className="search-input" type="text" placeholder="Search" value={searchedVal} onChange={(e) => setSearchedVal(e.target.value)} />
                    {searchedVal.length != 0 ? (
                        <span className="search-clear"
                            onClick={() => {
                                setSearchedVal("");
                                setfilterRestaurantList1(restaurantList1);
                            }}>clear
                        </span>

                    ) : ""}
                </div>
                <button className="search-btn" onClick={() => {
                    let searchedFilteredList = restaurantList1.filter((x) => x.info.name.toLocaleLowerCase().includes(searchedVal.toLocaleLowerCase()))
                    setfilterRestaurantList1(searchedFilteredList)
                }}>Search</button>
                <button className="filter-btn" onClick={() => {
                    let filteredList = restaurantList1.filter((x) => x.info.avgRating > 4.2)
                    setRestaurantList(filteredList)
                }}>Filter</button>
            </div>
            <div className="restaurant-list">
                {filterRestaurantList1.map((restaurant) => {
                    return restaurant.info.veg ? <RestaurantCardWithPromotion key={restaurant.info.id} restData={restaurant}/> : <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                })}
            </div>
        </div>
    )
}

export default Body;