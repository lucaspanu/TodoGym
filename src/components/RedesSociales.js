import React from "react";

import { Link } from "react-router-dom";

function RedesSociales() {
  return (
    <div className="social_items">
      <div className="image_social">
        <Link to="/" target="_blank" className="social-icon facebook">
          <i class="fab fa-facebook-square " />
        </Link>
      </div>
      <div className="image_social">
        <Link to="/" target="_blank" className="social-icon instagram">
          <i class="fab fa-instagram" />
        </Link>
      </div>
      <div className="image_social">
        <Link to="/" target="_blank" className="social-icon youtube">
          <i class="fab fa-youtube" />
        </Link>
      </div>
    </div>
  );
}

export default RedesSociales;
