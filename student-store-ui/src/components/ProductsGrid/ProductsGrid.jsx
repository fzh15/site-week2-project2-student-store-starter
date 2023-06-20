import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsGrid.css"
// import ProductView from "../ProductView/ProductView"

function ProductsGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  console.log("ProductsGrid", products);
  // go through the products araay and file out each part of what a product

  return (
    <div className="products-grid">
      <div className="content">
        <div className="grid">
          {products.map((product) => (
            // passing single product through the mapping function
            // going through the photocard file
            <ProductCard
              key={product.id}
              product={product}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemToCart={handleRemoveItemToCart}
            />

            // product then its spefication
          ))}
          {/* i want ot send inffo product carf them doing mapping in order to go through the info from the api  */}
        </div>
      </div>
    </div>
  );
}

export default ProductsGrid;
