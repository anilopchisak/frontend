import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import OrderItem from './OrderItem'
import {Table} from "react-bootstrap";
import {LOADING_STATUS} from "../../store/storeUtils";

const messageByLoadingStatus = {
    [LOADING_STATUS.IDLE]: 'Enter email to search orders',
    [LOADING_STATUS.LOADING]: 'Loading...',
    [LOADING_STATUS.ERROR]: 'Error loading orders'
}

const OrderList = observer(() => {

    const {orderArchive} = useContext(Context)

    const {customer_name: name, email} = orderArchive.customerInfo

    if (orderArchive.ordersLoadingStatus !== LOADING_STATUS.SUCCESS) {
        return messageByLoadingStatus[orderArchive.ordersLoadingStatus]
    }

    if (orderArchive.ordersLoadingStatus === LOADING_STATUS.SUCCESS && orderArchive.order.length === 0) {
        return 'Empty'
    }

    return (

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>cost</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orderArchive.order.map(order =>
                <OrderItem key={order.id}
                           order={{...order, name, email}}
                />
            )}
          </tbody>
        </Table>

    );
});

export default OrderList;