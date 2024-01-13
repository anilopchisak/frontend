import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const OrderSearch = observer(() => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false)

    const {orderArchive} = useContext(Context);

    const handleEmailChange = ({target}) => {
        setIsValid(target.validity.valid)
        setEmail(target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        orderArchive.fetchOrders(email)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                              placeholder="Enter email"
                              size="sm"
                              value={email}
                              onChange={handleEmailChange}
                              required
                />
            </Form.Group>

            <Button variant="primary"
                    type="submit"
                    disabled={!isValid}
            >
                Search
            </Button>
        </Form>
    );
});

export default OrderSearch;