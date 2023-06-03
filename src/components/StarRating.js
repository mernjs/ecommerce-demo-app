import React from 'react'
import StarRatings from 'react-star-ratings';

const StarRating = ({ rating, ratedColor }) => {
    return <StarRatings
        rating={rating}
        starDimension="20px"
        starSpacing="5px"
        starRatedColor={ratedColor}
    />           
}

export default StarRating