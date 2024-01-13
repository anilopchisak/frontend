import React from 'react';
import {Button, Form} from "react-bootstrap";

const OrderSearch = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" size="sm" />
            </Form.Group>

            <Button variant="primary" type="submit">Search</Button>
        </Form>
    );
};

export default OrderSearch;