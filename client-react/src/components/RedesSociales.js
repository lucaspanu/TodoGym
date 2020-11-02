import React from "react";
import { Link } from "react-router-dom";

function RedesSociales() {
  return (
    <div className="social_items">
      <div className="image_social">
        <Link to="/" target="_blank" className="social-icon facebook">
          <i className="fab fa-facebook-square " />
        </Link>
      </div>
      <div className="image_social">
        <Link to="/" target="_blank" className="social-icon instagram">
          <i className="fab fa-instagram" />
        </Link>
      </div>
      <div className="image_social">
        <Link to="/" target="_blank" className="social-icon youtube">
          <i className="fab fa-youtube" />
        </Link>
      </div>
    </div>
  );
}

export default RedesSociales;
