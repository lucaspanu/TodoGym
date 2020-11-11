import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

//Stripe puclic key
const stripePromise = loadStripe("pk_test_51HkZHyL3uqxLO4xhRjKT1J9a3dzOvUKcYqWqdbYinibfamlKtcwmIMTVkKVa0WwkjQPdsZI0GtjD0DfDgC0yWI11009poHaZJW");


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
      setLoading(true);
  
      if (!error) {
        // console.log(paymentMethod)
        const { id } = paymentMethod;
        try {
          const { data } = await axios.post(
            "http://localhost:5000/api/checkout",
            {
              id,
              amount: 10000, //centavos 
            }
          );
          console.log(data);
  
          elements.getElement(CardElement).clear();
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
    };
  
    console.log(!stripe || loading);
  
    return (
      <form className="card card-body" onSubmit={handleSubmit}>
        {/* Product Information */}
        <img src="https://image.freepik.com/vector-gratis/hombre-mujer-aptitud-diseno-grafico-ejemplo-vector-gimnasio_18591-25078.jpg" alt=""/>
  
        <h3 className="text-center my-2">Price: 99$</h3>
  
        {/* User Card Input */}
        <div className="form-group">
          <CardElement />
        </div>
  
        <button disabled={!stripe} className="btn btn-success">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Buy"
          )}
        </button>
      </form>
    );
};

function Pagos() {
    return (
        <Elements stripe={stripePromise}>
         <div className="container p-4">
           <div className="row h-100">
               <div className="col-md-4 offset-md-4 h-100">
                   <CheckoutForm />
                </div>
            </div>
          </div>
    </Elements>
    )
}

export default Pagos
