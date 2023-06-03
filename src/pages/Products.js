import React, { Component } from 'react'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard';

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
        
        if(isLoading) return <Loader />

        return (
            <div style={{width:"600px" ,background:"red"}}>

                {data.map((item, index) => {
                    return <ProductCard item={item}/> 
                })}
                
            </div>
        )
    }
}

export default Products