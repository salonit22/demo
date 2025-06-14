
import React, { useState, useEffect } from 'react'

const UseApiFetch = (id) => {
    const [resInfo, setresInfo] = useState()
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0361755&lng=77.0141536&restaurantId=" + id + "&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    }

    return resInfo

}

export default UseApiFetch


