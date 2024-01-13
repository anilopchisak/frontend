import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";
import {fetchOrders} from "../http/OrderAPI";
import {fetchCustomer} from "../http/CustomerAPI";

class OrderArchiveStore {

    ordersLoadingStatus = LOADING_STATUS.IDLE
    _customerInfo = {}
    _order = []

    constructor() {
        makeAutoObservable(this)
    }

    get order() {
        return this._order
    }

    get customerInfo() {
        return this._customerInfo
    }


    async fetchOrders(email) {
        this.ordersLoadingStatus = LOADING_STATUS.LOADING

        try {
            const user = await fetchCustomer({email});

            if (!user.customer_name) {
                throw new Error('Unable to fetch customer info')
            }

            this._order = await fetchOrders({username: user.customer_name});
            this._customerInfo = user

            this.ordersLoadingStatus = LOADING_STATUS.SUCCESS
        } catch(err) {
            console.log(err)
            this.ordersLoadingStatus = LOADING_STATUS.ERROR
        }
    }
}

export default OrderArchiveStore