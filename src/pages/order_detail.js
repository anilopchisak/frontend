import React, {useContext, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {useParams} from 'react-router-dom'
import {LOADING_STATUS} from "../store/storeUtils";
import {Context} from "../index";
import OrderDetailConst from "../components/OrderDetail/OrderDetailConst";
import {observer} from "mobx-react-lite";


const OrderDetail = observer(() => {

    const {orderDetails} = useContext(Context)
    const {id} = useParams()

    useEffect(() => {
        orderDetails.getOrderDetails(id)

        return () => {
            orderDetails.resetLoadingStatus()
        }
    }, [])

    return (
        <Container className="mt-5">
            {
                orderDetails.detailsLoadingStatus === LOADING_STATUS.LOADING && "Loading..."
            }
            {
                orderDetails.detailsLoadingStatus === LOADING_STATUS.ERROR && "Error"
            }
            {
                orderDetails.detailsLoadingStatus === LOADING_STATUS.IDLE && "No data"
            }
            {
                orderDetails.detailsLoadingStatus === LOADING_STATUS.SUCCESS && orderDetails.details && <OrderDetailConst/>
            }
        </Container>
    );
})

export default OrderDetail;
