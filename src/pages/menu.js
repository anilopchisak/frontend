import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CartBar from "../components/CartBar";
import OrderForm from "../components/OrderForm";
import ProductList from "../components/ProductList";

function Menu() {
  return (
    <Container className="mt-5">
      <Row>

          <Col md={3}>
              <CartBar/>
              <OrderForm/>
          </Col>

          <Col md={9}>
              <ProductList/>
          </Col>

      </Row>
    </Container>
  );
}

export default Menu;
