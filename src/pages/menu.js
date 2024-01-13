import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CartBar from "../components/Cart/CartBar";
import OrderForm from "../components/Cart/OrderForm";
import ProductList from "../components/Products/ProductList";

function Menu() {
  return (
    <Container className="mt-5">
      <Row>

          <Col md={4}>
              <CartBar/>
              <OrderForm/>
          </Col>

          <Col md={8}>
              <ProductList/>
          </Col>

      </Row>
    </Container>
  );
}

export default Menu;
