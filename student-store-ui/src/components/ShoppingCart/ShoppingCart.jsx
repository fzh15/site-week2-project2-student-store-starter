import "./ShoppingCart.css"
import React from "react"



export default function ShoppingCart({
  shoppingCart,
  products,

}) {
  {console.log(shoppingCart)}

  // Calculate the subtgotal of each product
  const calculateSubtotal = (product) => {
    const { id, price } = product;
    const cartItem = shoppingCart.find((item) => item.id === id);
    if (cartItem) {
      return cartItem.count * price;
    }
    return 0;
  };
  
  // Calculate the total quantity of all products
  const calculateTotalQuantity = () => {
    return shoppingCart.reduce((total, item) => total + item.count, 0);
  };
  
  // Calculate the total price including tax
  const calculateTotalPrice = () => {
    const subtotal = shoppingCart.reduce(
      (total, item) => total + calculateSubtotal(item),
      0
      );
      const tax = subtotal * 0.1; // If tax is 10% of the subtotal
      return subtotal + tax;
    };
    
    return (
      <span className="shopping-cart">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr className="header">
          {/* <tr> defines a row  */}

          <th className="header-row">
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
            </th>

            <th className="product-row">
              <span className="flex-2 cart-product-name"></span>
              <span className="center cart-product-quantity"></span>
              <span className="center cart-product-price"></span>
              <span className="center cart-product-subtotal"></span>
              </th>
           
          </tr>
        </thead>
        <tbody>
          {/* {console.log(shoppingCart)} */}
          {shoppingCart.map((cartItem) => {
            const product = products.find((p) => p.id === cartItem.id);
            const { id, name, price } = product;
            
            return (
              // <td> is a table celll
              <tr key={id}>
                <td>{name}</td>
                {cartItem.count}
                {/* <td>
                  <button onClick={() => handleDecrement(id)}>-</button>
                  <button onClick={() => handleIncrement(id)}>+</button>
                </td> */}
                <td>${price.toFixed(2)}</td>
                <td>${calculateSubtotal(product).toFixed(2)}</td>
                {/* <td>
                  <button onClick={() => handleRemove(id)}></button>
                </td> */}
              </tr>
            );
          })}


        
        </tbody>
        <tfoot className="product-total">
          {/* <tfoot> a set of rows summarizing the columns of the table. */}
          {/* <tr>
            <td colSpan="3">Total Quantity:</td>

            <td>{calculateTotalQuantity()}</td>
            <td></td>
          </tr> */}
          <tr className="receipt-subtotal">
           {/* <td> is a table cell */}
            <td colSpan="3">Subtotal:</td>
            <td>${calculateTotalPrice().toFixed(2)}</td>
            <td></td>
          </tr>
          <tr className="receipt-taxes">
            <td colSpan="3">Tax:</td>
            <td>${(calculateTotalPrice() - calculateTotalQuantity()).toFixed(2)}</td>
            <td></td>
          </tr>
          <tr className="receipt-total">
            <td colSpan="3">Total:</td>
            <td>${calculateTotalPrice().toFixed(2)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </span>
  );
}



// const ShoppingCart = ({isOpen, products, shoppingCart})=>
// {
//     const showItems = ()=>
//     {
//         if (shoppingCart.length===0){

//             return (
//                 <p className="notification">
//                   No items added to cart yet. Start shopping now!
//                 </p>
//               );
//             }

//             let subtotal = 0;
//     return shoppingCart.map((cartItem) => {
//       const product = products.find((item) => item.itemId === cartItem.itemId);

//       if (product) {
//         const { name, price } = product;
//         const quantity = cartItem.quantity;
//         const itemTotal = price * quantity;
//         subtotal += itemTotal;

//         return (
//           <div key={cartItem.itemId} className="cart-item">
//             <p className="cart-product-name">{name}</p>
//             <p className="cart-product-quantity">Quantity: {quantity}</p>
//           </div>
//         );
//       }

//       return null;
//     });
//   };

//   const calculateTotal = (subtotal) => {
//     const taxRate = 0.0875;
//     const taxAmount = subtotal * taxRate;
//     const total = subtotal + taxAmount;

//     return total.toFixed(2);
//   };

//   const renderTotal = (subtotal) => {
//     if (subtotal === 0) {
//       return null;
//     }

//     return (
//       <div className="cart-total">
//         <p className="subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
//         <p className="total-price">
//           Total: ${calculateTotal(subtotal)}
//         </p>
//       </div>
//     );
//   };

//   return (
//     <div className={`shopping-cart ${isOpen ? 'open' : 'closed'}`}>
//       {renderItems()}
//       {renderTotal(subtotal)}
//     </div>
//   );
// };