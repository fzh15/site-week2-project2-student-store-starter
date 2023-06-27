// import React from "react"
// import { useState } from "react"



// export default function SubNavbar(){
    
    
    //     return
    // }
    // import SearchButtons from "../SearchButtons/SearchButtons";
    // import ProductCard from "../ProductCard/ProductCard";
    // const subNavbar= (product) => {
        
        
        //     const [searchTerm, setSearchTerm] = useState("");
        //     const [filteredData, setFilteredData] = useState(product); 
        
        
        //     const handleSearch = (event) => {
            //         event.preventDefault();
            //         setSearchTerm(event.target.value);
            
            //         setFilteredData(
                
                //         product.filter= (product) =>
                //         product.name.toLowerCase().includes(event.target.value.toLowerCase())
                
                //           )
                
                //       };
                // return (
                    
                    //     <div>
                    //     <form className="SearchForm" onChange={
                        //         <input type= "text" placeholder="text">   </input>}> 
                        
                        //     </form>
                        
                        
                        
                        //     {filteredData.map((product)=>
                        //     {
                            //         <ProductCard key= {product.id}> {product.name}</ProductCard>
                            //     }
                            
                            // )}
                            //     <button>Toggle</button>
                            //     <SearchButtons/>
                            //     </div>
                            //   )
                            // }
                            
                            // export default subNavbar
import "./SubNavbar.css"
import React, { useState } from 'react';
                            
const Subnavbar = ({ handleFilter }) => {
 const [activeCategory, setActiveCategory] = useState('allcategories');
const handleCategoryClick = (category) => {
    setActiveCategory(category);
    handleFilter(category);
  };

  return (
    <div className="subnavbar">
      <div className="subnavbar-list">
        <button
          className={`subnavbar__item ${activeCategory === 'allcategories' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('allcategories')}
        >
          All Categories
        </button>
        <button
          className={`subnavbar__item ${activeCategory === 'clothing' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('clothing')}
        >
          Clothing
        </button>
        <button
          className={`subnavbar__item ${activeCategory === 'food' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('food')}
        >
          Food
        </button>
        <button
          className={`subnavbar__item ${activeCategory === 'tech' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('tech')}
        >
          Tech
        </button>
      </div>
    </div>
  );
};

export default Subnavbar;