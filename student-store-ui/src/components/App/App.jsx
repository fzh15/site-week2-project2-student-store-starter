import {React, useState, useEffect}  from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar"
import ProductDetail from "../ProductDetail/ProductDetail";
// import { Link } from "react-router-dom"

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect((products) => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        // put the axios url there
        //tell react when to run the fetch/axios function / (update api calls)

        console.log(response.data.products)
        setProducts(response.data.products)
      
      }
        // })
      // .catch.error(error);
      );
    }, [])

  const handleAddItemToCart = async (event) => {
    event.preventDefault();
    setProducts(event.target.value)
  };

  const handleRemoveItemToCart = async (event) => {
   event.preventDefault();
    setProducts(event.target.value)

  };

  return (
    <div className="app">
      <Router>
        <main>
          {/* YOUR CODE HERE! */}

          <Link to="/"> </Link>
          <Link to="/products/:productId"></Link>
      

          <Navbar />
          <Hero />
          <Sidebar/>

          <Routes>
            <Route path="/" element={<Home 
              products={products} 
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemToCart={handleRemoveItemToCart}/>}>
            </Route>
            <Route
              path="/products/:productId"
              element={<ProductDetail />}
            ></Route>

            


            {/* how to know whento use link to or route oath element */}

            {/*  - anything else should render the NotFound component?? */}
          </Routes>
<br>
</br>
           <div class="About" id="About">
                 <h3> About </h3>
                      <div class="summary">
                            <div class="text">

                               <p> The codepath student store 
                                                      offers great products at great 
                                                      prices from a great team and for a 
                                                      great cause.</p>

                                     <p>
                                            We've searched far and wide for items
                                            that perk the interests of even the most eccentric 
                                            students and decided to offer them all here in one place.
                                      </p>

                                      <p>
                                                All proceeds go towards bringing high 
                                                 quality CS education to college students around the country.
                                       </p>
                               </div>

                        </div>
                 </div>

                        <div id="Contact" name="Contact" >
                                <div id="content">
                                  <h3>Contact Us</h3>






                      </div>

                      <div id="Buy-Now" name="Buy-Now" >
                        <div id="Buy-Now">
                          <h3>Buy Now</h3>
                      </div>



                      </div>


                        </div>




          
        </main>
      </Router>
    

    </div>


  );
}




