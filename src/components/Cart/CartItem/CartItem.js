import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../../index";

import {ReactComponent as CloseIcon} from '../../../assets/close.svg'

import s from './CartItem.module.css'

export const CartItem = observer(({product}) => {
    const {order} = useContext(Context)

    const increase = () => {
        order.increase(product)
    }

    const decrease = () => {
        order.decrease(product)
    }

    const remove = () => {
        order.remove(product)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.productInfo}>
                <img src={product.img} alt="" className={s.image}/>
                <div>
                    <p className={s.name}>{product.product_name}</p>
                </div>
            </div>

            <div className={s.bottom}>
                <div className={s.counter}>
                    <p onClick={decrease} className={s.button}>-</p>
                    <p>{product.count}</p>
                    <p onClick={increase} className={s.button}>+</p>
                </div>

                <CloseIcon className={s.button} onClick={remove}/>

                <p>{(product.count * product.final_cost).toFixed(2)} $</p>
            </div>

        </div>
    )

})