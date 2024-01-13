import React from 'react';
import {Button, DropdownButton, Form, Dropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const OrderForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" size="sm" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" size="sm" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Payment type</Form.Label>
                <Form.Select className="mb-3">
                    <option value="1">QR-code</option>
                    <option value="2">Card</option>
                    <option value="3">SberPay</option>
                    <option value="4">GooglePay</option>
                </Form.Select>
            </Form.Group>


            <Button variant="primary" type="submit">
                Order
            </Button>
        </Form>

    );
};

export default OrderForm;