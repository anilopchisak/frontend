import React from 'react';
import {Col, Row} from "react-bootstrap";
import {OrderDetailsProductsContainer} from "./OrderDetailProductsContainer/OrderDetailsProductsContainer";

const OrderDetailItem = ({order}) => {
    return (
        <>
            <Col>
                <h1>№ {order.order_id}</h1>
                <Row>Customer name: {order.customer}</Row>
                <Row>Total cost: {order.order_cost} $</Row>
                <Row>Order date: {order.date_time}</Row>
                <Row>Payment type: {order.payment_type}</Row>
            </Col>
            <OrderDetailsProductsContainer products={order.products}/>
        </>
    );
};

export default OrderDetailItem;