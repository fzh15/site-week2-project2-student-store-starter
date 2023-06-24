import {React, useState, useEffect}  from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import SubNavbar from "../subNavbar/subNavbar";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar"
import ProductDetail from "../ProductDetail/ProductDetail";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
// import { Link } from "react-router-dom"

export default function App() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([])
  //object thta does id, name then ++1 or --1
  useEffect((products) => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        // put the axios url there
        //tell react when to run the fetch/axios function / (update api calls)

        console.log(response.data.products)
        setProducts(response.data.products)
        //the products might refreshing setShopingCart instead setPro
      
      }
        // })
      // .catch.error(error);
      );
    }, [])
// const 
  const handleAddItemToCart  = (product) => {
  
  // make a function to add when nothing is there 
  let ItemInCart = shoppingCart?.find(item =>item.id === product.id)
  //looks to shopingcart if item in cart update item 
    let updatedCart 
    if(ItemInCart){
 updatedCart = shoppingCart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setShoppingCart(updatedCart);
    console.log("updated card", updatedCart)
  } 
  else{

    let NewItem = {
      id: product.id,
      nmae: product.name,
      price: product.price,
      count: 1
    };
    updatedCart = [...shoppingCart, NewItem]
    setShoppingCart(updatedCart)
    //adds product to cart when empty

  }
}

//pass the product through the handleRemove function

const handleRemoveItemToCart = (product) => {
  setShoppingCart((previousCart) => {
    //uses the 
    const existingItemIndex = previousCart.findIndex((item) => item.id === product.id);
    if (existingItemIndex === -1) return previousCart; // Item not found in cart
    const updatedCart = [...previousCart];
    const existingItem = updatedCart[existingItemIndex];
    // If the quantity is more than 1, decrement it. Otherwise, remove the item from the cart.
    if (existingItem.count > 1) {
      existingItem.count -= 1;
    } else {
      updatedCart.splice(existingItemIndex, 1);
    }
    return updatedCart;
  });
};
  const handleOnToggle = async (event) => {
    console.log("hi")
    setIsOpen(!isOpen)
  };

  return (
    <div className="app">
      <Router>
        <main>
         

          <Link to="/"> </Link>
          <Link to="/products/:productId"></Link>
      

          <Sidebar 
            products={products}           
            // CheckoutForm = {CheckoutForm} 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            // handleOnCheckoutFormChange= {handleOnCheckoutFormChange}
            // OnSubmit= {handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
            shoppingCart={shoppingCart}
              CheckoutForm={CheckoutForm}
              setShoppingCart= {setShoppingCart}

          />
          <Navbar />
          <Hero />
          {/* <CheckoutForm/> */}
          <SubNavbar/>

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

            
    
          </Routes>
<br>
</br>
           <div className="About" id="About">
                 <h3> About </h3>
                      <div className="summary">
                            <div className="a">

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
                                  <p> Email: fafoda@salesforce.com</p>
                                  <p> Number: XXX-XXX-XXXX</p>









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


  )
}

