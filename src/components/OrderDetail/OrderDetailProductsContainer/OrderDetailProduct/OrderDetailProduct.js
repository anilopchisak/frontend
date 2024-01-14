import s from './OrderDetailProduct.module.css'

export const OrderDetailProduct = ({product}) => {
    return (
        <div className={s.wrapper}>
            <span>{product.product_name}</span>
            <span>{product.product_cost} $</span>
        </div>
    )
}