import * as React from "react"
import "./Sidebar.css"
// import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"


const Sidebar=({

  isOpen,
  ShoppingCart,
  products,
  CheckoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle
})=> {
  const content= isOpen ? (

  
    <ShoppingCart shoppingCart={ShoppingCart} products={products}>
    <CheckoutForm
    CheckoutForm= {CheckoutForm}
    handleOnChange={handleOnCheckoutFormChange}
    handleOnSubmit= {handleOnSubmitCheckoutForm}
    />
    </ShoppingCart>
  ): null;
  return (
    <section className="sidebar">
     <button className="toggle-button" onClick={handleOnToggle}>
        Toggle
      </button>
      {content}
    </section>
  );
};
export default Sidebar;