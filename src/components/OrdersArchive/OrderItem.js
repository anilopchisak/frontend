import React from 'react';

import {useNavigate} from "react-router-dom";
import {DETAIL_ROUTE} from "../../utils/consts";

const OrderItem = ({order}) => {

    const navigate = useNavigate()
    const handleClick = () => { navigate(DETAIL_ROUTE + '/' + order.id) }

    return (
        <tr onClick = {handleClick}>
          <td>{order.id}</td>
          <td>{order.name}</td>
          <td>{order.email}</td>
          <td>{order.order_cost} $</td>
          <td>{new Date(order.date_time).toLocaleString()}</td>
        </tr>
    );

};

export default OrderItem;