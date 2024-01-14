import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";
import {getOrderDetails} from "../http/OrderAPI";

export class OrderDetailsStore {
    details = null
    detailsLoadingStatus = LOADING_STATUS.IDLE
    constructor() {
        makeAutoObservable(this)
    }

    resetLoadingStatus() {
        this.detailsLoadingStatus = LOADING_STATUS.IDLE
    }

    async getOrderDetails(orderId) {
        this.detailsLoadingStatus = LOADING_STATUS.LOADING

        try {
            this.details = await getOrderDetails({orderId})
            this.detailsLoadingStatus = LOADING_STATUS.SUCCESS
        } catch(err) {
            console.log(err)
            this.detailsLoadingStatus = LOADING_STATUS.ERROR
        }
    }
}