import React from "react"
import { useState } from "react"
import SearchButtons from "../components/SearchButtons/SearchButtons";
import ProductCard from "../components/ProductCard/ProductCard";




const subNavbar= ((product)) => {


    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(product); 


    const handleSearch = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    
        setFilteredData(

        product.filter= (product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())

          )
      
      };
return (

    <div>
    <form className="SearchForm" onChange={
        <input type= "text" placeholder="text">   </input>}> 
        
    </form>
   


    {filteredData.map((product)=>
    {
        <ProductCard key= {product.id}> {product.name}</ProductCard>
    }

)}
    <button>Toggle</button>
    <SearchButtons/>
    </div>
  )
}

export default subNavbar

