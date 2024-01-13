import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import OrderItem from './OrderItem'
import {Table} from "react-bootstrap";

const OrderList = observer(() => {

    const {order} = useContext(Context)

    return (

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {order.order.map(order =>
                <OrderItem key={order.id} order={order}/>
            )}
          </tbody>
        </Table>

    );
});

export default OrderList;