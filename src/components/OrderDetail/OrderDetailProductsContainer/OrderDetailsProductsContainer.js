import {OrderDetailProduct} from "./OrderDetailProduct/OrderDetailProduct";
import React from "react";
import s from './OrderDetailsProductsContainer.module.css'

export const OrderDetailsProductsContainer = ({products}) => {
    return (
        <div className={s.wrapper}>
            <p className={s.title}>Products:</p>
            {
                products.map(product => <OrderDetailProduct product={product}/>)
            }
        </div>
    )
}