import React , {useEffect} from "react";

import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import './../App.css' 
import { setProduct } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state)
    const Dispatch = useDispatch()

    useEffect(() => {
  
        getAllProduct()

    }, [])

    const getAllProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => { console.log(err) }) 
        Dispatch(setProduct(response.data))
    }

    console.log('product', products)
    return (
        <div className="ui grid container heightAdjustment ">
            <ProductComponent ></ProductComponent>
        </div>
    )
}

export default ProductListing;