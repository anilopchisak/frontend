import React, {createContext} from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import ProductStore from "./store/ProductStore";
import OrderArchiveStore from "./store/OrderArchiveStore";
import OrderStore from "./store/OrderStore";

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider value={{
        product: new ProductStore(),
        orderArchive: new OrderArchiveStore(),
        order: new OrderStore()
    }}>
        <App />
    </Context.Provider>
);

