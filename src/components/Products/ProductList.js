import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";
import {LOADING_STATUS} from "../../store/storeUtils";

const ProductList = observer(() => {
    const {product: productStore} = useContext(Context)

    if (!productStore) return null

    useEffect(() => {
        if ([LOADING_STATUS.SUCCESS, LOADING_STATUS.LOADING].includes(productStore.productsLoadingStatus)) return

        productStore.fetchProducts()
    }, [])

    return (
        <Row className="d-flex">
            {
                productStore.productsLoadingStatus === LOADING_STATUS.SUCCESS &&
                productStore.product.map((product, i) =>
                    <ProductItem key={i} product={product}/>
                )
            }

            {
                productStore.productsLoadingStatus === LOADING_STATUS.LOADING &&
                "Loading..."
            }

            {
                productStore.productsLoadingStatus === LOADING_STATUS.ERROR &&
                "Error loading products"
            }
        </Row>
    );
});

export default ProductList;