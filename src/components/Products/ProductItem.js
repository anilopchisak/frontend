import React, {useContext} from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const ProductItem = observer(({product}) => {
    const {order} = useContext(Context)

    const addToCart = () => {
        order.addToCart(product)
    }

    return (
        <Col md={4} style={{margin: '0 0 25px 0'}}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={product.img}/>
                <div style={{fontWeight: 'bold'}}>{product.product_name}</div>
                <div className={"text-black-50"}>{product.description}</div>
                <div style={{margin: '0 0 0 auto'}}>{product.final_cost} $</div>
            </Card>
            <Button variant="outline-primary"
                    size={"sm"}
                    onClick={addToCart}
            >
                Add to cart
            </Button>
        </Col>
    );
});

export default ProductItem;