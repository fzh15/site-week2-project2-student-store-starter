import "./ProductDetail.css";
import ProductView from "../ProductView/ProductView";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const  ProductDetail=()=> {
  console.log("Page is reached");
  const url= 'https://codepath-store-api.herokuapp.com/store/';
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    try{
    axios.get(`${url}${productId}`).then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      });
    } catch(error){
      setLoading(false);
      
    };
  }, [productId]);

  console.log("This is the product", setProduct)

  if (loading){
    return <h1 className="loading">Loading...</h1>;


  }

  return(
    <div className="product-detail">
      <ProductView product ={product}/>
    </div>


  );

};

export default ProductDetail;
