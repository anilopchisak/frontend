import {makeAutoObservable} from "mobx";
import {LOADING_STATUS} from "./storeUtils";
import {fetchOrders, postOrder} from "../http/OrderAPI";
import {fetchCustomer} from "../http/CustomerAPI";
import {fetchPaymentTypes} from "../http/PaymentAPI";

class OrderStore {
    orderMakingStatus = LOADING_STATUS.IDLE
    paymentTypesLoadingStatus = LOADING_STATUS.IDLE

    errorMessage = ''

    _availablePaymentTypes = []
    _cart = []
    _paymentType = 'QR-code'
    _username = ''
    _email = ''

    constructor() {
        makeAutoObservable(this)
    }

    get cart() {
        return this._cart
    }

    get paymentType() {
        return this._paymentType
    }

    get availablePaymentTypes() {
        return this._availablePaymentTypes
    }

    get username() {
        return this._username
    }

    get email() {
        return this._email
    }

    setUsername(username) {
        this._username = username
    }

    setPaymentType(type) {
        this._paymentType = type
    }

    setEmail(email) {
        this._email = email
    }

    _findProduct(product) {
        return this._cart.find(item => item.product_name === product.product_name)
    }

    addToCart(product) {
        const existingProduct = this._findProduct(product)

        if (!!existingProduct) {
            existingProduct.count++
            return
        }

        this._cart.push({
            ...product,
            count: 1
        })
    }

    remove(product) {
        this._cart = this._cart.filter(item => item.product_name !== product.product_name)
    }

    increase(product) {
        const existingProduct = this._findProduct(product)

        if (!existingProduct) return

        existingProduct.count++;
    }

    decrease(product) {
        const existingProduct = this._findProduct(product)

        if (!existingProduct) return

        if (existingProduct.count === 1) {
            this.remove(product)
        }

        existingProduct.count--;
    }

    async makeOrder() {
        this.orderMakingStatus = LOADING_STATUS.LOADING

        try {

            const customer = await fetchCustomer({email: this._email})

            if (!customer) {
                throw new Error('User not exists')
            }

            if (customer.customer_name !== this._username) {
                throw new Error('Invalid name')
            }

            const result = await postOrder({
                customer: this._username,
                payment_type: this._paymentType,
                date_time: new Date(),
                products: this._cart.map(product => product.product_name)
            })

            this._cart = []
            this._paymentType = this._availablePaymentTypes[0]
            this._email = ''
            this._username = ''

            this.orderMakingStatus = LOADING_STATUS.SUCCESS
        } catch(err) {
            this.orderMakingStatus = LOADING_STATUS.ERROR
            this.errorMessage = err.message
            console.log(err)
        }

        return this.orderMakingStatus
    }

    async fetchPaymentTypes() {
        this.paymentTypesLoadingStatus = LOADING_STATUS.LOADING

        try {
            const result = await fetchPaymentTypes()

            this._availablePaymentTypes = result.map(type => type.payment_type)
            this._paymentType = this._availablePaymentTypes[0]

            this.paymentTypesLoadingStatus = LOADING_STATUS.SUCCESS
        } catch(err) {
            this.paymentTypesLoadingStatus = LOADING_STATUS.ERROR
            console.log(err)
        }
    }
}

export default OrderStore