import {$host} from "./index";
import jwt_decode from "jwt-decode";

export const fetchOrders = async ({username}) => {
    const {data} = await $host.get(`order/${username}`)
    return data
};

export const postOrder = async ({customer, products, date_time, payment_type}) => {
    const {data} = await $host.post(`order`, { customer, products, date_time, payment_type })
    return data
};