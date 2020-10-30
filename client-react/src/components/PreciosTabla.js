import React from "react";
import { Link } from "react-router-dom";
import "./PreciosTabla.css";

function PreciosTabla() {
  return (
    <>
      <div id="generic_price_table">
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
                    <Link to="/login">Ingresar</Link>
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
                    <Link to="/login">Ingresar</Link>
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
                    <Link to="/login">Ingresar</Link>
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
}

export default PreciosTabla;
