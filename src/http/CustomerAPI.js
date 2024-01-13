import {$host} from "./index";
import jwt_decode from "jwt-decode";

export const fetchCustomer = async ({email}) => {
    const {data} = await $host.get(`customer/${email}`)
    return data
};