// import "./CheckoutForm.css"
// import React, {useState} from "react";

// const CheckoutForm =
// ({
//   isOpen,
//   shoppingCart,
//   CheckoutForm,
//   handleOnCheckoutFormChange,
//   handleOnSubmitCheckoutForm,
// }) =>

// {    

//   const[name, setName]= useState('');
//   const[Email, setEmail]= useState('');
//   const[isSumbitted, setIsSubmitted]= useState(false)
//   //if there nothing inside the form

// const handleSumbitForm = (e)=> {
//   e.preventDefault();

// }
// setIsSubmitted(true);
// //update form to what is Sumbitted by user

//   return (
//     <div className="checkout">
//       <h2>Checkout</h2>
//       {isSumbitted ? (
//         <div>
//           <p> Thank you </p>

//           <p>Name: {name}</p>
//           <p>Email: {Email}</p>



//         </div>

    
//       ):
// //make it handle onSubmit 
// <form onSubmit={handleSubmitForm}>
  
//     <div className="checkout-form">
//       {isOpen && (
//         <>
//           <input
//             className="checkout-form-input"
//             type="email"
//             name="email"
//             placeholder="student@codepath.org"
//             value={CheckoutForm.email}
//             onChange= {(e) => 
//             setEmail= (e.target.value)
//             //takes the user input then changes the useState
          
//           }
//           />
//           <br></br>

//           <input
//             className="checkout-form-input"
//             type="text"
//             name="name"
//             placeholder="Student Name"
//             // value={CheckoutForm.name}
//             onChange = {(e) => 
//               setName= (e.target.value)
//               //takes the user input then changes the useState
            
//             }
//           />



//           <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>
//             Checkout
//           </button>


//           {CheckoutForm.error && <div className="error">{CheckoutForm.error}</div>}
//           {CheckoutForm.success && <div className="success">Success!</div>}
//         </>
//       )}
//     </div>
//     </form>
//   );

// export default CheckoutForm;


import "./CheckoutForm.css";
import React, { useState } from "react";

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm, // Fix the prop name
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {isSubmitted ? (
        <div>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Thank you! </p>




          
        </div>
      ) : (
        <form onSubmit={handleSubmitForm}>
          <div className="checkout-form">
            {isOpen && (
              <>
                <input
                  className="checkout-form-input"
                  type="email"
                  name="email"
                  placeholder="student@codepath.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <input
                  className="checkout-form-input"
                  type="text"
                  name="name"
                  placeholder="Student Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <button
                  className="checkout-button"
                  onClick={handleOnSubmitCheckoutForm}
                >
                  Checkout
                </button>

                {CheckoutForm.error && (
                  <div className="error">{CheckoutForm.error}</div>
                )}
                {CheckoutForm.success && (
                  <div className="success">Success!</div>
                )}
              </>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
