import {makeAutoObservable} from "mobx";

class OrderStore {

    constructor() {
        this._order = [
            {id: 1, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 2, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 3, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 4, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 5, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 6, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 7, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 8, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 9, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 10, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 11, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 12, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
            {id: 13, name: 'Polina', email:'poli.key@yan.ru', total_cost: '2,1', date_time: '10.01.2023'},
        ]
        makeAutoObservable(this)
    }

    get order() {
        return this._order
    }

}

export default OrderStore