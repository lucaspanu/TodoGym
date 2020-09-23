import React from "react";
import { Container } from "react-bootstrap";

function Layout(props) {
  return (
    <div>
      <Container>{props.children}</Container>
    </div>
  );
}

export default Layout;
