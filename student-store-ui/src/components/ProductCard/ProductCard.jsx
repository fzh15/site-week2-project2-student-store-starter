import "./ProductCard.css"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {React, useState, useEffect}  from "react";
import ProductDetail from "../ProductDetail/ProductDetail";


// // make another function withb the const using the Photocard 
// then have a scetion aand div then links to th eimg 


const ProductCard = ({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart } ) => {
    // make sure to ptu all props in { } when theres multiple 


    console.log("ProductCard", product)

return(

    <div id="productCard"> 
                
    <div className= "product-card">
        <Link to={'/product/${product.id}'}>
                <img src={product.image}></img>
            <h2 id="Link-name">{product.name}</h2>

        </Link>

        <p> Price: ${product.price}</p>
        <button onClick={()=> handleAddItemToCart(product)}> + </button>
        <button onClick={()=> handleRemoveItemToCart(product)}> - </button>

               

                

        


    </div>
    </div>
 )

}

export default ProductCard;



// for refernce

// return(

// <div id="productCard"> 
                
// <div className= "product-card">


//     {/* product card object rendering  */}
           
//             <div className="product-name">{product.name}</div>

//             <div className= "media"> 
//                     <img src={product.image}></img>
//             </div>

//             <div className="product-price">{product.price}</div>

//             <div className="product-description">{product.description}</div>


// </div>
// </div>
// )

