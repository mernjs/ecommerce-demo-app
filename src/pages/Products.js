import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';
import { ColorRing } from 'react-loader-spinner'

class Products extends Component {

    constructor(props){
        super(props)
        this.state={
            data:[],
            isLoading:false   
        }
    }

    getData(){
        this.setState({isLoading:true})
        fetch("https://dummyjson.com/products")
        .then((result)=>result.json())
        .then((resp)=>{
            this.setState({ data: resp.products, isLoading: false })
        }).catch((err)=>{
            this.setState({isLoading:false})
        })
    }

    componentDidMount(){
        this.getData()
    }

    render() {
        
        const { data, isLoading } = this.state;
        
        if(isLoading){
            return <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        }

        return (
            <div style={{width:"600px" ,background:"red"}}>
                {data.map((item,index)=>{
                    return(
                        <>
                            <div style={{height:"200px",width:"200px",background:"green",float:"left"}}>
                            <img src={item.thumbnail} style={{height:"200px",width:"200px"}}/> 
                            </div>
                            <div style={{height:"200px",width:"400px",float:"left"}}>
                            <h2>{item.brand}</h2>
                                <b>{item.category}</b><br/>
                                <b>
                                    <StarRatings
                                        rating={item.rating}
                                        starDimension="20px"
                                        starSpacing="5px"
                                        starRatedColor="#f5a440"
                                    />
                                </b><br/>
                                <b>Price : {item.price}</b><br/>
                                <b>Discount : {item.discountPercentage}</b><br/>
                                <b>{item.description}</b>
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }
}

export default Products