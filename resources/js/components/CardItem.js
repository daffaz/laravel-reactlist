import React from "react"

const CardItem = ({resp}) => {
    return (
        <div className="flex flex-col items-center border border-yellow-400">
            <div>{resp.title}</div>
            <img src={resp.image_url} alt=""/>
        </div>
    )
}

export default CardItem