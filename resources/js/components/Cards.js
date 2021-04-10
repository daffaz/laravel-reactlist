import React from "react"
import CardItem from "./CardItem"

const Card = ({response}) => {
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap border border-red-400">
            {response.map(resp => (
                <CardItem key={resp.mal_id} resp={resp}/>
            ))}
        </div>
    )
}

export default Card