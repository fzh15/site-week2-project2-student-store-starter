import React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  setIsOpen,
  shoppingCart,
  products,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };
  
  const handleIncrement = (productId) => {
    const updatedCart = shoppingCart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });
    setShoppingCart(updatedCart);
  };
  
  const handleDecrement = (productId) => {
    const updatedCart = shoppingCart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          count: item.count > 0 ? item.count - 1 : 0,
        };
      }
      return item;
    });
    setShoppingCart(updatedCart);
  };
  
  const handleRemove = (productId) => {
    const updatedCart = shoppingCart.filter((item) => item.id !== productId);
    setShoppingCart(updatedCart);
  };
  
  return (
    <>
      <button className="toggle-button" onClick={() => handleOnToggle()}>
        |||
      </button>
      <section className={`sidebar-${isOpen ? "open" : "closed"}`}>
        <div>
          <ShoppingCart
            shoppingCart={shoppingCart}
            products={products}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemove={handleRemove}
            />
          {isOpen && (
            <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart} // Pass the shoppingCart prop to CheckoutForm
            CheckoutForm={CheckoutForm} // Pass the checkoutForm prop
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            />
            )}
        </div>
      </section>
    </>
  );
}

// import * as React from "react";
// import "./Sidebar.css";
// import ShoppingCart from "../ShoppingCart/ShoppingCart";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";

// export default function Sidebar({
//   isOpen,
//   setIsOpen,
//   shoppingCart,
//   products,
//   handleOnCheckoutFormChange,
//   handleOnSubmitCheckoutForm,
//   // handleOnToggle,
// }) {
//   console.log(`isOpen state ${isOpen}`)

//   const handleOnToggle = () => {
//     setIsOpen(!isOpen);
//   };
//   console.log(isOpen);

//   //new consts foor increments line 24 

//   const handleIncrement = (productId) => {
//     const updatedCart = shoppingCart.map((item) => {
//       if (item.id === productId) {
//         return {
//           ...item,
//           count: item.count + 1,
//         };
//       }
//       return item;
//     });
//     setShoppingCart(updatedCart);
//   };

//   const handleDecrement = (productId) => {
//     const updatedCart = shoppingCart.map((item) => {
//       if (item.id === productId) {
//         return {
//           ...item,
//           count: item.count > 0 ? item.count - 1 : 0,
//         };
//       }
//       return item;
//     });
//     setShoppingCart(updatedCart);
//   };

//   const handleRemove = (productId) => {
//     const updatedCart = shoppingCart.filter((item) => item.id !== productId);
//     setShoppingCart(updatedCart);
//   };


//     return (
    


//       ///content names 
//       <>

//         <button className="toggle-button" onClick={() => handleOnToggle()}>
//           |||
//         </button>
//       <section className={`sidebar-${isOpen ? "open" : "closed"}`}> 
      
//     {/* <div className = "sidebar">
//     <br></br>
//     <br></br>

        
//        <form>
//           <label>
//             Name:
//             <input type="text" name="name" />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
// <br></br>

//         <form>
//           <label>
//           Email:
//             <input type="text" name="email" />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//               </div> */}



//               <div>

//           <ShoppingCart
       
//             shoppingCart={shoppingCart}
//             products={products}
//             handleIncrement={handleIncrement}
//             handleDecrement={handleDecrement}
//             handleRemove={handleRemove}
//           />
//           {isOpen && (
//             <CheckoutForm
//               isOpen={isOpen}
//               CheckoutForm={CheckoutForm}
//               handleOnChange={handleOnCheckoutFormChange}
//               handleOnSubmit={handleOnSubmitCheckoutForm}
//             />
//           )}
//         </div>
//       </section>
//       </>
//     )  
//           }