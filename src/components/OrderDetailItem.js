import React from 'react';
import {Col, Row} from "react-bootstrap";

const OrderDetailItem = ({order}) => {
    return (
        <Col>
            <h1>№ {order.id}</h1>
            <Row>Customer name: {order.name}</Row>
            <Row>E-mail: {order.email}</Row>
            <Row>Total cost: {order.total_cost}</Row>
            <Row>Order date: {order.date_time}</Row>

        </Col>
    );
};

export default OrderDetailItem;