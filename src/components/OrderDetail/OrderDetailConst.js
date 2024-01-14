import React, {useContext} from 'react';
import {Context} from "../../index";
import OrderDetailItem from "./OrderDetailItem";

const OrderDetailConst = () => {
    const {orderDetails} = useContext(Context)

    return (
        <div>
            <OrderDetailItem order={orderDetails.details}/>
        </div>
    );
};

export default OrderDetailConst;