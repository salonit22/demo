
import { useEffect,useState } from "react"

const Menu = () => {
const [menudatacard, setMenudatacard] = useState([])
useEffect(() =>{
    fetchData(),[]
})
 const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0361755&lng=77.0141536&restaurantId=582150&catalog_qa=undefined&submitAction=ENTER")
    const json = await data.json();
    console.log(json,'juhgh');
    setMenudatacard(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
   
}
   
    return (
        <div>
            {
                menudatacard.length === 0 ? <p>Loading menu...</p> : menudatacard.map((item) => {
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