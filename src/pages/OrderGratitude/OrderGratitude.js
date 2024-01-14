import {Link} from "react-router-dom";
import {ARCHIVE_ROUTE} from "../../utils/consts";
import s from './OrderGratitude.module.css'

export const OrderGratitude = () => {
    return (
        <div className={s.wrapper}>
            Thank you for order!
            <br />
            See details in <Link to={ARCHIVE_ROUTE}>Order Archive</Link> page
        </div>
    )
}