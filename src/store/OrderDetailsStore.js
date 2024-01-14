import {makeAutoObservable} from "mobx";

export class OrderDetailsStore {
    constructor() {
        makeAutoObservable(true)
    }


}