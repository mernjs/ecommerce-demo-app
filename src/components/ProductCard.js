import React from 'react'
import StarRating from './StarRating';

const ProductCard = ({ item }) => {
    return <>
        <div style={{height:"200px",width:"200px",background:"green",float:"left"}}>
        <img src={item.thumbnail} style={{height:"200px",width:"200px"}}/> 
        </div>
        <div style={{height:"200px",width:"400px",float:"left"}}>
        <h2>{item.brand}</h2>
            <b>{item.category}</b><br/>
            <b>
                <StarRating 
                    rating={item.rating} 
                    ratedColor="#f5a440"
                />
            </b> <br/>
            <b>Price : {item.price}</b><br/>
            <b>Discount : {item.discountPercentage}</b><br/>
            <b>{item.description}</b>
        </div>
    </>
}

export default ProductCard