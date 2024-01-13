import {makeAutoObservable} from "mobx";

class ProductStore {

    constructor() {
        this._product = [
            {id: 1, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
            {id: 2, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
            {id: 3, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
            {id: 4, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
            {id: 5, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
            {id: 6, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
            {id: 7, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
            {id: 8, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
            {id: 9, name: 'Kiwi', descr:'Bright tropical taste of kiwi and cherry glaze that complements it so well.', cost: '1,0', img: 'C:/Archive/Study/Учеба/АИС/lr4/mint.jpg'},
        ]
        makeAutoObservable(this)
    }

    get product() {
        return this._product
    }

}

export default ProductStore