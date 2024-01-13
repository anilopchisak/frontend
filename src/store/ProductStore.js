import {makeAutoObservable} from "mobx";
import {fetchProducts} from "../http/ProductAPI";
import {LOADING_STATUS} from "./storeUtils";

class ProductStore {
    productsLoadingStatus = LOADING_STATUS.IDLE;
    _product = []

    constructor() {
        makeAutoObservable(this)
    }

    get product() {
        return this._product
    }

    async fetchProducts() {

        this.productsLoadingStatus = LOADING_STATUS.LOADING

        try {
            this._product = await fetchProducts()
            this.productsLoadingStatus = LOADING_STATUS.SUCCESS
        } catch(err) {
            console.log('Products fetching err');
            this.productsLoadingStatus = LOADING_STATUS.ERROR
        }
    }

}

export default ProductStore