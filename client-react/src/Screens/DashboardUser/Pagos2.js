import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from './NavBar2/NavBar2';
import './SuscripcionUser.css';
import axios from "axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51HkZHyL3uqxLO4xhRjKT1J9a3dzOvUKcYqWqdbYinibfamlKtcwmIMTVkKVa0WwkjQPdsZI0GtjD0DfDgC0yWI11009poHaZJW");


const ProductDisplay = ({ handleClick }) => (
    <>
    <Navbar/>     
    <div id="Sub_table">
      <section className="planes_suscripcion">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              {/* <!--PRICE HEADING START--> */}
              <div class="price-heading clearfix">
                <h1>Planes de suscripcion</h1>
              </div>
              {/* <!--//PRICE HEADING END--> */}
            </div>
          </div>
        </div>
        <div class="container">
          {/* <!--BLOCK ROW START--> */}
          <div class="row">
            <div class="col-md-4">
              {/* <!--PRICE CONTENT START--> */}
              <div class="generic_content clearfix">
                {/* <!--HEAD PRICE DETAIL START--> */}
                <div class="generic_head_price clearfix">
                  {/* <!--HEAD CONTENT START--> */}
                  <div class="generic_head_content clearfix">
                    {/* <!--HEAD START--> */}
                    <div class="head_bg"></div>
                    <div class="head">
                      <span>Mensual</span>
                    </div>
                    {/* <!--//HEAD END--> */}
                  </div>
                  {/* <!--//HEAD CONTENT END--> */}

                  {/* <!--PRICE START--> */}
                  <div class="generic_price_tag clearfix">
                    <span class="price">
                      <span class="sign">$</span>
                      <span class="currency">99</span>
                      <span class="cent">.99</span>
                      {/* <span class="month">/MON</span> */}
                    </span>
                  </div>
                  {/* <!--//PRICE END--> */}
                </div>
                {/* <!--//HEAD PRICE DETAIL END--> */}

                {/* <!--FEATURE LIST START--> */}
                <div class="generic_feature_list">
                  <ul>
                    <li>-</li>
                    <li>3 Clases</li>
                    <li>1 Sede</li>
                    <li>Soporte 24/7</li>
                  </ul>
                </div>
                {/* <!--//FEATURE LIST END--> */}

                {/* <!--BUTTON START--> */}
                <div class="generic_price_btn clearfix">
                  <Link to="/login">Adquirir</Link>
                  <button role="link" onClick={handleClick}>
    Checkout
  </button>
                </div>
                {/* <!--//BUTTON END--> */}
              </div>
              {/* <!--//PRICE CONTENT END--> */}
            </div>

            <div class="col-md-4">
              {/* <!--PRICE CONTENT START--> */}
              <div class="generic_content active clearfix">
                {/* <!--HEAD PRICE DETAIL START--> */}
                <div class="generic_head_price clearfix">
                  {/* <!--HEAD CONTENT START--> */}
                  <div class="generic_head_content clearfix">
                    {/* <!--HEAD START--> */}
                    <div class="head_bg"></div>
                    <div class="head">
                      <span>Trimestral</span>
                    </div>
                    {/* <!--//HEAD END--> */}
                  </div>
                  {/* <!--//HEAD CONTENT END--> */}

                  {/* <!--PRICE START--> */}
                  <div class="generic_price_tag clearfix">
                    <span class="price">
                      <span class="sign">$</span>
                      <span class="currency">199</span>
                      <span class="cent">.99</span>
                      {/* <span class="month">/MON</span> */}
                    </span>
                  </div>
                  {/* <!--//PRICE END--> */}
                </div>
                {/* <!--//HEAD PRICE DETAIL END--> */}

                {/* <!--FEATURE LIST START--> */}
                <div class="generic_feature_list">
                  <ul>
                    <li>25% Descuento</li>
                    <li>4 Clases</li>
                    <li>MultiSede</li>
                    <li>Soporte 24/7</li>
                  </ul>
                </div>
                {/* <!--//FEATURE LIST END--> */}

                {/* <!--BUTTON START--> */}
                <div class="generic_price_btn clearfix">
                  <Link to="/login">Adquirir</Link>
                </div>
                {/* <!--//BUTTON END--> */}
              </div>
              {/* <!--//PRICE CONTENT END--> */}
            </div>
            <div class="col-md-4">
              {/* <!--PRICE CONTENT START--> */}
              <div class="generic_content clearfix">
                {/* <!--HEAD PRICE DETAIL START--> */}
                <div class="generic_head_price clearfix">
                  {/* <!--HEAD CONTENT START--> */}
                  <div class="generic_head_content clearfix">
                    {/* <!--HEAD START--> */}
                    <div class="head_bg"></div>
                    <div class="head">
                      <span>anual</span>
                    </div>
                    {/* <!--//HEAD END--> */}
                  </div>
                  {/* <!--//HEAD CONTENT END--> */}

                  {/* <!--PRICE START--> */}
                  <div class="generic_price_tag clearfix">
                    <span class="price">
                      <span class="sign">$</span>
                      <span class="currency">299</span>
                      <span class="cent">.99</span>
                      {/* <span class="month">/MON</span> */}
                    </span>
                  </div>
                  {/* <!--//PRICE END--> */}
                </div>
                {/* <!--//HEAD PRICE DETAIL END--> */}

                {/* <!--FEATURE LIST START--> */}
                <div class="generic_feature_list">
                  <ul>
                    <li>40% Descuento</li>
                    <li>5 Clases</li>
                    <li>MultiSede</li>
                    <li>Soporte 24/7</li>
                  </ul>
                </div>
                {/* <!--//FEATURE LIST END--> */}

                {/* <!--BUTTON START--> */}
                <div class="generic_price_btn clearfix">
                  <Link to="/login">Adquirir</Link>
                </div>
                {/* <!--//BUTTON END--> */}
              </div>
              {/* <!--//PRICE CONTENT END--> */}
            </div>
          </div>
          {/* <!--//BLOCK ROW END--> */}
        </div>
      </section>
    </div>
  </>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const response = await fetch('http://localhost:5000/api/checkout', { method: 'POST' });
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}