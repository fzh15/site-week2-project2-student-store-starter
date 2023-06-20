import React from 'react';
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"


const ProductView = ({

    product,
    productId,
    quantity,
    handleAddItemToCart,
    handleRemoveItemToCart
})=> {
  return (
    <div className="product-view">
    <h1 className="product-id"> Product #{productId}</h1>
    <ProductCard
    product = {product}
    quantity= {quantity}
    handleAddItemToCart={handleAddItemToCart}
    handleRemoveItemToCart= {handleRemoveItemToCart}
    showDescription= {true}
    />
    </div>
  );
};

export default ProductView;