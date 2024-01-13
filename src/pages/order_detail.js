import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import OrderDetailConst from "../components/OrderDetailConst";


function OrderDetail () {

    return (
        <Container className="mt-5">
            <OrderDetailConst/>
        </Container>
    );
}

export default OrderDetail;
