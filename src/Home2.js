import React from "react";
import "./Home2.css";

// NavBar 3

function Home2() {
  return (
    <div>
      <body>
        <div className="content">
          <div className="contentBx">
            <h2>
              Build Perfect Body <br />
              With Clean Mind
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="/">Get Started</a>
          </div>
        </div>
        <ul className="sci">
          <li>
            <a href="/">
              <img src="./assets/Iconos/Social/facebook.png" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="./assets/Iconos/Social/instagram.png.png" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src="./assets/Iconos/Social/twitter.png" />
            </a>
          </li>
        </ul>
      </body>
    </div>
  );
}

export default Home2;
