import React, {useContext} from 'react';
import {Context} from "../index";
import OrderDetailItem from "./OrderDetailItem";

const OrderDetailConst = () => {
    const {order} = useContext(Context)
    return (
        <div>
            <OrderDetailItem key={order.id} order={order}/>
        </div>
    );
};

export default OrderDetailConst;