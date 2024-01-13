import {$host} from "./index";
import jwt_decode from "jwt-decode";

export const fetchPaymentTypes = async () => {
    const {data} = await $host.get(`payment_type`)
    return data
};