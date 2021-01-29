import React from 'react'
import ReactStars from "react-rating-stars-component";

function Rating() {
    return (
        <div>
            <h4>Please rate the Product</h4>
            <ReactStars
    count={5}
    isHalf={true}
    size={24}
    activeColor="#ffd700"
  />
        </div>
    )
}

export default Rating
