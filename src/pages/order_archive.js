import React from 'react';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import OrderSearch from "../components/OrderSearch";
import OrderList from "../components/OrderList";

function OrderArchive() {
  return (
      <Container className="mt-5">
          <Row>

              <Col md={3}>
                  <OrderSearch/>
              </Col>

              <Col md={9}>
                  <OrderList/>
              </Col>

          </Row>
      </Container>
  );
}

export default OrderArchive;
