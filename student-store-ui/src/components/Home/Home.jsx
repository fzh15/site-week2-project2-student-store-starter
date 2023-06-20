import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductsGrid/ProductsGrid"




export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (



    <div className="home">

        {/* Look for a hero components that import 
       (rendering/calling compontent) */}
       <ProductGrid
         products={products} 
         handleAddItemToCart={handleAddItemToCart}
         handleRemoveItemToCart={handleRemoveItemToCart} />

         {/* defining objects in the heieght level (app so that they can be passed through all the other compontents ) */}
    </div>
  )
}


