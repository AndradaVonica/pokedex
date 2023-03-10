import React from 'react'
// import Dropdown from "../components/Dropdown"

function PokeCard({ description, imgUrl }) {


    return (
        <div >
            <p>
                {description}
            </p>
            <img src={imgUrl} style={{ display: "flex", height: "180px", marginLeft: "50px" }} />
        </div>
    )
}

export default PokeCard
