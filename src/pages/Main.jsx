import React from "react"
import { useState, useEffect } from "react"
import { main_API } from "../utility/data" 
import RestaurantCard from "../components/RestaurantCard"

const Main = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    const fetchedList = async () => {
        const list = await fetch( main_API );
        const res = await list.json();
        
        setData(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setLoading(false);
        console.log(res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchedList();
    }, []);

    if(loading){
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                data.map((restaurant) => (
                    <div key={restaurant.info.id}>
                      <RestaurantCard info={restaurant.info} />
                    </div>
                ))
            }
        </div>
    )
}

export default Main;