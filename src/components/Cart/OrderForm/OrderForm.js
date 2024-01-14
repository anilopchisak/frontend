import React, {createRef, useContext, useEffect, useRef, useState} from 'react';
import {Button, DropdownButton, Form, Dropdown} from "react-bootstrap";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {LOADING_STATUS} from "../../../store/storeUtils";
import {useNavigate} from 'react-router-dom'

import s from './OrderForm.module.css'
import {ORDER_GRATITUDE} from "../../../utils/consts";

const OrderForm = observer(() => {
    const {order} = useContext(Context)
    const navigate = useNavigate()

    const formRef = createRef()

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        if (!formRef.current) return

        setIsValid(
            formRef.current.checkValidity() &&
            order.cart.length > 0 &&
            order.paymentTypesLoadingStatus === LOADING_STATUS.SUCCESS
        )

    }, [order.username, order.email, order.paymentType, order.cart.length, order.paymentTypesLoadingStatus]);

    useEffect(() => {
        if ([LOADING_STATUS.LOADING, LOADING_STATUS.SUCCESS].includes(order.paymentTypesLoadingStatus)) return

        order.fetchPaymentTypes()
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        const result = await order.makeOrder()

        if (result === LOADING_STATUS.SUCCESS) {
            navigate(ORDER_GRATITUDE)
        }
    };


    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"
                              placeholder="Enter your name"
                              size="sm"
                              value={order.username}
                              onChange={evt => order.setUsername(evt.target.value)}
                              maxLength={20}
                              minLength={2}
                              required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                              placeholder="Enter email"
                              size="sm"
                              value={order.email}
                              onChange={evt => order.setEmail(evt.target.value)}
                              required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Payment type</Form.Label>
                <br />
                <Form.Select className="mb-3" selected={order.paymentType} onSelect={(evt) => order.setPaymentType(evt.target.value)}>
                    {
                        order.availablePaymentTypes.map(type => <option value={type}>{type}</option>)
                    }
                </Form.Select>
            </Form.Group>

            {
                order.orderMakingStatus === LOADING_STATUS.ERROR &&
                    <p className={s.error}>
                        Error: {order.errorMessage}
                    </p>
            }

            <Button variant="primary"
                    type="submit"
                    disabled={!isValid}
            >
                {
                    order.orderMakingStatus === LOADING_STATUS.LOADING ? 'Loading' : 'Order'
                }
            </Button>
        </Form>

    );
});

export default OrderForm;