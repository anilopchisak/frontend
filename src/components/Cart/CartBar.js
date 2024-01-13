import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {CartItem} from "./CartItem/CartItem";

const CartBar = observer(() => {

    const {order} = useContext(Context)

    return (
        <div>
            {
                order.cart.map(product => <CartItem product={product} key={product.product_name}/>)
            }

            <p>Total cost: {order.cart.reduce((acc, cur) => acc + cur.count * cur.final_cost, 0).toFixed(2)} $</p>
        </div>
    );
});

export default CartBar;