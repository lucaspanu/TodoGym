import React, { useState, useEffect } from "react";
// import '../../components/PreciosTabla.css';
import './SuscripcionUser.css';
import Navbar from './NavBar2/NavBar2';

import { isAuth, getCookie, signout } from '../../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51HkZHyL3uqxLO4xhRjKT1J9a3dzOvUKcYqWqdbYinibfamlKtcwmIMTVkKVa0WwkjQPdsZI0GtjD0DfDgC0yWI11009poHaZJW");


function SuscripcionUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    role: '',
    suscripcion: ''
});

useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = () => {
    const token = getCookie('token');
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        const { role, name, email, suscripcion } = res.data;
        setFormData({ ...formData, role, name, email, suscripcion });
      })
      .catch(err => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
      });
  };
  
  const { name, email, password1,  role, suscripcion } = formData;

  let activo;
  let fechasus;
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
  var f = new Date();
  if (suscripcion) {
    activo = 'Activa'
    fechasus = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
  }else{
    activo = 'Inactiva'
    fechasus = "--"
  }


  const handleClick = async (event) => {
    if (suscripcion) {
      toast.success('Suscripcion Activa');
      return
    }

    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
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

  return (
    <>
      <Navbar/>     
      <ToastContainer />
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
                    <button role="link" onClick={handleClick}>
                     Checkout
                    </button>
                  </div>
                  {/* <!--//BUTTON END--> */}
                </div>
                {/* <!--//PRICE CONTENT END--> */}
              </div>
            </div>
            {/* <!--//BLOCK ROW END--> */}
          </div>
        </section>
          <div className='estado_suscripcion'>
            <span>Estado de Suscripcion: {activo}</span>
            <span>Suscripto desde: {fechasus}</span>
          </div>
      </div>
    </>
  )
}

export default SuscripcionUser