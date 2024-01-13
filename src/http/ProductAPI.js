import {$host} from "./index";
import jwt_decode from "jwt-decode";

export const fetchProducts = async () => {
    const {data} = await $host.get('product')
    return data
}